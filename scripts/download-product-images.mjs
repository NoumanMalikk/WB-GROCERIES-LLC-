/**
 * Download product packshots from Open Food Facts (crowdsourced product photos).
 * Prefer front images; fall back to any available image URL.
 */
import fs from "fs";
import path from "path";

const ROOT = process.cwd();

const products = [
  { slug: "quaker-old-fashioned-oats-42oz", query: "Quaker Old Fashioned Oats 42 oz", codes: ["030000010407", "030000061621"] },
  { slug: "cheerios-original-cereal-18oz", query: "Cheerios Original Cereal", codes: ["016000275273", "016000148027"] },
  { slug: "kelloggs-frosted-flakes-17-3oz", query: "Kellogg's Frosted Flakes", codes: ["038000199149", "038000311015"] },
  { slug: "nature-valley-oats-honey-12-bars", query: "Nature Valley Oats Honey granola bars", codes: ["016000275105", "016000148034"] },
  { slug: "folgers-classic-roast-ground-coffee-25-9oz", query: "Folgers Classic Roast Ground Coffee", codes: ["025500000278", "025500002722"] },
  { slug: "lipton-black-tea-bags-100-count", query: "Lipton Black Tea Bags 100", codes: ["041000002425", "041000029903"] },
  { slug: "barilla-spaghetti-16oz-two-pack", query: "Barilla Spaghetti", codes: ["076808514037", "076808280038"] },
  { slug: "prego-traditional-italian-sauce-24oz", query: "Prego Traditional Italian Sauce", codes: ["051000012617", "051000124877"] },
  { slug: "kraft-original-macaroni-cheese-five-pack", query: "Kraft Macaroni and Cheese Dinner", codes: ["021000658806", "021000046499"] },
  { slug: "jif-creamy-peanut-butter-16oz", query: "Jif Creamy Peanut Butter", codes: ["051500241178", "051500255250"] },
  { slug: "smuckers-strawberry-preserves-18oz", query: "Smucker's Strawberry Preserves", codes: ["051500000317", "051500255175"] },
  { slug: "heinz-tomato-ketchup-32oz", query: "Heinz Tomato Ketchup", codes: ["013000001217", "013000006403"] },
  { slug: "hellmanns-real-mayonnaise-30oz", query: "Hellmann's Real Mayonnaise", codes: ["048001206501", "048001213233"] },
  { slug: "bushs-original-baked-beans-28oz", query: "Bush's Original Baked Beans", codes: ["039400016808", "039400011100"] },
  { slug: "del-monte-whole-kernel-corn-four-pack", query: "Del Monte Whole Kernel Corn", codes: ["024000162703", "024000167401"] },
  { slug: "starkist-chunk-light-tuna-four-pack", query: "StarKist Chunk Light Tuna in Water", codes: ["080000015107", "080000515102"] },
  { slug: "oreo-original-cookies-14-3oz", query: "Oreo Original Cookies", codes: ["044000032129", "044000007547"] },
  { slug: "ritz-original-crackers-13-7oz", query: "Ritz Original Crackers", codes: ["044000032419", "044000000730"] },
  { slug: "lays-classic-potato-chips-8oz", query: "Lay's Classic Potato Chips", codes: ["028400064317", "028400090316"] },
  { slug: "doritos-nacho-cheese-9-25oz", query: "Doritos Nacho Cheese", codes: ["028400049719", "028400067172"] },
  { slug: "coca-cola-original-12-pack", query: "Coca-Cola Original 12 pack cans", codes: ["049000028911", "049000042207"] },
  { slug: "gatorade-variety-pack-12-count", query: "Gatorade Thirst Quencher", codes: ["052000338417", "052000010607"] },
  { slug: "tide-simply-clean-fresh-84oz", query: "Tide Simply Clean Fresh laundry detergent", codes: ["037000869382", "037000126448"] },
  { slug: "dawn-ultra-dishwashing-liquid-18oz", query: "Dawn Ultra Dishwashing Liquid", codes: ["037000309345", "037000126455"] },
  { slug: "bounty-essentials-six-double-rolls", query: "Bounty Paper Towels", codes: ["037000309406", "037000852407"] },
  { slug: "glad-forceflexplus-13-gallon-40-count", query: "Glad ForceFlex trash bags", codes: ["012587607408", "012587600409"] },
];

async function fetchJson(url) {
  const res = await fetch(url, {
    headers: { "User-Agent": "WB-Groceries-Storefront/1.0 (product image sync; contact@wb-groceries.example)" },
  });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  return res.json();
}

function pickImage(product) {
  const candidates = [
    product.image_front_url,
    product.image_front_small_url,
    product.image_url,
    product.image_small_url,
    ...(product.selected_images?.front?.display
      ? Object.values(product.selected_images.front.display)
      : []),
  ].filter(Boolean);
  return candidates[0] || null;
}

async function resolveImage(item) {
  for (const code of item.codes) {
    try {
      const data = await fetchJson(`https://world.openfoodfacts.org/api/v2/product/${code}.json`);
      if (data.status === 1 && data.product) {
        const url = pickImage(data.product);
        if (url) return { url, code, source: "barcode" };
      }
    } catch {
      /* try next */
    }
  }

  const searchUrl =
    "https://world.openfoodfacts.org/cgi/search.pl?" +
    new URLSearchParams({
      search_terms: item.query,
      search_simple: "1",
      action: "process",
      json: "1",
      page_size: "8",
    });
  const data = await fetchJson(searchUrl);
  const hits = data.products || [];
  for (const product of hits) {
    const url = pickImage(product);
    if (url) return { url, code: product.code, source: "search" };
  }
  return null;
}

async function download(url, dest) {
  const res = await fetch(url, {
    headers: { "User-Agent": "WB-Groceries-Storefront/1.0 (product image sync)" },
  });
  if (!res.ok) throw new Error(`download ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(dest, buf);
  return buf.length;
}

async function main() {
  const credits = [];
  for (const item of products) {
    const dir = path.join(ROOT, "public/products", item.slug);
    fs.mkdirSync(dir, { recursive: true });
    process.stdout.write(`${item.slug} ... `);
    try {
      const found = await resolveImage(item);
      if (!found) {
        console.log("NOT FOUND");
        continue;
      }
      const ext = found.url.includes(".png") ? "png" : found.url.includes(".webp") ? "webp" : "jpg";
      const mainPath = path.join(dir, `main.${ext}`);
      const anglePath = path.join(dir, `angle.${ext}`);
      const size = await download(found.url, mainPath);
      fs.copyFileSync(mainPath, anglePath);
      console.log(`OK (${found.source} ${found.code}) ${size}b -> ${ext}`);
      credits.push({ slug: item.slug, url: found.url, code: found.code, ext });
      await new Promise((r) => setTimeout(r, 350));
    } catch (err) {
      console.log(`FAIL ${err.message}`);
    }
  }
  fs.writeFileSync(path.join(ROOT, "scripts/image-download-report.json"), JSON.stringify(credits, null, 2));
  console.log(`\nDownloaded ${credits.length}/${products.length}`);
}

main();
