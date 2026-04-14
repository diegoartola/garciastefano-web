export const metadata = {
  title: "Estudio contable en Las Flores | García Stefano",
  description:
    "Estudio contable en Las Flores. Asesoramiento impositivo, monotributo, ingresos brutos y gestión contable para profesionales y pymes.",
};

export default function LasFloresPage() {
  return (
    <main className="px-6 py-16 max-w-5xl mx-auto">
      {/* HERO */}
      <section className="mb-12">
        <p className="text-[12px] uppercase tracking-[0.25em] text-blue-600 font-medium">
          LAS FLORES · ASESORAMIENTO CONTABLE
        </p>

        <h1 className="mt-4 text-3xl md:text-4xl font-semibold text-slate-900">
          Estudio contable en Las Flores con atención personalizada
        </h1>

        <p className="mt-4 text-slate-600 text-base md:text-lg max-w-2xl">
          Acompañamos a profesionales, comercios y pymes de Las Flores en su
          gestión contable e impositiva, con un enfoque claro, ordenado y
          orientado a resultados.
        </p>

        <div className="mt-6">
          <a
            href="https://wa.me/5492215035412?text=Hola%20quiero%20asesoramiento%20contable"
            className="inline-block rounded-2xl bg-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800"
          >
            Consultar por WhatsApp
          </a>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">
          Servicios contables en Las Flores
        </h2>

        <ul className="space-y-4 text-slate-600">
          <li>✔ Inscripción y gestión de monotributo</li>
          <li>✔ Asesoramiento impositivo integral</li>
          <li>✔ Ingresos Brutos ARBA</li>
          <li>✔ Liquidación de impuestos</li>
          <li>✔ Organización administrativa</li>
        </ul>
      </section>

      {/* DIFERENCIAL */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">
          ¿Por qué elegirnos?
        </h2>

        <div className="space-y-4 text-slate-600">
          <p>
            Trabajamos con una mirada integral, priorizando la claridad, la
            cercanía y el acompañamiento continuo.
          </p>

          <p>
            Nos enfocamos en que cada cliente entienda su situación y pueda
            tomar decisiones con respaldo profesional.
          </p>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="mt-16 text-center">
        <h3 className="text-2xl font-semibold text-slate-900">
          ¿Necesitás asesoramiento contable en Las Flores?
        </h3>

        <p className="mt-3 text-slate-600">
          Escribinos y evaluamos tu caso sin compromiso.
        </p>

        <div className="mt-6">
          <a
            href="https://wa.me/5492215035412?text=Hola%20quiero%20asesoramiento%20contable"
            className="inline-block rounded-2xl bg-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800"
          >
            Solicitar asesoramiento
          </a>
        </div>
      </section>
    </main>
  );
}
