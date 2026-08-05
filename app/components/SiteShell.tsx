import Link from "next/link";

export function SiteShell({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <header className="site-header">
        <div className="site-frame header-inner">
          <Link className="brand" href="/" aria-label="IB CS Revision home">
            <span className="brand-mark" aria-hidden="true">
              CS
            </span>
            <span>IB CS Revision</span>
          </Link>

          <nav className="site-nav" aria-label="Primary navigation">
            <Link href="/teachers">Teachers</Link>
            <Link href="/support">Support</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </nav>
        </div>
      </header>

      <div className="site-frame">{children}</div>

      <footer className="site-footer">
        <div className="site-frame footer-inner">
          <span>© 2026 Grigor Dochev</span>
          <nav className="footer-links" aria-label="Footer navigation">
            <Link href="/teachers">Teachers</Link>
            <Link href="/support">Support</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </nav>
        </div>
      </footer>
    </>
  );
}
