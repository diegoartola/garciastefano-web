import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ingresos Brutos ARBA: inscripción, alta y guía práctica",
  description:
    "Guía práctica sobre Ingresos Brutos ARBA: qué es, quién debe inscribirse, cómo dar el alta y qué tener en cuenta en Provincia de Buenos Aires.",
};

export default function Page() {
  return (
    <main className="px-4 py-16 md:px-6 md:py-20">
      <div className="mx-auto max-w-3xl">
        <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">
          Guía práctica
        </p>

        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
          Ingresos Brutos ARBA: guía práctica para Provincia de Buenos Aires
        </h1>

        <p className="mt-4 text-base leading-7 text-slate-600">
          Te explicamos de forma clara qué es Ingresos Brutos, quién debe
          inscribirse, cómo realizar el alta en ARBA y qué puntos conviene
          revisar antes de empezar.
        </p>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-slate-900">
            ¿Qué es Ingresos Brutos?
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            Ingresos Brutos es un impuesto provincial que grava el ejercicio
            habitual y a título oneroso de actividades económicas. En Provincia
            de Buenos Aires, la administración corresponde a ARBA.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-900">
            ¿Quién debe inscribirse?
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            La obligación depende de la actividad, la jurisdicción donde se
            desarrolla y la situación fiscal del contribuyente. En muchos casos,
            quienes inician una actividad económica en Provincia de Buenos Aires
            deben evaluar el alta en ARBA junto con su inscripción en AFIP.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-900">
            ¿Cómo se realiza el alta?
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            El procedimiento puede variar según si la actividad se desarrolla en
            una sola jurisdicción o en varias. Es importante analizar si
            corresponde un alta local en ARBA o un encuadre bajo Convenio
            Multilateral.
          </p>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            Antes de inscribirse, conviene validar correctamente la actividad,
            la modalidad de facturación y la jurisdicción alcanzada para evitar
            errores en el alta inicial.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-900">
            Qué conviene revisar antes de inscribirse
          </h2>

          <ul className="mt-3 list-disc pl-5 text-sm leading-6 text-slate-600">
            <li>Actividad económica declarada</li>
            <li>Jurisdicción o jurisdicciones alcanzadas</li>
            <li>Condición frente a AFIP</li>
            <li>Obligaciones mensuales y vencimientos</li>
            <li>Posibles regímenes de percepción o retención</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-900">
            Errores frecuentes
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            Uno de los errores más comunes es inscribirse en un régimen o
            jurisdicción incorrecta. También es frecuente omitir obligaciones
            posteriores al alta, como presentaciones periódicas o controles
            sobre retenciones y percepciones.
          </p>
        </section>

        <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center">
          <h3 className="text-lg font-semibold text-slate-900">
            ¿Necesitás ayuda con ARBA o Ingresos Brutos?
          </h3>

          <p className="mt-2 text-sm text-slate-600">
            Podemos ayudarte a revisar tu situación y orientarte en la
            inscripción o en el análisis de tus obligaciones fiscales.
          </p>

          <a
            href="https://wa.me/5492215035412?text=Hola,%20quiero%20consultar%20por%20Ingresos%20Brutos%20ARBA"
            target="_blank"
            rel="noopener noreferrer"
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
