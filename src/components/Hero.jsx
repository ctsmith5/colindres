import { motion } from "framer-motion";
import { Phone, FileText } from "lucide-react";
import { useLang } from "../context/LanguageContext";

export default function Hero() {
  const { t } = useLang();

  return (
    <section className="relative flex min-h-screen items-center justify-center">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/ludicrousapps-c1ea7.firebasestorage.app/o/Colindres%2Fexterior-home.jpeg?alt=media')" }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-lg font-medium tracking-wide text-orange-300 uppercase"
        >
          {t("heroEyebrow")}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl"
        >
          {t("heroHeading")}
          <span className="text-orange-400">{t("heroHeadingAccent")}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto mb-10 max-w-2xl text-lg text-gray-200"
        >
          {t("heroBody")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-8 py-3.5 text-lg font-semibold text-white shadow-lg transition hover:bg-orange-600"
          >
            <FileText size={20} />
            {t("heroEstimate")}
          </a>
          <a
            href="tel:9197978919"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-white px-8 py-3.5 text-lg font-semibold text-white transition hover:bg-white hover:text-gray-900"
          >
            <Phone size={20} />
            {t("heroCall")}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
