import type { Metadata } from "next";
import { SiteShell } from "../components/SiteShell";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms that apply when using the IB CS Revision app.",
};

const sections = [
  ["agreement", "Agreement"],
  ["service", "The service"],
  ["independence", "Independent resource"],
  ["integrity", "Academic integrity"],
  ["purchase", "Full Access"],
  ["content", "Content & conduct"],
  ["availability", "Availability"],
  ["disclaimers", "Disclaimers"],
  ["changes", "Changes"],
  ["contact", "Contact"],
] as const;

export default function TermsOfUse() {
  return (
    <SiteShell>
      <main>
        <header className="hero policy-hero">
          <p className="eyebrow">USING THE APP</p>
          <h1>Terms of Use</h1>
          <p className="lede">
            Clear terms for using IB CS Revision as an independent study aid.
          </p>
          <p className="updated">Effective 5 August 2026</p>
        </header>

        <div className="content-layout">
          <nav className="page-index" aria-label="Terms of use sections">
            <strong>On this page</strong>
            {sections.map(([id, title]) => (
              <a href={`#${id}`} key={id}>{title}</a>
            ))}
          </nav>

          <article className="document">
            <section className="callout" id="agreement">
              <h2>Agreement</h2>
              <p>
                By downloading or using IB CS Revision, you agree to these terms
                and Apple&apos;s applicable App Store terms. If you do not agree,
                do not use the app.
              </p>
            </section>

            <section className="document-section" id="service">
              <h2>The service</h2>
              <p>
                IB CS Revision provides original lessons, examples, practice,
                progress tools, and an optional on-device Question Assistant for
                personal educational use. It supplements rather than replaces
                the current official syllabus, school instruction, teacher
                guidance, or independent judgement.
              </p>
            </section>

            <section className="document-section" id="independence">
              <h2>Independent educational resource</h2>
              <p>
                IB CS Revision is not affiliated with, endorsed by, sponsored
                by, or approved by the International Baccalaureate Organization.
                “IB” and related names may be trademarks of their respective
                owner. They are used only to identify the subject area for which
                this independent resource is intended.
              </p>
              <p>
                The app does not claim to contain official examination papers,
                mark schemes, or guaranteed grade predictions. Always consult
                official publications and your school for authoritative rules,
                dates, and assessment requirements.
              </p>
            </section>

            <section className="document-section" id="integrity">
              <h2>Academic integrity</h2>
              <p>
                Use the app to understand concepts and practise original
                material. Do not use it to request, reproduce, distribute, or
                answer protected or current examination material, to generate a
                complete assessed submission, or to misrepresent generated work
                as your own. You remain responsible for following your school&apos;s
                and programme&apos;s academic-integrity rules.
              </p>
            </section>

            <section className="document-section" id="purchase">
              <h2>Full Access purchase</h2>
              <p>
                Full Access is a one-time, non-consumable in-app purchase
                processed by Apple. The price is shown by the App Store before
                you confirm. It permanently unlocks the paid app features for
                the purchasing Apple Account, subject to Apple&apos;s StoreKit
                entitlement and restoration rules. It is not a subscription.
              </p>
              <p>
                Payment, refunds, family sharing where available, account access,
                and purchase disputes are handled under Apple&apos;s terms and
                processes. Use Restore Purchases in the app when reinstalling or
                moving to another eligible device.
              </p>
              <p>
                Teacher referral codes identify how the app was discovered and
                do not grant Full Access by themselves. Any promotional access
                must be delivered through an approved App Store or server-backed
                offer and remains subject to its stated eligibility and expiry.
              </p>
            </section>

            <section className="document-section" id="content">
              <h2>Content and acceptable use</h2>
              <p>
                The app, website, original educational content, design, and code
                are protected by applicable intellectual-property laws. You may
                use them personally through the app. You may not copy, resell,
                scrape, republish, reverse engineer where prohibited, interfere
                with, or misuse the service except where the law expressly gives
                you that right.
              </p>
            </section>

            <section className="document-section" id="availability">
              <h2>Availability and changes</h2>
              <p>
                Features can depend on a compatible device, a supported system
                version, Apple Intelligence availability, iCloud, an internet
                connection, or App Store services. Content and features may be
                corrected, improved, added, removed, or become unavailable. The
                app does not promise uninterrupted operation or permanent
                compatibility with every device or external Apple service.
              </p>
            </section>

            <section className="document-section" id="disclaimers">
              <h2>Disclaimers and responsibility</h2>
              <p>
                The app is provided as an educational aid on an “as is” and “as
                available” basis to the extent permitted by law. Although care
                is taken to make the content useful and accurate, no result,
                examination outcome, grade, completeness, or freedom from error
                is guaranteed. You are responsible for verifying important
                information against authoritative sources.
              </p>
              <p>
                Nothing in these terms excludes rights or liability that cannot
                lawfully be excluded. Subject to those rights, the developer is
                not responsible for indirect or consequential loss arising from
                reliance on the app or from unavailable external services.
              </p>
            </section>

            <section className="document-section" id="changes">
              <h2>Changes to these terms</h2>
              <p>
                These terms may be updated when the app or legal requirements
                change. The effective date will be revised. Continued use after
                an update means the revised terms apply, to the extent permitted
                by law.
              </p>
            </section>

            <section className="document-section" id="contact">
              <h2>Contact</h2>
              <p>
                IB CS Revision is developed and operated by Grigor Dochev. For
                questions about these terms, email{" "}
                <a href="mailto:gdoch9@gmail.com">gdoch9@gmail.com</a>.
              </p>
            </section>
          </article>
        </div>
      </main>
    </SiteShell>
  );
}
