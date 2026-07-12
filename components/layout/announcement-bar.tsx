import { storeConfig } from "@/data/store-config";

export function AnnouncementBar() {
  return (
    <div className="bg-forest text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-2 text-center text-xs sm:text-sm md:flex-row md:justify-center md:gap-6">
        <p>{storeConfig.announcementPrimary}</p>
        <p className="text-white/80">{storeConfig.announcementSecondary}</p>
      </div>
    </div>
  );
}
