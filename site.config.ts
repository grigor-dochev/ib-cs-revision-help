/**
 * Single source of truth for the app's name, the developer's contact details
 * and the dates shown on the legal pages.
 *
 * To rename the app, change `appName` below. Every page title, heading,
 * footer disclaimer, email subject and legal reference reads from here.
 */
export const site = {
  /** Name of the app as shown on this website. */
  appName: "CS Revision",

  /** Name used for the developer in legal text and the footer. */
  developerName: "Grigor Dochev",

  /** Address that receives support, privacy and legal enquiries. */
  supportEmail: "gdoch9@gmail.com",

  /** App Store record (Apple ID) and its public link. */
  appStoreId: "1555862527",
  appStoreUrl: "https://apps.apple.com/app/id1555862527",

  /** Public address of this website (no trailing slash). */
  siteUrl: "https://grigor-dochev.github.io/ib-cs-revision-help",

  /** Names of in-app features, kept identical to the app. */
  coachName: "Question Coach",
  purchaseName: "Full Access",

  /** Minimum system versions for the current release. */
  requirements: "iOS 26 or iPadOS 26 or later",

  /** Content figures; keep in step with the App Store description. */
  topicCount: 27,
  questionCountLabel: "over 1,100",

  /** Dates shown on the privacy policy and terms of use. */
  legal: {
    effectiveDate: "7 October 2026",
    lastUpdated: "7 October 2026",
    isoDate: "2026-10-07",
  },

  copyrightYear: 2026,
} as const;

/** Non-affiliation statement shown in the footer of every page. */
export const independenceDisclaimer = `${site.appName} was developed independently from, and is not endorsed by, the International Baccalaureate (IB).`;

export const trademarkNotice =
  "International Baccalaureate and IB are registered trademarks of the International Baccalaureate Organization.";

/** Builds a `mailto:` link to the support address with an optional subject. */
export function supportMailto(subject?: string): string {
  const query = subject ? `?subject=${encodeURIComponent(subject)}` : "";
  return `mailto:${site.supportEmail}${query}`;
}
