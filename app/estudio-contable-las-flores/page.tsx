import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Estudio contable en Las Flores | Asesoramiento integral",
  description:
    "Estudio contable en Las Flores para profesionales, comercios y pymes. Monotributo, ARBA, impuestos y asesoramiento contable con atención clara y personalizada.",
};

export default function LasFloresPage() {
  return (
    <main className="px-4 py-16 md:px-6 md:py-20">
      <div className="mx-auto max-w-4xl">
        <p className="text-[11px] uppercase tracking-[0.2em] text-blue-700">
          Las Flores · Estudio contable
        </p>

        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
          Estudio contable en Las Flores con atención clara, cercana y
          profesional
        </h1>

        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
          En García Stefano acompañamos a profesionales, comercios y pymes de
          Las Flores con asesoramiento contable, impositivo y administrativo.
          Trabajamos con una mirada práctica y ordenada para ayudarte a resolver
          tu situación fiscal sin vueltas.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href="https://wa.me/5492215035412?text=Hola,%20quiero%20asesoramiento%20contable%20en%20Las%20Flores"
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
          Atención en Las Flores, Provincia de Buenos Aires y modalidad online.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <p className="text-base font-semibold text-slate-900">
              Atención personalizada
            </p>
            <p className="mt-1 text-sm leading-6 text-slate-600">
              Cada consulta se analiza de forma concreta y con seguimiento real.
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
              Buscamos ordenar, resolver y acompañar tu gestión.
            </p>
          </div>
        </div>
        <section className="mt-12">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-semibold text-slate-900">
              Atención con discreción y confidencialidad
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Sabemos que en muchos casos la información contable, impositiva y
              económica requiere un manejo reservado. Por eso trabajamos con un
              enfoque basado en la discreción, la confidencialidad y el respeto
              por cada situación particular.
            </p>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Cada consulta se trata de forma profesional y privada, generando
              un espacio de confianza donde podés plantear tu situación con
              tranquilidad.
            </p>
          </div>
        </section>
        <section className="mt-12">
          <h2 className="text-xl font-semibold text-slate-900">
            ¿Qué podés resolver con nuestro estudio contable en Las Flores?
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            Brindamos asesoramiento para quienes necesitan resolver temas
            impositivos, ordenar su situación fiscal o mejorar su organización
            contable y administrativa.
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
            Servicios contables e impositivos en Las Flores
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
                Inscripción, regularización y acompañamiento para actividades en
                Provincia de Buenos Aires.
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
                Responsable inscripto
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
            Contabilidad y balances para empresas (servicio avanzado)
          </h2>
          <p className="mt-2 text-xs text-slate-500">
            Orientado a empresas que requieren mayor nivel de seguimiento y
            organización.
          </p>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            También brindamos servicios contables orientados a empresas que
            requieren información clara y ordenada para la toma de decisiones.
          </p>

          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-600">
            <li>✔ Preparación de balances</li>
            <li>✔ Estados contables</li>
            <li>✔ Análisis de información financiera</li>
            <li>✔ Organización contable integral</li>
          </ul>

          <p className="mt-4 text-sm leading-6 text-slate-600">
            Este tipo de servicio está orientado a clientes que necesitan un
            mayor nivel de seguimiento, orden y respaldo profesional.
          </p>

          <div className="mt-6">
            <a
              href="https://wa.me/5492215035412?text=Hola,%20quiero%20asesoramiento%20contable%20para%20empresa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-2xl bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
            >
              Consultar por balances
            </a>
          </div>
        </section>
        <section className="mt-12">
          <h2 className="text-xl font-semibold text-slate-900">
            ¿Por qué elegirnos?
          </h2>

          <div className="mt-4 space-y-4 text-sm leading-6 text-slate-600">
            <p>
              Trabajamos con una mirada integral, priorizando la claridad, la
              cercanía y el acompañamiento continuo. Nuestro objetivo es que
              cada cliente entienda su situación y pueda tomar decisiones con
              respaldo profesional.
            </p>

            <p>
              Sabemos que en muchos casos no solo importa resolver la parte
              fiscal, sino también contar con un espacio de atención ordenado,
              cómodo y confiable. Por eso ofrecemos un trato personalizado y una
              modalidad de trabajo flexible, tanto presencial como online.
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
                ¿Atienden solo en Las Flores?
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                No. Además de trabajar con clientes de Las Flores, también
                brindamos atención en otras localidades de la Provincia de
                Buenos Aires y en modalidad online.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-slate-900">
                ¿Puedo consultar por WhatsApp?
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Sí. Es una de las formas más rápidas de iniciar el contacto y
                contarnos tu situación para orientarte.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-slate-900">
                ¿Trabajan con monotributistas y pymes?
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Sí. Asesoramos a monotributistas, responsables inscriptos,
                profesionales, comercios y pequeñas empresas.
              </p>
            </div>
          </div>
        </section>

        <div className="mt-14 rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center">
          <h2 className="text-2xl font-semibold text-slate-900">
            ¿Necesitás asesoramiento contable en Las Flores?
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            Escribinos y te damos una primera orientación para entender tu caso
            y definir la mejor forma de avanzar.
          </p>

          <a
            href="https://wa.me/5492215035412?text=Hola,%20quiero%20asesoramiento%20contable%20en%20Las%20Flores"
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
          Si también buscás atención en otra localidad, podés ver nuestra página
          de{" "}
          <a
            href="/estudio-contable-la-plata"
            className="font-medium text-blue-600 hover:underline"
          >
            estudio contable en La Plata
          </a>
          .
        </p>
        <section className="mt-12">
          <p className="text-sm text-slate-500">
            Si querés profundizar, también podés leer nuestras guías sobre{" "}
            <a
              href="/monotributo-argentina"
              className="font-medium text-blue-600 hover:underline"
            >
              monotributo
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
              responsable inscripto vs monotributo
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
