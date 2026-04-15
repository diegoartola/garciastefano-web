import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Monotributo en La Plata | Alta, recategorización y asesoramiento",
  description:
    "Asesoramiento de monotributo en La Plata: alta en AFIP, recategorización, gestión mensual y orientación impositiva. Atención rápida por WhatsApp.",
};

export default function Page() {
  return (
    <main className="px-4 py-16 md:px-6 md:py-20">
      <div className="mx-auto max-w-3xl">
        <p className="text-[11px] uppercase tracking-[0.2em] text-blue-700">
          La Plata · Monotributo
        </p>

        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
          Monotributo en La Plata y en Provincia de Buenos Aires: alta,
          recategorización y gestión completa
        </h1>

        <p className="mt-4 text-base leading-7 text-slate-600">
          Te ayudamos a darte de alta en monotributo, recategorizarte
          correctamente y mantener tu situación fiscal al día sin
          complicaciones. Brindamos atención profesional, clara y rápida para
          personas que necesitan resolver su situación con AFIP y ARBA.
        </p>

        <div className="mt-6">
          <a
            href="https://wa.me/5492215035412?text=Hola,%20quiero%20asesoramiento%20por%20monotributo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-2xl bg-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800"
          >
            Consulta gratis por WhatsApp
          </a>
        </div>

        <p className="mt-2 text-sm text-slate-500">
          Respuesta rápida · Sin compromiso
        </p>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-slate-900">
            ¿Tenés dudas con el monotributo?
          </h2>

          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-600">
            <li>✔ No sabés en qué categoría te corresponde estar</li>
            <li>✔ Necesitás darte de alta en AFIP</li>
            <li>✔ Tenés dudas sobre facturación o topes</li>
            <li>✔ No sabés cuándo recategorizarte</li>
            <li>✔ Querés evitar errores con AFIP o ARBA</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-slate-900">
            ¿Cómo te ayudamos?
          </h2>

          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-600">
            <li>✔ Alta de monotributo</li>
            <li>✔ Recategorización</li>
            <li>✔ Asesoramiento impositivo</li>
            <li>✔ Gestión mensual y seguimiento</li>
            <li>✔ Inscripción en Ingresos Brutos (ARBA)</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-slate-900">
            ¿Qué es el monotributo?
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            El monotributo es un régimen simplificado en Argentina que permite
            unificar el pago de impuestos y aportes en una cuota mensual. Está
            orientado a pequeños contribuyentes, profesionales independientes,
            prestadores de servicios y comercios.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-900">
            ¿Cuándo conviene darse de alta?
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            Es necesario inscribirse cuando comenzás una actividad económica de
            manera habitual. Hacerlo bien desde el inicio evita problemas
            futuros con AFIP, errores en la categoría y desorden administrativo.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-900">
            ¿Cuándo hay que recategorizarse?
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            La recategorización se realiza dos veces al año y depende de tu
            facturación, superficie, consumo eléctrico y otros parámetros.
            Hacerla correctamente es importante para evitar recargos, multas o
            quedar mal encuadrado frente a AFIP.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-900">
            ¿Cuánto se paga en el monotributo?
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            El importe mensual depende de la categoría en la que te encuentres y
            se compone de distintos conceptos:
          </p>

          <ul className="mt-3 list-disc pl-5 text-sm text-slate-600">
            <li>Impuesto integrado</li>
            <li>Aporte jubilatorio</li>
            <li>Obra social</li>
          </ul>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            Además, según tu actividad y jurisdicción, puede corresponder la
            inscripción en Ingresos Brutos de ARBA.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-900">
            ¿Cuándo conviene pasar a Responsable Inscripto?
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            Puede ser necesario cambiar de régimen cuando superás los límites
            del monotributo o cuando necesitás trabajar con empresas que
            requieren facturación con IVA. Evaluarlo a tiempo ayuda a evitar
            saltos desordenados y costos inesperados.
          </p>

          <p className="mt-3 text-sm text-slate-500">
            También podés leer nuestra guía sobre{" "}
            <a
              href="/responsable-inscripto-vs-monotributo"
              className="font-medium text-blue-600 hover:underline"
            >
              monotributo vs responsable inscripto
            </a>
            .
          </p>
        </section>

        <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center">
          <h3 className="text-lg font-semibold text-slate-900">
            ¿Necesitás ayuda con tu monotributo?
          </h3>

          <p className="mt-2 text-sm text-slate-600">
            Te asesoramos según tu situación y te ayudamos a resolverlo rápido,
            con una mirada práctica y profesional.
          </p>

          <a
            href="https://wa.me/5492215035412?text=Hola,%20necesito%20ayuda%20con%20monotributo"
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
