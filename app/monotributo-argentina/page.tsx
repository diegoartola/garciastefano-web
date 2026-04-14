import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Monotributo 2026 Argentina: categorías, costos y guía completa",
  description:
    "Guía completa de monotributo en Argentina: categorías actualizadas, cuánto se paga, cómo inscribirse y cuándo conviene pasar a responsable inscripto.",
};

export default function Page() {
  return (
    <main className="px-4 py-16 md:px-6 md:py-20">
      <div className="mx-auto max-w-3xl">
        {/* HEADER */}
        <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">
          Guía práctica
        </p>

        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
          Monotributo en Argentina: guía completa 2026
        </h1>

        <p className="mt-4 text-base leading-7 text-slate-600">
          Te explicamos de forma clara qué es el monotributo, cuánto se paga,
          cómo inscribirse y cuándo conviene cambiar de régimen.
        </p>

        {/* SECCIÓN 1 */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-slate-900">
            ¿Qué es el monotributo?
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            El monotributo es un régimen simplificado en Argentina que permite
            unificar impuestos y aportes en un solo pago mensual. Está orientado
            a pequeños contribuyentes, profesionales independientes y comercios.
          </p>
        </section>

        {/* SECCIÓN 2 */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-900">
            ¿Cuánto se paga?
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            El monto depende de la categoría en la que te encuentres. Incluye:
          </p>

          <ul className="mt-3 list-disc pl-5 text-sm text-slate-600">
            <li>Impuesto integrado</li>
            <li>Aporte jubilatorio</li>
            <li>Obra social</li>
          </ul>
        </section>

        {/* SECCIÓN 3 */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-900">
            ¿Cómo inscribirse?
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            La inscripción se realiza a través de AFIP con clave fiscal. Es
            importante elegir correctamente la categoría según facturación,
            actividad y superficie.
          </p>
        </section>

        {/* SECCIÓN 4 */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-900">
            ¿Cuándo conviene pasar a Responsable Inscripto?
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            Cuando superás los límites del monotributo o necesitás trabajar con
            empresas que requieren facturación con IVA, puede ser necesario
            cambiar de régimen.
          </p>
        </section>

        {/* CTA FINAL */}
        <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center">
          <h3 className="text-lg font-semibold text-slate-900">
            ¿Necesitás ayuda con tu situación?
          </h3>

          <p className="mt-2 text-sm text-slate-600">
            Podemos asesorarte para elegir la mejor opción según tu actividad.
          </p>

          <a
            href="https://wa.me/5492215035412?text=Hola,%20quiero%20consultar%20por%20monotributo"
            target="_blank"
            className="mt-4 inline-block rounded-2xl bg-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800"
          >
            Consultar por WhatsApp
          </a>
        </div>
        <p className="mt-6 text-sm text-slate-500">
          También brindamos asesoramiento contable en
          <a
            href="/estudio-contable-las-flores"
            className="ml-1 font-medium text-blue-600 hover:underline"
          >
            Las Flores
          </a>
          .
        </p>
      </div>
    </main>
  );
}
