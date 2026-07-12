import { Resend } from "resend";
import { getSupportEmail, isResendConfigured, isDemoMode } from "@/data/store-config";
import {
  contactAcknowledgmentEmail,
  newsletterConfirmationEmail,
  orderReceivedEmail,
} from "./templates";
import type { OrderRecord } from "@/lib/orders/store";
import { formatPrice } from "@/lib/utilities/format";

function getResend() {
  if (!isResendConfigured()) return null;
  return new Resend(process.env.RESEND_API_KEY);
}

export async function sendOrderConfirmationEmail(order: OrderRecord) {
  const itemsHtml = `<ul>${order.items
    .map(
      (item) =>
        `<li>${item.quantity} × ${item.title} (${item.packageSize}) — ${formatPrice(item.lineTotal)}</li>`,
    )
    .join("")}</ul>`;
  const html = orderReceivedEmail({
    customerName: order.customerName,
    reference: order.reference,
    itemsHtml,
    subtotal: formatPrice(order.subtotal),
    shipping: formatPrice(order.shipping),
    tax: formatPrice(order.tax),
    total: formatPrice(order.total),
    shippingAddress: `${order.shippingAddress.line1}<br/>${order.shippingAddress.city}, ${order.shippingAddress.state} ${order.shippingAddress.zip}`,
    supportEmail: getSupportEmail(),
  });

  if (isDemoMode() || !isResendConfigured() || order.demo) {
    console.info("[demo-email] order confirmation", { to: order.email, reference: order.reference });
    return { sent: false, demo: true };
  }

  const resend = getResend();
  await resend!.emails.send({
    from: process.env.ORDER_EMAIL_FROM!,
    to: order.email,
    subject: `Order confirmation ${order.reference} · WB GROCERIES LLC`,
    html,
  });
  return { sent: true, demo: false };
}

export async function sendContactAcknowledgment(to: string, name: string) {
  if (isDemoMode() || !isResendConfigured()) {
    console.info("[demo-email] contact acknowledgment", { to, name });
    return { sent: false, demo: true };
  }
  const resend = getResend();
  await resend!.emails.send({
    from: process.env.ORDER_EMAIL_FROM!,
    to,
    subject: "We received your message · WB Groceries",
    html: contactAcknowledgmentEmail(name),
  });
  return { sent: true, demo: false };
}

export async function sendNewsletterConfirmation(to: string) {
  if (isDemoMode() || !isResendConfigured()) {
    console.info("[demo-email] newsletter confirmation", { to });
    return { sent: false, demo: true };
  }
  const resend = getResend();
  await resend!.emails.send({
    from: process.env.ORDER_EMAIL_FROM!,
    to,
    subject: "Newsletter confirmation · WB Groceries",
    html: newsletterConfirmationEmail(),
  });
  return { sent: true, demo: false };
}
