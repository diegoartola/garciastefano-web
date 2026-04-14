"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#autoridad", label: "Por qué elegirnos" },
  { href: "#clientes", label: "Clientes" },
  { href: "#nosotras", label: "Estudio" },
  { href: "#novedades", label: "Novedades" },
  { href: "#contacto", label: "Contacto" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleClose = () => setOpen(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-300 bg-white text-slate-700 shadow-sm transition duration-300 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
      >
        <span className="sr-only">Menú</span>

        <div className="relative h-5 w-5">
          <span
            className={`absolute left-0 top-1/2 h-0.5 w-5 -translate-y-[7px] rounded-full bg-current transition duration-300 ${
              open ? "translate-y-0 rotate-45" : ""
            }`}
          />
          <span
            className={`absolute left-0 top-1/2 h-0.5 w-5 rounded-full bg-current transition duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`absolute left-0 top-1/2 h-0.5 w-5 translate-y-[7px] rounded-full bg-current transition duration-300 ${
              open ? "translate-y-0 -rotate-45" : ""
            }`}
          />
        </div>
      </button>

      <div
        className={`fixed inset-0 z-[70] transition duration-300 ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <button
          type="button"
          aria-label="Cerrar menú"
          onClick={handleClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        <div
          id="mobile-menu"
          className={`absolute right-0 top-0 flex h-full w-[88%] max-w-[380px] flex-col bg-white shadow-[0_30px_80px_-20px_rgba(0,0,0,0.45)] transition duration-300 ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="border-b border-slate-200 px-5 pt-5 pb-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex min-w-0 items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <Image
                    src="/logo-garcia-stefano.png"
                    alt="García Stefano"
                    width={48}
                    height={48}
                    className="h-auto w-full object-contain p-1"
                    priority
                  />
                </div>

                <div className="min-w-0">
                  <p className="truncate text-base font-semibold text-slate-950">
                    García Stefano
                  </p>
                  <p className="mt-0.5 text-xs uppercase tracking-[0.18em] text-slate-500">
                    Estudio contable integral
                  </p>
                </div>
              </div>

              <button
                type="button"
                aria-label="Cerrar menú"
                onClick={handleClose}
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-slate-300 bg-white text-slate-700 shadow-sm transition duration-300 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
              >
                <span className="text-xl leading-none">×</span>
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-5 py-6">
            <nav className="space-y-2">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleClose}
                  className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-[17px] font-medium text-slate-700 transition duration-300 hover:bg-slate-50 hover:text-blue-700"
                >
                  <span>{link.label}</span>
                  <span className="text-slate-300">›</span>
                </a>
              ))}
            </nav>

            <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                Contacto rápido
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Escribinos para recibir asesoramiento contable, impositivo y
                administrativo.
              </p>

              <div className="mt-4 space-y-3">
                <a
                  href="https://wa.me/5492215035412?text=Hola,%20quiero%20hacer%20una%20consulta%20contable"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleClose}
                  className="block rounded-2xl bg-blue-700 px-5 py-3.5 text-center font-semibold text-white shadow-lg shadow-blue-700/20 transition duration-300 hover:bg-blue-800"
                >
                  Solicitar asesoramiento
                </a>

                <a
                  href="#contacto"
                  onClick={handleClose}
                  className="block rounded-2xl border border-slate-300 bg-white px-5 py-3.5 text-center font-semibold text-slate-700 transition duration-300 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                >
                  Ir a contacto
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
