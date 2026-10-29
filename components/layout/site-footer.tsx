import Link from "next/link";
import { Logo } from "./logo";
import {
  footerShop,
  footerCategories,
  footerHelp,
  footerCompany,
  footerLegal,
} from "@/data/navigation";
import {
  getSupportEmail,
  hasSupportEmail,
  shouldShowFullAddress,
  storeConfig,
} from "@/data/store-config";

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h2 className="mb-4 font-sans-heading text-xs font-semibold uppercase tracking-[0.14em] text-gold">{title}</h2>
      <ul className="space-y-2.5 text-sm text-white/80">
        {links.map((link) => (
          <li key={link.href + link.label}>
            <Link href={link.href} className="transition hover:text-white">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();
  const { address } = storeConfig;

  return (
    <footer className="mt-20 bg-grocery text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-[1.6fr_repeat(4,1fr)]">
        <div>
          <Logo variant="dark" />
          <p className="mt-5 max-w-xs font-heading text-xl font-semibold leading-snug text-white">
            {storeConfig.tagline}
          </p>
          <address className="mt-6 space-y-1 text-sm not-italic text-white/75">
            {shouldShowFullAddress() && <p>{address.street}</p>}
            <p>
              {address.city}, {address.state} {address.zip}
            </p>
            <p>
              <a href={`tel:${storeConfig.phoneTel}`} className="transition hover:text-white">
                {storeConfig.phone}
              </a>
            </p>
            {hasSupportEmail() && (
              <p>
                <a href={`mailto:${getSupportEmail()}`} className="transition hover:text-white">
                  {getSupportEmail()}
                </a>
              </p>
            )}
          </address>
        </div>
        <FooterColumn title="Shop" links={footerShop} />
        <FooterColumn title="Categories" links={footerCategories} />
        <FooterColumn title="Help" links={footerHelp} />
        <div className="space-y-8">
          <FooterColumn title="Company" links={footerCompany} />
          <FooterColumn title="Legal" links={footerLegal} />
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {storeConfig.legalName}. All rights reserved.
          </p>
          <p>{storeConfig.locationPhrase}</p>
        </div>
      </div>
    </footer>
  );
}
