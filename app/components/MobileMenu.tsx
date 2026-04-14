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
    if (open) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const handleClose = () => setOpen(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
        aria-controls="mobile-menu-panel"
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
        className={`fixed inset-0 z-[100] md:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <button
          type="button"
          aria-label="Cerrar menú"
          onClick={handleClose}
          className={`absolute inset-0 bg-slate-950/45 backdrop-blur-[2px] transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />

        <aside
          id="mobile-menu-panel"
          className={`fixed inset-y-0 right-0 z-[110] flex w-[82%] max-w-[330px] flex-col border-l border-slate-200 bg-white shadow-[0_24px_60px_-24px_rgba(15,23,42,0.28)] transition-transform duration-300 ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ height: "100dvh" }}
        >
          <div className="shrink-0 border-b border-slate-200 bg-white px-5 pb-5 pt-10">
            <div className="flex items-start justify-between gap-4">
              <div className="flex min-w-0 items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <Image
                    src="/logo-garcia-stefano.png"
                    alt="García Stefano"
                    width={44}
                    height={44}
                    className="h-auto w-full object-contain p-1"
                    priority
                  />
                </div>

                <div className="min-w-0">
                  <p className="truncate text-[17px] font-semibold text-slate-950">
                    García Stefano
                  </p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-slate-500">
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

          <div className="flex-1 overflow-y-auto overscroll-contain bg-white px-5 py-3">
            <nav>
              <ul className="divide-y divide-slate-200">
                {links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={handleClose}
                      className="group flex items-center justify-between py-5 text-[17px] font-semibold text-slate-800 transition duration-300 hover:text-blue-700"
                    >
                      <span>{link.label}</span>
                      <span className="text-slate-300 transition duration-300 group-hover:text-blue-400">
                        ›
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="shrink-0 border-t border-slate-200 bg-slate-50 px-5 pb-8 pt-5">
            <a
              href="https://wa.me/5492215035412?text=Hola,%20quiero%20hacer%20una%20consulta%20contable"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClose}
              className="block rounded-2xl bg-blue-700 px-5 py-3.5 text-center font-semibold text-white shadow-lg shadow-blue-700/20 transition duration-300 hover:bg-blue-800"
            >
              Solicitar asesoramiento
            </a>

            <div className="mt-5 space-y-2 text-sm leading-6 text-slate-600">
              <p>La Plata, Buenos Aires</p>
              <p className="break-all">info@garciastefano.com.ar</p>
              <p>+54 9 221 5035412</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
