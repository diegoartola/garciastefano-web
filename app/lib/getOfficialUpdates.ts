export type OfficialUpdate = {
  title: string;
  date: string;
  source: string;
  href: string;
  summary: string;
};

const fallbackUpdates: OfficialUpdate[] = [
  {
    title: "Ganancias y Bienes Personales 2025: aplicativo web habilitado",
    date: "17 marzo 2026",
    source: "ARCA",
    href: "https://www.argentina.gob.ar/node/162238/noticias",
    summary:
      "ARCA puso a disposición el sistema con antelación al vencimiento para la presentación de impuestos.",
  },
  {
    title:
      "Ya no se limitará la CUIT por falta de cumplimiento a controles electrónicos",
    date: "11 marzo 2026",
    source: "ARCA",
    href: "https://www.argentina.gob.ar/node/162238/noticias",
    summary:
      "Se elimina la facultad de limitar la CUIT cuando los contribuyentes no respondan requerimientos electrónicos.",
  },
  {
    title: "Nuevos parámetros para categorización de MiPyMES",
    date: "01 abril 2026",
    source: "ARCA",
    href: "https://www.argentina.gob.ar/noticias/nuevos-parametros-para-categorizacion-de-mipymes-0",
    summary:
      "Actualización de parámetros para la categorización de MiPyMES y acceso a beneficios asociados.",
  },
  {
    title: "Portal ARCA: novedades oficiales y acceso a micrositios temáticos",
    date: "Actualización continua",
    source: "ARCA",
    href: "https://www.arca.gob.ar/",
    summary:
      "El portal oficial concentra novedades, accesos directos y micrositios útiles para contribuyentes y profesionales.",
  },
];

export async function getOfficialUpdates(): Promise<OfficialUpdate[]> {
  try {
    const response = await fetch(
      "https://www.argentina.gob.ar/node/162238/noticias",
      {
        next: { revalidate: 21600 }, // 6 horas
        headers: {
          "User-Agent": "Mozilla/5.0",
        },
      },
    );

    if (!response.ok) {
      return fallbackUpdates;
    }

    const html = await response.text();

    const items = extractNewsItems(html);

    if (items.length === 0) {
      return fallbackUpdates;
    }

    return items.slice(0, 4);
  } catch {
    return fallbackUpdates;
  }
}

function extractNewsItems(html: string): OfficialUpdate[] {
  const cleaned = html.replace(/\n/g, " ").replace(/\s+/g, " ");

  const regex =
    /(\d{1,2}\s+de\s+[a-záéíóúñ]+\s+de\s+2026)\s+([^<]+?)\s+(?=(\d{1,2}\s+de\s+[a-záéíóúñ]+\s+de\s+2026)|$)/gi;

  const matches = [...cleaned.matchAll(regex)];

  const results: OfficialUpdate[] = [];

  for (const match of matches.slice(0, 4)) {
    const rawDate = match[1]?.trim() || "";
    const rawTitle = match[2]?.trim() || "";

    if (!rawDate || !rawTitle) continue;

    results.push({
      title: sanitizeText(rawTitle),
      date: rawDate,
      source: "ARCA",
      href: "https://www.argentina.gob.ar/node/162238/noticias",
      summary:
        "Novedad publicada en el portal oficial de ARCA/argentina.gob.ar. Ingresá a la fuente para ver el detalle completo.",
    });
  }

  return results;
}

function sanitizeText(value: string) {
  return value
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}
