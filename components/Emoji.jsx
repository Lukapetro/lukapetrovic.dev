export default function Emoji({ label, symbol, className }) {
  return (
    <span
      className={className}
      role="img"
      aria-label={label ? label : ''}
      aria-hidden={label ? 'false' : 'true'}
    >
      {symbol}
    </span>
  );
}
