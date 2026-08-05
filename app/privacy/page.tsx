import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "../components/SiteShell";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How the IB CS Revision app stores and processes study data.",
};

const sections = [
  ["summary", "Summary"],
  ["data", "Data handled"],
  ["processing", "How it is used"],
  ["services", "Apple services"],
  ["retention", "Retention & deletion"],
  ["rights", "Your choices"],
  ["children", "Children"],
  ["changes", "Policy changes"],
  ["contact", "Contact"],
] as const;

export default function PrivacyPolicy() {
  return (
    <SiteShell>
      <main>
        <header className="hero policy-hero">
          <p className="eyebrow">YOUR DATA</p>
          <h1>Privacy Policy</h1>
          <p className="lede">
            IB CS Revision is designed so your learning activity stays on your
            devices and in your private iCloud database.
          </p>
          <p className="updated">Effective 5 August 2026</p>
        </header>

        <div className="content-layout">
          <nav className="page-index" aria-label="Privacy policy sections">
            <strong>On this page</strong>
            {sections.map(([id, title]) => (
              <a href={`#${id}`} key={id}>{title}</a>
            ))}
          </nav>

          <article className="document">
            <section className="callout" id="summary">
              <h2>Privacy at a glance</h2>
              <ul className="plain-list">
                <li>No advertising, tracking, or third-party analytics SDKs.</li>
                <li>No account with the developer is required.</li>
                <li>Question Assistant conversations are processed on device.</li>
                <li>Study data syncs only through your private iCloud database.</li>
                <li>Crash and performance diagnostics use Apple system controls.</li>
              </ul>
            </section>

            <section className="document-section" id="data">
              <h2>Data the app handles</h2>
              <h3>Study profile and progress</h3>
              <p>
                The app stores your course level, preferred programming
                language, target exam year, daily study target, onboarding
                status, lesson and question progress, practice attempts,
                answers, review dates, and bookmarks. These records personalize
                your revision experience and show your progress.
              </p>

              <h3>App preferences</h3>
              <p>
                App-scoped preferences and operational flags, including whether
                the free assistant conversation has been used, are stored on
                your device. They are not sent to the developer.
              </p>

              <h3>Question Assistant prompts</h3>
              <p>
                Prompts and generated answers are held only for the active
                assistant session. IB CS Revision does not save conversation
                history or send those messages to the developer.
              </p>

              <h3>Purchases</h3>
              <p>
                Purchases are handled by Apple through StoreKit. IB CS Revision
                checks the verified entitlement needed to unlock Full Access;
                it does not receive or store your payment-card details.
              </p>

              <h3>Teacher referral codes</h3>
              <p>
                If you choose to verify a teacher referral code, the app stores
                the signed code&apos;s anonymous campaign identifier, code version,
                acceptance date, and expiry date on your device. The referral
                contains no student identity and is not sent to the developer.
              </p>

              <h3>Campaign links</h3>
              <p>
                If you open a valid campaign link, the app may store one local
                attribution record containing a bounded campaign identifier,
                an allow-listed source such as the website or a teacher, the
                type of destination opened, and the date. The newest valid
                record replaces the previous one. It is not linked to your
                identity and is not sent to the developer or an analytics
                provider.
              </p>

              <h3>Crash and performance diagnostics</h3>
              <p>
                Apple may collect app crash, hang, launch, and performance
                diagnostics and make them available to the developer when you
                have enabled sharing with app developers in iOS Settings. The
                app reduces MetricKit reports to broad technical categories,
                app and build version, and content-package version in the
                device&apos;s unified log. It does not include questions, answers,
                prompts, topic or attempt identifiers, referral data, or your
                identity, and the app does not upload diagnostics to a
                developer or third-party server.
              </p>

              <h3>Support messages</h3>
              <p>
                If you choose to email support, your email service sends the
                address and information you include. Support correspondence is
                used only to respond to your request.
              </p>
            </section>

            <section className="document-section" id="processing">
              <h2>How the data is used</h2>
              <p>The app uses this data only to provide its features:</p>
              <ul>
                <li>personalize the syllabus and study preferences;</li>
                <li>display lesson, question, practice, review, and bookmark progress;</li>
                <li>ground and configure the private Question Assistant;</li>
                <li>sync your profile and progress between your Apple devices;</li>
                <li>restore access to a verified in-app purchase; and</li>
                <li>remember anonymous referral or campaign attribution on your device.</li>
              </ul>
              <p>
                The developer does not sell this information, use it for
                advertising, or build a cross-app tracking profile.
              </p>
            </section>

            <section className="document-section" id="services">
              <h2>Apple services used by the app</h2>
              <p>
                IB CS Revision relies on Apple platform services that may
                process information under Apple&apos;s own terms and privacy
                policies.
              </p>
              <ul>
                <li>
                  <strong>iCloud and CloudKit:</strong> your study profile and
                  progress can sync through your private iCloud database.
                </li>
                <li>
                  <strong>Foundation Models:</strong> Question Assistant uses
                  the on-device Apple Intelligence language model on supported
                  devices.
                </li>
                <li>
                  <strong>App Store and StoreKit:</strong> Apple processes the
                  Full Access purchase and supplies verified entitlement status.
                </li>
                <li>
                  <strong>MetricKit and App Analytics:</strong> Apple manages
                  optional crash and performance diagnostics under your device
                  analytics-sharing choices.
                </li>
              </ul>
              <p>
                Learn more in Apple&apos;s{" "}
                <a href="https://www.apple.com/legal/privacy/" rel="noreferrer">
                  Privacy Policy
                </a>,{" "}
                <a href="https://www.apple.com/legal/privacy/data/en/appstore/" rel="noreferrer">
                  App Store &amp; Privacy notice
                </a>, and{" "}
                <a href="https://www.apple.com/legal/internet-services/icloud/" rel="noreferrer">
                  iCloud terms
                </a>.
              </p>
            </section>

            <section className="document-section" id="retention">
              <h2>Retention and deletion</h2>
              <p>
                Local preferences remain until you change them or delete the app
                and its local data. Study profile and progress remain in the
                app&apos;s private iCloud database so they can sync across your
                devices.
              </p>
              <p>
                Local teacher referral attribution is removed when the app and
                its local data are deleted. It is not included in the private
                CloudKit study records.
              </p>
              <p>
                Local campaign-link attribution is also removed when the app
                and its local data are deleted. It is not synced through
                CloudKit or sent to the developer.
              </p>
              <p>
                Use <strong>Settings → Reset All Progress</strong> to remove
                lesson and question progress, practice attempts and answers,
                review dates, and bookmarks from the synced database. Your study
                profile and Full Access purchase remain. You can manage iCloud
                app data from your Apple Account settings. Deleting the app from
                one device does not necessarily delete records already in iCloud.
              </p>
              <p>
                Support emails are retained only as reasonably needed to answer
                the request, maintain an appropriate support record, or meet a
                legal obligation. You can ask for deletion by emailing the
                address on the support page.
              </p>
            </section>

            <section className="document-section" id="rights">
              <h2>Your choices</h2>
              <ul>
                <li>You may use free bundled content without creating an account.</li>
                <li>You can choose whether iCloud is enabled for the app.</li>
                <li>You can reset study progress from the app at any time.</li>
                <li>You can disable Apple Intelligence or avoid Question Assistant.</li>
                <li>
                  You can manage diagnostic sharing in <strong>Settings →
                  Privacy &amp; Security → Analytics &amp; Improvements</strong>,
                  including <strong>Share With App Developers</strong> where available.
                </li>
                <li>You decide whether and what to include in a support email.</li>
              </ul>
              <p>
                Because the developer does not maintain a separate user account
                or server-side study profile, there is no developer-held study
                account data to export or delete.
              </p>
            </section>

            <section className="document-section" id="children">
              <h2>Children and student privacy</h2>
              <p>
                The app is intended as a general educational resource. It does
                not knowingly request a learner&apos;s name, date of birth,
                location, school, contacts, advertising identifier, or a public
                profile. A parent or guardian with a privacy question may use
                the contact details below.
              </p>
            </section>

            <section className="document-section" id="changes">
              <h2>Changes to this policy</h2>
              <p>
                This policy may be updated when the app&apos;s features or data
                practices change. The effective date at the top will be revised,
                and material changes will be reflected before the corresponding
                app update is released.
              </p>
            </section>

            <section className="document-section" id="contact">
              <h2>Questions or privacy requests</h2>
              <p>
                IB CS Revision is developed and operated by Grigor Dochev. For
                questions about this policy or the app&apos;s data handling,
                email <a href="mailto:gdoch9@gmail.com">gdoch9@gmail.com</a> or
                visit the <Link href="/support">support page</Link>.
              </p>
            </section>
          </article>
        </div>
      </main>
    </SiteShell>
  );
}
