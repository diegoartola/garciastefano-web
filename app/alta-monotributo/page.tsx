import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alta de monotributo en Argentina | Cómo inscribirse paso a paso",
  description:
    "Te ayudamos con el alta de monotributo en Argentina. Asesoramiento para inscribirte correctamente en AFIP y evitar errores desde el inicio.",
};

export default function Page() {
  return (
    <main className="px-4 py-16 md:px-6 md:py-20">
      <div className="mx-auto max-w-3xl">
        {/* HERO */}
        <p className="text-[11px] uppercase tracking-[0.2em] text-blue-700">
          Guía práctica · AFIP
        </p>

        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
          Alta de monotributo: cómo inscribirse correctamente
        </h1>

        <p className="mt-4 text-base leading-7 text-slate-600">
          Si estás por empezar una actividad, darte de alta en monotributo es el
          primer paso. Hacerlo bien desde el inicio evita errores,
          recategorizaciones incorrectas y problemas con AFIP o ARBA.
        </p>

        <div className="mt-6">
          <a
            href="https://wa.me/5492215035412?text=Hola,%20quiero%20darme%20de%20alta%20en%20monotributo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-2xl bg-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800"
          >
            Iniciar alta por WhatsApp
          </a>
        </div>

        <p className="mt-2 text-sm text-slate-500">
          Respuesta rápida · Sin compromiso
        </p>

        {/* PROBLEMA */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-slate-900">
            ¿Tenés dudas antes de darte de alta?
          </h2>

          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            <li>✔ No sabés qué categoría elegir</li>
            <li>✔ No entendés cómo funciona AFIP</li>
            <li>✔ Tenés dudas sobre facturación</li>
            <li>✔ No sabés si corresponde ARBA</li>
            <li>✔ Querés evitar errores desde el inicio</li>
          </ul>
        </section>

        {/* CONTENIDO SEO */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-slate-900">
            ¿Qué es el alta de monotributo?
          </h2>

          <p className="mt-3 text-sm text-slate-600 leading-6">
            Es el proceso mediante el cual una persona se inscribe en AFIP como
            pequeño contribuyente. Esto permite facturar legalmente, pagar
            impuestos simplificados y comenzar una actividad económica formal.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-900">
            Pasos para inscribirse en monotributo
          </h2>

          <ol className="mt-4 list-decimal pl-5 text-sm text-slate-600 space-y-2">
            <li>Obtener CUIT y clave fiscal</li>
            <li>Declarar actividad económica</li>
            <li>Elegir categoría de monotributo</li>
            <li>Definir obra social</li>
            <li>Registrar domicilio fiscal</li>
            <li>Confirmar inscripción en AFIP</li>
          </ol>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-900">
            ¿Qué errores hay que evitar?
          </h2>

          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>✔ Elegir mal la categoría</li>
            <li>✔ No considerar Ingresos Brutos (ARBA)</li>
            <li>✔ Declarar mal la actividad</li>
            <li>✔ No prever facturación futura</li>
          </ul>
        </section>

        {/* INTERLINKING */}
        <section className="mt-10">
          <p className="text-sm text-slate-500">
            También podés ver nuestras guías sobre{" "}
            <a
              href="/monotributo-argentina"
              className="font-medium text-blue-600 hover:underline"
            >
              monotributo en Argentina
            </a>
            ,{" "}
            <a
              href="/ingresos-brutos-arba"
              className="font-medium text-blue-600 hover:underline"
            >
              Ingresos Brutos ARBA
            </a>{" "}
            y{" "}
            <a
              href="/responsable-inscripto-vs-monotributo"
              className="font-medium text-blue-600 hover:underline"
            >
              cuándo pasar a responsable inscripto
            </a>
            .
          </p>
        </section>

        {/* CTA FINAL */}
        <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center">
          <h3 className="text-lg font-semibold text-slate-900">
            ¿Querés darte de alta sin errores?
          </h3>

          <p className="mt-2 text-sm text-slate-600">
            Te ayudamos a hacer todo el proceso correctamente desde el inicio.
          </p>

          <a
            href="https://wa.me/5492215035412?text=Hola,%20quiero%20darme%20de%20alta%20en%20monotributo"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block rounded-2xl bg-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800"
          >
            Empezar alta por WhatsApp
          </a>
        </div>

        {/* LOCAL */}
        <p className="mt-6 text-sm text-slate-500">
          Brindamos asesoramiento en{" "}
          <a
            href="/estudio-contable-la-plata"
            className="font-medium text-blue-600 hover:underline"
          >
            La Plata
          </a>{" "}
          y{" "}
          <a
            href="/estudio-contable-las-flores"
            className="font-medium text-blue-600 hover:underline"
          >
            Las Flores
          </a>
          .
        </p>
      </div>
    </main>
  );
}
