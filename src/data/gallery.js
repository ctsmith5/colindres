const FIREBASE_BASE =
  "https://firebasestorage.googleapis.com/v0/b/ludicrousapps-c1ea7.firebasestorage.app/o/Colindres%2F";
const SUFFIX = ".jpeg?alt=media";

const gallery = [
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
];

export default gallery;
