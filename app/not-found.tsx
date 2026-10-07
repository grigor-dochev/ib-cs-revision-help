import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "./components/SiteShell";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <SiteShell>
      <div className="frame">
        <header className="page-hero not-found">
          <p className="eyebrow">404</p>
          <h1>This page isn’t here.</h1>
          <div className="lede">
            <p>
              It may have moved or no longer exists. These pages should help.
            </p>
          </div>
          <div className="hero-actions">
            <Link className="button button-primary" href="/">
              Go to the home page
            </Link>
            <Link className="button button-secondary" href="/support">
              Support
            </Link>
          </div>
        </header>
      </div>
    </SiteShell>
  );
}
