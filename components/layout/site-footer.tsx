import Link from "next/link";
import { Logo } from "./logo";
import {
  footerShop,
  footerCategories,
  footerHelp,
  footerCompany,
  footerLegal,
} from "@/data/navigation";
import { shouldShowFullAddress, storeConfig, getSupportEmail } from "@/data/store-config";

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-gold">{title}</h2>
      <ul className="space-y-2 text-sm text-white/85">
        {links.map((link) => (
          <li key={link.href + link.label}>
            <Link href={link.href} className="hover:text-white">
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
  return (
    <footer className="mt-16 bg-grocery text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-2 lg:grid-cols-6">
        <div className="lg:col-span-2">
          <Logo variant="dark" />
          <p className="mt-4 max-w-sm text-sm text-white/80">{storeConfig.supportingStatement}</p>
          <div className="mt-6 space-y-1 text-sm text-white/85">
            <p className="font-semibold">{storeConfig.legalName}</p>
            <p>{storeConfig.brandDescriptor}</p>
            {shouldShowFullAddress() ? (
              <p>
                {storeConfig.address.street}
                <br />
                {storeConfig.address.city}, {storeConfig.address.state} {storeConfig.address.zip}
              </p>
            ) : (
              <p>
                {storeConfig.address.city}, {storeConfig.address.state} {storeConfig.address.zip}
              </p>
            )}
            <p>
              Phone:{" "}
              <a href={`tel:${storeConfig.phoneTel}`} className="underline-offset-2 hover:underline">
                {storeConfig.phone}
              </a>
            </p>
            <p className="text-white/70">Support: {getSupportEmail()}</p>
          </div>
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
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 text-xs text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {storeConfig.legalName}. All rights reserved.
          </p>
          <p>{storeConfig.locationPhrase}</p>
        </div>
      </div>
    </footer>
  );
}
