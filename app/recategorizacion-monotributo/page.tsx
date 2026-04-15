import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recategorización de monotributo | Cómo hacerla correctamente",
  description:
    "Guía sobre recategorización de monotributo en Argentina. Te ayudamos a entender cuándo corresponde, qué revisar y cómo evitar errores con AFIP.",
};

export default function Page() {
  return (
    <main className="px-4 py-16 md:px-6 md:py-20">
      <div className="mx-auto max-w-3xl">
        {/* HERO */}
        <p className="text-[11px] uppercase tracking-[0.2em] text-blue-700">
          Guía práctica · Monotributo
        </p>

        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
          Recategorización de monotributo: cómo hacerla correctamente
        </h1>

        <p className="mt-4 text-base leading-7 text-slate-600">
          La recategorización de monotributo es una instancia clave para evitar
          errores con AFIP. Te ayudamos a entender cuándo corresponde, qué datos
          revisar y cómo resolverla de forma ordenada.
        </p>

        <div className="mt-6">
          <a
            href="https://wa.me/5492215035412?text=Hola,%20quiero%20ayuda%20con%20la%20recategorizaci%C3%B3n%20de%20monotributo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-2xl bg-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800"
          >
            Consultar por WhatsApp
          </a>
        </div>

        <p className="mt-2 text-sm text-slate-500">
          Respuesta rápida · Sin compromiso
        </p>

        {/* PROBLEMA */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-slate-900">
            ¿Tenés dudas con la recategorización?
          </h2>

          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-600">
            <li>✔ No sabés si te corresponde cambiar de categoría</li>
            <li>✔ No tenés claro qué facturación tomar</li>
            <li>✔ Dudás sobre los parámetros que hay que revisar</li>
            <li>
              ✔ Querés evitar errores, recargos o inconsistencias con AFIP
            </li>
          </ul>
        </section>

        {/* CONTENIDO SEO */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-slate-900">
            ¿Qué es la recategorización de monotributo?
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            Es el proceso mediante el cual se revisa si la categoría del
            monotributo en la que estás inscripto sigue siendo correcta según tu
            actividad, facturación y otros parámetros del régimen. Hacerla bien
            es importante para mantener tu situación fiscal ordenada.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-900">
            ¿Cuándo corresponde recategorizarse?
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            La recategorización se realiza dos veces al año y depende de la
            evolución de tu actividad. Para saber si corresponde, hay que
            analizar ingresos brutos, alquileres devengados, superficie afectada
            y consumo eléctrico, entre otros datos.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-900">
            ¿Qué datos conviene revisar?
          </h2>

          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-600">
            <li>✔ Facturación de los últimos 12 meses</li>
            <li>✔ Consumo eléctrico</li>
            <li>✔ Superficie del local o espacio afectado</li>
            <li>✔ Monto de alquileres, si corresponde</li>
            <li>✔ Tipo de actividad desarrollada</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-900">
            Errores frecuentes al recategorizar
          </h2>

          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-600">
            <li>✔ Tomar mal la facturación del período</li>
            <li>✔ No considerar todos los parámetros exigidos</li>
            <li>✔ Mantenerse en una categoría incorrecta</li>
            <li>✔ Esperar al último momento y resolverlo con apuro</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-900">
            ¿Qué pasa si no recategorizo bien?
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            Una recategorización incorrecta puede generar inconsistencias con
            AFIP, diferencias en los importes a pagar y la necesidad de
            regularizar la situación más adelante. Por eso conviene revisarla
            con tiempo y con criterio.
          </p>
        </section>

        {/* INTERLINKING */}
        <section className="mt-10">
          <p className="text-sm text-slate-500">
            También podés ver nuestras guías sobre{" "}
            <a
              href="/monotributo-alta"
              className="font-medium text-blue-600 hover:underline"
            >
              alta de monotributo
            </a>
            ,{" "}
            <a
              href="/monotributo-argentina"
              className="font-medium text-blue-600 hover:underline"
            >
              monotributo en Argentina
            </a>{" "}
            y{" "}
            <a
              href="/responsable-inscripto-vs-monotributo"
              className="font-medium text-blue-600 hover:underline"
            >
              monotributo vs responsable inscripto
            </a>
            .
          </p>
        </section>

        {/* CTA FINAL */}
        <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center">
          <h3 className="text-lg font-semibold text-slate-900">
            ¿Necesitás ayuda con tu recategorización?
          </h3>

          <p className="mt-2 text-sm text-slate-600">
            Revisamos tu situación y te ayudamos a definir la categoría correcta
            para evitar errores con AFIP.
          </p>

          <a
            href="https://wa.me/5492215035412?text=Hola,%20quiero%20ayuda%20con%20la%20recategorizaci%C3%B3n%20de%20monotributo"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block rounded-2xl bg-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800"
          >
            Resolver por WhatsApp
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
