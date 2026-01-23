export default function Card({ children, style, className = "" }) {
  return (
    <div className={`glass card ${className}`} style={style}>
      {children}
    </div>
  );
}
