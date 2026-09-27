import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { college } from "@/data/siper";

export const Route = createFileRoute("/admissions")({
  component: Admissions,
  head: () => ({
    meta: [
      { title: "Admissions — SIPER Lahar, Bhind (M.P.)" },
      {
        name: "description",
        content:
          "Admission process, eligibility and documents required for B.Pharm, D.Pharm and M.Pharm at SIPER Lahar, through Madhya Pradesh online counselling.",
      },
      { property: "og:title", content: "Admissions at SIPER Lahar" },
      {
        property: "og:description",
        content: "Eligibility, counselling steps and documents for pharmacy admission at SIPER.",
      },
      { property: "og:url", content: "/admissions" },
    ],
    links: [{ rel: "canonical", href: "/admissions" }],
  }),
});

const steps = [
  {
    title: "Check eligibility",
    text: "B.Pharm and D.Pharm applicants need 10+2 with Physics, Chemistry and Biology or Mathematics. M.Pharm applicants need a B.Pharm from a PCI-approved institution.",
  },
  {
    title: "Register for state counselling",
    text: "Pharmacy admissions in Madhya Pradesh run through the Directorate of Technical Education online counselling. Register, pay the portal fee and complete document verification.",
  },
  {
    title: "Fill choices and lock SIPER",
    text: "Add Sun Institute of Pharmaceutical Education & Research, Lahar to your choice list and lock your preferences before the deadline.",
  },
  {
    title: "Seat allotment",
    text: "Seats are allotted on merit of qualifying marks and choice order. Allotted candidates report to the institute within the reporting window.",
  },
  {
    title: "Report and enrol",
    text: "Bring original documents for verification, pay the first-instalment fee and collect your academic timetable and hostel form.",
  },
];

const documents = [
  "10th and 12th marksheets and certificates",
  "Graduation marksheets (for M.Pharm applicants)",
  "Transfer / migration certificate",
  "Domicile certificate of Madhya Pradesh (if claiming state quota)",
  "Category certificate (SC / ST / OBC / EWS), if applicable",
  "Income certificate for scholarship claims",
  "Aadhaar card and recent passport-size photographs",
  "Counselling allotment letter and registration slip",
];

function Admissions() {
  return (
    <>
      <PageHeader
        eyebrow="Admissions"
        title="How to join SIPER"
        intro="Admission to every programme is through the Madhya Pradesh online counselling process, followed by reporting at the institute."
      />

      <section className="section-pad mx-auto max-w-6xl px-5">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr] md:items-start">
          <div>
            <h2 className="text-3xl">The process, step by step</h2>
            <ol className="mt-8 space-y-6">
              {steps.map((s, i) => (
                <li key={s.title} className="flex gap-5">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-primary font-display text-sm font-semibold text-primary-foreground">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-lg">{s.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <aside className="space-y-6">
            <div className="rounded-xl border border-border bg-card p-6 shadow-soft">
              <h3 className="text-lg">Documents to keep ready</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {documents.map((d) => (
                  <li key={d} className="flex gap-2">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-border bg-secondary p-6">
              <h3 className="text-lg">Admission helpdesk</h3>
              <p className="mt-2 text-sm text-secondary-foreground/80">
                Counselling dates change every session. Call before you travel to campus.
              </p>
              <div className="mt-4 space-y-1 text-sm font-medium">
                {college.phones.map((p) => (
                  <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="block text-primary">
                    {p}
                  </a>
                ))}
                <a href={`mailto:${college.email}`} className="block text-primary">
                  {college.email}
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
