import { Link, NavLink } from "react-router-dom";

const navLinkStyle = ({ isActive }) => ({
  opacity: isActive ? 1 : 0.8,
  borderBottom: isActive ? "2px solid rgba(34,197,94,0.8)" : "2px solid transparent",
  paddingBottom: 6,
});

export default function Navbar() {
  return (
    <div style={{ position: "sticky", top: 0, zIndex: 50 }}>
      <div className="glass" style={{ borderRadius: 0, borderLeft: 0, borderRight: 0 }}>
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "14px 0",
          }}
        >
          <Link to="/" style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: 999,
                background: "rgba(34,197,94,0.95)",
                boxShadow: "0 0 24px rgba(34,197,94,0.4)",
              }}
            />
            <div style={{ fontWeight: 900, letterSpacing: 0.4 }}>
              UrbanFit <span style={{ color: "rgba(34,197,94,0.9)" }}>Lanka</span>
            </div>
          </Link>

          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <NavLink to="/" style={navLinkStyle}>Home</NavLink>
            <NavLink to="/about" style={navLinkStyle}>About</NavLink>
            <NavLink to="/services" style={navLinkStyle}>Services</NavLink>
            <NavLink to="/trainers" style={navLinkStyle}>Trainers</NavLink>
            <NavLink to="/pricing" style={navLinkStyle}>Pricing</NavLink>
            <Link className="btn primary" to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
