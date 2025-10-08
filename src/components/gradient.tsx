import { clsx } from 'clsx'

export function Gradient({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      {...props}
      className={clsx(
        className,
        // Original gradient: 'bg-linear-115 from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] sm:bg-linear-145'
        'bg-linear-115 from-[#dbeafe] from-28% via-[#3b82f6] via-70% to-[#64748b] sm:bg-linear-145',
      )}
    />
  )
}

export function GradientBackground() {
  return (
    <div className="relative mx-auto max-w-7xl">
      <div
        className={clsx(
          'absolute -top-44 -right-60 h-60 w-xl transform-gpu md:right-0',
          // Original gradient: 'bg-linear-115 from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff]'
          'bg-linear-115 from-[#dbeafe] from-28% via-[#3b82f6] via-70% to-[#64748b] sm:bg-linear-145',
          'rotate-[-10deg] rounded-full blur-3xl',
        )}
      />
    </div>
  )
}
