import Image from "next/image";
import { getOfficialUpdates } from "./lib/getOfficialUpdates";
import ContactForm from "@/app/components/ContactForm";

export default async function Home() {
  const officialUpdates = await getOfficialUpdates();

  return (
    <main className="min-h-screen bg-white text-slate-800">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#inicio" className="flex items-center">
            <Image
              src="/logo-garcia-stefano.png"
              alt="García Stefano Estudio Contable Integral"
              width={230}
              height={80}
              priority
              style={{ width: "230px", height: "auto" }}
            />
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <a href="#servicios" className="transition hover:text-blue-700">
              Servicios
            </a>
            <a href="#autoridad" className="transition hover:text-blue-700">
              Por qué elegirnos
            </a>
            <a href="#clientes" className="transition hover:text-blue-700">
              Clientes
            </a>
            <a href="#nosotras" className="transition hover:text-blue-700">
              Estudio
            </a>
            <a href="#novedades" className="transition hover:text-blue-700">
              Novedades
            </a>
            <a href="#contacto" className="transition hover:text-blue-700">
              Contacto
            </a>
          </nav>
        </div>
      </header>

      <section
        id="inicio"
        className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.10),_transparent_32%),linear-gradient(to_bottom,_#ffffff,_#f8fbff)] px-6 pt-28 pb-20 md:pt-36 md:pb-28"
      >
        <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] [background-size:48px_48px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1fr_1.15fr] motion-safe:animate-[fadeUp_.7s_ease-out]">
          <div className="text-center lg:text-left">
            <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
              Estudio contable integral · La Plata
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-950 md:text-6xl md:leading-[1.05]">
              Respaldo contable e impositivo con nivel profesional y visión
              integral.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
              Acompañamos a profesionales, pymes, responsables inscriptos y
              estructuras empresariales con asesoramiento contable, impositivo y
              administrativo orientado a la claridad, el control y la toma de
              decisiones.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
              <a
                href="https://wa.me/5492215035412?text=Hola,%20quiero%20hacer%20una%20consulta%20contable"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-blue-700 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800"
              >
                Solicitar asesoramiento
              </a>

              <a
                href="#contacto"
                className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
              >
                Contacto
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                <p className="text-2xl font-bold text-slate-900">Integral</p>
                <p className="mt-1 text-sm text-slate-600">
                  Enfoque contable, impositivo y administrativo.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                <p className="text-2xl font-bold text-slate-900">Cercano</p>
                <p className="mt-1 text-sm text-slate-600">
                  Atención personalizada y seguimiento profesional.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                <p className="text-2xl font-bold text-slate-900">Confiable</p>
                <p className="mt-1 text-sm text-slate-600">
                  Respaldo profesional y comunicación clara.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[760px] rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_20px_70px_-20px_rgba(15,23,42,0.20)]">
              <div className="grid gap-6 lg:grid-cols-[0.95fr_1.25fr]">
                <div className="rounded-[24px] bg-[linear-gradient(135deg,#ffffff,#f1f6ff)] p-8 ring-1 ring-slate-100">
                  <Image
                    src="/logo-garcia-stefano.png"
                    alt="García Stefano Estudio Contable Integral"
                    width={620}
                    height={220}
                    priority
                    className="w-full"
                    style={{ height: "auto" }}
                  />

                  <div className="mt-8 grid gap-4">
                    <div className="rounded-2xl bg-white p-5 ring-1 ring-slate-100">
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
                        Enfoque
                      </p>
                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        Soluciones con criterio profesional, orden y visión de
                        largo plazo.
                      </p>
                    </div>

                    <div className="rounded-2xl bg-white p-5 ring-1 ring-slate-100">
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
                        Clientes
                      </p>
                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        Atención a profesionales, pymes y empresas que buscan
                        respaldo y confianza.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative min-h-[500px] overflow-hidden rounded-[24px] ring-1 ring-slate-100">
                  <Image
                    src="/hero-office.jpg"
                    alt="Oficina profesional del estudio"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(15,23,42,0.20),rgba(15,23,42,0.02))]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 px-6 py-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-4">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-slate-500">
              Posicionamiento
            </p>
            <p className="mt-2 text-lg font-semibold text-slate-900">
              Estudio contable integral
            </p>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-slate-500">
              Ubicación
            </p>
            <p className="mt-2 text-lg font-semibold text-slate-900">
              La Plata, Buenos Aires
            </p>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-slate-500">
              Atención
            </p>
            <p className="mt-2 text-lg font-semibold text-slate-900">
              Personalizada y cercana
            </p>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-slate-500">
              Foco
            </p>
            <p className="mt-2 text-lg font-semibold text-slate-900">
              Claridad, control y cumplimiento
            </p>
          </div>
        </div>
      </section>

      <section id="servicios" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-700">
              Servicios
            </span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950">
              Soluciones diseñadas para clientes que buscan respaldo profesional
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Brindamos acompañamiento contable e impositivo con una mirada
              práctica, clara y orientada a la organización de cada actividad.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <ServiceCard
              title="Monotributo"
              text="Alta, modificación de datos, recategorización, control de vencimientos y gestión mensual."
            />
            <ServiceCard
              title="Impuestos"
              text="Liquidación y presentación de impuestos nacionales, provinciales y municipales."
            />
            <ServiceCard
              title="Sueldos"
              text="Liquidación de haberes, cargas sociales y asistencia en tareas administrativas vinculadas."
            />
            <ServiceCard
              title="Responsables inscriptos"
              text="Seguimiento impositivo, registraciones y cumplimiento de obligaciones periódicas."
            />
            <ServiceCard
              title="Empresas"
              text="Asistencia contable integral para pymes y estructuras con necesidades administrativas más amplias."
            />
            <ServiceCard
              title="Asesoramiento profesional"
              text="Orientación clara para ordenar la situación fiscal, administrativa y contable."
            />
          </div>
        </div>
      </section>

      <section id="autoridad" className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-700">
              Por qué elegirnos
            </span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950">
              Un estudio enfocado en criterio, orden y acompañamiento
              profesional
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Nuestra propuesta combina atención cercana con una mirada
              profesional orientada a la organización, el cumplimiento y la
              claridad en la gestión.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <AuthorityCard
              title="Atención personalizada"
              text="Cada consulta recibe seguimiento directo, respuestas claras y acompañamiento profesional."
            />
            <AuthorityCard
              title="Visión integral"
              text="Abordamos lo contable, impositivo y administrativo de forma coordinada y ordenada."
            />
            <AuthorityCard
              title="Criterio profesional"
              text="Priorizamos previsibilidad, cumplimiento y decisiones con respaldo técnico."
            />
            <AuthorityCard
              title="Relación de confianza"
              text="Buscamos generar tranquilidad, cercanía y continuidad en el tiempo."
            />
          </div>

          <div className="mt-10 grid gap-6 rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-3">
            <div>
              <p className="text-3xl font-bold text-blue-700">Profesionales</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Acompañamiento claro para quienes necesitan respaldo confiable
                en su actividad diaria.
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold text-blue-700">Pymes</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Soporte contable e impositivo para estructuras que requieren
                orden y seguimiento constante.
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold text-blue-700">Empresas</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Enfoque profesional para organizaciones que valoran control,
                criterio y acompañamiento integral.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="clientes" className="bg-slate-950 px-6 py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
              Perfiles de clientes
            </span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight">
              Un estudio preparado para acompañar distintos niveles de actividad
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Trabajamos con una lógica profesional y ordenada, adaptable tanto
              a clientes individuales como a estructuras con mayor exigencia
              administrativa.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <PremiumBadge text="Profesionales independientes" />
            <PremiumBadge text="Emprendedores" />
            <PremiumBadge text="Monotributistas" />
            <PremiumBadge text="Responsables inscriptos" />
            <PremiumBadge text="Pymes" />
            <PremiumBadge text="Empresas con estructura administrativa" />
          </div>
        </div>
      </section>

      <section id="nosotras" className="bg-white px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-700">
              Estudio
            </span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950">
              Un enfoque basado en cercanía, criterio profesional y confianza
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-slate-600">
            <p>
              En García Stefano trabajamos con una mirada integral, combinando
              atención personalizada, seguimiento profesional y comunicación
              clara.
            </p>
            <p>
              Nuestro objetivo es acompañar a cada cliente con soluciones
              prácticas, brindando respaldo en lo contable, impositivo y
              administrativo.
            </p>
            <p>
              Apostamos a un servicio serio, ordenado y confiable, pensado para
              quienes valoran la claridad y el acompañamiento profesional.
            </p>
          </div>
        </div>
      </section>

      <section id="novedades" className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-700">
              Actualidad fiscal y normativa
            </span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950">
              Novedades relevantes de fuentes oficiales
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Seleccionamos información útil y confiable para mantener
              actualizados a clientes, profesionales y empresas.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {officialUpdates.map((item) => (
              <article
                key={item.title}
                className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
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

      <section id="contacto" className="relative overflow-hidden px-6 py-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/bg-contact.jpg')" }}
        />
        <div className="absolute inset-0 bg-white/60" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-700">
              Contacto
            </span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950">
              Estamos para ayudarte
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Podés escribirnos para realizar una consulta, solicitar
              asesoramiento o conocer mejor nuestros servicios. Te responderemos
              con un enfoque claro, profesional y personalizado.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[28px] bg-white/92 p-8 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.35)] ring-1 ring-slate-200 backdrop-blur-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-700">
                Información de contacto
              </p>

              <div className="mt-6 space-y-5 text-slate-700">
                <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-100">
                  <p className="font-semibold text-slate-950">Ubicación</p>
                  <p className="mt-1">La Plata, Buenos Aires, Argentina</p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-100">
                  <p className="font-semibold text-slate-950">Email</p>
                  <p className="mt-1">info@garciastefano.com.ar</p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-100">
                  <p className="font-semibold text-slate-950">WhatsApp</p>
                  <p className="mt-1">+54 9 221 5035412</p>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      <section className="bg-blue-700 px-6 py-20 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-100">
              Asesoramiento profesional
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              ¿Querés ordenar tu gestión contable e impositiva con respaldo
              profesional?
            </h2>
            <p className="mt-4 text-lg leading-8 text-blue-100">
              Contactanos para evaluar tu situación y acompañarte con una
              propuesta clara, cercana y orientada a resultados.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="https://wa.me/5492215035412?text=Hola,%20quisiera%20hacer%20una%20consulta"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-white px-6 py-3 text-center font-semibold text-blue-700 transition hover:bg-blue-50"
            >
              Escribinos por WhatsApp
            </a>

            <a
              href="#contacto"
              className="rounded-xl border border-white/30 px-6 py-3 text-center font-semibold text-white transition hover:bg-white/10"
            >
              Solicitar asesoramiento
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white px-6 py-10">
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
            <a
              href="https://wa.me/5492215035412?text=Hola,%20quiero%20hacer%20una%20consulta%20contable"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-blue-700"
            >
              WhatsApp
            </a>
            <a href="#inicio" className="transition hover:text-blue-700">
              Volver arriba
            </a>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/5492215035412?text=Hola,%20quiero%20hacer%20una%20consulta%20contable"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 rounded-full bg-green-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(34,197,94,0.35)] transition hover:scale-[1.02] hover:bg-green-600"
      >
        WhatsApp
      </a>
    </main>
  );
}

function ServiceCard({ title, text }: { title: string; text: string }) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-5 h-11 w-11 rounded-2xl bg-blue-50 ring-1 ring-blue-100" />
      <h3 className="text-xl font-semibold text-slate-950">{title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{text}</p>
    </article>
  );
}

function AuthorityCard({ title, text }: { title: string; text: string }) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <p className="text-lg font-semibold text-slate-950">{title}</p>
      <p className="mt-3 leading-7 text-slate-600">{text}</p>
    </article>
  );
}

function PremiumBadge({ text }: { text: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-slate-100 backdrop-blur-sm">
      {text}
    </div>
  );
}
