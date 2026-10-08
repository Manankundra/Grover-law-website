export default function Logo({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true" fill="none">
      <line x1="25" y1="2" x2="25" y2="46" stroke="#2B2B2B" strokeWidth=".75" />
      <text x="6" y="30" fontFamily="Playfair Display, Georgia, serif" fontSize="30" fill="#2B2B2B">G</text>
      <text x="22" y="37" fontFamily="Playfair Display, Georgia, serif" fontSize="24" fill="#2B2B2B">L</text>
    </svg>
  );
}
