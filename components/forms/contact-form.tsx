"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, contactTopics, type ContactFormValues } from "@/lib/validation/contact";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      orderNumber: "",
      topic: "Product question",
      message: "",
      consent: false,
    },
  });

  async function onSubmit(values: ContactFormValues) {
    setStatus("idle");
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const data = await res.json();
    if (!res.ok) {
      setStatus("error");
      setMessage(data.error || "Unable to send message");
      return;
    }
    setStatus("success");
    setMessage(data.message);
    form.reset({
      name: "",
      email: "",
      phone: "",
      orderNumber: "",
      topic: "Product question",
      message: "",
      consent: false,
    });
  }

  return (
    <form className="space-y-4 rounded-2xl border border-border bg-white p-5" onSubmit={form.handleSubmit(onSubmit)} noValidate>
      {Object.keys(form.formState.errors).length > 0 && (
        <div className="rounded-xl bg-red-50 p-3 text-sm text-error" role="alert">
          Please correct the highlighted fields.
        </div>
      )}
      <label className="block text-sm">
        <span className="mb-1 block font-medium">Name</span>
        <Input {...form.register("name")} />
        {form.formState.errors.name && <span className="text-error">{form.formState.errors.name.message}</span>}
      </label>
      <label className="block text-sm">
        <span className="mb-1 block font-medium">Email</span>
        <Input type="email" {...form.register("email")} />
        {form.formState.errors.email && <span className="text-error">{form.formState.errors.email.message}</span>}
      </label>
      <label className="block text-sm">
        <span className="mb-1 block font-medium">Phone (optional)</span>
        <Input {...form.register("phone")} />
      </label>
      <label className="block text-sm">
        <span className="mb-1 block font-medium">Order number (optional)</span>
        <Input {...form.register("orderNumber")} />
      </label>
      <label className="block text-sm">
        <span className="mb-1 block font-medium">Topic</span>
        <select className="h-11 w-full rounded-xl border border-border bg-white px-3" {...form.register("topic")}>
          {contactTopics.map((topic) => (
            <option key={topic} value={topic}>{topic}</option>
          ))}
        </select>
      </label>
      <label className="block text-sm">
        <span className="mb-1 block font-medium">Message</span>
        <Textarea {...form.register("message")} />
        {form.formState.errors.message && <span className="text-error">{form.formState.errors.message.message}</span>}
      </label>
      <label className="flex items-start gap-2 text-sm">
        <input type="checkbox" {...form.register("consent")} />
        <span>I consent to WB Groceries contacting me about this message.</span>
      </label>
      {form.formState.errors.consent && <p className="text-sm text-error">{form.formState.errors.consent.message}</p>}
      <Button type="submit" disabled={form.formState.isSubmitting}>
        {form.formState.isSubmitting ? "Sending..." : "Send message"}
      </Button>
      {status !== "idle" && (
        <p className={status === "success" ? "text-success" : "text-error"} role="status">{message}</p>
      )}
    </form>
  );
}
