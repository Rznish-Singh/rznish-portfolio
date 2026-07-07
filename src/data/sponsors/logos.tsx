type LogoProps = React.ComponentProps<"svg">

export function VercelLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 120 24" fill="none" aria-hidden {...props}>
      <path d="M10 2 L20 20 H0 Z" fill="currentColor" />
      <text x="26" y="18" fontSize="18" fontWeight="700" fill="currentColor" fontFamily="sans-serif">
        Vercel
      </text>
    </svg>
  )
}

export function AcmeLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 120 24" fill="none" aria-hidden {...props}>
      <circle cx="10" cy="12" r="9" fill="currentColor" />
      <text x="26" y="18" fontSize="18" fontWeight="700" fill="currentColor" fontFamily="sans-serif">
        Acme Co
      </text>
    </svg>
  )
}

export function NorthwindLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 140 24" fill="none" aria-hidden {...props}>
      <rect x="1" y="3" width="18" height="18" rx="4" fill="currentColor" />
      <text x="26" y="18" fontSize="18" fontWeight="700" fill="currentColor" fontFamily="sans-serif">
        Northwind
      </text>
    </svg>
  )
}

export function OrbitLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 110 24" fill="none" aria-hidden {...props}>
      <ellipse cx="10" cy="12" rx="9" ry="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="10" cy="12" r="2.5" fill="currentColor" />
      <text x="26" y="18" fontSize="18" fontWeight="700" fill="currentColor" fontFamily="sans-serif">
        Orbit
      </text>
    </svg>
  )
}

export function HalcyonLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 130 24" fill="none" aria-hidden {...props}>
      <path d="M2 20 L10 2 L18 20" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
      <text x="26" y="18" fontSize="18" fontWeight="700" fill="currentColor" fontFamily="sans-serif">
        Halcyon
      </text>
    </svg>
  )
}