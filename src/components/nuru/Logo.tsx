export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <img
        src="/brand/seramet-mark-dark.png"
        alt=""
        width={36}
        height={36}
        className="h-9 w-9 shrink-0 object-contain"
      />
      <span className="font-display text-xl font-semibold tracking-tight text-ivory">Seramet</span>
    </div>
  );
}
