import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import { submitContactForm } from "../utils/contact";
import { useLang } from "../context/LanguageContext";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const { t } = useLang();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    await submitContactForm(data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            {t("contactHeading")}
            <span className="text-orange-500">{t("contactHeadingAccent")}</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            {t("contactSubheading")}
          </p>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="mb-6 text-2xl font-bold text-gray-900">
              {t("contactInfoTitle")}
            </h3>
            <div className="space-y-6">
              <a
                href="tel:9197978919"
                className="flex items-center gap-4 text-lg text-gray-700 transition hover:text-orange-600"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <Phone size={24} />
                </div>
                (919) 797-8919
              </a>
              <div className="flex items-center gap-4 text-lg text-gray-700">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <Mail size={24} />
                </div>
                colindresdrywall@gmail.com
              </div>
              <div className="flex items-center gap-4 text-lg text-gray-700">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <MapPin size={24} />
                </div>
                {t("contactLocation")}
              </div>
            </div>

            <div className="mt-10 rounded-xl border border-orange-100 bg-orange-50 p-6">
              <p className="text-lg font-semibold text-gray-900">
                {t("contactPreferTitle")}
              </p>
              <p className="mt-1 text-gray-600">
                {t("contactPreferBody")}
              </p>
              <a
                href="tel:9197978919"
                className="mt-4 inline-flex items-center gap-2 rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
              >
                <Phone size={18} />
                {t("contactCallBtn")}
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center rounded-xl border border-green-200 bg-green-50 py-16 text-center">
                <CheckCircle size={48} className="mb-4 text-green-500" />
                <h3 className="mb-2 text-2xl font-bold text-gray-900">
                  {t("contactSuccessTitle")}
                </h3>
                <p className="text-gray-600">
                  {t("contactSuccessBody")}
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5 rounded-xl border border-gray-200 bg-white p-8 shadow-sm"
              >
                {/* Name */}
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    {t("contactLabelName")}
                  </label>
                  <input
                    {...register("name", { required: t("contactErrorName") })}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200 focus:outline-none"
                    placeholder={t("contactPlaceholderName")}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    {t("contactLabelEmail")}
                  </label>
                  <input
                    type="email"
                    {...register("email", {
                      required: t("contactErrorEmail"),
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: t("contactErrorEmailInvalid"),
                      },
                    })}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200 focus:outline-none"
                    placeholder={t("contactPlaceholderEmail")}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    {t("contactLabelPhone")}
                  </label>
                  <input
                    type="tel"
                    {...register("phone")}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200 focus:outline-none"
                    placeholder={t("contactPlaceholderPhone")}
                  />
                </div>

                {/* Service */}
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    {t("contactLabelService")}
                  </label>
                  <select
                    {...register("service")}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200 focus:outline-none"
                  >
                    <option value="">{t("contactSelectDefault")}</option>
                    <option value="painting">{t("contactSelectPainting")}</option>
                    <option value="framing">{t("contactSelectFraming")}</option>
                    <option value="drywall">{t("contactSelectDrywall")}</option>
                    <option value="remodeling">{t("contactSelectRemodeling")}</option>
                    <option value="flooring">{t("contactSelectFlooring")}</option>
                    <option value="general">{t("contactSelectGeneral")}</option>
                    <option value="other">{t("contactSelectOther")}</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    {t("contactLabelMessage")}
                  </label>
                  <textarea
                    {...register("message", {
                      required: t("contactErrorMessage"),
                    })}
                    rows={4}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200 focus:outline-none"
                    placeholder={t("contactPlaceholderMessage")}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-orange-500 px-6 py-3.5 text-lg font-semibold text-white transition hover:bg-orange-600 disabled:opacity-60"
                >
                  {isSubmitting ? (
                    t("contactSending")
                  ) : (
                    <>
                      <Send size={20} />
                      {t("contactSend")}
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
