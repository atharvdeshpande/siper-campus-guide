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
  return (
    <>
      <PageHeader
        eyebrow="Campus life"
        title="Facilities on the Lahar campus"
        intro="Everything a pharmacy student needs within walking distance of the academic block."
      />

      <section className="section-pad mx-auto max-w-6xl px-5">
        <div className="grid gap-6 md:grid-cols-3">
          {facilities.map((f) => (
            <article key={f.title} className="rounded-xl border border-border bg-card p-6 shadow-soft">
              <h2 className="text-xl">{f.title}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{f.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-secondary/50">
        <div className="section-pad mx-auto max-w-6xl px-5">
          <p className="eyebrow">Gallery</p>
          <h2 className="mt-3 text-3xl">Around the institute</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              { src: campusImg, alt: "Academic block and campus lawns" },
              { src: labImg, alt: "Pharmaceutics laboratory session" },
              { src: libraryImg, alt: "Library reading room" },
            ].map((img) => (
              <img
                key={img.alt}
                src={img.src}
                alt={img.alt}
                width={1200}
                height={800}
                loading="lazy"
                className="h-64 w-full rounded-xl object-cover shadow-soft"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
