import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Monotributo vs Responsable Inscripto | ¿Cuál conviene en Buenos Aires?",
  description:
    "Diferencias entre monotributo y responsable inscripto: impuestos, costos y cuándo conviene cambiar según tu actividad en Argentina.",
};

export default function Page() {
  return (
    <main className="px-4 py-16 md:px-6 md:py-20">
      <div className="mx-auto max-w-3xl">
        {/* HERO */}
        <p className="text-[11px] uppercase tracking-[0.2em] text-blue-700">
          Comparativa · Regímenes impositivos
        </p>

        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
          Monotributo vs Responsable Inscripto: ¿cuál te conviene?
        </h1>

        <p className="mt-4 text-base leading-7 text-slate-600">
          Si estás creciendo o tenés dudas sobre tu situación fiscal, elegir el
          régimen correcto es clave. Te explicamos las diferencias y en qué
          casos conviene cambiar, según tu actividad y facturación.
        </p>

        <div className="mt-6">
          <a
            href="https://wa.me/5492215035412?text=Hola,%20quiero%20saber%20si%20me%20conviene%20monotributo%20o%20responsable%20inscripto"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-2xl bg-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800"
          >
            Consultar mi caso por WhatsApp
          </a>
        </div>

        <p className="mt-2 text-sm text-slate-500">
          Respuesta rápida · Evaluación sin compromiso
        </p>

        {/* DIFERENCIAS */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-slate-900">
            Principales diferencias
          </h2>

          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-600">
            <li>✔ El monotributo tiene un pago mensual fijo.</li>
            <li>
              ✔ El responsable inscripto tributa IVA y Ganancias según
              actividad.
            </li>
            <li>✔ En RI hay mayor carga administrativa y contable.</li>
            <li>✔ El monotributo tiene límites de facturación.</li>
            <li>✔ En RI no hay límites, pero sí más obligaciones.</li>
          </ul>
        </section>

        {/* CUANDO CAMBIAR */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-slate-900">
            ¿Cuándo conviene pasar a Responsable Inscripto?
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            El cambio puede ser conveniente cuando superás los límites del
            monotributo o cuando tu actividad requiere facturar con IVA. También
            es importante evaluar costos, clientes y estructura antes de tomar
            la decisión.
          </p>

          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-600">
            <li>✔ Superás el tope de facturación del monotributo</li>
            <li>✔ Trabajás con empresas que requieren IVA</li>
            <li>✔ Tenés costos que podés deducir</li>
            <li>✔ Tu actividad está creciendo</li>
          </ul>
        </section>

        {/* COSTOS */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-slate-900">
            Costos y obligaciones a considerar
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            En el régimen de responsable inscripto, además de IVA y Ganancias,
            se deben considerar honorarios contables, presentación de
            declaraciones y mayor organización administrativa.
          </p>
        </section>

        {/* ERRORES */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-slate-900">
            Errores frecuentes al cambiar de régimen
          </h2>

          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-600">
            <li>✔ Esperar a superar los límites sin planificar el cambio</li>
            <li>✔ No analizar el impacto impositivo real antes de cambiar</li>
            <li>✔ No considerar ingresos, gastos y clientes</li>
            <li>✔ Cambiar de régimen sin asesoramiento</li>
          </ul>
        </section>

        {/* CONTENIDO SEO */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-slate-900">
            ¿Qué régimen conviene elegir?
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            No hay una única respuesta. Depende de tu nivel de facturación, tipo
            de clientes, actividad y estructura de costos. En muchos casos, el
            cambio a responsable inscripto puede ser positivo si se hace de
            forma planificada.
          </p>
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
            y nuestra página de{" "}
            <a
              href="/estudio-contable-la-plata"
              className="font-medium text-blue-600 hover:underline"
            >
              estudio contable en La Plata
            </a>
            .
          </p>
        </section>

        {/* CTA FINAL */}
        <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center">
          <h3 className="text-lg font-semibold text-slate-900">
            ¿No sabés qué régimen te conviene?
          </h3>

          <p className="mt-2 text-sm text-slate-600">
            Analizamos tu situación y te recomendamos la mejor opción para tu
            actividad, evitando errores y costos innecesarios.
          </p>

          <a
            href="https://wa.me/5492215035412?text=Hola,%20quiero%20saber%20si%20me%20conviene%20ser%20responsable%20inscripto"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block rounded-2xl bg-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800"
          >
            Hablar por WhatsApp ahora
          </a>
        </div>

        {/* LAS FLORES */}
        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-5">
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
