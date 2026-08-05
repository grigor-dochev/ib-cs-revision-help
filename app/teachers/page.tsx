import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "../components/SiteShell";

export const metadata: Metadata = {
  title: "For Teachers",
  description:
    "Information for teachers sharing the independent IB CS Revision app with students.",
};

const sections = [
  ["overview", "Overview"],
  ["codes", "Referral codes"],
  ["privacy", "Student privacy"],
  ["access", "Full Access"],
] as const;

export default function Teachers() {
  return (
    <SiteShell>
      <main>
        <section className="hero policy-hero" aria-labelledby="teachers-title">
          <p className="eyebrow">FOR TEACHERS</p>
          <h1 id="teachers-title">A focused revision companion for your students.</h1>
          <p className="lede">
            IB CS Revision is an independent study aid designed for individual
            revision alongside your teaching, the official syllabus, and your
            school&apos;s guidance.
          </p>
        </section>

        <div className="content-layout">
          <nav className="page-index" aria-label="On this page">
            <strong>On this page</strong>
            {sections.map(([id, title]) => (
              <Link key={id} href={`#${id}`}>{title}</Link>
            ))}
          </nav>

          <div className="document">
            <section className="document-section" id="overview">
              <h2>How the app fits</h2>
              <p>
                Students can review syllabus topics, practise questions, and
                revisit material that is due for review. The app is not an
                official International Baccalaureate product and does not
                replace teacher feedback or official course materials.
              </p>
            </section>

            <section className="document-section" id="codes">
              <h2>Signed, time-limited referral codes</h2>
              <p>
                When the teacher referral programme is available, each code is
                cryptographically signed and has an expiry date. Modified,
                expired, or unsupported codes are rejected by the app.
              </p>
              <p>
                A code records only the anonymous campaign that introduced the
                app. There is no classroom dashboard and no student account is
                attached to a referral.
              </p>
            </section>

            <section className="document-section" id="privacy">
              <h2>No student identity attribution</h2>
              <ul className="plain-list">
                <li>No student name, email address, or school account is collected.</li>
                <li>No advertising or third-party analytics SDK is included.</li>
                <li>Referral attribution remains local to the student&apos;s device.</li>
                <li>Study data uses the student&apos;s private iCloud database.</li>
              </ul>
            </section>

            <section className="document-section" id="access">
              <h2>Codes do not manufacture paid access</h2>
              <p>
                A teacher referral code never changes the app&apos;s Full Access
                entitlement by itself. Full Access remains a one-time App Store
                purchase. Any future promotional access will be delivered only
                through an approved App Store or server-backed mechanism.
              </p>
            </section>

            <aside className="callout">
              <h2>Questions from your school?</h2>
              <p>
                Contact <a href="mailto:gdoch9@gmail.com">gdoch9@gmail.com</a>
                {" "}for curriculum, privacy, or deployment questions.
              </p>
            </aside>
          </div>
        </div>
      </main>
    </SiteShell>
  );
}
