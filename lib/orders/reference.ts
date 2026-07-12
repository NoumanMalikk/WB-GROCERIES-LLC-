import { randomBytes } from "crypto";

export function generateOrderReference(): string {
  return `WBG-${randomBytes(5).toString("hex").toUpperCase()}`;
}
