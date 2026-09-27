import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { courses } from "@/data/siper";

export const Route = createFileRoute("/courses")({
  component: Courses,
  head: () => ({
    meta: [
      { title: "Courses at SIPER Lahar — B.Pharm, D.Pharm, M.Pharm" },
      {
        name: "description",
        content:
          "Pharmacy courses at SIPER Lahar: B.Pharm (4 years, 100 seats), D.Pharm (2 years, 60 seats) and M.Pharm in Pharmaceutics and Pharmaceutical Chemistry (15 seats each).",
      },
      { property: "og:title", content: "Courses at SIPER Lahar" },
      {
        property: "og:description",
        content: "B.Pharm, D.Pharm and M.Pharm programmes with seats, duration and eligibility.",
      },
      { property: "og:url", content: "/courses" },
    ],
    links: [{ rel: "canonical", href: "/courses" }],
  }),
});

function Courses() {
  return (
    <>
      <PageHeader
        eyebrow="Academics"
        title="Courses, seats and eligibility"
        intro="All programmes are full time and affiliated to RGPV, Bhopal. Seat numbers are the sanctioned intake."
      />

      <section className="section-pad mx-auto max-w-6xl px-5">
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="bg-secondary text-secondary-foreground">
              <tr>
                <th className="px-5 py-3 font-semibold">Programme</th>
                <th className="px-5 py-3 font-semibold">Duration</th>
                <th className="px-5 py-3 font-semibold">Seats</th>
                <th className="px-5 py-3 font-semibold">Offered since</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((c) => (
                <tr key={c.code} className="border-t border-border bg-card">
                  <td className="px-5 py-4 font-medium">{c.title}</td>
                  <td className="px-5 py-4 text-muted-foreground">{c.duration}</td>
                  <td className="px-5 py-4 text-muted-foreground">{c.seats}</td>
                  <td className="px-5 py-4 text-muted-foreground">{c.since}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 space-y-6">
          {courses.map((c) => (
            <article
              key={c.code}
              className="rounded-xl border border-border bg-card p-7 shadow-soft"
            >
              <p className="eyebrow">{c.code}</p>
              <h2 className="mt-2 text-2xl">{c.title}</h2>
              <p className="mt-3 max-w-3xl text-muted-foreground">{c.blurb}</p>
              <dl className="mt-5 grid gap-4 text-sm sm:grid-cols-3">
                <div>
                  <dt className="font-semibold">Duration</dt>
                  <dd className="text-muted-foreground">{c.duration}</dd>
                </div>
                <div>
                  <dt className="font-semibold">Sanctioned seats</dt>
                  <dd className="text-muted-foreground">{c.seats}</dd>
                </div>
                <div>
                  <dt className="font-semibold">Eligibility</dt>
                  <dd className="text-muted-foreground">{c.eligibility}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>

        <p className="mt-10 rounded-lg border border-border bg-muted p-5 text-sm text-muted-foreground">
          Fees are revised each session by the state fee regulatory committee. Please confirm the
          current fee structure with the admission office before applying.
        </p>

        <Link
          to="/admissions"
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
        >
          Admission process <ArrowRight className="size-4" />
        </Link>
      </section>
    </>
  );
}
