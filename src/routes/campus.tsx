import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { facilities } from "@/data/siper";
import labImg from "@/assets/lab.jpg";
import libraryImg from "@/assets/library.jpg";
import campusImg from "@/assets/campus-hero.jpg";

export const Route = createFileRoute("/campus")({
  component: Campus,
  head: () => ({
    meta: [
      { title: "Campus & Facilities — SIPER Lahar" },
      {
        name: "description",
        content:
          "Laboratories, library, hostels, sports and auditorium at SIPER Lahar, Bhind: 16 labs, 8,400+ books and hostel accommodation for about 100 students.",
      },
      { property: "og:title", content: "Campus & facilities at SIPER Lahar" },
      {
        property: "og:description",
        content: "16 laboratories, a library of 8,400+ books, hostels, sports and an auditorium.",
      },
      { property: "og:url", content: "/campus" },
    ],
    links: [{ rel: "canonical", href: "/campus" }],
  }),
});

function Campus() {
  const photos = [
    {
      src: campusImg,
      title: "Main Administrative & Central Block",
      category: "Administration",
      desc: "Symmetrical two-story campus building with arched portico, manicured flower gardens, and stone courtyards.",
    },
    {
      src: labImg,
      title: "Pharmaceutics & Chemistry Lab",
      category: "Laboratories",
      desc: "Fully equipped pharmaceutical testing and formulation laboratory with precision balances, titration units, and glassware.",
    },
    {
      src: libraryImg,
      title: "Central Library & Reading Hall",
      category: "Knowledge Center",
      desc: "Repository of 8,400+ pharmaceutical textbooks, reference volumes, and national/international scientific journals.",
    },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Campus Life & Infrastructure"
        title="Facilities on the Lahar campus"
        intro="Everything a pharmacy student needs within walking distance: 16 high-tech laboratories, modern classrooms, central library, and green courtyards."
      />

      <section className="section-pad mx-auto max-w-6xl px-5">
        <div className="grid gap-6 md:grid-cols-3">
          {facilities.map((f) => (
            <article key={f.title} className="rounded-xl border border-border bg-card p-6 shadow-soft transition-transform hover:-translate-y-1">
              <h2 className="text-xl font-bold text-foreground">{f.title}</h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 py-16">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Visual Tour</p>
              <h2 className="mt-2 text-3xl font-display font-bold">Around SIPER Lahar</h2>
              <p className="mt-2 text-muted-foreground text-sm max-w-xl">
                Explore the academic spaces, practical research laboratories, and vibrant grounds of our 5-acre campus in Lahar, Bhind.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                5-Acre Green Campus
              </span>
              <span className="inline-flex items-center rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-accent-foreground">
                16 Laboratories
              </span>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {photos.map((item) => (
              <div
                key={item.title}
                className="group overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-300 hover:shadow-lift"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  <img
                    src={item.src}
                    alt={item.title}
                    width={1200}
                    height={800}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 rounded-md bg-background/90 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-foreground backdrop-blur">
                    {item.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
