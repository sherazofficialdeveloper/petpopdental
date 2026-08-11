import React from 'react';
import BrandLogo from './BrandLogo';
import { FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa';
import { SiVisa, SiMastercard, SiAmericanexpress, SiPaypal, SiApplepay } from 'react-icons/si';

export default function Footer({ onNavigate }) {
  const handleNav = (id) => {
    if (onNavigate) {
      onNavigate(id);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300 font-sans border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-gray-800">
          
          {/* Column 1: Logo & About */}
          <div className="lg:col-span-2">
            <div onClick={() => handleNav('hero')} className="cursor-pointer inline-block mb-4">
                    <img src="logo.jpeg" className="w-56 h-28 " alt="logo" />

            </div>
            <p className="text-base text-gray-400 font-medium max-w-sm mb-6 leading-relaxed">
              Simple everyday wellness for happier pets. Quality powder supplements designed for easy daily routines.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              <a
                href="#instagram"
                onClick={(e) => e.preventDefault()}
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-green-600 text-gray-300 hover:text-white flex items-center justify-center transition-colors min-w-[40px] min-h-[40px]"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="#facebook"
                onClick={(e) => e.preventDefault()}
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-green-600 text-gray-300 hover:text-white flex items-center justify-center transition-colors min-w-[40px] min-h-[40px]"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
              <a
                href="#tiktok"
                onClick={(e) => e.preventDefault()}
                aria-label="TikTok"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-green-600 text-gray-300 hover:text-white flex items-center justify-center transition-colors min-w-[40px] min-h-[40px]"
              >
                <FaTiktok className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Shop Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Shop
            </h4>
            <ul className="space-y-3 text-sm font-medium text-gray-400">
              <li>
                <button onClick={() => handleNav('featured-skin')} className="hover:text-lime-400 transition-colors">
                  Skin &amp; Coat Support
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('featured-dental')} className="hover:text-lime-400 transition-colors">
                  Dental Powder
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('products')} className="hover:text-lime-400 transition-colors">
                  All Products
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-3 text-sm font-medium text-gray-400">
              <li>
                <button onClick={() => handleNav('featured-skin')} className="hover:text-lime-400 transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('why-petpop')} className="hover:text-lime-400 transition-colors">
                  Why PETPOP
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('newsletter')} className="hover:text-lime-400 transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Support */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Support
            </h4>
            <ul className="space-y-3 text-sm font-medium text-gray-400">
              <li>
                <button onClick={() => handleNav('faq')} className="hover:text-lime-400 transition-colors">
                  FAQ
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('faq')} className="hover:text-lime-400 transition-colors">
                  Shipping
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('faq')} className="hover:text-lime-400 transition-colors">
                  Returns
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('faq')} className="hover:text-lime-400 transition-colors">
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Payment Icons & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-500 font-medium">
          
          <div className="flex items-center space-x-4 text-gray-400 text-2xl">
            <SiVisa className="hover:text-white transition-colors" title="Visa" />
            <SiMastercard className="hover:text-white transition-colors" title="Mastercard" />
            <SiAmericanexpress className="hover:text-white transition-colors" title="American Express" />
            <SiPaypal className="hover:text-white transition-colors" title="PayPal" />
            <SiApplepay className="hover:text-white transition-colors" title="Apple Pay" />
          </div>

          <p className="text-center md:text-right text-gray-400">
            © 2026 PETPOP. All rights reserved.
          </p>

        </div>

      </div>
    </footer>
  );
}
