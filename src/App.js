import { useEffect, useState } from "react";
import AppFooter from "./components/Footer/Footer";
import SkillsPage from "./components/Skills/SkillsPage";
import { motion } from "framer-motion";
import PreLoader from "./components/Loader/Loader";
import HeaderNav from "./components/Header/HeaderNav";

import Projects from "./components/Projects/Projects";
import { Toaster } from "react-hot-toast";
import About from "./components/About/About";
import Contact from "./components/Contact/ContactsPage";
import Hero from "./components/Common/Hero";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${darkMode && "dark"}`}>
      {loading ? (
        <PreLoader loading={loading} />
      ) : (
        <main className="bg-white dark:bg-[#0d0c0e] dark:text-white duration-700 ease-in-out">
          <Toaster position="top-center" reverseOrder={false} />
          <HeaderNav darkMode={darkMode} setDarkMode={setDarkMode} />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.1, 0.2, 0.4, 0.8, 1] }}
            transition={{ duration: 0.2 }}
          >
            <Hero />
          </motion.div>
          <About />
          <SkillsPage />
          <Projects />
          <Contact />
          <AppFooter />
          <SpeedInsights />
          <Analytics />
        </main>
      )}
    </div>
  );
}

export default App;
