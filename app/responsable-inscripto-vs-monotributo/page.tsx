import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Monotributo vs Responsable Inscripto: cuándo conviene cambiar",
  description:
    "Diferencias entre monotributo y responsable inscripto: impuestos, costos, ventajas y cuándo conviene cambiar de régimen en Argentina.",
};

export default function Page() {
  return (
    <main className="px-4 py-16 md:px-6 md:py-20">
      <div className="mx-auto max-w-3xl">
        <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">
          Guía práctica
        </p>

        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
          Monotributo vs Responsable Inscripto: cuándo conviene cambiar
        </h1>

        <p className="mt-4 text-base leading-7 text-slate-600">
          Analizamos las diferencias entre ambos regímenes, los costos y en qué
          situaciones conviene dejar el monotributo para pasar a responsable
          inscripto.
        </p>

        {/* DIFERENCIAS */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-slate-900">
            Principales diferencias
          </h2>

          <ul className="mt-4 list-disc pl-5 text-sm text-slate-600">
            <li>El monotributo tiene un pago fijo mensual.</li>
            <li>El responsable inscripto paga IVA y Ganancias.</li>
            <li>En RI hay mayor carga administrativa.</li>
            <li>El monotributo tiene límites de facturación.</li>
          </ul>
        </section>

        {/* CUANDO CAMBIAR */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-900">
            ¿Cuándo conviene cambiar a Responsable Inscripto?
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            Puede ser conveniente cuando superás los límites del monotributo,
            cuando necesitás trabajar con empresas que requieren facturación con
            IVA o cuando tu estructura de costos permite absorber el cambio.
          </p>
        </section>

        {/* COSTOS */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-900">
            Costos a considerar
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            En el régimen de responsable inscripto, además de impuestos como IVA
            y Ganancias, se deben considerar honorarios contables y mayor
            dedicación administrativa.
          </p>
        </section>

        {/* ERRORES */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-900">
            Errores frecuentes
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            Muchos contribuyentes esperan a superar los límites sin planificar
            el cambio o realizan el traspaso sin analizar el impacto impositivo.
          </p>
        </section>

        {/* CTA */}
        <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center">
          <h3 className="text-lg font-semibold text-slate-900">
            ¿No sabés qué régimen te conviene?
          </h3>

          <p className="mt-2 text-sm text-slate-600">
            Podemos analizar tu caso y recomendarte la mejor opción según tu
            actividad y facturación.
          </p>

          <a
            href="https://wa.me/5492215035412?text=Hola,%20quiero%20consultar%20si%20me%20conviene%20pasar%20a%20Responsable%20Inscripto"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block rounded-2xl bg-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800"
          >
            Consultar por WhatsApp
          </a>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">
            Guía práctica
          </p>

          <h3 className="mt-2 text-lg font-semibold text-slate-900">
            Estudio contable en Las Flores: asesoramiento para profesionales y
            pymes
          </h3>

          <p className="mt-2 text-sm text-slate-600">
            Atención contable e impositiva en Las Flores, con acompañamiento
            personalizado para profesionales, comercios y empresas.
          </p>

          <a
            href="/estudio-contable-las-flores"
            className="mt-3 inline-block text-sm font-semibold text-blue-700 hover:underline"
          >
            Leer guía completa →
          </a>
        </div>
      </div>
    </main>
  );
}
