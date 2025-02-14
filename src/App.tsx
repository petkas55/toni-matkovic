import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navigation } from './components/navigation/Navigation';
import { navItems } from './components/navigation/navData';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ResultsPage from './pages/ResultsPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import FaqPage from './pages/FaqPage';
import ScrollToTop from './components/shared/ScrollToTop';
import { ScrollProgress } from './components/shared/ScrollProgress';

const App = () => {
  return (
    <>
      <ScrollToTop />
      <ScrollProgress />
      <div className="min-h-screen bg-background flex flex-col">
        <Navigation items={navItems} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/o-meni" element={<AboutPage />} />
            <Route path="/usluge" element={<ServicesPage />} />
            <Route path="/rezultati" element={<ResultsPage />} />
            <Route path="/pitanja" element={<FaqPage />} />
            <Route path="/kontakt" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;