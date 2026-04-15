"use client";

import { useState } from "react";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "ok" | "error" | "loading">(
    "idle",
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: data,
      });

      if (res.ok) {
        if (window.gtag) {
          window.gtag("event", "generate_lead", {
            event_category: "form",
            event_label: "main_contact_form",
            page_path: window.location.pathname,
            debug_mode: true,
          });

          window.gtag("event", "contact_form_submit", {
            event_category: "form",
            event_label: "main_contact_form",
            page_path: window.location.pathname,
            debug_mode: true,
          });
        }

        setStatus("ok");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-[28px] border border-slate-200 bg-white/95 p-8 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.35)] backdrop-blur-sm"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-700">
        Solicitar asesoramiento
      </p>

      <div className="mt-6 grid gap-5">
        <div>
          <label
            htmlFor="nombre"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Nombre
          </label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            required
            placeholder="Tu nombre"
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="tuemail@ejemplo.com"
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        <div>
          <label
            htmlFor="telefono"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Teléfono
          </label>
          <input
            id="telefono"
            name="telefono"
            type="text"
            placeholder="+54 9 ..."
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        <div>
          <label
            htmlFor="mensaje"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Mensaje
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows={5}
            required
            placeholder="Contanos brevemente en qué podemos ayudarte"
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-xl bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "loading" ? "Enviando..." : "Solicitar asesoramiento"}
        </button>

        <p className="text-xs text-slate-500">
          Respondemos habitualmente dentro de las 24 hs hábiles.
        </p>

        {status === "ok" && (
          <p className="font-medium text-green-600">
            Gracias por contactarnos. Nuestro equipo le responderá en breve.
          </p>
        )}

        {status === "error" && (
          <p className="font-medium text-red-600">
            No se pudo enviar el mensaje. Intentá nuevamente.
          </p>
        )}
      </div>
    </form>
  );
}
