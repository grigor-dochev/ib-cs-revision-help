import type { ReactNode } from "react";
import { site } from "@/site.config";
import { TocActiveTracker } from "./TocActiveTracker";

export type LegalSection = {
  id: string;
  title: string;
  content: ReactNode;
};

type LegalDocumentProps = {
  eyebrow: string;
  title: string;
  lede: ReactNode;
  summary?: ReactNode;
  sections: ReadonlyArray<LegalSection>;
};

export function LegalDocument({
  eyebrow,
  title,
  lede,
  summary,
  sections,
}: LegalDocumentProps) {
  const tocLinks = (
    <ol>
      {sections.map((section, index) => (
        <li key={section.id}>
          <a href={`#${section.id}`}>
            <span className="toc-number" aria-hidden="true">
              {index + 1}
            </span>
            <span>{section.title}</span>
          </a>
        </li>
      ))}
    </ol>
  );

  return (
    <div className="frame">
      <header className="page-hero" id="top">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <div className="lede">{lede}</div>
        <dl className="doc-meta">
          <div>
            <dt>Effective</dt>
            <dd>
              <time dateTime={site.legal.isoDate}>
                {site.legal.effectiveDate}
              </time>
            </dd>
          </div>
          <div>
            <dt>Last updated</dt>
            <dd>
              <time dateTime={site.legal.isoDate}>
                {site.legal.lastUpdated}
              </time>
            </dd>
          </div>
        </dl>
      </header>

      <div className="doc-layout">
        <aside className="toc-desktop">
          <nav aria-label="On this page" data-toc>
            <p className="toc-heading">On this page</p>
            {tocLinks}
          </nav>
          <TocActiveTracker />
        </aside>

        <div className="doc-body">
          <details className="toc-mobile">
            <summary>
              <span>On this page</span>
              <span className="toc-count">{sections.length} sections</span>
            </summary>
            <nav aria-label="On this page">{tocLinks}</nav>
          </details>

          {summary}

          <article className="prose">
            {sections.map((section, index) => (
              <section
                key={section.id}
                id={section.id}
                aria-labelledby={`${section.id}-title`}
                className="doc-section"
              >
                <h2 id={`${section.id}-title`}>
                  <span className="section-number" aria-hidden="true">
                    {index + 1}
                  </span>
                  <span>{section.title}</span>
                  <a
                    className="heading-anchor"
                    href={`#${section.id}`}
                    aria-label={`Link to section: ${section.title}`}
                  >
                    #
                  </a>
                </h2>
                {section.content}
              </section>
            ))}
          </article>

          <p className="back-to-top">
            <a href="#top">Back to top</a>
          </p>
        </div>
      </div>
    </div>
  );
}
