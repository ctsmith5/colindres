import { motion } from "framer-motion";
import { Cross, Heart } from "lucide-react";
import { useLang } from "../context/LanguageContext";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2 },
  }),
};

export default function About() {
  const { t } = useLang();

  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          {/* Bio */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0}
          >
            <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl">
              {t("aboutHeading")}
              <span className="text-orange-500">{t("aboutHeadingAccent")}</span>
            </h2>
            <p className="mb-4 text-lg leading-relaxed text-gray-600">
              {t("aboutP1")}
            </p>
            <p className="text-lg leading-relaxed text-gray-600">
              {t("aboutP2")}
            </p>
          </motion.div>

          {/* Faith statement */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={1}
            className="rounded-2xl border border-orange-100 bg-orange-50 p-8 md:p-10"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-white">
                <Cross size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                {t("aboutFaithTitle")}
              </h3>
            </div>
            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              {t("aboutFaithBody")}
            </p>
            <blockquote className="border-l-4 border-orange-400 pl-4">
              <p className="text-lg italic text-gray-700">
                {t("aboutVerse")}
              </p>
              <footer className="mt-2 flex items-center gap-2 text-sm font-semibold text-orange-600">
                <Heart size={14} />
                {t("aboutVerseRef")}
              </footer>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
