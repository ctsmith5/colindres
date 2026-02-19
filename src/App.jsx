import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useLang } from "./context/LanguageContext";

export default function App() {
  const { t } = useLang();

  useEffect(() => {
    document.title = t("siteTitle");
  }, [t]);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}
