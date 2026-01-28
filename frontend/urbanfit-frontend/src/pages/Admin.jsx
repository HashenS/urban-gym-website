import { useState, useEffect } from "react";
import ScrollReveal from "../components/ScrollReveal";

export default function Admin() {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState("");
    const API = import.meta.env.VITE_API_URL;

    const MASTER_PASSWORD = "admin1234";

    const handleLogin = (e) => {
        e.preventDefault();
        if (password === MASTER_PASSWORD) {
            setIsAuthenticated(true);
            // fetchMessages(); // No need to call here, useEffect will handle it
        } else {
            alert("Invalid password");
        }
    };

    const fetchMessages = async () => {
        try {
            const res = await fetch(`${API}/contacts`);
            const data = await res.json();
            if (data.ok) {
                setMessages(data.messages);
            } else {
                setError(data.msg || "Failed to load messages");
            }
        } catch (err) {
            setError("Connect to the API to see messages");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (isAuthenticated) {
            fetchMessages();
        }
    }, [isAuthenticated, API]);

    const deleteMessage = async (id) => {
        if (!window.confirm("Are you sure you want to delete this message?")) return;

        try {
            const res = await fetch(`${API}/contacts/${id}`, { method: "DELETE" });
            const data = await res.json();
            if (data.ok) {
                setMessages(messages.filter((m) => m._id !== id));
            } else {
                alert(data.msg || "Delete failed");
            }
        } catch (err) {
            alert("Error connecting to server");
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="section" style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div className="container small">
                    <ScrollReveal>
                        <div className="glass" style={{ padding: 40, textAlign: "center", maxWidth: 400, margin: "0 auto" }}>
                            <h2 className="h1" style={{ fontSize: "1.8rem", marginBottom: 15 }}>Admin Entry</h2>
                            <p className="p" style={{ marginBottom: 25 }}>Please enter the master password to view dashboard.</p>

                            <form onSubmit={handleLogin}>
                                <input
                                    type="password"
                                    className="input glassInput"
                                    placeholder="Master Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    style={{ marginBottom: 20, textAlign: "center" }}
                                    autoFocus
                                />
                                <button className="btn primary w-full" type="submit">
                                    Enter Command Center
                                </button>
                            </form>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        );
    }

    return (
        <div className="section" style={{ minHeight: "90vh" }}>
            <div className="container">
                <div style={{ marginBottom: 30, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                        <h1 className="h1">Admin Dashboard</h1>
                        <p className="p">Manage your incoming inquiries and leads.</p>
                    </div>
                    <button className="btn ghost" onClick={fetchMessages} style={{ padding: "8px 16px" }}>
                        Refresh Feed
                    </button>
                </div>

                {loading ? (
                    <div style={{ textAlign: "center", padding: 50 }}>
                        <p className="p">Gathering messages...</p>
                    </div>
                ) : error ? (
                    <div className="glass" style={{ padding: 30, textAlign: "center", border: "1px solid rgba(239, 68, 68, 0.2)" }}>
                        <p style={{ color: "#ef4444" }}>{error}</p>
                    </div>
                ) : messages.length === 0 ? (
                    <div className="glass" style={{ padding: 50, textAlign: "center" }}>
                        <p className="p" style={{ fontSize: "1.2rem" }}>No messages yet. Your inbox is clear! 🕊️</p>
                    </div>
                ) : (
                    <div className="grid cols1" style={{ gap: 20 }}>
                        {messages.map((m) => (
                            <ScrollReveal key={m._id}>
                                <div className="glass messageCard" style={{ padding: 25, position: "relative" }}>
                                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 15 }}>
                                        <div>
                                            <h3 style={{ margin: 0, color: "var(--accent)", fontSize: "1.2rem" }}>{m.name}</h3>
                                            <p style={{ margin: "4px 0", fontSize: "0.9rem", color: "var(--muted)" }}>
                                                {m.email} {m.phone && `• ${m.phone}`}
                                            </p>
                                        </div>
                                        <div style={{ textAlign: "right" }}>
                                            <p style={{ margin: 0, fontSize: "0.8rem", color: "var(--muted)" }}>
                                                {new Date(m.createdAt).toLocaleDateString()}
                                            </p>
                                            <button
                                                onClick={() => deleteMessage(m._id)}
                                                style={{
                                                    background: "none",
                                                    border: "none",
                                                    color: "#ef4444",
                                                    cursor: "pointer",
                                                    fontSize: "0.8rem",
                                                    marginTop: 8,
                                                    textDecoration: "underline"
                                                }}
                                            >
                                                Delete Permanent
                                            </button>
                                        </div>
                                    </div>

                                    {m.subject && (
                                        <div style={{ marginBottom: 10, fontWeight: 700, fontSize: "0.95rem" }}>
                                            Subject: {m.subject}
                                        </div>
                                    )}

                                    <div className="p" style={{
                                        background: "rgba(255, 255, 255, 0.02)",
                                        padding: 15,
                                        borderRadius: 8,
                                        border: "1px solid rgba(255, 255, 255, 0.05)",
                                        fontSize: "1rem",
                                        lineHeight: "1.6"
                                    }}>
                                        {m.message}
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
