export default function Card({ children, style }) {
  return (
    <div className="glass card" style={style}>
      {children}
    </div>
  );
}
