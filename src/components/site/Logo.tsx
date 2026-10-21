import { HTMLAttributes } from "react";

interface LogoProps extends HTMLAttributes<HTMLDivElement> {
  size?: number | string;
  showText?: boolean;
  variant?: "light" | "dark" | "full";
}

export function Logo({ size = 44, showText = true, className = "", variant = "full", ...props }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`} {...props}>
      <img
        src="/siper-logo.png"
        alt="SIPER Lahar Official Logo"
        width={typeof size === "number" ? size : 44}
        height={typeof size === "number" ? size : 44}
        className="shrink-0 rounded-full object-contain drop-shadow-sm transition-transform duration-200 hover:scale-105"
        style={{ width: size, height: size }}
      />
      {showText && (
        <div className="leading-tight">
          <span className="block font-display text-base font-bold tracking-tight text-foreground">
            SIPER, Lahar
          </span>
          <span className="block text-[11px] font-medium tracking-wide text-muted-foreground">
            Sun Institute of Pharmaceutical Education &amp; Research
          </span>
        </div>
      )}
    </div>
  );
}
