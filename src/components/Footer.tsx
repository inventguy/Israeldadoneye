import { siteConfig } from "@/app/config";
import Logo from "./Logo";

const socialLabels: Record<string, string> = {
  upwork: "Upwork",
  github: "GitHub",
  twitter: "Twitter",
  linkedin: "LinkedIn",
};

export default function Footer() {
  const socials = Object.entries(siteConfig.socials).filter(
    ([, url]) => url && url !== "#"
  );

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <a
              href="#top"
              className="inline-flex items-center gap-3 transition-colors hover:text-muted"
            >
              <Logo className="h-9 w-9 text-foreground" />
              <span className="font-display text-2xl font-semibold tracking-tight">
                {siteConfig.name}.
              </span>
            </a>
            <p className="mt-2 max-w-xs text-sm text-muted">
              {siteConfig.role}. {siteConfig.location}.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
            <a href="#work" className="link-underline hover:text-foreground">
              Work
            </a>
            <a href="#about" className="link-underline hover:text-foreground">
              About
            </a>
            <a href="#contact" className="link-underline hover:text-foreground">
              Contact
            </a>
            {socials.map(([key, url]) => (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline hover:text-foreground"
              >
                {socialLabels[key] ?? key}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-border pt-6 text-xs text-faint">
          <span>
            © {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </span>
          <a href="#top" className="link-underline hover:text-foreground">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
