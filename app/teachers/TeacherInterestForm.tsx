"use client";

import { FormEvent, useState } from "react";

const campaign = "school-licensing-discovery-v1";
const supportAddress = "gdoch9@gmail.com";

const procurementOptions = [
  "Apple School Manager / managed distribution",
  "Purchase orders or invoicing",
  "Data protection and legal review",
  "Accessibility documentation",
  "Curriculum and content review",
] as const;

export function TeacherInterestForm() {
  const [role, setRole] = useState("Teacher");
  const [region, setRegion] = useState("Europe");
  const [licenceBand, setLicenceBand] = useState("26–100 learners");
  const [timeline, setTimeline] = useState("Exploring for a future term");
  const [requirements, setRequirements] = useState<string[]>([]);

  function toggleRequirement(requirement: string) {
    setRequirements((current) =>
      current.includes(requirement)
        ? current.filter((value) => value !== requirement)
        : [...current, requirement],
    );
  }

  function openEmailDraft(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const body = [
      `Campaign: ${campaign}`,
      `Role: ${role}`,
      `Broad region: ${region}`,
      `Potential licence band: ${licenceBand}`,
      `Timeline: ${timeline}`,
      `Procurement requirements: ${requirements.length > 0 ? requirements.join("; ") : "Not selected"}`,
      "",
      "I am interested in discussing a possible school licence for IB CS Revision.",
      "No student data is included in this enquiry.",
    ].join("\n");

    const query = new URLSearchParams({
      subject: "[CSREV-048] School licensing interest",
      body,
    });
    window.location.href = `mailto:${supportAddress}?${query.toString()}`;
  }

  return (
    <form className="interest-form" onSubmit={openEmailDraft}>
      <div className="form-grid">
        <label>
          Your role
          <select value={role} onChange={(event) => setRole(event.target.value)}>
            <option>Teacher</option>
            <option>Department lead</option>
            <option>School administrator</option>
            <option>Procurement or IT</option>
            <option>Other school role</option>
          </select>
        </label>

        <label>
          Broad region
          <select value={region} onChange={(event) => setRegion(event.target.value)}>
            <option>Africa</option>
            <option>Asia-Pacific</option>
            <option>Europe</option>
            <option>Middle East</option>
            <option>North America</option>
            <option>South America</option>
            <option>Prefer not to say</option>
          </select>
        </label>

        <label>
          Potential licence band
          <select
            value={licenceBand}
            onChange={(event) => setLicenceBand(event.target.value)}
          >
            <option>1–25 learners</option>
            <option>26–100 learners</option>
            <option>101–300 learners</option>
            <option>301+ learners</option>
            <option>Not sure yet</option>
          </select>
        </label>

        <label>
          Approximate timeline
          <select value={timeline} onChange={(event) => setTimeline(event.target.value)}>
            <option>Exploring for a future term</option>
            <option>Within 3 months</option>
            <option>Within 6–12 months</option>
            <option>Next academic year</option>
            <option>No planned date</option>
          </select>
        </label>
      </div>

      <fieldset>
        <legend>What would your school need?</legend>
        <div className="checkbox-grid">
          {procurementOptions.map((requirement) => (
            <label key={requirement} className="checkbox-row">
              <input
                type="checkbox"
                checked={requirements.includes(requirement)}
                onChange={() => toggleRequirement(requirement)}
              />
              <span>{requirement}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="form-notice">
        <strong>Privacy:</strong> this page has no analytics and sends nothing as
        you make selections. The button opens a draft in your email app. Your
        message is sent only if you choose Send. Do not add student names,
        addresses, records, or roster information.
      </div>

      <div className="action-row">
        <button className="primary-link" type="submit">
          Open licensing email draft
        </button>
        <a className="secondary-link" href={`mailto:${supportAddress}`}>
          Email without form
        </a>
      </div>
    </form>
  );
}
