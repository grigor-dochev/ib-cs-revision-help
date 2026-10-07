"use client";

import { useEffect } from "react";

/**
 * Marks the table-of-contents link for the section currently being read.
 * Purely progressive enhancement: the page works fully without it.
 */
export function TocActiveTracker() {
  useEffect(() => {
    const links = Array.from(
      document.querySelectorAll<HTMLAnchorElement>("nav[data-toc] a[href^='#']"),
    );
    const sections = links
      .map((link) => document.getElementById(link.hash.slice(1)))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) {
      return;
    }

    let frame = 0;
    let activeId = "";

    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.3;
      let current = sections[0];
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= line) {
          current = section;
        } else {
          break;
        }
      }
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      if (atBottom) {
        current = sections[sections.length - 1];
      }
      if (current.id === activeId) {
        return;
      }
      activeId = current.id;
      for (const link of links) {
        if (link.hash.slice(1) === activeId) {
          link.setAttribute("aria-current", "location");
        } else {
          link.removeAttribute("aria-current");
        }
      }
    };

    const schedule = () => {
      if (frame === 0) {
        frame = window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame !== 0) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  return null;
}
