import { Phone, Heart } from "lucide-react";
import { useLang } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="bg-gray-900 py-12 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Company */}
          <div>
            <h3 className="mb-3 text-xl font-bold text-white">
              Colindres Home Repair
            </h3>
            <p className="text-sm leading-relaxed">
              {t("footerTagline")}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-3 font-semibold text-white">
              {t("footerLinksTitle")}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="transition hover:text-orange-400">
                  {t("footerAbout")}
                </a>
              </li>
              <li>
                <a href="#services" className="transition hover:text-orange-400">
                  {t("footerServices")}
                </a>
              </li>
              <li>
                <a href="#gallery" className="transition hover:text-orange-400">
                  {t("footerGallery")}
                </a>
              </li>
              <li>
                <a href="#contact" className="transition hover:text-orange-400">
                  {t("footerContact")}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Faith */}
          <div>
            <h4 className="mb-3 font-semibold text-white">
              {t("footerContactTitle")}
            </h4>
            <a
              href="tel:9197978919"
              className="mb-4 flex items-center gap-2 text-orange-400 transition hover:text-orange-300"
            >
              <Phone size={16} />
              (919) 797-8919
            </a>
            <div className="mt-4 border-t border-gray-700 pt-4">
              <p className="flex items-center gap-1 text-sm italic text-gray-400">
                <Heart size={14} className="text-orange-400" />
                {t("footerVerse")}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} {t("footerCopyright")}
        </div>
      </div>
    </footer>
  );
}
