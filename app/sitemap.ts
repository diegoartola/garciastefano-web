import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://garciastefano.com.ar",
      lastModified: new Date(),
    },
    {
      url: "https://garciastefano.com.ar/monotributo-argentina",
      lastModified: new Date(),
    },
    {
      url: "https://garciastefano.com.ar/ingresos-brutos-arba",
      lastModified: new Date(),
    },
    {
      url: "https://garciastefano.com.ar/responsable-inscripto-vs-monotributo",
      lastModified: new Date(),
    },
    {
      url: "https://garciastefano.com.ar/estudio-contable-las-flores",
      lastModified: new Date(),
    },
    {
      url: "https://garciastefano.com.ar/estudio-contable-la-plata",
      lastModified: new Date(),
    },
  ];
}
