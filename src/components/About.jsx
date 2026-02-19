import { motion } from "framer-motion";
import { Cross, Heart } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2 },
  }),
};

export default function About() {
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
              About <span className="text-orange-500">Colindres Home Repair</span>
            </h2>
            <p className="mb-4 text-lg leading-relaxed text-gray-600">
              Led by Raul Colindres, our team brings years of hands-on experience in
              residential construction and home repair. From structural framing to
              finish work, we approach every project with the same dedication and
              attention to detail — because your home deserves nothing less.
            </p>
            <p className="text-lg leading-relaxed text-gray-600">
              Based in the Raleigh area, we serve homeowners throughout the Triangle
              with honest pricing, reliable timelines, and craftsmanship that speaks
              for itself.
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
              <h3 className="text-2xl font-bold text-gray-900">Built on Faith</h3>
            </div>
            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              Our work is guided by our faith in God. We believe that every task —
              big or small — is an opportunity to serve others with integrity,
              honesty, and love. We don't just build homes; we build trust.
            </p>
            <blockquote className="border-l-4 border-orange-400 pl-4">
              <p className="text-lg italic text-gray-700">
                "Whatever you do, work at it with all your heart, as working for the
                Lord, not for human masters."
              </p>
              <footer className="mt-2 flex items-center gap-2 text-sm font-semibold text-orange-600">
                <Heart size={14} />
                Colossians 3:23
              </footer>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
