import { siteConfig } from "@/app/config";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";

const socialLabels: Record<string, string> = {
  upwork: "Upwork",
  github: "GitHub",
  twitter: "Twitter",
  linkedin: "LinkedIn",
};

export default function Contact() {
  const socials = Object.entries(siteConfig.socials).filter(
    ([, url]) => url && url !== "#"
  );

  return (
    <section id="contact" className="relative border-t border-border">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-50 [mask-image:radial-gradient(60%_60%_at_50%_100%,black,transparent)]" />
      <div className="relative mx-auto max-w-6xl px-5 py-32 text-center">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h2 className="mx-auto mt-6 max-w-3xl font-display text-[clamp(2.5rem,7vw,5.5rem)] font-semibold leading-[0.95] tracking-tight text-balance">
            Let&apos;s build something worth sharing.
          </h2>
          <p className="mx-auto mt-6 max-w-md leading-relaxed text-muted">
            Tell me what you need built or fixed. You&apos;ll get a straight
            answer on scope, price, and timing — usually within a day.
          </p>

          <div className="mt-10 flex justify-center">
            <Magnetic strength={0.4}>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
                  siteConfig.whatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 text-base font-medium text-white transition-opacity hover:opacity-90"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                  aria-hidden
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                Chat on WhatsApp
              </a>
            </Magnetic>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted">
            {siteConfig.available && (
              <span className="inline-flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                </span>
                Available for new work
              </span>
            )}
            <span>{siteConfig.location}</span>
            {socials.map(([key, url]) => (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline transition-colors hover:text-foreground"
              >
                {socialLabels[key] ?? key}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
