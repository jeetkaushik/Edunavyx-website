import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

interface BackButtonProps {
  to?: string;
  hash?: string;
  label?: string;
  className?: string;
}

export function BackButton({
  to = "/",
  hash,
  label = "Back",
  className = "",
}: BackButtonProps) {
  return (
    <div className={`site-back-btn-wrapper ${className}`}>
      {hash ? (
        <Link to={to} hash={hash} className="site-back-btn" aria-label={label}>
          <ArrowLeft className="site-back-btn-icon" aria-hidden="true" />
          <span className="site-back-btn-text">{label}</span>
        </Link>
      ) : (
        <Link to={to} className="site-back-btn" aria-label={label}>
          <ArrowLeft className="site-back-btn-icon" aria-hidden="true" />
          <span className="site-back-btn-text">{label}</span>
        </Link>
      )}
    </div>
  );
}
