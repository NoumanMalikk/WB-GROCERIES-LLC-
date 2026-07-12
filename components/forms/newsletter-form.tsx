"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, marketingConsent: true }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Unable to join right now");
      setStatus("success");
      setMessage(data.message || "You are on the list.");
      setEmail("");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong");
    }
  }

  return (
    <form onSubmit={onSubmit} className="mx-auto flex max-w-lg flex-col gap-3 sm:flex-row">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <Input
        id="newsletter-email"
        type="email"
        required
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button type="submit" disabled={status === "loading"} className="sm:w-40">
        {status === "loading" ? "Joining..." : "Join the List"}
      </Button>
      {message && (
        <p className={`basis-full text-sm ${status === "error" ? "text-error" : "text-success"}`} role="status">
          {message}
        </p>
      )}
      <p className="basis-full text-xs text-muted">
        Marketing messages are optional. Submitting this form opts you in to the newsletter list only.
      </p>
    </form>
  );
}
