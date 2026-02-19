import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import gallery from "../data/gallery";

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);

  const open = (i) => setLightbox(i);
  const close = () => setLightbox(null);
  const prev = () =>
    setLightbox((c) => (c === 0 ? gallery.length - 1 : c - 1));
  const next = () =>
    setLightbox((c) => (c === gallery.length - 1 ? 0 : c + 1));

  return (
    <section id="gallery" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            Our <span className="text-orange-500">Work</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            See the quality and care we put into every project.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative cursor-pointer overflow-hidden rounded-xl"
              onClick={() => open(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent opacity-0 transition duration-300 group-hover:opacity-100">
                <p className="p-4 text-lg font-semibold text-white">
                  {img.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={close}
          >
            <button
              onClick={close}
              className="absolute top-4 right-4 text-white hover:text-orange-400"
              aria-label="Close lightbox"
            >
              <X size={32} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-4 text-white hover:text-orange-400"
              aria-label="Previous image"
            >
              <ChevronLeft size={40} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-4 text-white hover:text-orange-400"
              aria-label="Next image"
            >
              <ChevronRight size={40} />
            </button>
            <motion.img
              key={lightbox}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              src={gallery[lightbox].src}
              alt={gallery[lightbox].alt}
              className="max-h-[85vh] max-w-full rounded-lg object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="absolute bottom-6 text-lg font-semibold text-white">
              {gallery[lightbox].caption}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
