import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ingresos Brutos ARBA en Buenos Aires | Alta y asesoramiento",
  description:
    "Te ayudamos a inscribirte en Ingresos Brutos ARBA en Provincia de Buenos Aires. Alta, asesoramiento y gestión impositiva para monotributistas y responsables inscriptos.",
};

export default function Page() {
  return (
    <main className="px-4 py-16 md:px-6 md:py-20">
      <div className="mx-auto max-w-3xl">
        {/* HERO */}
        <p className="text-[11px] uppercase tracking-[0.2em] text-blue-700">
          Provincia de Buenos Aires · ARBA
        </p>

        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
          Ingresos Brutos ARBA: inscripción y asesoramiento en Buenos Aires
        </h1>

        <p className="mt-4 text-base leading-7 text-slate-600">
          Te ayudamos a inscribirte correctamente en Ingresos Brutos (ARBA),
          entender tus obligaciones y evitar errores que pueden generar multas o
          recargos.
        </p>

        <div className="mt-6">
          <a
            href="https://wa.me/5492215035412?text=Hola,%20necesito%20asesoramiento%20por%20Ingresos%20Brutos%20ARBA"
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
            ¿Tenés dudas con Ingresos Brutos?
          </h2>

          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-600">
            <li>✔ No sabés si tenés que inscribirte en ARBA</li>
            <li>✔ No entendés cómo funciona el impuesto</li>
            <li>✔ Tenés actividad en Provincia de Buenos Aires</li>
            <li>✔ No sabés qué régimen te corresponde</li>
            <li>✔ Querés evitar problemas o deudas con ARBA</li>
          </ul>
        </section>

        {/* SOLUCIÓN */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-slate-900">
            ¿Cómo te ayudamos?
          </h2>

          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-600">
            <li>✔ Inscripción en Ingresos Brutos (ARBA)</li>
            <li>✔ Análisis de tu actividad y jurisdicción</li>
            <li>✔ Asesoramiento impositivo integral</li>
            <li>✔ Regularización de situaciones pendientes</li>
            <li>✔ Acompañamiento en la gestión mensual</li>
          </ul>
        </section>

        {/* CONTENIDO SEO */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-slate-900">
            ¿Qué es Ingresos Brutos?
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            Ingresos Brutos es un impuesto provincial que grava el ejercicio
            habitual y a título oneroso de actividades económicas. En la
            Provincia de Buenos Aires, su administración corresponde a ARBA.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-900">
            ¿Quién debe inscribirse?
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            Deben inscribirse quienes desarrollan actividades económicas dentro
            de la Provincia de Buenos Aires. Esto incluye profesionales,
            comercios y prestadores de servicios, tanto monotributistas como
            responsables inscriptos.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-900">
            ¿Cómo se realiza el alta en ARBA?
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            El alta se realiza de forma online, pero requiere definir
            correctamente la actividad, la jurisdicción y el régimen aplicable.
            Un error en esta etapa puede generar problemas futuros en la
            liquidación del impuesto.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-900">
            ¿Qué conviene revisar antes de inscribirse?
          </h2>

          <ul className="mt-3 list-disc pl-5 text-sm text-slate-600">
            <li>Actividad económica declarada</li>
            <li>Jurisdicción donde operás</li>
            <li>Relación con AFIP (monotributo o responsable inscripto)</li>
            <li>Obligaciones mensuales</li>
            <li>Régimen de percepción o retención</li>
          </ul>
        </section>

        {/* LINK INTERNO */}
        <section className="mt-8">
          <p className="text-sm text-slate-500">
            También podés ver nuestras guías sobre{" "}
            <a
              href="/monotributo-argentina"
              className="font-medium text-blue-600 hover:underline"
            >
              monotributo
            </a>{" "}
            y{" "}
            <a
              href="/responsable-inscripto-vs-monotributo"
              className="font-medium text-blue-600 hover:underline"
            >
              responsable inscripto vs monotributo
            </a>
            . Si buscás atención profesional, también podés visitar nuestra
            página de{" "}
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
            ¿Necesitás ayuda con ARBA o Ingresos Brutos?
          </h3>

          <p className="mt-2 text-sm text-slate-600">
            Analizamos tu situación y te ayudamos a inscribirte correctamente y
            evitar problemas futuros.
          </p>

          <a
            href="https://wa.me/5492215035412?text=Hola,%20necesito%20ayuda%20con%20Ingresos%20Brutos%20ARBA"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block rounded-2xl bg-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800"
          >
            Hablar por WhatsApp ahora
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
