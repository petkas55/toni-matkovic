import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

const PrivacyPage = () => {
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
            <h1 className="heading-primary mb-4">Politika Privatnosti</h1>
            <p className="text-lg text-gray-600">
              Vaša privatnost nam je važna. Ovdje možete saznati kako štitimo vaše osobne podatke.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center space-x-3 mb-6">
              <Shield className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">Opće odredbe</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Ova Politika privatnosti opisuje kako prikupljamo, koristimo i štitimo vaše osobne podatke
              prilikom korištenja naših usluga. Pridržavamo se svih važećih zakona i propisa o zaštiti
              podataka, uključujući Opću uredbu o zaštiti podataka (GDPR).
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center space-x-3 mb-6">
              <Eye className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">Prikupljanje podataka</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Prikupljamo samo one osobne podatke koji su nam potrebni za pružanje naših usluga:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
              <li>Ime i prezime</li>
              <li>Kontakt podaci (email, telefon)</li>
              <li>Osnovni zdravstveni podaci relevantni za treninge</li>
              <li>Fotografije napretka (uz vašu izričitu dozvolu)</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center space-x-3 mb-6">
              <Lock className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">Zaštita podataka</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Implementirali smo odgovarajuće tehničke i organizacijske mjere za zaštitu vaših podataka:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
              <li>Enkripcija osjetljivih podataka</li>
              <li>Redovito ažuriranje sigurnosnih protokola</li>
              <li>Ograničen pristup osobnim podacima</li>
              <li>Redovite sigurnosne procjene</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <FileText className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">Vaša prava</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Prema GDPR-u, imate sljedeća prava vezana uz vaše osobne podatke:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Pravo na pristup podacima</li>
              <li>Pravo na ispravak podataka</li>
              <li>Pravo na brisanje podataka</li>
              <li>Pravo na ograničenje obrade</li>
              <li>Pravo na prenosivost podataka</li>
              <li>Pravo na prigovor</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default PrivacyPage;