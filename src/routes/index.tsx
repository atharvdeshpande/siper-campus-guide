import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, GraduationCap, FlaskConical, BookOpen, ShieldCheck } from "lucide-react";
import heroImg from "@/assets/campus-hero.jpg";
import labImg from "@/assets/lab.jpg";
import { college, courses, stats } from "@/data/siper";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "SIPER Lahar — Pharmacy College in Bhind, Madhya Pradesh" },
      {
        name: "description",
        content:
          "Sun Institute of Pharmaceutical Education & Research, Lahar (Bhind, M.P.): B.Pharm, D.Pharm and M.Pharm programmes since 2002, affiliated to RGPV Bhopal, approved by PCI.",
      },
      { property: "og:title", content: "SIPER Lahar — Pharmacy College in Bhind, M.P." },
      {
        property: "og:description",
        content:
          "B.Pharm, D.Pharm and M.Pharm programmes since 2002. RGPV affiliated, PCI approved.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Home() {
  return (
    <>
      <section className="relative isolate">
        <img
          src={heroImg}
          alt="SIPER campus at golden hour"
          width={1600}
          height={912}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-5 py-28 md:py-36">
          <p className="eyebrow">Lahar · Bhind · Madhya Pradesh</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.08] text-primary-foreground md:text-6xl">
            Sun Institute of Pharmaceutical Education &amp; Research
          </h1>
          <p className="mt-5 max-w-xl text-base text-primary-foreground/80 md:text-lg">
            {college.tagline} Affiliated to RGPV Bhopal and approved by the Pharmacy Council of
            India, SIPER trains pharmacists for hospitals, industry and research.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/admissions"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              Admissions 2026 <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/40 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              View courses
            </Link>
          </div>
        </div>
      </section>

      <section className="band-gradient">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-3xl text-primary-foreground">{s.value}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-primary-foreground/70">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad mx-auto max-w-6xl px-5">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="eyebrow">About the institute</p>
            <h2 className="mt-3 text-3xl md:text-4xl">
              Two decades of pharmacy teaching in the Chambal region
            </h2>
            <p className="mt-5 text-muted-foreground">
              Established in {college.established}, SIPER is a private pharmacy institute on
              Bhatpura Road in Lahar, district Bhind. It runs six programmes across diploma,
              degree and postgraduate levels, taught by a faculty of around 34 members across
              sixteen laboratories.
            </p>
            <p className="mt-4 text-muted-foreground">
              Teaching stays close to practice: every semester pairs classroom work with
              laboratory hours, and postgraduate students carry a dissertation through to
              submission.
            </p>
            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              More about SIPER <ArrowRight className="size-4" />
            </Link>
          </div>
          <img
            src={labImg}
            alt="Students working in a pharmaceutical laboratory"
            width={1200}
            height={800}
            loading="lazy"
            className="rounded-xl shadow-lift"
          />
        </div>
      </section>

      <section className="bg-secondary/50">
        <div className="section-pad mx-auto max-w-6xl px-5">
          <p className="eyebrow">Programmes</p>
          <h2 className="mt-3 text-3xl md:text-4xl">What you can study here</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {courses.map((c) => (
              <article
                key={c.code}
                className="rounded-xl border border-border bg-card p-6 shadow-soft"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl">{c.title}</h3>
                  <span className="shrink-0 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                    {c.seats} seats
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-primary">{c.duration}</p>
                <p className="mt-3 text-sm text-muted-foreground">{c.blurb}</p>
              </article>
            ))}
          </div>
          <Link
            to="/courses"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            Full course details and eligibility <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      <section className="section-pad mx-auto max-w-6xl px-5">
        <p className="eyebrow">Why SIPER</p>
        <h2 className="mt-3 text-3xl md:text-4xl">Built around the practical side of pharmacy</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: ShieldCheck,
              title: "Recognised",
              text: "PCI approved, AICTE recognised and affiliated to RGPV, Bhopal.",
            },
            {
              icon: FlaskConical,
              title: "16 laboratories",
              text: "Hands-on time on pharmaceutical machinery and analytical instruments.",
            },
            {
              icon: BookOpen,
              title: "8,400+ books",
              text: "A library with national and international journals and a quiet reading room.",
            },
            {
              icon: GraduationCap,
              title: "Career paths",
              text: "Community and hospital pharmacy, industry, quality control and research.",
            },
          ].map((f) => (
            <div key={f.title} className="rounded-xl border border-border bg-card p-6">
              <f.icon className="size-6 text-accent" />
              <h3 className="mt-4 text-lg">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="band-gradient">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 py-14 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl text-primary-foreground md:text-3xl">
              Applications are open for the coming session
            </h2>
            <p className="mt-2 text-sm text-primary-foreground/75">
              Speak to the admission office on {college.phones[0]}.
            </p>
          </div>
          <Link
            to="/admissions"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground"
          >
            How to apply <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
