import { motion } from "framer-motion";
import services from "../data/services";
import { useLang } from "../context/LanguageContext";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function Services() {
  const { lang, t } = useLang();

  return (
    <section id="services" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            {t("servicesHeading")}
            <span className="text-orange-500">{t("servicesHeadingAccent")}</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            {t("servicesSubheading")}
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services[lang].map(({ title, description, Icon }, i) => (
            <motion.div
              key={title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              custom={i}
              className="group rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-lg hover:border-orange-200"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-orange-100 text-orange-600 transition group-hover:bg-orange-500 group-hover:text-white">
                <Icon size={28} />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">{title}</h3>
              <p className="leading-relaxed text-gray-600">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
