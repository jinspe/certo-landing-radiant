'use client'

export function Logo() {
  return (
    <div className="flex items-center gap-1 px-1">
      <img src="/certo-logo.svg" alt="Certo" className="h-9" />
      <span
        className="text-xl font-medium text-gray-950"
        style={{ fontFamily: 'Arial, sans-serif' }}
      >
        Certo
      </span>
    </div>
  )
}

export function Mark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" fill="currentColor" className={className}>
      <image
        href="/certo-logo.svg"
        width="120"
        height="120"
        style={{ filter: 'brightness(0) saturate(100%) invert(1)' }}
      />
    </svg>
  )
}
