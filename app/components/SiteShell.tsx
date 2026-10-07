import Link from "next/link";
import {
  independenceDisclaimer,
  site,
  supportMailto,
  trademarkNotice,
} from "@/site.config";
import { ArrowUpRightIcon, BrandGlyph } from "./Icons";

type PageKey = "home" | "support" | "privacy" | "terms";

const navItems: ReadonlyArray<{ key: PageKey; href: string; label: string }> = [
  { key: "support", href: "/support", label: "Support" },
  { key: "privacy", href: "/privacy", label: "Privacy" },
  { key: "terms", href: "/terms", label: "Terms" },
];

export function SiteShell({
  children,
  current,
}: Readonly<{ children: React.ReactNode; current?: PageKey }>) {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <div className="frame header-inner">
          <Link
            className="brand"
            href="/"
            aria-current={current === "home" ? "page" : undefined}
          >
            <span className="brand-mark" aria-hidden="true">
              <BrandGlyph />
            </span>
            <span className="brand-name">{site.appName}</span>
          </Link>

          <nav className="site-nav" aria-label="Main">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                aria-current={current === item.key ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main id="main" tabIndex={-1}>
        {children}
      </main>

      <footer className="site-footer">
        <div className="frame">
          <div className="footer-top">
            <div className="footer-brand">
              <Link className="brand" href="/">
                <span className="brand-mark" aria-hidden="true">
                  <BrandGlyph />
                </span>
                <span>{site.appName}</span>
              </Link>
              <p>
                Independent revision app for iPhone and iPad, made by{" "}
                {site.developerName}.
              </p>
              <a className="footer-store-link" href={site.appStoreUrl}>
                View on the App Store
                <ArrowUpRightIcon width={16} height={16} />
              </a>
            </div>

            <nav className="footer-links" aria-label="Footer">
              <div>
                <h2>Help</h2>
                <ul>
                  <li>
                    <Link href="/support">Support</Link>
                  </li>
                  <li>
                    <a href={supportMailto(`${site.appName} support`)}>
                      Email {site.supportEmail}
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2>Legal</h2>
                <ul>
                  <li>
                    <Link href="/privacy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/terms">Terms of Use</Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>

          <div className="footer-legal">
            <p className="footer-disclaimer">{independenceDisclaimer}</p>
            <p>{trademarkNotice}</p>
            <p>
              © {site.copyrightYear} {site.developerName}. Apple, iPhone, iPad,
              iCloud and App Store are trademarks of Apple Inc.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
