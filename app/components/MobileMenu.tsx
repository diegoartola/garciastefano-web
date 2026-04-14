"use client";

import { useEffect, useState } from "react";

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
        className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-300 bg-white text-slate-700 shadow-sm transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
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
        className={`fixed inset-0 z-[60] transition duration-300 ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <button
          type="button"
          aria-label="Cerrar menú"
          onClick={handleClose}
          className="absolute inset-0 bg-slate-950/35 backdrop-blur-[2px]"
        />

        <div
          id="mobile-menu"
          className={`absolute right-0 top-0 flex h-full w-[86%] max-w-[360px] flex-col bg-white shadow-2xl transition duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
            <p className="text-sm font-semibold text-slate-900">
              García Stefano
            </p>

            <button
              type="button"
              aria-label="Cerrar menú"
              onClick={handleClose}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300 text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
            >
              ✕
            </button>
          </div>

          <nav className="flex flex-1 flex-col px-5 py-5">
            <div className="space-y-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleClose}
                  className="block rounded-2xl px-4 py-3 text-base font-medium text-slate-700 transition hover:bg-slate-50 hover:text-blue-700"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="mt-6 border-t border-slate-200 pt-6">
              <a
                href="https://wa.me/5492215035412?text=Hola,%20quiero%20hacer%20una%20consulta%20contable"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleClose}
                className="block rounded-xl bg-blue-700 px-5 py-3 text-center font-semibold text-white transition hover:bg-blue-800"
              >
                Solicitar asesoramiento
              </a>

              <a
                href="#contacto"
                onClick={handleClose}
                className="mt-3 block rounded-xl border border-slate-300 bg-white px-5 py-3 text-center font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
              >
                Ir a contacto
              </a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
