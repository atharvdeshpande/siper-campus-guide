import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Globe } from "lucide-react";
import { college } from "@/data/siper";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-secondary/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <h3 className="font-display text-lg">{college.short}, Lahar</h3>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            {college.name}. Affiliated to {college.affiliation} and approved by the Pharmacy
            Council of India.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Explore</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {[
              { to: "/about", label: "About the institute" },
              { to: "/courses", label: "Courses & seats" },
              { to: "/admissions", label: "Admissions" },
              { to: "/campus", label: "Campus & facilities" },
              { to: "/contact", label: "Contact us" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Reach us</h4>
          <ul className="mt-3 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>{college.address}</span>
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>{college.phones.join(" · ")}</span>
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
              <a href={`mailto:${college.email}`} className="hover:text-primary">
                {college.email}
              </a>
            </li>
            <li className="flex gap-2">
              <Globe className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>{college.website}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/70 px-5 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {college.name}, Lahar, Bhind (M.P.). All rights reserved.
      </div>
    </footer>
  );
}
