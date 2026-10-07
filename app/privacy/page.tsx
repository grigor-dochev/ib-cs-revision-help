import type { Metadata } from "next";
import Link from "next/link";
import { LegalDocument, type LegalSection } from "../components/LegalDocument";
import { SiteShell } from "../components/SiteShell";
import { site, supportMailto } from "@/site.config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.appName} handles your information: no account, no tracking, study data kept on your devices and in your own private iCloud, and an on-device ${site.coachName}.`,
  alternates: { canonical: "/privacy/" },
};

const privacyEmail = (
  <a href={supportMailto(`${site.appName} privacy request`)}>
    {site.supportEmail}
  </a>
);

const sections: LegalSection[] = [
  {
    id: "about",
    title: "About this policy",
    content: (
      <>
        <p>
          This policy explains how the {site.appName} app for iPhone and iPad
          (“the app”) and this website handle information. The app and website
          are made and run by {site.developerName}, an independent developer
          (“we”, “us”). We are the data controller for the small amount of
          personal data described here, such as an email you send us.
        </p>
        <p>
          The policy applies to version 2.0 of the app and later. Account data
          from the earlier version 1 is covered in{" "}
          <a href="#version-1">Data from version 1 of the app</a>. You can reach
          us about anything in this policy at {privacyEmail}.
        </p>
      </>
    ),
  },
  {
    id: "principles",
    title: "What the app does not do",
    content: (
      <>
        <p>The app is built so that we never need to see your study data.</p>
        <ul>
          <li>
            There is no account or sign-in, and the app never asks for your
            name, email address, age, school or location.
          </li>
          <li>
            There is no advertising and no tracking. The app does not use the
            advertising identifier or follow you across other apps or websites.
          </li>
          <li>
            There are no third-party analytics, advertising, crash-reporting or
            AI services built in. The app uses only Apple’s own frameworks.
          </li>
          <li>
            We run no server for the app. Lessons and questions are bundled
            inside the app, and nothing you do in it is sent to us.
          </li>
          <li>We never sell, rent or share personal data for marketing.</li>
        </ul>
      </>
    ),
  },
  {
    id: "stored-data",
    title: "Information the app stores",
    content: (
      <>
        <p>
          To work, the app keeps the following information. It stays on your
          devices and, where noted, in your own private iCloud storage (see{" "}
          <a href="#icloud">iCloud sync</a>). We cannot access any of it.
        </p>
        <div className="table-wrap">
          <table>
            <caption className="visually-hidden">
              Information stored by the app, where it is kept and why
            </caption>
            <thead>
              <tr>
                <th scope="col" className="col-info">
                  Information
                </th>
                <th scope="col">Where it is kept</th>
                <th scope="col">Why</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <strong>Study profile</strong>
                  Course level (SL or HL), programming language
                  (Python or Java), target exam year, daily study goal and
                  whether you finished the welcome steps
                </th>
                <td data-label="Where it is kept">Your device, synced through your private iCloud</td>
                <td data-label="Why">To tailor lessons, examples and practice to your course</td>
              </tr>
              <tr>
                <th scope="row">
                  <strong>Study progress</strong>
                  Lessons read, how confident you rated
                  yourself on each topic, topic mastery, question results,
                  practice sessions, the answers you select or type, review
                  dates and bookmarks
                </th>
                <td data-label="Where it is kept">Your device, synced through your private iCloud</td>
                <td data-label="Why">
                  To show your progress and bring questions back for review
                  at the right time
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <strong>App settings</strong>
                  {site.coachName} preferences, whether the free{" "}
                  {site.coachName} conversation has been used, your practice
                  reminder setting and time, when the app last offered the App
                  Store rating prompt, a first-launch marker, and the most
                  recent <a href="#campaign-links">campaign link</a> record
                </th>
                <td data-label="Where it is kept">This device only</td>
                <td data-label="Why">To remember your choices and run these features</td>
              </tr>
              <tr>
                <th scope="row">
                  <strong>Due Review widget summary</strong>
                  The number of questions due and
                  their review dates
                </th>
                <td data-label="Where it is kept">
                  This device only, in storage shared just between the app and
                  its widget
                </td>
                <td data-label="Why">So the Home Screen widget can show what is due</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Your review schedule and mastery scores are worked out on your device
          to plan your revision. They are never used to make decisions about
          you outside the app.
        </p>
      </>
    ),
  },
  {
    id: "icloud",
    title: "iCloud sync",
    content: (
      <>
        <p>
          If you are signed in to iCloud, your study profile and progress sync
          between your iPhone and iPad through the app’s{" "}
          <strong>private iCloud database</strong>. This database belongs to
          your Apple Account. Apple stores and protects it under the iCloud
          terms and Apple’s privacy policy, and the app can reach it only
          through your devices signed in to that account. We cannot see,
          download or change it.
        </p>
        <p>
          If iCloud is not available, for example because you are not signed
          in or have turned off iCloud for the app, your study data is kept on
          that device and is not synced while iCloud is unavailable. You can
          check the current status in{" "}
          <strong>Settings → Data &amp; Sync</strong> in the app.
        </p>
      </>
    ),
  },
  {
    id: "question-coach",
    title: site.coachName,
    content: (
      <>
        <p>
          The {site.coachName} answers follow-up questions about the lesson or
          question you are studying. It uses Apple’s on-device language model,
          part of Apple Intelligence, through Apple’s Foundation Models
          framework. Your questions and its answers are generated and processed{" "}
          <strong>on your device</strong>.
        </p>
        <ul>
          <li>
            Conversations are kept in memory only while the {site.coachName} is
            open. They are not saved, logged, analysed or synced.
          </li>
          <li>Nothing you type into the {site.coachName} is sent to us.</li>
          <li>
            The study material it uses comes from the lessons and questions
            already inside the app.
          </li>
        </ul>
        <p>
          The {site.coachName} needs a device that supports Apple Intelligence,
          with Apple Intelligence turned on. If you prefer not to use it, simply
          don’t open it; every other feature works without it.
        </p>
      </>
    ),
  },
  {
    id: "purchases",
    title: "Purchases",
    content: (
      <>
        <p>
          {site.purchaseName} is a one-time in-app purchase processed entirely
          by Apple through the App Store. Apple handles your payment details,
          receipts, refunds, offer codes and any Family Sharing. The app only
          checks with Apple whether your Apple Account has a valid{" "}
          {site.purchaseName} purchase so it can unlock the paid features. We
          never receive your payment card details, and the app does not send
          purchase information to us.
        </p>
      </>
    ),
  },
  {
    id: "reminders",
    title: "Practice reminders",
    content: (
      <p>
        Practice reminders are optional and off by default. The app asks for
        notification permission only when you turn them on in{" "}
        <strong>Settings → Practice Reminders</strong>. The reminder is a local
        notification scheduled by iOS or iPadOS on your device at the time you
        choose. No push service or third party is involved, and the schedule is
        not sent to us. You can change or turn off reminders, or withdraw
        notification permission in the Settings app, at any time.
      </p>
    ),
  },
  {
    id: "sharing-from-app",
    title: "Exports and content reports you share",
    content: (
      <>
        <h3>Study progress export</h3>
        <p>
          <strong>Settings → Data &amp; Sync → Export Study Progress</strong>{" "}
          creates a readable JSON file of your progress on your device. It
          includes topic and question progress, a summary of your practice
          history and your bookmarks. It leaves out the answers you entered,
          answer keys, internal record identifiers, your study profile
          preferences and any purchase information. The file goes only where
          you send it with Apple’s share sheet; the app never uploads it.
        </p>
        <h3>Reporting a problem with a question</h3>
        <p>
          If you report an issue with a question, the app prepares a short
          report containing the question, its question and topic identifiers,
          the issue type you chose, any details you add, and the app and system
          versions. It does not include your profile or progress. Nothing is
          sent until you choose how to share it, for example by email. If you
          send it to us, we treat it like a{" "}
          <a href="#support">support email</a>.
        </p>
      </>
    ),
  },
  {
    id: "campaign-links",
    title: "Campaign links",
    content: (
      <p>
        Some links, for example on this website or social media, can open a
        specific screen in the app. If such a link includes a campaign label,
        the app keeps one small record on your device: the campaign label, a
        general source such as “website” or “social”, the kind of screen opened
        and the date. A newer link replaces the older record. It is not linked
        to you, not synced to iCloud and never sent to us or anyone else.
      </p>
    ),
  },
  {
    id: "diagnostics",
    title: "Crash and performance reports",
    content: (
      <>
        <p>
          If you have chosen to share analytics with app developers in{" "}
          <strong>
            Settings → Privacy &amp; Security → Analytics &amp; Improvements
          </strong>
          , Apple may give us crash reports and performance statistics for the
          app. Apple collects and prepares this data under its own policies and
          does not identify you to us. We use it only to find and fix problems.
          You can turn this off at any time in the same place.
        </p>
        <p>
          The app also uses Apple’s MetricKit to note on your device which
          broad kind of problem occurred, together with the app and content
          versions. These notes stay in your device’s system log; the app does
          not upload them, and they never contain your questions, answers,
          prompts or anything that identifies you.
        </p>
      </>
    ),
  },
  {
    id: "support",
    title: "Support emails",
    content: (
      <>
        <p>
          If you email us, we receive your email address, your name if your
          email shows it, and whatever you include in the message. We use this
          only to reply and help you. Our mailbox is provided by Google (Gmail),
          which stores email for us under its own terms.
        </p>
        <p>
          Please don’t send passwords, payment details or other sensitive
          information. We keep support emails only for as long as we need them
          to deal with your request and keep a sensible record of it, and you
          can ask us to delete them at any time.
        </p>
      </>
    ),
  },
  {
    id: "website",
    title: "This website",
    content: (
      <p>
        This website is a static site hosted by GitHub Pages. It uses no
        cookies, analytics, advertising, tracking or third-party scripts or
        fonts. Like any web host, GitHub may record technical information such
        as your IP address when you visit, to deliver and secure the site; see
        the{" "}
        <a href="https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement">
          GitHub General Privacy Statement
        </a>
        . We do not receive visitor logs from GitHub.
      </p>
    ),
  },
  {
    id: "version-1",
    title: "Data from version 1 of the app",
    content: (
      <>
        <p>
          Before version 2.0, the app (then listed as CS Revision) offered
          optional accounts and community features such as a forum and
          friends. If you created an account in version 1, your name, email
          address and a user ID were stored on the online service that version
          used, together with anything linked to your account in its community
          features.
        </p>
        <p>
          Version 2.0 does not have accounts and does not read, use, transfer
          or migrate any version 1 data. If you had a version 1 account and
          would like a copy of its data or want it deleted, email{" "}
          {privacyEmail} from the address you used for that account, or tell us
          which address it was. We will respond within one month.
        </p>
      </>
    ),
  },
  {
    id: "legal-basis",
    title: "Legal bases for processing",
    content: (
      <>
        <p>
          Under the UK and EU General Data Protection Regulation (GDPR), we
          rely on these legal bases for the limited personal data we handle:
        </p>
        <ul>
          <li>
            <strong>Support emails and content reports:</strong> our
            legitimate interest in answering your request and improving the
            app’s content, or taking steps you ask us to take.
          </li>
          <li>
            <strong>Crash and performance reports from Apple:</strong> our
            legitimate interest in keeping the app reliable. Apple provides
            these only if you have opted in.
          </li>
          <li>
            <strong>Version 1 account data:</strong> our legitimate interest in
            responding to requests about that data and in closing the old
            service properly, and any legal obligation that applies.
          </li>
        </ul>
        <p>
          Information that stays on your device or in your private iCloud is
          not processed by us.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    title: "Who else handles information",
    content: (
      <>
        <p>
          We do not sell or share personal data. The only other organisations
          involved are the platforms the app and website run on, each under its
          own privacy policy:
        </p>
        <ul>
          <li>
            <strong>Apple</strong>, for the App Store, purchases, iCloud,
            Apple Intelligence, notifications and the optional crash reports
            described above (
            <a href="https://www.apple.com/legal/privacy/">
              Apple Privacy Policy
            </a>
            ).
          </li>
          <li>
            <strong>GitHub</strong>, which hosts this website.
          </li>
          <li>
            <strong>Google</strong>, which provides our support mailbox (
            <a href="https://policies.google.com/privacy">
              Google Privacy Policy
            </a>
            ).
          </li>
        </ul>
        <p>
          These providers may process data outside the UK and European Economic
          Area. They use recognised safeguards for those transfers, such as
          adequacy decisions or standard contractual clauses. We may also
          disclose information if the law requires it.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    title: "Keeping and deleting your data",
    content: (
      <>
        <p>
          Because your study data belongs to you and stays in your Apple
          ecosystem, you control how long it is kept:
        </p>
        <ul>
          <li>
            <strong>Reset your progress:</strong>{" "}
            <strong>Settings → Data &amp; Sync → Reset All Progress</strong>{" "}
            deletes lessons read, topic and question progress, practice
            sessions and answers, review dates and bookmarks from your device
            and your private iCloud. Your other devices update when they next
            sync. Your study profile and {site.purchaseName} purchase are kept.
          </li>
          <li>
            <strong>Remove everything from a device:</strong> deleting the app
            removes its local data, settings and widget summary from that
            device. Data already in iCloud stays there until you delete it.
          </li>
          <li>
            <strong>Remove data from iCloud:</strong> on iPhone or iPad, go to
            Settings → your name → iCloud and manage your account storage,
            where you can delete the app’s data if it is listed. Resetting
            progress in the app also removes progress records from iCloud.
          </li>
          <li>
            <strong>Exports:</strong> an exported file is your own copy. Delete
            it from wherever you saved or shared it.
          </li>
          <li>
            <strong>Support emails and version 1 data:</strong> kept as
            described in <a href="#support">Support emails</a> and{" "}
            <a href="#version-1">Data from version 1</a>. Ask us to delete them
            at any time.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "rights",
    title: "Your rights",
    content: (
      <>
        <p>
          Wherever you live, you can ask us what personal data we hold about
          you. If UK or EU data protection law applies to you, you have the
          right to:
        </p>
        <ul>
          <li>access the personal data we hold about you and get a copy;</li>
          <li>have inaccurate data corrected;</li>
          <li>have your data deleted;</li>
          <li>restrict or object to how we use it;</li>
          <li>receive your data in a portable format; and</li>
          <li>
            complain to a data protection authority, such as the UK{" "}
            <a href="https://ico.org.uk/make-a-complaint/">
              Information Commissioner’s Office
            </a>{" "}
            or the{" "}
            <a href="https://www.edpb.europa.eu/about-edpb/about-edpb/members_en">
              authority in your EU country
            </a>
            .
          </li>
        </ul>
        <p>
          To use these rights, email {privacyEmail}. We will reply within one
          month and may ask for information to confirm the request is yours.
          There is no charge.
        </p>
        <p>
          Because we hold no account or study data for the current app, most
          of these rights are in your hands directly: you can see your progress
          in the app, export it, reset it, or delete it as described in{" "}
          <a href="#retention">Keeping and deleting your data</a>.
        </p>
      </>
    ),
  },
  {
    id: "children",
    title: "Children and young students",
    content: (
      <>
        <p>
          The app is made for students, and many of them are under 18. It is
          designed to be safe for them to use: it has no accounts, no chat with
          other people, no advertising and no tracking, and we do not collect
          personal data through it. No parental consent is needed to use the
          app because no personal data is collected.
        </p>
        <p>
          If you are under 16, or under the age of digital consent where you
          live, please ask a parent or guardian before emailing us or buying{" "}
          {site.purchaseName}. Apple’s Family Sharing and Ask to Buy let parents
          approve purchases. If a parent or guardian believes their child has
          sent us personal information, contact us and we will delete it.
        </p>
      </>
    ),
  },
  {
    id: "security",
    title: "Security",
    content: (
      <p>
        Your study data is protected by your device’s security and by iCloud.
        The app checks that purchases are verified by Apple, and this website
        is served only over HTTPS. Because we do not collect your study data,
        there is no central copy of it that could be exposed. No system is
        perfectly secure, so please keep your devices and Apple Account
        protected with a passcode and two-factor authentication.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    content: (
      <p>
        We will update this policy if the app or the way it handles
        information changes. The “Last updated” date at the top will change,
        and if a change is significant we will explain it in the app’s release
        notes before it takes effect. A future feature that needs new data will
        not be released until this policy describes it.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    content: (
      <p>
        {site.developerName} is responsible for {site.appName}. For privacy
        questions or requests, email {privacyEmail}. For help with the app,
        see the <Link href="/support">support page</Link>.
      </p>
    ),
  },
];

const summary = (
  <section className="summary-card" aria-labelledby="summary-title">
    <h2 id="summary-title">Privacy at a glance</h2>
    <ul className="check-list">
      <li>
        <strong>No account, no ads, no tracking.</strong> There are no
        third-party analytics or advertising tools in the app.
      </li>
      <li>
        <strong>Your study data stays yours.</strong> It is kept on your
        devices and in your own private iCloud, which we cannot access.
      </li>
      <li>
        <strong>The {site.coachName} runs on your device.</strong> Your
        questions are not saved or sent to us.
      </li>
      <li>
        <strong>Apple handles purchases.</strong> We never see your payment
        details.
      </li>
      <li>
        <strong>We only receive what you choose to send,</strong> such as a
        support email.
      </li>
    </ul>
  </section>
);

export default function PrivacyPolicy() {
  return (
    <SiteShell current="privacy">
      <LegalDocument
        eyebrow="Legal"
        title="Privacy Policy"
        lede={
          <p>
            {site.appName} is designed so that your revision stays private. This
            policy explains exactly what the app stores, where it is kept and
            the choices you have.
          </p>
        }
        summary={summary}
        sections={sections}
      />
    </SiteShell>
  );
}
