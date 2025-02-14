import React from 'react';

export const AppPreview = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-primary font-heading">
              Pratite svoj napredak kroz aplikaciju
            </h2>
            
            <p className="text-gray-600 leading-relaxed">
              Naša aplikacija omogućuje vam jednostavno praćenje treninga, 
              prehrambenih navika i ukupnog napretka. Sve što vam treba za uspjeh 
              na jednom mjestu.
            </p>

            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-600">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span>Detaljan uvid u program treninga</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span>Praćenje prehrambenih navika</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span>Statistika i analiza napretka</span>
              </li>
            </ul>
          </div>

          <div className="relative">
            {/* Background Trainer Image */}
            <div className="absolute inset-0 -right-12 -top-12 -z-10">
              <div className="relative w-full h-full">
                <img
                  src="https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Online Training"
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-transparent rounded-2xl" />
              </div>
            </div>

            {/* Phone Display */}
            <div className="relative z-10 flex justify-center items-center">
              <img 
                src="/app-screenshot.png" 
                alt="App Interface"
                className="w-[300px] rounded-[2.5rem] border-[14px] border-black shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};