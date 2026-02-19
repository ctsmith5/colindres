import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import { submitContactForm } from "../utils/contact";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
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
            Get in <span className="text-orange-500">Touch</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Ready to start your project? Contact us for a free estimate.
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
              Contact Information
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
                Raleigh, NC &mdash; Serving the Triangle
              </div>
            </div>

            <div className="mt-10 rounded-xl border border-orange-100 bg-orange-50 p-6">
              <p className="text-lg font-semibold text-gray-900">
                Prefer to talk?
              </p>
              <p className="mt-1 text-gray-600">
                Give us a call anytime. We're happy to discuss your project over
                the phone.
              </p>
              <a
                href="tel:9197978919"
                className="mt-4 inline-flex items-center gap-2 rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
              >
                <Phone size={18} />
                Call (919) 797-8919
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
                  Message Sent!
                </h3>
                <p className="text-gray-600">
                  We'll get back to you as soon as possible.
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
                    Name *
                  </label>
                  <input
                    {...register("name", { required: "Name is required" })}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200 focus:outline-none"
                    placeholder="Your name"
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
                    Email *
                  </label>
                  <input
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email",
                      },
                    })}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200 focus:outline-none"
                    placeholder="you@example.com"
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
                    Phone
                  </label>
                  <input
                    type="tel"
                    {...register("phone")}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200 focus:outline-none"
                    placeholder="(555) 123-4567"
                  />
                </div>

                {/* Service */}
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Service Needed
                  </label>
                  <select
                    {...register("service")}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200 focus:outline-none"
                  >
                    <option value="">Select a service</option>
                    <option value="painting">Painting</option>
                    <option value="framing">Framing</option>
                    <option value="drywall">Drywall</option>
                    <option value="remodeling">Remodeling</option>
                    <option value="flooring">Flooring</option>
                    <option value="general">General Repair</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Message *
                  </label>
                  <textarea
                    {...register("message", {
                      required: "Please describe your project",
                    })}
                    rows={4}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200 focus:outline-none"
                    placeholder="Tell us about your project..."
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
                    "Sending..."
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
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
