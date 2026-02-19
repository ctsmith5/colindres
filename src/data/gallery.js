const FIREBASE_BASE =
  "https://firebasestorage.googleapis.com/v0/b/ludicrousapps-c1ea7.firebasestorage.app/o/Colindres%2F";
const SUFFIX = ".jpeg?alt=media";

const gallery = {
  en: [
    {
      src: `${FIREBASE_BASE}exterior-home${SUFFIX}`,
      alt: "Completed exterior home with porch",
      caption: "Exterior Home Finish",
    },
    {
      src: `${FIREBASE_BASE}window-install${SUFFIX}`,
      alt: "Window installation project",
      caption: "Window Installation",
    },
    {
      src: `${FIREBASE_BASE}framing${SUFFIX}`,
      alt: "Framing work in progress",
      caption: "Structural Framing",
    },
    {
      src: `${FIREBASE_BASE}insulation-drywall${SUFFIX}`,
      alt: "Insulation and drywall preparation",
      caption: "Insulation & Drywall",
    },
    {
      src: `${FIREBASE_BASE}hardwood-flooring${SUFFIX}`,
      alt: "Finished hardwood flooring",
      caption: "Hardwood Flooring",
    },
    {
      src: `${FIREBASE_BASE}drywall-mudtape${SUFFIX}`,
      alt: "Drywall mud and tape work",
      caption: "Drywall Mud & Tape",
    },
  ],
  es: [
    {
      src: `${FIREBASE_BASE}exterior-home${SUFFIX}`,
      alt: "Exterior de casa terminado con porche",
      caption: "Acabado Exterior",
    },
    {
      src: `${FIREBASE_BASE}window-install${SUFFIX}`,
      alt: "Proyecto de instalaci\u00F3n de ventanas",
      caption: "Instalaci\u00F3n de Ventanas",
    },
    {
      src: `${FIREBASE_BASE}framing${SUFFIX}`,
      alt: "Trabajo de estructura en progreso",
      caption: "Estructura",
    },
    {
      src: `${FIREBASE_BASE}insulation-drywall${SUFFIX}`,
      alt: "Preparaci\u00F3n de aislamiento y paneles de yeso",
      caption: "Aislamiento y Paneles de Yeso",
    },
    {
      src: `${FIREBASE_BASE}hardwood-flooring${SUFFIX}`,
      alt: "Piso de madera terminado",
      caption: "Pisos de Madera",
    },
    {
      src: `${FIREBASE_BASE}drywall-mudtape${SUFFIX}`,
      alt: "Trabajo de enlucido y cinta de paneles de yeso",
      caption: "Enlucido y Cinta",
    },
  ],
};

export default gallery;
