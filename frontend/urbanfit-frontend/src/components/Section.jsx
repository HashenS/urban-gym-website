export default function Section({ title, subtitle, children }) {
  return (
    <div className="section">
      <div className="container">
        {(title || subtitle) && (
          <div style={{ marginBottom: 16 }}>
            {title && <h2 style={{ margin: 0, fontSize: 26 }}>{title}</h2>}
            {subtitle && <p className="p" style={{ marginTop: 6 }}>{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </div>
  );
}
