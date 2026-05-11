export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="relative h-8 w-8">
        <div className="absolute inset-0 rounded-full bg-sunrise blur-md opacity-70" />
        <div className="relative h-8 w-8 rounded-full bg-sunrise ring-1 ring-[oklch(0.86_0.15_82_/_0.6)]" />
        <div className="absolute inset-1.5 rounded-full bg-background" />
        <div className="absolute inset-[10px] rounded-full bg-sunrise" />
      </div>
      <span className="font-display text-xl font-semibold tracking-tight text-ivory">
        Nuru
      </span>
    </div>
  );
}
