import React, { useState } from 'react';
import { FAQS } from '../data/products';
import { HiChevronDown, HiQuestionMarkCircle } from 'react-icons/hi2';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50/80 border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-green-800 bg-green-100 px-4 py-1.5 rounded-full mb-3 inline-block">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-medium leading-relaxed mt-3">
            Everything you need to know about PETPOP daily powder supplements.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="group bg-white rounded-2xl border border-gray-200/80 overflow-hidden shadow-xs transition-all duration-200 hover:border-green-300"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none min-h-[56px]"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-gray-900 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-green-600 group-hover:text-white text-green-700">
                      <HiQuestionMarkCircle className="w-5 h-5" />
                    </div>
                    <span>{faq.question}</span>
                  </span>
                  <div className={`p-2 rounded-full transition-transform duration-300 ${isOpen ? 'rotate-180 bg-green-600 text-white' : 'bg-gray-100 text-gray-600 group-hover:bg-green-100 group-hover:text-green-800'}`}>
                    <HiChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-gray-600 text-sm sm:text-base font-normal leading-relaxed border-t border-gray-100 bg-gray-50/50">
                    <p className="mb-3">{faq.answer}</p>
                    <div className="text-xs sm:text-sm font-semibold text-green-900 bg-green-100/80 p-3 rounded-xl border border-green-200/80 inline-block">
                      📌 <strong>Serving Note:</strong> Please follow the serving instructions provided on the product packaging.
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
