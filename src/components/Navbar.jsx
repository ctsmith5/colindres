import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { useLang } from "../context/LanguageContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, toggleLang } = useLang();

  const links = [
    { label: t("navAbout"), href: "#about" },
    { label: t("navServices"), href: "#services" },
    { label: t("navGallery"), href: "#gallery" },
    { label: t("navContact"), href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo + Language toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className={`text-xl font-bold transition-colors ${
                scrolled ? "text-orange-600" : "text-white"
              }`}
            >
              Colindres Home Repair
            </a>
            <button
              onClick={toggleLang}
              className="inline-flex items-center rounded-lg bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-600"
            >
              {t("langToggle")}
            </button>
          </div>

          {/* Desktop links */}
          <div className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`text-sm font-medium transition-colors hover:text-orange-500 ${
                  scrolled ? "text-gray-700" : "text-white"
                }`}
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:9197978919"
              className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-600"
            >
              <Phone size={16} />
              {t("navPhone")}
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className={`md:hidden ${scrolled ? "text-gray-700" : "text-white"}`}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-gray-100 bg-white md:hidden">
          <div className="space-y-1 px-4 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 text-base font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600"
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:9197978919"
              className="mt-2 flex items-center gap-2 rounded-lg bg-orange-500 px-4 py-3 text-center font-semibold text-white"
            >
              <Phone size={16} />
              {t("navPhone")}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
