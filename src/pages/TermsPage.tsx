import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Scale, AlertCircle, Clock } from 'lucide-react';

const TermsPage = () => {
  return (
    <main className="pt-24 pb-16 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="heading-primary mb-4">Uvjeti Korištenja</h1>
            <p className="text-lg text-gray-600">
              Molimo vas da pažljivo pročitate uvjete korištenja prije korištenja naših usluga.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center space-x-3 mb-6">
              <FileText className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">Opće odredbe</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Korištenjem naših usluga pristajete na ove Uvjete korištenja. Zadržavamo pravo izmjene
              ovih uvjeta uz prethodnu najavu. Nastavak korištenja naših usluga nakon izmjena znači
              da prihvaćate nove uvjete.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center space-x-3 mb-6">
              <Scale className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">Opis usluga</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Naše usluge uključuju:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
              <li>Individualne treninge</li>
              <li>Online coaching</li>
              <li>Planove prehrane</li>
              <li>Konzultacije</li>
            </ul>
            <p className="text-gray-600">
              Zadržavamo pravo izmjene, prekida ili ukidanja bilo koje usluge uz prethodnu najavu.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center space-x-3 mb-6">
              <AlertCircle className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">Odgovornosti korisnika</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Kao korisnik naših usluga, obvezujete se:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
              <li>Pružiti točne i potpune informacije</li>
              <li>Pridržavati se dogovorenog rasporeda treninga</li>
              <li>Poštivati pravila ponašanja u prostoru za trening</li>
              <li>Pravovremeno otkazati termine (najmanje 24h unaprijed)</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Clock className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">Otkazivanje i povrat</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Naša politika otkazivanja i povrata:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Otkazivanje je moguće do 24h prije zakazanog termina</li>
              <li>Kasnija otkazivanja se naplaćuju u punom iznosu</li>
              <li>Povrat novca moguć je u roku od 14 dana od kupnje paketa</li>
              <li>Neiskorišteni treninzi iz paketa vrijede 6 mjeseci od kupnje</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default TermsPage;