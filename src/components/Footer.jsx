import { Phone, Heart } from "lucide-react";

export default function Footer() {
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
              Quality residential construction and home repair services in the
              Raleigh-Durham Triangle area. Built on faith, delivered with
              excellence.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-3 font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="transition hover:text-orange-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="transition hover:text-orange-400">
                  Services
                </a>
              </li>
              <li>
                <a href="#gallery" className="transition hover:text-orange-400">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="transition hover:text-orange-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Faith */}
          <div>
            <h4 className="mb-3 font-semibold text-white">Get in Touch</h4>
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
                "Commit to the Lord whatever you do, and he will establish your
                plans." — Proverbs 16:3
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Colindres Home Repair. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
