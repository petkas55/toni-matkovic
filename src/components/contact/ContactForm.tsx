import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { cn } from '@/utils/cn';

export const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    // Construct email body
    const subject = formData.get('subject');
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Create mailto link with pre-filled data
    const mailtoLink = `mailto:fitness.matko33@gmail.com?subject=${encodeURIComponent(subject as string)}&body=${encodeURIComponent(`Ime: ${name}\nEmail: ${email}\n\n${message}`)}`;
    
    // Open default email client
    window.location.href = mailtoLink;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl"
    >
      <h2 className="text-2xl font-bold text-white mb-8 font-heading">KONTAKTIRAJTE ME</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm text-white/70 mb-2 font-heading">
              IME I PREZIME
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className={cn(
                "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg",
                "text-white placeholder:text-white/30",
                "focus:outline-none focus:ring-2 focus:ring-white/20",
                "transition-all duration-300"
              )}
              placeholder="Vaše ime"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm text-white/70 mb-2 font-heading">
              EMAIL ADRESA
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className={cn(
                "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg",
                "text-white placeholder:text-white/30",
                "focus:outline-none focus:ring-2 focus:ring-white/20",
                "transition-all duration-300"
              )}
              placeholder="vas@email.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm text-white/70 mb-2 font-heading">
            PREDMET
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            className={cn(
              "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg",
              "text-white placeholder:text-white/30",
              "focus:outline-none focus:ring-2 focus:ring-white/20",
              "transition-all duration-300"
            )}
            placeholder="Tema poruke"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm text-white/70 mb-2 font-heading">
            PORUKA
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            className={cn(
              "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg",
              "text-white placeholder:text-white/30",
              "focus:outline-none focus:ring-2 focus:ring-white/20",
              "transition-all duration-300",
              "resize-none"
            )}
            placeholder="Vaša poruka..."
          />
        </div>

        <button
          type="submit"
          className={cn(
            "w-full sm:w-auto px-8 py-4",
            "bg-white text-black",
            "font-heading text-lg uppercase tracking-widest",
            "inline-flex items-center justify-center gap-3",
            "transition-all duration-300",
            "hover:bg-gray-100",
            "disabled:opacity-50 disabled:cursor-not-allowed"
          )}
        >
          <span>Pošalji Poruku</span>
          <Send className="w-5 h-5" />
        </button>
      </form>
    </motion.div>
  );
};