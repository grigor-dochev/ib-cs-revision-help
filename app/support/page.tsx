import type { Metadata } from "next";
import { SiteShell } from "../components/SiteShell";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Help with IB CS Revision, including iCloud sync, Question Assistant, purchases, and app content.",
};

export default function Support() {
  return (
    <SiteShell>
      <main>
        <header className="hero policy-hero">
          <p className="eyebrow">HOW CAN WE HELP?</p>
          <h1>IB CS Revision Support</h1>
          <p className="lede">
            Quick fixes for the most common questions, plus a direct way to get
            help with the app or its educational content.
          </p>
        </header>

        <section className="support-grid" aria-label="Common support topics">
          <article className="support-card">
            <h2>Question Assistant is unavailable</h2>
            <ol className="steps">
              <li>Confirm your device supports Apple Intelligence.</li>
              <li>Enable Apple Intelligence in the Settings app.</li>
              <li>Allow the on-device model to finish downloading.</li>
              <li>Reopen IB CS Revision and try the assistant again.</li>
            </ol>
          </article>

          <article className="support-card">
            <h2>Progress is not syncing</h2>
            <ol className="steps">
              <li>Use the same Apple Account on both devices.</li>
              <li>Check that iCloud is enabled for IB CS Revision.</li>
              <li>Connect both devices to the internet.</li>
              <li>Allow a short time for the private database to reconcile.</li>
            </ol>
          </article>

          <article className="support-card">
            <h2>Restore Full Access</h2>
            <p>
              Open <strong>Settings → Full Access → Restore Purchases</strong>.
              Use the Apple Account that made the original one-time purchase.
              IB CS Revision does not use a subscription.
            </p>
            <div className="action-row">
              <a className="secondary-link" href="https://reportaproblem.apple.com/" rel="noreferrer">
                Apple purchase support
              </a>
            </div>
          </article>

          <article className="support-card">
            <h2>Export study progress</h2>
            <p>
              Open <strong>Settings → Progress → Export Study Progress</strong>
              and choose a destination in the Apple share sheet. The JSON file
              contains progress and aggregate quiz history, not saved answers,
              answer keys, purchase data, or internal identifiers.
            </p>
          </article>

          <article className="support-card">
            <h2>Reset study progress</h2>
            <p>
              Open <strong>Settings → Progress → Reset All Progress</strong>.
              The confirmation explains exactly what will be deleted from the
              private iCloud database before anything changes. Other devices
              reflect the deletion when iCloud syncs. Reset does not remove
              progress files you previously exported.
            </p>
          </article>

          <article className="support-card wide">
            <h2>Contact support</h2>
            <p>
              Email <a href="mailto:gdoch9@gmail.com">gdoch9@gmail.com</a> with
              the app version, device model, iOS or iPadOS version, and the steps
              that led to the problem. Please do not include passwords, payment
              details, school records, current examination material, or other
              sensitive information.
            </p>
          </article>
        </section>

        <section className="document" aria-labelledby="faq-title">
          <div className="document-section">
            <h2 id="faq-title">Frequently asked questions</h2>
            <div className="faq-list">
              <details>
                <summary>Does Question Assistant send prompts to a server?</summary>
                <p>
                  No. It uses Apple&apos;s on-device Foundation Model on supported
                  devices, and IB CS Revision does not save the conversation
                  after the assistant session ends.
                </p>
              </details>

              <details>
                <summary>Can I use the app without iCloud?</summary>
                <p>
                  Bundled content and on-device features remain available. When
                  iCloud cannot be used, study data is saved locally on that
                  device instead of syncing between devices.
                </p>
              </details>

              <details>
                <summary>Is Full Access a subscription?</summary>
                <p>
                  No. Full Access is one non-consumable in-app purchase. StoreKit
                  restores it for the Apple Account that bought it.
                </p>
              </details>

              <details>
                <summary>Is this an official IB app?</summary>
                <p>
                  No. IB CS Revision is an independent educational resource and
                  is not affiliated with, endorsed by, or approved by the
                  International Baccalaureate Organization.
                </p>
              </details>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
