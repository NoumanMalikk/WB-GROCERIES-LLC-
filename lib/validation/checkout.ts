import { z } from "zod";

export const usStates = [
  "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD",
  "MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC",
  "SD","TN","TX","UT","VT","VA","WA","WV","WI","WY","DC",
] as const;

export const customerInfoSchema = z.object({
  email: z.string().email("Enter a valid email address"),
  firstName: z.string().min(1, "First name is required").max(80),
  lastName: z.string().min(1, "Last name is required").max(80),
  phone: z.string().min(7, "Enter a valid phone number").max(30),
});

export const addressSchema = z.object({
  line1: z.string().min(1, "Address is required").max(120),
  line2: z.string().max(120).optional().or(z.literal("")),
  city: z.string().min(1, "City is required").max(80),
  state: z.enum(usStates),
  zip: z.string().regex(/^\d{5}(-\d{4})?$/, "Enter a valid ZIP code"),
  country: z.literal("United States"),
});

export const checkoutSchema = z
  .object({
    customer: customerInfoSchema,
    shipping: addressSchema,
    billingSameAsShipping: z.boolean(),
    billing: addressSchema.optional(),
    shippingMethodId: z.string().min(1, "Select a shipping method"),
    termsAccepted: z.boolean().refine((value) => value === true, {
      message: "You must accept the Terms and Conditions",
    }),
    privacyAcknowledged: z.boolean().refine((value) => value === true, {
      message: "You must acknowledge the Privacy Policy",
    }),
    marketingConsent: z.boolean(),
  })
  .superRefine((data, ctx) => {
    if (!data.billingSameAsShipping && !data.billing) {
      ctx.addIssue({ code: "custom", message: "Billing address is required", path: ["billing"] });
    }
  });

export type CheckoutFormValues = z.infer<typeof checkoutSchema>;
