import { z } from "zod";

export const contactTopics = [
  "Product question",
  "Existing order",
  "Shipping",
  "Damaged product",
  "Incorrect product",
  "Return request",
  "Website problem",
  "Other",
] as const;

export const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Enter a valid email"),
  phone: z.string().max(30).optional().or(z.literal("")),
  orderNumber: z.string().max(40).optional().or(z.literal("")),
  topic: z.enum(contactTopics),
  message: z.string().min(10, "Please provide a bit more detail").max(4000),
  consent: z.boolean().refine((value) => value === true, {
    message: "Consent is required to send your message",
  }),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
