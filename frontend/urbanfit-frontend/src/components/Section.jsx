export default function Section({ title, subtitle, children }) {
  return (
    <div className="section">
      <div className="container">
        {(title || subtitle) && (
          <div className="section-header" style={{ marginBottom: 32 }}>
            {title && <h2 className="h2" style={{ margin: 0, fontSize: "clamp(24px, 5vw, 32px)", fontWeight: 800 }}>{title}</h2>}
            {subtitle && <p className="p" style={{ marginTop: 8, maxWidth: 600 }}>{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </div>
  );
}
