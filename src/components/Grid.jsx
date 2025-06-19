export default function Grid({ children, style }) {
  return (
        <div
      style={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '1rem',
        ...style,
      }}
    >
      {children}
    </div>
  );
}