import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { college, stats } from "@/data/siper";
import libraryImg from "@/assets/library.jpg";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About SIPER Lahar — Pharmacy Institute in Bhind since 2002" },
      {
        name: "description",
        content:
          "History, affiliation and approvals of Sun Institute of Pharmaceutical Education & Research, Lahar: RGPV affiliated, PCI approved, established 2002.",
      },
      { property: "og:title", content: "About SIPER Lahar" },
      {
        property: "og:description",
        content: "A private pharmacy institute in Lahar, Bhind, teaching since 2002.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

function About() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="A pharmacy institute serving the Chambal region"
        intro={`${college.name} has been teaching pharmacy in Lahar, district Bhind, since ${college.established}.`}
      />

      <section className="section-pad mx-auto max-w-6xl px-5">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr] md:items-start">
          <div className="space-y-4 text-muted-foreground">
            <h2 className="text-3xl text-foreground">Our story</h2>
            <p>
              SIPER opened its doors in 2002 with a Bachelor of Pharmacy programme, at a time when
              students from Lahar and the surrounding blocks had to travel far for a pharmacy
              degree. Postgraduate programmes in Pharmaceutics and Pharmaceutical Chemistry, along
              with the two-year diploma, followed in 2018.
            </p>
            <p>
              The campus sits on Bhatpura Road and is co-educational. Around 34 teaching and
              support staff run sixteen laboratories, a library and hostels for resident students.
            </p>
            <h2 className="pt-4 text-3xl text-foreground">What we aim for</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>Graduates who are confident in a dispensing counter, a lab and a plant floor.</li>
              <li>Laboratory time in every semester, not only in final year.</li>
              <li>Postgraduate research that ends in a written, defended dissertation.</li>
              <li>Affordable pharmacy education close to home for rural Madhya Pradesh.</li>
            </ul>
          </div>

          <aside className="rounded-xl border border-border bg-card p-6 shadow-soft">
            <h3 className="text-lg">At a glance</h3>
            <dl className="mt-4 space-y-4 text-sm">
              <div>
                <dt className="font-semibold">Established</dt>
                <dd className="text-muted-foreground">{college.established}</dd>
              </div>
              <div>
                <dt className="font-semibold">Affiliation</dt>
                <dd className="text-muted-foreground">{college.affiliation}</dd>
              </div>
              <div>
                <dt className="font-semibold">Approvals</dt>
                <dd className="text-muted-foreground">{college.approvals.join(", ")}</dd>
              </div>
              <div>
                <dt className="font-semibold">Type</dt>
                <dd className="text-muted-foreground">Private, co-educational, full time</dd>
              </div>
              <div>
                <dt className="font-semibold">Campus</dt>
                <dd className="text-muted-foreground">{college.address}</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="bg-secondary/50">
        <div className="section-pad mx-auto max-w-6xl px-5">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <img
              src={libraryImg}
              alt="Library reading room at SIPER"
              width={1200}
              height={800}
              loading="lazy"
              className="rounded-xl shadow-lift"
            />
            <div>
              <p className="eyebrow">By the numbers</p>
              <h2 className="mt-3 text-3xl">The institute today</h2>
              <div className="mt-8 grid grid-cols-2 gap-6">
                {stats.map((s) => (
                  <div key={s.label} className="rounded-lg border border-border bg-card p-5">
                    <div className="font-display text-3xl text-primary">{s.value}</div>
                    <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
