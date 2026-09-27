import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { college } from "@/data/siper";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact SIPER Lahar — Address, Phone & Map" },
      {
        name: "description",
        content:
          "Contact Sun Institute of Pharmaceutical Education & Research: SIPER Campus, Bhatpura Road, Lahar, Bhind, Madhya Pradesh 477445. Phone +91 77730 05190.",
      },
      { property: "og:title", content: "Contact SIPER Lahar" },
      {
        property: "og:description",
        content: "Address, phone numbers and location map for SIPER, Lahar, Bhind (M.P.).",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollegeOrUniversity",
          name: college.name,
          alternateName: college.short,
          foundingDate: String(college.established),
          telephone: college.phones[0],
          email: college.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: "SIPER Campus, Bhatpura Road",
            addressLocality: "Lahar, Bhind",
            addressRegion: "Madhya Pradesh",
            postalCode: "477445",
            addressCountry: "IN",
          },
        }),
      },
    ],
  }),
});

function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Get in touch"
        title="Contact the institute"
        intro="The office is on the SIPER campus at Bhatpura Road, Lahar, district Bhind."
      />

      <section className="section-pad mx-auto max-w-6xl px-5">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-6">
            {[
              { icon: MapPin, label: "Campus address", value: college.address },
              { icon: Phone, label: "Phone", value: college.phones.join(" · ") },
              { icon: Mail, label: "Email", value: college.email },
              {
                icon: Clock,
                label: "Office hours",
                value: "Monday to Saturday, 10:00 am – 5:00 pm (closed on public holidays)",
              },
            ].map((item) => (
              <div key={item.label} className="flex gap-4 rounded-xl border border-border bg-card p-5">
                <item.icon className="mt-1 size-5 shrink-0 text-accent" />
                <div>
                  <h2 className="text-sm font-semibold uppercase tracking-wide">{item.label}</h2>
                  <p className="mt-1 text-sm text-muted-foreground">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="overflow-hidden rounded-xl border border-border shadow-soft">
            <iframe
              title="SIPER Lahar location map"
              src={`https://www.google.com/maps?q=${college.mapQuery}&output=embed`}
              className="h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
