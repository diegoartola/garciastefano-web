import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Estudio contable en La Plata | Asesoramiento integral",
  description:
    "Estudio contable en La Plata para profesionales, pymes y empresas. Monotributo, ARBA, impuestos y asesoramiento contable integral con atención clara y personalizada.",
};

export default function Page() {
  return (
    <main className="px-4 py-16 md:px-6 md:py-20">
      <div className="mx-auto max-w-4xl">
        <p className="text-[11px] uppercase tracking-[0.2em] text-blue-700">
          La Plata · Estudio contable
        </p>

        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
          Estudio contable en La Plata con atención clara, cercana y profesional
        </h1>

        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
          En García Stefano acompañamos a profesionales, comercios, pymes y
          empresas con asesoramiento contable, impositivo y administrativo.
          Trabajamos con una mirada práctica, ordenada y orientada a resolver
          situaciones reales sin vueltas.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href="https://wa.me/5492215035412?text=Hola,%20quiero%20asesoramiento%20contable%20en%20La%20Plata"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-2xl bg-blue-700 px-6 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800"
          >
            Consulta gratis por WhatsApp
          </a>

          <a
            href="#servicios"
            className="inline-block rounded-2xl border border-slate-300 bg-white px-6 py-3 text-center text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
          >
            Ver servicios
          </a>
        </div>

        <p className="mt-3 text-sm text-slate-500">
          Atención en La Plata, Provincia de Buenos Aires y modalidad online.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <p className="text-base font-semibold text-slate-900">
              Atención personalizada
            </p>
            <p className="mt-1 text-sm leading-6 text-slate-600">
              Cada caso se analiza de forma concreta y con seguimiento real.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <p className="text-base font-semibold text-slate-900">
              Respuesta clara
            </p>
            <p className="mt-1 text-sm leading-6 text-slate-600">
              Explicamos lo importante sin complejidad innecesaria.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <p className="text-base font-semibold text-slate-900">
              Enfoque práctico
            </p>
            <p className="mt-1 text-sm leading-6 text-slate-600">
              Buscamos resolver, ordenar y acompañar tu gestión.
            </p>
          </div>
        </div>

        <section className="mt-12">
          <h2 className="text-xl font-semibold text-slate-900">
            ¿Qué podés resolver con nuestro estudio contable en La Plata?
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            Brindamos asesoramiento para quienes necesitan resolver su situación
            impositiva o mejorar su organización contable y administrativa.
          </p>

          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-600">
            <li>✔ Alta y gestión de monotributo</li>
            <li>✔ Recategorización y seguimiento mensual</li>
            <li>✔ Ingresos Brutos ARBA</li>
            <li>✔ Liquidación de impuestos</li>
            <li>✔ Asesoramiento para responsables inscriptos</li>
            <li>✔ Organización administrativa para profesionales y pymes</li>
          </ul>
        </section>

        <section id="servicios" className="mt-12">
          <h2 className="text-xl font-semibold text-slate-900">
            Servicios contables e impositivos
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="text-base font-semibold text-slate-900">
                Monotributo
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Alta, recategorización, seguimiento y asesoramiento para evitar
                errores con AFIP y ARBA.
              </p>
              <a
                href="/monotributo-argentina"
                className="mt-3 inline-block text-sm font-semibold text-blue-700 hover:underline"
              >
                Ver guía de monotributo →
              </a>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="text-base font-semibold text-slate-900">
                Ingresos Brutos ARBA
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Inscripción, análisis de actividad, regularización y
                acompañamiento en Provincia de Buenos Aires.
              </p>
              <a
                href="/ingresos-brutos-arba"
                className="mt-3 inline-block text-sm font-semibold text-blue-700 hover:underline"
              >
                Ver guía de ARBA →
              </a>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="text-base font-semibold text-slate-900">
                Responsables inscriptos
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Evaluación de régimen, obligaciones fiscales y acompañamiento
                para una gestión ordenada.
              </p>
              <a
                href="/responsable-inscripto-vs-monotributo"
                className="mt-3 inline-block text-sm font-semibold text-blue-700 hover:underline"
              >
                Ver guía de responsable inscripto →
              </a>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="text-base font-semibold text-slate-900">
                Asesoramiento integral
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Acompañamiento contable, impositivo y administrativo para
                profesionales, comercios y pymes.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold text-slate-900">
            ¿Por qué elegir un estudio contable en La Plata con atención
            personalizada?
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            Porque más allá del cumplimiento fiscal, muchas veces lo que hace la
            diferencia es tener claridad, seguimiento y una respuesta concreta a
            tiempo. Nuestro enfoque busca justamente eso: acompañarte para que
            entiendas tu situación y tomes decisiones con respaldo profesional.
          </p>

          <div className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
            <p>
              Trabajamos con personas que necesitan resolver temas de
              monotributo, ARBA, impuestos y organización contable sin sentirse
              perdidas en el proceso.
            </p>
            <p>
              También acompañamos a clientes de otras localidades de la
              Provincia de Buenos Aires a través de una modalidad de atención
              online, clara y ordenada.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold text-slate-900">
            Preguntas frecuentes
          </h2>

          <div className="mt-5 space-y-6">
            <div>
              <h3 className="text-base font-semibold text-slate-900">
                ¿Atienden solo en La Plata?
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                No. Si bien la base del estudio está vinculada a La Plata,
                también brindamos atención en otras localidades de la Provincia
                de Buenos Aires y en modalidad online.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-slate-900">
                ¿Puedo hacer la consulta por WhatsApp?
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Sí. Es una de las formas más rápidas de iniciar el contacto y
                contarnos tu situación para orientarte.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-slate-900">
                ¿Trabajan con monotributistas y responsables inscriptos?
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Sí. Asesoramos tanto a monotributistas como a responsables
                inscriptos, además de profesionales, comercios y pymes.
              </p>
            </div>
          </div>
        </section>

        <div className="mt-14 rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center">
          <h2 className="text-2xl font-semibold text-slate-900">
            ¿Necesitás resolver tu situación contable?
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            Escribinos y te damos una primera orientación para entender tu caso
            y definir la mejor forma de avanzar.
          </p>

          <a
            href="https://wa.me/5492215035412?text=Hola,%20quiero%20asesoramiento%20contable%20en%20La%20Plata"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-2xl bg-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800"
          >
            Hablar por WhatsApp ahora
          </a>

          <p className="mt-3 text-sm text-slate-500">
            Primera orientación sin compromiso.
          </p>
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
