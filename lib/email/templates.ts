const brand = {
  green: "#184C35",
  cream: "#FFF9EE",
  text: "#17221C",
  muted: "#606B64",
};

function layout(title: string, body: string) {
  return `<!DOCTYPE html><html><head><meta charset="utf-8" /><title>${title}</title></head>
<body style="margin:0;background:${brand.cream};font-family:Inter,Arial,sans-serif;color:${brand.text}">
  <table width="100%" cellpadding="0" cellspacing="0" role="presentation"><tr><td align="center" style="padding:24px">
  <table width="600" cellpadding="0" cellspacing="0" role="presentation" style="background:#fff;border-radius:16px;overflow:hidden;border:1px solid #DCE5DE">
    <tr><td style="background:${brand.green};color:#fff;padding:20px 24px;font-size:20px;font-weight:700">WB Groceries</td></tr>
    <tr><td style="padding:24px">${body}</td></tr>
    <tr><td style="padding:16px 24px;background:#E8F2E9;color:${brand.muted};font-size:12px">
      WB GROCERIES LLC · Crockett, Texas 75835 · Groceries & Everyday Essentials
    </td></tr>
  </table></td></tr></table></body></html>`;
}

export function orderReceivedEmail(data: {
  customerName: string;
  reference: string;
  itemsHtml: string;
  subtotal: string;
  shipping: string;
  tax: string;
  total: string;
  shippingAddress: string;
  supportEmail: string;
}) {
  return layout(
    `Order received ${data.reference}`,
    `<h1 style="margin:0 0 12px;font-size:22px">Thank you, ${data.customerName}</h1>
     <p>We received your order <strong>${data.reference}</strong> for WB GROCERIES LLC.</p>
     ${data.itemsHtml}
     <p>Subtotal: ${data.subtotal}<br/>Shipping: ${data.shipping}<br/>Tax: ${data.tax}<br/><strong>Total: ${data.total}</strong></p>
     <p>Shipping to:<br/>${data.shippingAddress}</p>
     <p>Track updates with your order reference and email when tracking is available. Questions? Contact ${data.supportEmail}.</p>`,
  );
}

export function paymentConfirmationEmail(reference: string, customerName: string) {
  return layout("Payment confirmation", `<p>Hi ${customerName}, payment for order <strong>${reference}</strong> has been confirmed.</p>`);
}
export function orderProcessingEmail(reference: string) {
  return layout("Order processing", `<p>Order <strong>${reference}</strong> is now being processed.</p>`);
}
export function orderShippedEmail(reference: string) {
  return layout("Order shipped", `<p>Order <strong>${reference}</strong> has shipped. Tracking details will appear when carrier services are connected.</p>`);
}
export function deliveryUpdateEmail(reference: string, status: string) {
  return layout("Delivery update", `<p>Order <strong>${reference}</strong> status update: ${status}.</p>`);
}
export function cancellationEmail(reference: string) {
  return layout("Order cancelled", `<p>Order <strong>${reference}</strong> has been cancelled.</p>`);
}
export function refundEmail(reference: string) {
  return layout("Refund update", `<p>A refund update is available for order <strong>${reference}</strong>.</p>`);
}
export function contactAcknowledgmentEmail(name: string) {
  return layout("We received your message", `<p>Hi ${name}, thanks for contacting WB Groceries. Our team will review your message.</p>`);
}
export function passwordResetEmail(resetUrl: string) {
  return layout("Password reset", `<p>Reset your WB Groceries password using this link: <a href="${resetUrl}">${resetUrl}</a></p>`);
}
export function welcomeEmail(name: string) {
  return layout("Welcome", `<p>Welcome to WB Groceries, ${name}. Stock the kitchen. Simplify the week.</p>`);
}
export function newsletterConfirmationEmail() {
  return layout("Newsletter confirmation", `<p>You are confirmed for occasional WB Groceries updates. You can unsubscribe at any time.</p>`);
}
