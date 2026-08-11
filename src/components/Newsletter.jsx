import React, { useState } from 'react';
import { FiMail, FiCheck } from 'react-icons/fi';

export default function Newsletter({ onSubscribe }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubmitted(true);
    if (onSubscribe) onSubscribe(email);
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
    }, 4000);
  };

  return (
    <section id="newsletter" className="py-16 bg-green-900 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-green-800/80 rounded-3xl p-8 sm:p-12 border border-green-700/80 shadow-2xl backdrop-blur-md">
          
          <div className="w-16 h-16 rounded-2xl bg-lime-400 text-green-950 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-lime-400/20">
            <FiMail className="w-8 h-8" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-3">
            Join the PETPOP Pack
          </h2>

          <p className="text-base sm:text-lg text-green-100 font-medium max-w-2xl mx-auto mb-8 leading-relaxed">
            Get pet care tips, product updates and special offers delivered to your inbox.
          </p>

          {submitted ? (
            <div className="bg-lime-400 text-green-950 p-4 rounded-2xl font-bold text-base sm:text-lg flex items-center justify-center gap-2 max-w-md mx-auto animate-fade-in shadow-md">
              <FiCheck className="w-6 h-6" />
              <span>Welcome to the PETPOP Pack! Check your inbox soon.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full bg-white text-gray-900 placeholder-gray-400 text-base font-medium px-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-400 min-h-[52px]"
              />
              <button
                type="submit"
                className="bg-lime-400 hover:bg-lime-300 text-green-950 font-extrabold text-base sm:text-lg px-8 py-4 rounded-xl shadow-lg transition-all duration-200 hover:scale-105 active:scale-95 whitespace-nowrap min-h-[52px] flex items-center justify-center"
              >
                Subscribe
              </button>
            </form>
          )}

          <p className="text-xs text-green-300/80 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>

        </div>
      </div>
    </section>
  );
}
