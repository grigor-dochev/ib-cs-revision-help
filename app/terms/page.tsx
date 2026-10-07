import type { Metadata } from "next";
import Link from "next/link";
import { LegalDocument, type LegalSection } from "../components/LegalDocument";
import { SiteShell } from "../components/SiteShell";
import {
  independenceDisclaimer,
  site,
  supportMailto,
  trademarkNotice,
} from "@/site.config";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `The terms that apply when you use ${site.appName}, including the ${site.purchaseName} purchase, the ${site.coachName} and the educational content.`,
  alternates: { canonical: "/terms/" },
};

const standardEulaUrl =
  "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/";

const contactEmail = (
  <a href={supportMailto(`${site.appName} terms question`)}>
    {site.supportEmail}
  </a>
);

const sections: LegalSection[] = [
  {
    id: "agreement",
    title: "About these terms",
    content: (
      <>
        <p>
          These terms apply when you download or use the {site.appName} app for
          iPhone and iPad (“the app”). The app is made by {site.developerName},
          an independent developer (“we”, “us”). By using the app you agree to
          these terms and to Apple’s Standard EULA described below. If you do
          not agree, please do not use the app.
        </p>
        <p>
          How we handle information is explained separately in our{" "}
          <Link href="/privacy">Privacy Policy</Link>.
        </p>
      </>
    ),
  },
  {
    id: "apple-eula",
    title: "Apple’s Standard EULA",
    content: (
      <>
        <p>
          The app is licensed to you, not sold, under Apple’s{" "}
          <a href={standardEulaUrl}>
            Licensed Application End User License Agreement
          </a>{" "}
          (the “Standard EULA”). These terms add details that are specific to
          this app. If anything here conflicts with the Standard EULA, the
          Standard EULA applies to the extent of the conflict.
        </p>
        <p>
          These terms are between you and us, not Apple. Apple is not
          responsible for the app or its content, and has no obligation to
          provide maintenance or support for it. Please send any questions,
          complaints or claims about the app to us. Apple and its subsidiaries
          are third-party beneficiaries of the Standard EULA and may enforce it
          against you.
        </p>
      </>
    ),
  },
  {
    id: "use",
    title: "Using the app",
    content: (
      <>
        <p>
          The app is for your own personal, non-commercial study. Students of
          any age may use it. If you are under 18, please make sure a parent or
          guardian is happy for you to use the app and agrees before you buy{" "}
          {site.purchaseName}. Purchases are also subject to Apple’s rules,
          including any Family Sharing or Ask to Buy settings.
        </p>
        <p>
          You do not need an account. To use some features you need a
          compatible device running {site.requirements}, and for some an iCloud
          account or Apple Intelligence (see{" "}
          <a href="#availability">Availability and changes</a>).
        </p>
      </>
    ),
  },
  {
    id: "independent",
    title: "Independent educational resource",
    content: (
      <>
        <p>
          <strong>{independenceDisclaimer}</strong> {trademarkNotice} We use
          these names only to describe the course the app is designed to help
          with.
        </p>
        <p>
          All lessons, examples and practice questions are original material
          written for the app. They are not official IB examination questions
          or markschemes, and they are not a substitute for the official course
          materials, your teachers or your school. We take care to make the
          content accurate and relevant, but it may contain errors or
          omissions and may not reflect the latest version of the syllabus or
          assessment rules.
        </p>
        <p>
          Always check important information against official publications and
          your school’s guidance. We cannot guarantee any grade, exam result or
          outcome. If you spot a mistake, please tap{" "}
          <strong>Report an issue with this question</strong> or{" "}
          <Link href="/support">contact us</Link>.
        </p>
      </>
    ),
  },
  {
    id: "question-coach",
    title: `The ${site.coachName} and AI-generated answers`,
    content: (
      <>
        <p>
          The {site.coachName} answers questions about the lesson or question
          you are studying. Its responses are written automatically by Apple’s
          on-device language model, not by us or by a teacher. They can be
          wrong, incomplete, out of date or confidently mistaken, even though
          they are based on the app’s study material.
        </p>
        <ul>
          <li>
            Treat answers as a study aid and check them against the lesson and
            your course materials.
          </li>
          <li>
            Do not rely on the {site.coachName} for anything important outside
            your revision.
          </li>
          <li>
            It is designed to decline requests for protected examination
            material or for complete answers to assessed work.
          </li>
          <li>
            It needs a device that supports Apple Intelligence, with Apple
            Intelligence turned on and its model ready. We cannot control when
            Apple makes it available.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "integrity",
    title: "Academic integrity",
    content: (
      <p>
        Use the app to understand concepts and practise. Do not use it, or the{" "}
        {site.coachName}, to obtain or share protected or live examination
        material, to produce work that you will submit for assessment (such as
        an internal assessment), or to present generated content as your own.
        You are responsible for following the academic-integrity rules of your
        school and examination body.
      </p>
    ),
  },
  {
    id: "full-access",
    title: site.purchaseName,
    content: (
      <>
        <p>
          You can use a selection of lessons, practice questions, review and
          one {site.coachName} conversation for free. {site.purchaseName} is a{" "}
          <strong>one-time, non-consumable in-app purchase</strong> that unlocks
          every lesson and question, unlimited practice and review, timed
          practice sets and unlimited {site.coachName} conversations, as
          described on the App Store.
        </p>
        <ul>
          <li>It is not a subscription, and there are no recurring charges.</li>
          <li>
            The price, including any taxes, is shown by the App Store before
            you confirm.
          </li>
          <li>
            It belongs to the Apple Account that bought it. Use{" "}
            <strong>Restore Purchases</strong> in the app to unlock it on your
            other devices or after reinstalling. Family Sharing applies only if
            it is enabled for the purchase on the App Store.
          </li>
          <li>
            Offer codes, where available, are redeemed through Apple.
          </li>
        </ul>
        <p>
          We regularly improve and correct the content, so the exact lessons
          and questions may change over time. We will not take away the core
          features {site.purchaseName} unlocks while the app remains available
          for your device.
        </p>
      </>
    ),
  },
  {
    id: "payments",
    title: "Payments and refunds",
    content: (
      <>
        <p>
          Apple processes all payments. We never see your payment details and
          cannot issue refunds ourselves. To ask for a refund, use{" "}
          <a href="https://reportaproblem.apple.com/">
            Apple’s Report a Problem
          </a>{" "}
          page. Apple’s terms set out your right to cancel a purchase and
          request a refund, including any cancellation period that applies
          where you live.
        </p>
        <p>
          If you are a consumer, you also have legal rights if the app is
          faulty or not as described. Nothing in these terms affects those
          rights. If something is not working, please{" "}
          <Link href="/support">contact us</Link> so we can try to fix it.
        </p>
      </>
    ),
  },
  {
    id: "ip",
    title: "Intellectual property",
    content: (
      <>
        <p>
          The app, its lessons, questions, explanations, code examples, design
          and this website belong to {site.developerName} or the people who
          licensed them to us, and are protected by copyright and other laws.
          You may use them for your own study through the app, and you may
          keep notes or short extracts for that purpose.
        </p>
        <p>
          You may not copy, republish, sell, share or distribute the content,
          collect it by scraping or automated means, use it to train machine
          learning models, or build a competing product from it, except where
          the law expressly allows.
        </p>
        <p>
          {trademarkNotice} Apple, iPhone, iPad, iCloud, Apple Intelligence and
          App Store are trademarks of Apple Inc. Other names belong to their
          owners.
        </p>
      </>
    ),
  },
  {
    id: "acceptable-use",
    title: "Acceptable use",
    content: (
      <>
        <p>When using the app, please do not:</p>
        <ul>
          <li>
            get around the {site.purchaseName} purchase or any technical limits
            in the app;
          </li>
          <li>
            copy, modify, decompile or reverse engineer the app, except where
            the law allows this despite these terms;
          </li>
          <li>
            use the app or the {site.coachName} to break the law, break your
            school’s rules or create harmful content; or
          </li>
          <li>interfere with the app, this website or other people’s use of them.</li>
        </ul>
      </>
    ),
  },
  {
    id: "feedback",
    title: "Feedback and reports",
    content: (
      <p>
        We welcome suggestions and reports of mistakes. If you send them, we
        may use them to improve the app without any obligation to you. Please
        do not send confidential information or material you do not have the
        right to share, such as protected examination papers.
      </p>
    ),
  },
  {
    id: "availability",
    title: "Availability and changes",
    content: (
      <>
        <p>
          The app needs {site.requirements}. iCloud sync needs an iCloud
          account, and the {site.coachName} needs a device that supports Apple
          Intelligence. Lessons and practice work offline once the app is
          installed.
        </p>
        <p>
          We may update the app to add, change, correct or remove content and
          features, or to keep it working with new versions of iOS and iPadOS.
          We try to keep the app available and working well, but we cannot
          promise that it will always be available, free from errors or
          compatible with every device.
        </p>
      </>
    ),
  },
  {
    id: "apple-services",
    title: "Apple services",
    content: (
      <p>
        Parts of the app rely on services provided by Apple, including the App
        Store, iCloud, Apple Intelligence and notifications. Your use of those
        services is governed by Apple’s own terms and privacy policy. We are
        not responsible for their availability or for how Apple provides them.
      </p>
    ),
  },
  {
    id: "disclaimers",
    title: "Disclaimers",
    content: (
      <p>
        The app is an educational aid. To the extent the law allows, it is
        provided “as is” and “as available”, without promises beyond those set
        out in these terms. If you are a consumer, you have legal rights in
        relation to digital content that is faulty or not as described, for
        example under the UK Consumer Rights Act 2015 or the consumer laws of
        your EU country. These terms do not affect those rights.
      </p>
    ),
  },
  {
    id: "liability",
    title: "Our responsibility to you",
    content: (
      <>
        <p>
          Nothing in these terms limits or excludes our liability for death or
          personal injury caused by our negligence, for fraud, or for anything
          else that cannot be limited or excluded by law.
        </p>
        <p>
          If digital content we supply damages a device or other digital
          content belonging to you because we did not use reasonable care and
          skill, we will either repair the damage or pay you compensation.
        </p>
        <p>
          Otherwise, we are not responsible for losses that were not
          reasonably foreseeable, for business losses (the app is for personal
          use), or for exam results or decisions you make based on the app’s
          content or the {site.coachName}’s answers. Where the law allows, our
          total liability to you is limited to the amount you paid for{" "}
          {site.purchaseName}.
        </p>
      </>
    ),
  },
  {
    id: "ending",
    title: "Ending these terms",
    content: (
      <p>
        You can stop using the app at any time by deleting it. We may suspend
        or end your right to use the app if you seriously or repeatedly break
        these terms, and we will tell you why where we reasonably can. Sections
        that by their nature should continue, such as those on intellectual
        property and liability, continue after these terms end.
      </p>
    ),
  },
  {
    id: "law",
    title: "Governing law and disputes",
    content: (
      <>
        <p>
          If you have a problem with the app, please contact us first. Most
          issues can be resolved quickly by email.
        </p>
        <p>
          These terms are governed by the laws of the country where the
          developer is based. If you are a consumer, you keep the protection of
          the mandatory laws of the country where you live, and you can bring
          legal proceedings in the courts there.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "Changes to these terms",
    content: (
      <p>
        We may update these terms when the app or the law changes. The “Last
        updated” date at the top will change, and we will explain significant
        changes in the app’s release notes. Changes will not reduce your rights
        to a purchase you have already made. If you keep using the app after a
        change, the updated terms apply to the extent the law allows.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    content: (
      <p>
        {site.appName} is made by {site.developerName}. For questions about
        these terms, email {contactEmail}. For help with the app, see the{" "}
        <Link href="/support">support page</Link>.
      </p>
    ),
  },
];

const summary = (
  <section className="summary-card" aria-labelledby="summary-title">
    <h2 id="summary-title">The short version</h2>
    <ul className="check-list">
      <li>
        <strong>An independent revision aid.</strong> It is not official IB
        material and may contain mistakes, so check important points against
        your course materials.
      </li>
      <li>
        <strong>{site.coachName} answers are AI-generated</strong> and can be
        wrong. Use them to learn, not to complete assessed work.
      </li>
      <li>
        <strong>{site.purchaseName} is a one-time purchase through Apple.</strong>{" "}
        No subscription. Refunds are handled by Apple.
      </li>
      <li>
        <strong>Your consumer rights are unaffected.</strong> Nothing here
        takes away rights the law gives you.
      </li>
    </ul>
  </section>
);

export default function TermsOfUse() {
  return (
    <SiteShell current="terms">
      <LegalDocument
        eyebrow="Legal"
        title="Terms of Use"
        lede={
          <p>
            The rules for using {site.appName}, written to be read. They work
            alongside Apple’s Standard EULA and our Privacy Policy.
          </p>
        }
        summary={summary}
        sections={sections}
      />
    </SiteShell>
  );
}
