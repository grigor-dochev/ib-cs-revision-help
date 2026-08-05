import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "./components/SiteShell";

export const metadata: Metadata = {
  title: "Help, Privacy & Terms",
  description:
    "Official support, privacy and terms information for the IB CS Revision app.",
};

export default function Home() {
  return (
    <SiteShell>
      <main>
        <section className="hero compact-hero" aria-labelledby="home-title">
          <p className="eyebrow">IB CS REVISION</p>
          <h1 id="home-title">Help and privacy, without the fine-print fog.</h1>
          <p className="lede">
            Find practical support for the app or review exactly how your study
            data is handled.
          </p>
        </section>

        <section className="choice-grid" aria-label="Information pages">
          <Link className="choice-card" href="/teachers">
            <span className="choice-icon" aria-hidden="true">T</span>
            <span>
              <strong>For Teachers</strong>
              <small>
                Share an independent revision aid and understand how referral
                codes protect student privacy.
              </small>
            </span>
            <span className="arrow" aria-hidden="true">→</span>
          </Link>

          <Link className="choice-card" href="/support">
            <span className="choice-icon" aria-hidden="true">?</span>
            <span>
              <strong>Support</strong>
              <small>
                Troubleshoot iCloud sync, Question Assistant, purchases, and
                app content.
              </small>
            </span>
            <span className="arrow" aria-hidden="true">→</span>
          </Link>

          <Link className="choice-card" href="/privacy">
            <span className="choice-icon" aria-hidden="true">✓</span>
            <span>
              <strong>Privacy Policy</strong>
              <small>
                Understand local storage, private iCloud sync, and the on-device
                Question Assistant.
              </small>
            </span>
            <span className="arrow" aria-hidden="true">→</span>
          </Link>

          <Link className="choice-card" href="/terms">
            <span className="choice-icon" aria-hidden="true">§</span>
            <span>
              <strong>Terms of Use</strong>
              <small>
                Review the conditions that apply when using this independent
                educational resource.
              </small>
            </span>
            <span className="arrow" aria-hidden="true">→</span>
          </Link>
        </section>

        <aside className="trust-note">
          <span className="trust-dot" aria-hidden="true" />
          IB CS Revision contains no advertising or third-party analytics SDKs.
        </aside>
      </main>
    </SiteShell>
  );
}
