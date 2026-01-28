import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navLinkStyle = ({ isActive }) => ({
  opacity: isActive ? 1 : 0.8,
  borderBottom: isActive ? "2px solid rgba(34,197,94,0.8)" : "2px solid transparent",
  paddingBottom: 6,
});

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ position: "sticky", top: 0, zIndex: 100 }}>
      <div className="glass" style={{ borderRadius: 0, borderLeft: 0, borderRight: 0 }}>
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "16px 20px",
          }}
        >
          <Link to="/" style={{ display: "flex", alignItems: "center", gap: 10, zIndex: 110, flexShrink: 0, whiteSpace: "nowrap" }}>
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: 999,
                background: "rgba(34,197,94,0.95)",
                boxShadow: "0 0 24px rgba(34,197,94,0.4)",
                flexShrink: 0
              }}
            />
            <div style={{ fontWeight: 900, letterSpacing: 0.4 }}>
              UrbanFit <span style={{ color: "rgba(34,197,94,0.9)" }}>Lanka</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="nav-links-desktop">
            <NavLink to="/" style={navLinkStyle}>Home</NavLink>
            <NavLink to="/about" style={navLinkStyle}>About</NavLink>
            <NavLink to="/services" style={navLinkStyle}>Services</NavLink>
            <NavLink to="/trainers" style={navLinkStyle}>Trainers</NavLink>
            <NavLink to="/pricing" style={navLinkStyle}>Pricing</NavLink>
            <Link className="btn primary" to="/contact" style={{ marginLeft: 10 }}>Contact</Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="mobile-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            style={{
              background: "none",
              border: "none",
              color: "#fff",
              fontSize: "1.5rem",
              cursor: "pointer",
              zIndex: 110
            }}
          >
            {isOpen ? "✕" : "☰"}
          </button>

          {/* Mobile Menu Overlay */}
          <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
            <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
            <NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink>
            <NavLink to="/services" onClick={() => setIsOpen(false)}>Services</NavLink>
            <NavLink to="/trainers" onClick={() => setIsOpen(false)}>Trainers</NavLink>
            <NavLink to="/pricing" onClick={() => setIsOpen(false)}>Pricing</NavLink>
            <Link className="btn primary" to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
