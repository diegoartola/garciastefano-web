import Image from "next/image";
import { getOfficialUpdates } from "./lib/getOfficialUpdates";
import ContactForm from "@/app/components/ContactForm";
import MobileMenu from "@/app/components/MobileMenu";
import TrackedWhatsAppLink from "@/app/components/TrackedWhatsAppLink";

export default async function Home() {
  const officialUpdates = await getOfficialUpdates();

  return (
    <main className="min-h-screen bg-white text-slate-800">
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6 md:py-4">
          <a href="#inicio" className="flex items-center">
            <Image
              src="/logo-garcia-stefano.png"
              alt="García Stefano Estudio Contable Integral"
              width={230}
              height={80}
              priority
              className="w-[170px] md:w-[230px]"
              style={{ height: "auto" }}
            />
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <a className="transition hover:text-blue-700" href="#servicios">
              Servicios
            </a>
            <a className="transition hover:text-blue-700" href="#autoridad">
              Por qué elegirnos
            </a>
            <a className="transition hover:text-blue-700" href="#clientes">
              Clientes
            </a>
            <a className="transition hover:text-blue-700" href="#nosotras">
              Estudio
            </a>
            <a className="transition hover:text-blue-700" href="#novedades">
              Novedades
            </a>
            <a className="transition hover:text-blue-700" href="#contacto">
              Contacto
            </a>
          </nav>

          <MobileMenu />
        </div>
      </header>

      <section
        id="inicio"
        className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.08),_transparent_30%),linear-gradient(to_bottom,_#ffffff,_#f8fbff)] scroll-mt-28 px-4 pt-12 pb-14 md:px-6 md:pt-28 md:pb-20"
      >
        <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] [background-size:40px_40px] md:[background-size:48px_48px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 md:gap-16 lg:grid-cols-[1fr_1.15fr] motion-safe:animate-[fadeUp_.7s_ease-out]">
          <div className="text-center lg:text-left">
            <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-[12px] font-medium text-blue-700 md:text-sm">
              Estudio contable integral · La Plata · Atención online
            </span>

            <h1 className="mx-auto mt-5 max-w-[13ch] text-[2.45rem] font-bold leading-[1.08] tracking-[-0.03em] text-slate-950 sm:max-w-none sm:text-5xl md:mt-6 md:text-5xl lg:mx-0 lg:text-6xl lg:leading-[1.05]">
              Asesoramiento contable claro, cercano y profesional.
            </h1>

            <p className="mx-auto mt-5 max-w-[38rem] text-[1.05rem] leading-8 text-slate-600 sm:text-lg md:mt-6 md:max-w-2xl md:text-xl lg:mx-0">
              Te ayudamos con monotributo, impuestos, Ingresos Brutos ARBA y
              organización contable. Atención profesional en La Plata, Las
              Flores y también de forma online.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <TrackedWhatsAppLink
                href="https://wa.me/5492215035412?text=Hola,%20quiero%20hacer%20una%20consulta%20contable"
                target="_blank"
                rel="noopener noreferrer"
                source="hero_primary_cta"
                className="rounded-2xl bg-blue-700 px-6 py-3.5 text-center font-semibold text-white shadow-lg shadow-blue-700/20 transition duration-300 hover:scale-[1.01] hover:bg-blue-800"
              >
                Consultar por WhatsApp
              </TrackedWhatsAppLink>

              <a
                href="#servicios"
                className="rounded-2xl border border-slate-300 bg-white px-6 py-3.5 text-center font-semibold text-slate-700 transition duration-300 hover:scale-[1.01] hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
              >
                Ver servicios
              </a>
            </div>

            <p className="mt-4 text-sm text-slate-500">
              Respondemos habitualmente dentro de las 24 hs hábiles.
            </p>

            <div className="mt-4 flex flex-col gap-2 text-sm text-slate-600 sm:flex-row sm:flex-wrap sm:gap-x-5 sm:gap-y-2 lg:justify-start">
              <span>✔ Atención personalizada</span>
              <span>✔ Respuesta clara y rápida</span>
              <span>✔ Primera orientación sin compromiso</span>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white/90 px-5 py-4 shadow-sm">
                <p className="text-base font-semibold text-slate-900 md:text-lg">
                  Integral
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Contable, impositivo y administrativo.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white/90 px-5 py-4 shadow-sm">
                <p className="text-base font-semibold text-slate-900 md:text-lg">
                  Cercano
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Atención personalizada y seguimiento.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white/90 px-5 py-4 shadow-sm">
                <p className="text-base font-semibold text-slate-900 md:text-lg">
                  Confiable
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Respaldo profesional y comunicación clara.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[760px] rounded-[28px] border border-slate-200 bg-white p-3 shadow-[0_20px_70px_-20px_rgba(15,23,42,0.20)] md:rounded-[32px] md:p-6">
              <div className="grid gap-4 lg:grid-cols-[0.95fr_1.25fr]">
                <div className="rounded-[24px] bg-[linear-gradient(135deg,#ffffff,#f4f8ff)] p-5 ring-1 ring-slate-100 md:p-8">
                  <Image
                    src="/logo-garcia-stefano.png"
                    alt="García Stefano Estudio Contable Integral"
                    width={620}
                    height={220}
                    priority
                    className="w-full"
                    style={{ height: "auto" }}
                  />

                  <div className="mt-5 grid gap-3 md:mt-8">
                    <div className="rounded-2xl bg-white p-4 ring-1 ring-slate-100">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-700">
                        Enfoque
                      </p>
                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        Soluciones con criterio profesional, orden y visión de
                        largo plazo.
                      </p>
                    </div>

                    <div className="rounded-2xl bg-white p-4 ring-1 ring-slate-100">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-700">
                        Clientes
                      </p>
                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        Atención a profesionales, pymes y empresas que buscan
                        respaldo y confianza.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative min-h-[280px] overflow-hidden rounded-[24px] ring-1 ring-slate-100 md:min-h-[420px] lg:min-h-[500px]">
                  <Image
                    src="/hero-office.jpg"
                    alt="Oficina profesional del estudio"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(15,23,42,0.18),rgba(15,23,42,0.02))]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 px-4 py-7 md:px-6">
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 xl:grid-cols-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.20em] text-slate-500 md:text-sm">
              Posicionamiento
            </p>
            <p className="mt-2 text-[15px] font-semibold text-slate-900 md:text-lg">
              Estudio contable integral
            </p>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.20em] text-slate-500 md:text-sm">
              Ubicación
            </p>
            <p className="mt-2 text-[15px] font-semibold text-slate-900 md:text-lg">
              La Plata, Buenos Aires
            </p>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.20em] text-slate-500 md:text-sm">
              Atención
            </p>
            <p className="mt-2 text-[15px] font-semibold text-slate-900 md:text-lg">
              Personalizada y cercana
            </p>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.20em] text-slate-500 md:text-sm">
              Foco
            </p>
            <p className="mt-2 text-[15px] font-semibold text-slate-900 md:text-lg">
              Claridad, control y cumplimiento
            </p>
          </div>
        </div>
      </section>

      <section
        id="servicios"
        className=" scroll-mt-28 px-4 py-16 md:px-6 md:py-20"
      >
        <div className="mx-auto max-w-5xl">
          <div className="max-w-xl">
            <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">
              Servicios
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              Acompañamiento contable, impositivo y administrativo
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Brindamos asesoramiento integral orientado a ordenar, controlar y
              acompañar la gestión diaria de profesionales, pymes y empresas.
            </p>
          </div>

          <div className="mt-10 divide-y divide-slate-200">
            <div className="py-6">
              <h3 className="text-lg font-semibold text-slate-900">
                Gestión contable
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Registración, análisis y seguimiento de la información contable
                para mantener claridad y orden en la gestión.
              </p>
            </div>

            <div className="py-6">
              <h3 className="text-lg font-semibold text-slate-900">
                Asesoramiento impositivo
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Liquidación de impuestos, planificación fiscal y cumplimiento de
                obligaciones ante organismos.
              </p>
            </div>

            <div className="py-6">
              <h3 className="text-lg font-semibold text-slate-900">
                Administración y soporte
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Acompañamiento en procesos administrativos, organización interna
                y mejora de circuitos de trabajo.
              </p>
            </div>

            <div className="py-6">
              <h3 className="text-lg font-semibold text-slate-900">
                Consultoría y seguimiento
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Análisis y asesoramiento continuo para la toma de decisiones con
                información confiable.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="autoridad"
        className="scroll-mt-28 border-t border-slate-200 bg-slate-50 px-4 py-16 md:px-6 md:py-20"
      >
        <div className="mx-auto max-w-5xl">
          <div className="max-w-xl">
            <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">
              Por qué elegirnos
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              Un enfoque basado en criterio, cercanía y confianza
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Trabajamos con una mirada integral que prioriza la claridad, la
              comunicación y el acompañamiento constante.
            </p>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-base font-semibold text-slate-900">
                Visión integral
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                No trabajamos por partes aisladas. Analizamos cada situación de
                forma global para dar respuestas coherentes y sostenibles.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-slate-900">
                Cercanía y seguimiento
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Mantenemos una relación directa con cada cliente, acompañando de
                forma continua y con disponibilidad real.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-slate-900">
                Claridad en la comunicación
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Explicamos cada aspecto de forma clara, evitando complejidades
                innecesarias y generando confianza en cada decisión.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-slate-900">
                Respaldo profesional
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Trabajo responsable, actualizado y alineado con las normativas
                vigentes.
              </p>
            </div>
          </div>
          <div className="mt-12">
            <a
              href="#contacto"
              className="inline-block rounded-2xl bg-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800"
            >
              Contactanos
            </a>
          </div>
        </div>
      </section>

      <section
        id="clientes"
        className="scroll-mt-28 px-4 py-16 md:px-6 md:py-20"
      >
        <div className="mx-auto max-w-5xl">
          <div className="max-w-xl">
            <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">
              Clientes
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              Acompañamos a profesionales y empresas en su gestión diaria
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Trabajamos con clientes que buscan orden, claridad y respaldo en
              su gestión contable e impositiva.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-sm font-semibold text-slate-900">
                Profesionales independientes
              </p>
              <p className="mt-2 text-sm text-slate-600">
                Acompañamiento integral en la gestión contable e impositiva.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-sm font-semibold text-slate-900">
                Pymes y comercios
              </p>
              <p className="mt-2 text-sm text-slate-600">
                Organización administrativa y seguimiento continuo.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-sm font-semibold text-slate-900">
                Responsables inscriptos
              </p>
              <p className="mt-2 text-sm text-slate-600">
                Cumplimiento fiscal y planificación impositiva.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-sm font-semibold text-slate-900">
                Empresas en crecimiento
              </p>
              <p className="mt-2 text-sm text-slate-600">
                Asesoramiento para la toma de decisiones y expansión.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="nosotras"
        className="scroll-mt-28 bg-white px-4 py-20 md:px-6 md:py-24"
      >
        <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-700">
              Estudio
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              Un estudio con base profesional, cercanía y mirada integral
            </h2>

            <div className="mt-6 inline-flex rounded-2xl border border-blue-100 bg-blue-50 px-4 py-3 text-sm font-medium text-blue-800">
              Graduadas en la Universidad Nacional de La Plata
            </div>
          </div>

          <div className="space-y-6 text-base leading-8 text-slate-600 md:text-lg">
            <p>
              En García Stefano trabajamos con una mirada integral, combinando
              atención personalizada, seguimiento profesional y comunicación
              clara.
            </p>
            <p>
              El estudio está conformado por profesionales graduadas en la
              Universidad Nacional de La Plata, con una propuesta enfocada en
              brindar respaldo contable, impositivo y administrativo con
              criterio, orden y cercanía.
            </p>
            <p>
              Nuestro objetivo es acompañar a cada cliente con soluciones
              prácticas y confiables, generando claridad en la gestión y un
              vínculo profesional sostenido en el tiempo.
            </p>

            <p className="pt-2 text-sm text-slate-500">
              También brindamos asesoramiento contable en
              <a
                href="/estudio-contable-las-flores"
                className="ml-1 font-medium text-blue-600 hover:underline"
              >
                Las Flores (Buenos Aires)
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <section
        id="novedades"
        className="scroll-mt-28 bg-slate-50 px-4 py-20 md:px-6 md:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-700">
              Actualidad fiscal y normativa
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              Novedades relevantes de fuentes oficiales
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">
              Seleccionamos información útil y confiable para mantener
              actualizados a clientes, profesionales y empresas.
            </p>
          </div>
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
            <p className="text-[11px] uppercase tracking-[0.2em] text-blue-700">
              Guía práctica
            </p>

            <h3 className="mt-2 text-lg font-semibold text-slate-900">
              Monotributo en Argentina: guía completa 2026
            </h3>

            <p className="mt-2 text-sm text-slate-600">
              Qué es, cuánto se paga, cómo inscribirse y cuándo conviene cambiar
              de régimen.
            </p>

            <a
              href="/monotributo-argentina"
              className="mt-3 inline-block text-sm font-semibold text-blue-700 hover:underline"
            >
              Leer guía completa →
            </a>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">
              Guía práctica
            </p>

            <h3 className="mt-2 text-lg font-semibold text-slate-900">
              Ingresos Brutos ARBA: guía práctica para Provincia de Buenos Aires
            </h3>

            <p className="mt-2 text-sm text-slate-600">
              Qué es, quién debe inscribirse, cómo realizar el alta y qué
              revisar antes de empezar.
            </p>

            <a
              href="/ingresos-brutos-arba"
              className="mt-3 inline-block text-sm font-semibold text-blue-700 hover:underline"
            >
              Leer guía completa →
            </a>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">
              Guía práctica
            </p>

            <h3 className="mt-2 text-lg font-semibold text-slate-900">
              Monotributo vs Responsable Inscripto: cuándo conviene cambiar
            </h3>

            <p className="mt-2 text-sm text-slate-600">
              Diferencias, costos y en qué casos conviene cambiar de régimen.
            </p>

            <a
              href="/responsable-inscripto-vs-monotributo"
              className="mt-3 inline-block text-sm font-semibold text-blue-700 hover:underline"
            >
              Leer guía completa →
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
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">
              Guía práctica
            </p>

            <h3 className="mt-2 text-lg font-semibold text-slate-900">
              Estudio contable en La Plata: asesoramiento para profesionales y
              pymes
            </h3>

            <p className="mt-2 text-sm text-slate-600">
              Atención contable e impositiva en La Plata, con acompañamiento
              claro, cercano y profesional.
            </p>

            <a
              href="/estudio-contable-la-plata"
              className="mt-3 inline-block text-sm font-semibold text-blue-700 hover:underline"
            >
              Leer guía completa →
            </a>
          </div>
          <div className="mt-12 grid gap-6 md:mt-14 md:grid-cols-2 xl:grid-cols-4">
            {officialUpdates.map((item) => (
              <article
                key={item.title}
                className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                    {item.source}
                  </span>
                </div>

                <p className="text-sm font-medium text-slate-500">
                  {item.date}
                </p>

                <h3 className="mt-3 text-xl font-semibold leading-8 text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-4 flex-1 leading-7 text-slate-600">
                  {item.summary}
                </p>

                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center font-semibold text-blue-700 transition hover:text-blue-800"
                >
                  Ver fuente oficial
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contacto"
        className="scroll-mt-28 relative overflow-hidden px-4 py-20 md:px-6 md:py-24"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/bg-contact.jpg')" }}
        />
        <div className="absolute inset-0 bg-white/75" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-700">
              Contacto
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              Hablemos sobre tu situación
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
              Si necesitás ayuda con monotributo, impuestos, Ingresos Brutos
              ARBA o gestión contable, escribinos. Te damos una primera
              orientación clara y sin compromiso.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[28px] bg-white/92 p-6 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.35)] ring-1 ring-slate-200 backdrop-blur-sm md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-700">
                Formas de contacto
              </p>

              <div className="mt-6 space-y-5 text-slate-700">
                <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-100">
                  <p className="font-semibold text-slate-950">Atención</p>
                  <p className="mt-1">
                    La Plata, Las Flores y consultas online en toda la
                    provincia.
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-100">
                  <p className="font-semibold text-slate-950">WhatsApp</p>
                  <p className="mt-1">+54 9 221 5035412</p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-100">
                  <p className="font-semibold text-slate-950">Email</p>
                  <p className="mt-1 break-all">info@garciastefano.com.ar</p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-100">
                  <p className="font-semibold text-slate-950">
                    Qué podés consultarnos
                  </p>
                  <p className="mt-1">
                    Monotributo, ARBA, impuestos, responsables inscriptos y
                    organización contable.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3">
                <TrackedWhatsAppLink
                  href="https://wa.me/5492215035412?text=Hola,%20quiero%20hacer%20una%20consulta%20contable"
                  target="_blank"
                  rel="noopener noreferrer"
                  source="hero_primary_cta"
                  className="rounded-2xl bg-blue-700 px-6 py-3.5 text-center font-semibold text-white shadow-lg shadow-blue-700/20 transition duration-300 hover:scale-[1.01] hover:bg-blue-800"
                >
                  Consultar por WhatsApp
                </TrackedWhatsAppLink>

                <a
                  href="mailto:info@garciastefano.com.ar"
                  className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-center font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                >
                  Enviar email
                </a>
              </div>

              <p className="mt-4 text-sm text-slate-500">
                Respondemos habitualmente dentro de las 24 hs hábiles.
              </p>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      <section className="px-4 py-20 md:px-6 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
            Ordená tu situación contable con respaldo profesional
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
            Si estás dando vueltas con monotributo, impuestos o Ingresos Brutos,
            podemos ayudarte a resolverlo de forma clara y ordenada.
          </p>

          <div className="mt-6 flex flex-col items-center gap-2 text-sm text-slate-600">
            <span>✔ Te explicamos todo sin vueltas</span>
            <span>✔ Evaluamos tu caso en concreto</span>
            <span>✔ Te proponemos la mejor opción</span>
          </div>

          <div className="mt-10">
            <TrackedWhatsAppLink
              href="https://wa.me/5492215035412?text=Hola,%20quiero%20hacer%20una%20consulta%20contable"
              target="_blank"
              rel="noopener noreferrer"
              source="hero_primary_cta"
              className="rounded-2xl bg-blue-700 px-6 py-3.5 text-center font-semibold text-white shadow-lg shadow-blue-700/20 transition duration-300 hover:scale-[1.01] hover:bg-blue-800"
            >
              Consultar por WhatsApp
            </TrackedWhatsAppLink>
          </div>

          <p className="mt-4 text-sm text-slate-500">
            Primera orientación sin compromiso.
          </p>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
            Estamos para acompañarte en tu gestión
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600">
            Si necesitás ordenar tu información, cumplir con tus obligaciones o
            tomar decisiones con mayor claridad, podemos ayudarte.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <TrackedWhatsAppLink
              href="https://wa.me/5492215035412?text=Hola,%20quiero%20hacer%20una%20consulta%20contable"
              target="_blank"
              rel="noopener noreferrer"
              source="hero_primary_cta"
              className="rounded-2xl bg-blue-700 px-6 py-3.5 text-center font-semibold text-white shadow-lg shadow-blue-700/20 transition duration-300 hover:scale-[1.01] hover:bg-blue-800"
            >
              Consultar por WhatsApp
            </TrackedWhatsAppLink>

            <a
              href="#contacto"
              className="rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
            >
              Ir a contacto
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white px-4 py-10 md:px-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-semibold text-slate-800">García Stefano</p>
            <p>Estudio Contable Integral · La Plata, Buenos Aires, Argentina</p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="mailto:info@garciastefano.com.ar"
              className="transition hover:text-blue-700"
            >
              info@garciastefano.com.ar
            </a>
            <TrackedWhatsAppLink
              href="https://wa.me/5492215035412?text=Hola,%20quiero%20hacer%20una%20consulta%20contable"
              target="_blank"
              rel="noopener noreferrer"
              source="hero_primary_cta"
              className="rounded-2xl bg-blue-700 px-6 py-3.5 text-center font-semibold text-white shadow-lg shadow-blue-700/20 transition duration-300 hover:scale-[1.01] hover:bg-blue-800"
            >
              Consultar por WhatsApp
            </TrackedWhatsAppLink>
            <a href="#inicio" className="transition hover:text-blue-700">
              Volver arriba
            </a>
          </div>
        </div>
      </footer>

      <TrackedWhatsAppLink
        href="https://wa.me/5492215035412?text=Hola,%20quiero%20hacer%20una%20consulta%20contable"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        source="floating_whatsapp"
        className="fixed bottom-4 right-4 z-50 flex items-center rounded-full bg-green-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(34,197,94,0.35)] transition duration-300 hover:scale-[1.04] hover:bg-green-600 md:bottom-6 md:right-6"
      >
        WhatsApp
      </TrackedWhatsAppLink>
    </main>
  );
}

function ServiceCard({ title, text }: { title: string; text: string }) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-5 h-11 w-11 rounded-2xl bg-blue-50 ring-1 ring-blue-100" />
      <h3 className="text-xl font-semibold text-slate-950">{title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{text}</p>
    </article>
  );
}

function AuthorityCard({ title, text }: { title: string; text: string }) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <p className="text-lg font-semibold text-slate-950">{title}</p>
      <p className="mt-3 leading-7 text-slate-600">{text}</p>
    </article>
  );
}

function PremiumBadge({ text }: { text: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-slate-100 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/10">
      {text}
    </div>
  );
}
