import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Quran from "./pages/Quran";
import Fees from "./pages/Fees";
import Instructors from "./pages/Instructors";
import Login from "./pages/Login";
import AboutUs from "./pages/AboutUs";
import Privacy from "./pages/Privacy";
import Blogs from "./pages/Blogs";
import TermsOfUse from "./pages/TermsOfUse";
import Contact from "./pages/Contact";
import KidsQuran from "./pages/KidsQuran";
import QuranReading from "./pages/QuranReading";
import QuranTranslation from "./pages/QuranTranslation";

import Careers from "./components/Careers";

import "./App.css";
import QuranTajweed from "./pages/QuranTajweed";
import HifzQuran from "./pages/HifzQuran";
import IslamicEducation from "./pages/IslamiEducation";
import MadniQaida from "./pages/MadniQaida";

// ================= APP =================

export default function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Main Pages */}
        <Route path="/courses" element={<Courses />} />
        <Route path="/quran" element={<Quran />} />
        <Route path="/fees" element={<Fees />} />
        <Route path="/instructors" element={<Instructors />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<TermsOfUse />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/kidsQuran" element={<KidsQuran />} />
        <Route path="/courses/quranReading" element={<QuranReading />} />
        <Route path="/courses/tajweed" element={<QuranTajweed />} />
        <Route path="/courses/hifz" element={<HifzQuran />} />
        <Route path="/courses/translation" element={<QuranTranslation />} />
        <Route path="/courses/islamic" element={<IslamicEducation />} />
        <Route path="/courses/noorani" element={<MadniQaida />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      {/* <Footer /> */}
    </Router>
  );
}
