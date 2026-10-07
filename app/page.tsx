import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { SiteShell } from "./components/SiteShell";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  BookIcon,
  ChartIcon,
  CheckCircleIcon,
  DocumentIcon,
  LifebuoyIcon,
  RepeatIcon,
  ShieldIcon,
  SparkleIcon,
} from "./components/Icons";
import { site } from "@/site.config";

export const metadata: Metadata = {
  title: {
    absolute: `${site.appName}: Revision for IB Computer Science`,
  },
  description: `${site.appName} is an independent revision app for IB Diploma Computer Science on iPhone and iPad: SL and HL lessons, original practice questions, spaced review and a private on-device ${site.coachName}.`,
  alternates: { canonical: "/" },
};

const features: ReadonlyArray<{
  title: string;
  icon: ReactNode;
  text: string;
}> = [
  {
    title: "Clear lessons for SL and HL",
    icon: <BookIcon />,
    text: `${site.topicCount} structured topics with explanations, worked examples and code in Python or Java. HL-only material is labelled and can be hidden.`,
  },
  {
    title: "Original practice questions",
    icon: <CheckCircleIcon />,
    text: `${capitalise(site.questionCountLabel)} questions written for the app, from code output to short answers, each with instant feedback and an explanation.`,
  },
  {
    title: "Spaced review",
    icon: <RepeatIcon />,
    text: "Questions you miss come back just before you are likely to forget them, with a Due Review widget for your Home Screen.",
  },
  {
    title: site.coachName,
    icon: <SparkleIcon />,
    text: "Ask a follow-up about the lesson or question in front of you. It runs on your device with Apple Intelligence, so your questions stay private.",
  },
  {
    title: "Progress you can see",
    icon: <ChartIcon />,
    text: "Charts, topic mastery and your weakest topics at a glance, plus optional daily practice reminders at a time you choose.",
  },
  {
    title: "Private by design",
    icon: <ShieldIcon />,
    text: "No account, no ads and no tracking. Your progress syncs between iPhone and iPad through your own private iCloud.",
  },
];

function capitalise(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export default function Home() {
  return (
    <SiteShell current="home">
      <div className="frame">
        <section className="home-hero" aria-labelledby="home-title">
          <div className="home-hero-copy">
            <p className="eyebrow">For iPhone and iPad</p>
            <h1 id="home-title">
              Revise IB Computer Science, one clear step at a time.
            </h1>
            <p className="lede-text">
              {site.appName} brings SL and HL lessons, original practice
              questions, spaced review and a private {site.coachName} together
              in one focused app. Learn a topic, practise it, then review what
              you got wrong until it sticks.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href={site.appStoreUrl}>
                View on the App Store
                <ArrowUpRightIcon width={18} height={18} />
              </a>
              <Link className="button button-secondary" href="/support">
                Get help
              </Link>
            </div>
            <p className="hero-footnote">
              Free to download. {site.purchaseName} is a one-time in-app
              purchase. Requires {site.requirements}.
            </p>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="mock-card">
              <div className="mock-card-header">
                <span className="mock-pill">Practice</span>
                <span className="mock-meta">Code output</span>
              </div>
              <p className="mock-question">What does this program print?</p>
              <pre className="mock-code">
                <code>
                  <span className="tok-name">nums</span> = [
                  <span className="tok-num">3</span>,{" "}
                  <span className="tok-num">1</span>,{" "}
                  <span className="tok-num">4</span>,{" "}
                  <span className="tok-num">1</span>,{" "}
                  <span className="tok-num">5</span>]{"\n"}
                  <span className="tok-fn">print</span>(
                  <span className="tok-fn">sorted</span>(
                  <span className="tok-name">nums</span>)[-
                  <span className="tok-num">2</span>])
                </code>
              </pre>
              <ul className="mock-options">
                <li className="is-correct">
                  <span>4</span>
                  <CheckCircleIcon width={18} height={18} />
                </li>
                <li>
                  <span>5</span>
                </li>
                <li>
                  <span>1</span>
                </li>
              </ul>
              <p className="mock-explanation">
                <strong>Correct.</strong> sorted() returns [1, 1, 3, 4, 5], and
                index -2 is the second-to-last item.
              </p>
            </div>
            <div className="mock-chip mock-chip-review">
              <RepeatIcon width={16} height={16} />
              Due for review: 6
            </div>
            <div className="mock-chip mock-chip-coach">
              <SparkleIcon width={16} height={16} />
              Why does -2 count from the end?
            </div>
          </div>
        </section>

        <section className="feature-section" aria-labelledby="features-title">
          <h2 id="features-title" className="section-title">
            Everything you need to revise, nothing you don’t
          </h2>
          <ul className="feature-grid">
            {features.map((feature) => (
              <li key={feature.title} className="feature-card">
                <span className="feature-icon">{feature.icon}</span>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="plans" aria-labelledby="plans-title">
          <h2 id="plans-title" className="section-title">
            Start free. Unlock everything once.
          </h2>
          <div className="plan-grid">
            <div className="plan-card">
              <h3>Free</h3>
              <p>
                A selection of lessons and practice questions with
                explanations, up to three due review questions at a time, and
                one {site.coachName} conversation.
              </p>
            </div>
            <div className="plan-card plan-card-featured">
              <h3>{site.purchaseName}</h3>
              <p>
                Every lesson and question, unlimited practice and review, timed
                practice sets and unlimited {site.coachName} conversations. One
                purchase, no subscription, and you can restore it on your other
                devices.
              </p>
            </div>
          </div>
        </section>

        <section className="help-section" aria-labelledby="help-title">
          <h2 id="help-title" className="section-title">
            Help and legal information
          </h2>
          <div className="link-grid">
            <Link className="link-card" href="/support">
              <span className="link-card-icon">
                <LifebuoyIcon />
              </span>
              <span className="link-card-text">
                <strong>Support</strong>
                <span>
                  iCloud sync, the {site.coachName}, restoring{" "}
                  {site.purchaseName}, reminders and more.
                </span>
              </span>
              <ArrowRightIcon className="link-card-arrow" />
            </Link>
            <Link className="link-card" href="/privacy">
              <span className="link-card-icon">
                <ShieldIcon />
              </span>
              <span className="link-card-text">
                <strong>Privacy Policy</strong>
                <span>
                  What the app stores, where it is kept and the choices you
                  have.
                </span>
              </span>
              <ArrowRightIcon className="link-card-arrow" />
            </Link>
            <Link className="link-card" href="/terms">
              <span className="link-card-icon">
                <DocumentIcon />
              </span>
              <span className="link-card-text">
                <strong>Terms of Use</strong>
                <span>
                  {site.purchaseName}, the {site.coachName} and using the
                  content.
                </span>
              </span>
              <ArrowRightIcon className="link-card-arrow" />
            </Link>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
