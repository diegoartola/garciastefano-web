import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Balances para empresas | Contabilidad y estados contables",
  description:
    "Asesoramiento contable para empresas: balances, estados contables, organización administrativa y análisis de información financiera con criterio profesional.",
};

export default function Page() {
  return (
    <main className="px-4 py-16 md:px-6 md:py-20">
      <div className="mx-auto max-w-4xl">
        <p className="text-[11px] uppercase tracking-[0.2em] text-blue-700">
          Empresas · Contabilidad y balances
        </p>

        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
          Balances para empresas y asesoramiento contable con respaldo
          profesional
        </h1>

        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
          Brindamos servicios contables orientados a empresas que necesitan
          información clara, orden administrativo y respaldo profesional para la
          toma de decisiones. Trabajamos con un enfoque serio, reservado y
          adaptado a cada estructura.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href="https://wa.me/5492215035412?text=Hola,%20quiero%20asesoramiento%20contable%20para%20empresa%20y%20balances"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-2xl bg-blue-700 px-6 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800"
          >
            Consultar por balances
          </a>

          <a
            href="#servicios"
            className="inline-block rounded-2xl border border-slate-300 bg-white px-6 py-3 text-center text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
          >
            Ver alcance
          </a>
        </div>

        <p className="mt-3 text-sm text-slate-500">
          Atención con discreción, orden y seguimiento profesional.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <p className="text-base font-semibold text-slate-900">Balances</p>
            <p className="mt-1 text-sm leading-6 text-slate-600">
              Preparación de balances y estados contables con criterio técnico.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <p className="text-base font-semibold text-slate-900">
              Orden contable
            </p>
            <p className="mt-1 text-sm leading-6 text-slate-600">
              Organización de información para mejorar control y seguimiento.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <p className="text-base font-semibold text-slate-900">
              Respaldo profesional
            </p>
            <p className="mt-1 text-sm leading-6 text-slate-600">
              Acompañamiento para decisiones con información clara y confiable.
            </p>
          </div>
        </div>

        <section className="mt-12">
          <h2 className="text-xl font-semibold text-slate-900">
            ¿Qué tipo de empresas pueden necesitar este servicio?
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            Este servicio está orientado a empresas que necesitan una gestión
            contable más estructurada, seguimiento profesional y documentación
            ordenada para cumplir obligaciones y tomar decisiones con mayor
            claridad.
          </p>

          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-600">
            <li>✔ Empresas con crecimiento sostenido</li>
            <li>✔ Comercios con administración más compleja</li>
            <li>✔ Estructuras que requieren balances y estados contables</li>
            <li>✔ Negocios que necesitan mayor control interno</li>
          </ul>
        </section>

        <section id="servicios" className="mt-12">
          <h2 className="text-xl font-semibold text-slate-900">
            Alcance del servicio
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="text-base font-semibold text-slate-900">
                Preparación de balances
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Elaboración de balances y documentación contable con un enfoque
                ordenado y profesional.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="text-base font-semibold text-slate-900">
                Estados contables
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Preparación y análisis de estados contables según la necesidad
                de cada empresa.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="text-base font-semibold text-slate-900">
                Organización administrativa
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Orden de documentación, circuitos administrativos y mejora del
                soporte interno para una gestión más clara.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="text-base font-semibold text-slate-900">
                Análisis de información financiera
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Lectura de información contable para acompañar la toma de
                decisiones y detectar necesidades de orden o mejora.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-semibold text-slate-900">
              Atención con discreción y confidencialidad
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Entendemos que la información económica, contable y administrativa
              de una empresa requiere un tratamiento reservado. Por eso
              trabajamos con un enfoque basado en la discreción, la
              confidencialidad y el cuidado de cada situación particular.
            </p>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Cada consulta se aborda con seriedad profesional, generando un
              espacio de confianza para evaluar necesidades, ordenar información
              y acompañar procesos sensibles con la reserva que corresponda.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold text-slate-900">
            ¿Por qué este servicio es importante?
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            Cuando una empresa crece, muchas veces ya no alcanza con resolver
            temas puntuales. Se vuelve necesario contar con información
            ordenada, seguimiento profesional y un marco contable que acompañe
            decisiones, obligaciones y proyecciones con más claridad.
          </p>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            Un servicio de balances y contabilidad para empresas no solo apunta
            al cumplimiento, sino también a generar estructura, previsibilidad y
            respaldo.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold text-slate-900">
            Preguntas frecuentes
          </h2>

          <div className="mt-5 space-y-6">
            <div>
              <h3 className="text-base font-semibold text-slate-900">
                ¿Trabajan solo con empresas grandes?
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                No. También acompañamos estructuras medianas o en crecimiento
                que necesitan orden contable, balances y seguimiento
                profesional.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-slate-900">
                ¿Puedo consultar aunque todavía no tenga todo organizado?
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Sí. Muchas veces el punto de partida es justamente ordenar la
                información y definir una forma de trabajo más clara.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-slate-900">
                ¿La consulta inicial puede ser reservada?
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Sí. Tratamos cada caso con discreción y confidencialidad,
                especialmente cuando involucra información sensible de la
                empresa.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <p className="text-sm text-slate-500">
            También podés ver nuestras páginas sobre{" "}
            <a
              href="/estudio-contable-la-plata"
              className="font-medium text-blue-600 hover:underline"
            >
              estudio contable en La Plata
            </a>
            ,{" "}
            <a
              href="/estudio-contable-las-flores"
              className="font-medium text-blue-600 hover:underline"
            >
              estudio contable en Las Flores
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

        <div className="mt-14 rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center">
          <h2 className="text-2xl font-semibold text-slate-900">
            ¿Necesitás respaldo contable para tu empresa?
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            Escribinos y evaluamos tu situación para acompañarte con un servicio
            contable serio, reservado y alineado con las necesidades de tu
            estructura.
          </p>

          <a
            href="https://wa.me/5492215035412?text=Hola,%20quiero%20asesoramiento%20contable%20para%20empresa%20y%20balances"
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
      </div>
    </main>
  );
}
