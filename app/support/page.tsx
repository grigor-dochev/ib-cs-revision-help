import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { SiteShell } from "../components/SiteShell";
import {
  BellIcon,
  CloudIcon,
  FlagIcon,
  LockOpenIcon,
  MailIcon,
  ResetIcon,
  ShareIcon,
  SparkleIcon,
  WidgetIcon,
} from "../components/Icons";
import { site, supportMailto } from "@/site.config";

export const metadata: Metadata = {
  title: "Support",
  description: `Help with ${site.appName}: the ${site.coachName}, iCloud sync, restoring ${site.purchaseName}, reminders, the Due Review widget, exporting and resetting progress.`,
  alternates: { canonical: "/support/" },
};

type Topic = {
  id: string;
  title: string;
  shortTitle: string;
  icon: ReactNode;
  body: ReactNode;
};

const topics: Topic[] = [
  {
    id: "question-coach",
    title: `The ${site.coachName} is unavailable`,
    shortTitle: site.coachName,
    icon: <SparkleIcon />,
    body: (
      <>
        <ol className="steps">
          <li>Check that your iPhone or iPad supports Apple Intelligence.</li>
          <li>
            Turn on Apple Intelligence in the Settings app under{" "}
            <strong>Apple Intelligence &amp; Siri</strong>.
          </li>
          <li>
            Give the on-device model time to download. Keeping the device on
            Wi-Fi and charging helps.
          </li>
          <li>
            Open a lesson or question and tap{" "}
            <strong>Ask about this lesson</strong> or{" "}
            <strong>Ask about this question</strong> again.
          </li>
        </ol>
        <p className="note">
          One conversation is free. {site.purchaseName} unlocks unlimited
          conversations. Every other feature works without Apple Intelligence.
        </p>
      </>
    ),
  },
  {
    id: "icloud",
    title: "Progress is not syncing",
    shortTitle: "iCloud sync",
    icon: <CloudIcon />,
    body: (
      <>
        <ol className="steps">
          <li>Sign in with the same Apple Account on each device.</li>
          <li>
            In the Settings app, tap your name, then <strong>iCloud</strong>,
            and make sure iCloud is on for {site.appName}.
          </li>
          <li>
            In the app, open <strong>Settings → Data &amp; Sync</strong> and
            check that iCloud Sync is active.
          </li>
          <li>
            Connect both devices to the internet, open the app on each and
            allow a few minutes. Low iCloud storage or Low Power Mode can
            delay syncing.
          </li>
        </ol>
      </>
    ),
  },
  {
    id: "full-access",
    title: `Restore ${site.purchaseName}`,
    shortTitle: `Restore ${site.purchaseName}`,
    icon: <LockOpenIcon />,
    body: (
      <>
        <ol className="steps">
          <li>
            Make sure you are signed in to the App Store with the Apple Account
            that made the purchase.
          </li>
          <li>
            Tap the gear button on Home to open <strong>Settings</strong>, then
            tap <strong>Restore Purchases</strong>. It is also on the{" "}
            {site.purchaseName} screen.
          </li>
        </ol>
        <p className="note">
          {site.purchaseName} is a one-time purchase, not a subscription. For
          billing questions or refunds, use{" "}
          <a href="https://reportaproblem.apple.com/">
            Apple’s Report a Problem
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: "reminders",
    title: "Practice reminders",
    shortTitle: "Reminders",
    icon: <BellIcon />,
    body: (
      <>
        <p>
          Open <strong>Settings → Practice Reminders</strong> to turn on a
          daily reminder and choose its time. The app asks for notification
          permission only when you turn it on.
        </p>
        <p className="note">
          Not getting reminders? If notifications are off for the app, use the
          button on that screen to open the Settings app and allow them.
        </p>
      </>
    ),
  },
  {
    id: "widget",
    title: "Add the Due Review widget",
    shortTitle: "Widget",
    icon: <WidgetIcon />,
    body: (
      <ol className="steps">
        <li>Touch and hold an empty area of your Home Screen.</li>
        <li>
          Tap <strong>Edit</strong>, then <strong>Add Widget</strong>.
        </li>
        <li>
          Search for {site.appName}, choose <strong>Due Review</strong> and add
          it.
        </li>
        <li>Tap the widget at any time to jump straight into Due Review.</li>
      </ol>
    ),
  },
  {
    id: "export",
    title: "Export your progress",
    shortTitle: "Export",
    icon: <ShareIcon />,
    body: (
      <p>
        Open <strong>Settings → Data &amp; Sync → Export Study Progress</strong>{" "}
        and choose where to save or send the file. It is a readable JSON
        summary of your progress, practice history and bookmarks. It does not
        include your typed answers, answer keys or purchase information.
      </p>
    ),
  },
  {
    id: "reset",
    title: "Reset or delete your data",
    shortTitle: "Reset and delete",
    icon: <ResetIcon />,
    body: (
      <>
        <p>
          <strong>Settings → Data &amp; Sync → Reset All Progress</strong>{" "}
          clears lessons read, practice history, answers, review dates and
          bookmarks on all your devices. Your study profile and{" "}
          {site.purchaseName} stay.
        </p>
        <p className="note">
          To remove everything, delete the app, then delete its data from
          iCloud in the Settings app under your name → iCloud. Exported files
          are separate copies you delete yourself.
        </p>
      </>
    ),
  },
  {
    id: "report",
    title: "Report a mistake in a question",
    shortTitle: "Report a mistake",
    icon: <FlagIcon />,
    body: (
      <ol className="steps">
        <li>
          On the question, tap{" "}
          <strong>Report an issue with this question</strong>.
        </li>
        <li>Choose what seems wrong and add any details.</li>
        <li>
          Tap <strong>Share Report</strong>, choose Mail and send it to{" "}
          <a href={supportMailto()}>{site.supportEmail}</a>.
        </li>
      </ol>
    ),
  },
];

const faqs: ReadonlyArray<{ question: string; answer: ReactNode }> = [
  {
    question: `Does the ${site.coachName} send my questions anywhere?`,
    answer: (
      <p>
        No. It runs on your device using Apple Intelligence. Conversations are
        not saved and nothing you type is sent to us. See the{" "}
        <Link href="/privacy#question-coach">Privacy Policy</Link>.
      </p>
    ),
  },
  {
    question: "Can I use the app without iCloud?",
    answer: (
      <p>
        Yes. Without iCloud your study data is saved on that device only and
        does not sync between your iPhone and iPad.
      </p>
    ),
  },
  {
    question: "Does the app work offline?",
    answer: (
      <p>
        Yes. Lessons and practice questions are built into the app. Syncing,
        purchases and restoring {site.purchaseName} need an internet
        connection.
      </p>
    ),
  },
  {
    question: `Is ${site.purchaseName} a subscription?`,
    answer: (
      <p>
        No. It is a single, one-time purchase. You can restore it on your other
        devices with the same Apple Account.
      </p>
    ),
  },
  {
    question: "How do I get a refund?",
    answer: (
      <p>
        Apple handles all payments, so refunds are requested from Apple at{" "}
        <a href="https://reportaproblem.apple.com/">reportaproblem.apple.com</a>
        . We cannot see or refund App Store payments ourselves.
      </p>
    ),
  },
  {
    question: "Which devices are supported?",
    answer: (
      <p>
        iPhone and iPad with {site.requirements}. The {site.coachName} also
        needs a device that supports Apple Intelligence.
      </p>
    ),
  },
  {
    question: "I used version 1. Where is my account?",
    answer: (
      <p>
        Version 2.0 is a fresh start with no accounts, so version 1 accounts,
        community features and progress are not carried over. If you would
        like your version 1 account data deleted, email{" "}
        <a href={supportMailto(`${site.appName} version 1 data request`)}>
          {site.supportEmail}
        </a>{" "}
        from the address you used for it.
      </p>
    ),
  },
  {
    question: "Is this an official IB app?",
    answer: (
      <p>
        No. {site.appName} is an independent revision aid. It was developed
        independently from, and is not endorsed by, the International
        Baccalaureate (IB). Use it alongside your teacher’s guidance and the
        official course materials from your school.
      </p>
    ),
  },
];

export default function Support() {
  return (
    <SiteShell current="support">
      <div className="frame">
        <header className="page-hero">
          <p className="eyebrow">Support</p>
          <h1>How can we help?</h1>
          <div className="lede">
            <p>
              Quick answers for the most common questions about {site.appName}.
              Still stuck? Email us and we’ll help.
            </p>
          </div>
          <div className="hero-actions">
            <a
              className="button button-primary"
              href={supportMailto(`${site.appName} support`)}
            >
              <MailIcon width={18} height={18} />
              Email support
            </a>
            <a className="button button-secondary" href="#faq">
              Read the FAQ
            </a>
          </div>
        </header>

        <nav className="chip-nav" aria-label="Support topics">
          {topics.map((topic) => (
            <a key={topic.id} href={`#${topic.id}`}>
              {topic.shortTitle}
            </a>
          ))}
        </nav>

        <div className="topic-grid">
          {topics.map((topic) => (
            <section
              key={topic.id}
              id={topic.id}
              className="topic-card"
              aria-labelledby={`${topic.id}-title`}
            >
              <div className="topic-icon">{topic.icon}</div>
              <h2 id={`${topic.id}-title`}>{topic.title}</h2>
              {topic.body}
            </section>
          ))}
        </div>

        <section className="faq" id="faq" aria-labelledby="faq-title">
          <h2 id="faq-title">Frequently asked questions</h2>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <div className="faq-answer">{faq.answer}</div>
              </details>
            ))}
          </div>
        </section>

        <section className="contact-card" aria-labelledby="contact-title">
          <div>
            <h2 id="contact-title">Contact support</h2>
            <p>
              Email{" "}
              <a href={supportMailto(`${site.appName} support`)}>
                {site.supportEmail}
              </a>{" "}
              and include:
            </p>
            <ul>
              <li>
                the app version (shown in <strong>Settings → About</strong>);
              </li>
              <li>your device model and iOS or iPadOS version; and</li>
              <li>what you were doing when the problem happened.</li>
            </ul>
            <p className="note">
              Please don’t include passwords, payment details or examination
              material. Our <Link href="/privacy#support">Privacy Policy</Link>{" "}
              explains how we handle your email.
            </p>
          </div>
          <a
            className="button button-primary"
            href={supportMailto(`${site.appName} support`)}
          >
            <MailIcon width={18} height={18} />
            Email support
          </a>
        </section>
      </div>
    </SiteShell>
  );
}
