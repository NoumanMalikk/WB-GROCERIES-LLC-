import { storeConfig } from "@/data/store-config";

export function AnnouncementBar() {
  const { methods } = storeConfig.shipping;
  const lowestRate = Math.min(...methods.map((method) => method.price));

  return (
    <div className="bg-forest text-white">
      <p className="mx-auto max-w-7xl px-4 py-2 text-center text-xs font-medium tracking-wide sm:text-[13px]">
        Shipping from ${lowestRate.toFixed(2)} on every order
        <span className="hidden sm:inline">
          <span className="mx-3 text-white/30" aria-hidden>
            |
          </span>
          Packed and shipped from {storeConfig.address.city}, {storeConfig.address.state}
        </span>
      </p>
    </div>
  );
}
