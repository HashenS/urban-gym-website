import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="section" style={{ paddingTop: 28, paddingBottom: 28 }}>
      <div className="container glass" style={{ padding: 18 }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
          <div>
            <div style={{ fontWeight: 900 }}>UrbanFit Lanka</div>
            <div className="p">Train smart. Stay strong. Level up.</div>
          </div>

          <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
            <a href="#" aria-label="Facebook">Facebook</a>
            <a href="#" aria-label="Instagram">Instagram</a>
            <a href="#" aria-label="TikTok">TikTok</a>
          </div>
        </div>

        <div style={{ marginTop: 12, opacity: 0.7, fontSize: 13, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>© {new Date().getFullYear()} UrbanFit Lanka. All rights reserved.</div>
          <Link to="/admin" style={{ opacity: 0.2, textDecoration: "none", color: "inherit", fontSize: "11px" }}>Management</Link>
        </div>
      </div>
    </div>
  );
}
