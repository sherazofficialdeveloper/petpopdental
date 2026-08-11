import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { HiOutlineShoppingBag, HiMenu, HiX } from 'react-icons/hi';
import BrandLogo from './BrandLogo';

export default function Navbar({ cartCount = 0, onOpenCart, onOpenSearch, activeSection, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Products', id: 'products' },
    { name: 'Custom Pack', id: 'custom-pack' },
    { name: 'Ingredients', id: 'ingredients' },
    { name: 'Subscribe & Save', id: 'subscription' },
    { name: 'Why PETPOP', id: 'why-petpop' },
    { name: 'Reviews', id: 'reviews' },
    { name: 'FAQ', id: 'faq' },
  ];

  const handleLinkClick = (id) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(id);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm border-b border-gray-100 font-sans">
      {/* Top Delivery Announcement Bar - zooplus / US e-com style */}
      <div className="bg-green-700 text-white text-xs sm:text-sm py-2 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-2">
        <span>🐾</span>
        <span><strong>Free delivery</strong> on all orders over $39 in the US!</span>
      </div>

      {/* Main Navbar Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Mobile Hamburger Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-gray-700 hover:text-green-700 hover:bg-green-50 transition-colors focus:outline-none min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <HiX className="w-7 h-7" /> : <HiMenu className="w-7 h-7" />}
            </button>
          </div>

          {/* Logo */}
          <div onClick={() => handleLinkClick('hero')} className="cursor-pointer">
            <BrandLogo />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.id)}
                className={`text-base font-semibold transition-colors duration-150 relative py-1 hover:text-green-700 ${
                  activeSection === link.id ? 'text-green-700' : 'text-gray-700'
                }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-600 rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Right Action Icons & CTA */}
          <div className="flex items-center gap-2 sm:gap-4">
            
            {/* Search Trigger Icon */}
            <button
              onClick={onOpenSearch}
              className="p-2.5 rounded-full text-gray-700 hover:text-green-700 hover:bg-green-50 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
              title="Search products"
              aria-label="Search products"
            >
              <FiSearch className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Cart Icon with Counter Badge */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-full text-gray-700 hover:text-green-700 hover:bg-green-50 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
              title="Shopping Cart"
              aria-label="Shopping Cart"
            >
              <HiOutlineShoppingBag className="w-6 h-6 sm:w-7 sm:h-7" />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 bg-green-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Shop Now CTA Button */}
            <button
              onClick={() => handleLinkClick('products')}
              className="hidden sm:inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-bold text-sm sm:text-base px-5 py-2.5 rounded-xl shadow-md shadow-green-600/20 transition-all duration-200 hover:shadow-lg active:scale-95 min-h-[44px]"
            >
              Shop Now
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <div className="mb-3 px-2">
            <button
              onClick={onOpenSearch}
              className="w-full bg-gray-100 hover:bg-gray-200 text-gray-600 font-medium px-4 py-3 rounded-xl flex items-center gap-3 text-left min-h-[48px]"
            >
              <FiSearch className="w-5 h-5 text-gray-500" />
              <span>Search PETPOP products...</span>
            </button>
          </div>

          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.id)}
                className="w-full text-left px-4 py-3 rounded-xl text-base font-semibold text-gray-800 hover:text-green-700 hover:bg-green-50 transition-colors min-h-[44px] flex items-center"
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-gray-100">
            <button
              onClick={() => handleLinkClick('products')}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3.5 px-4 rounded-xl text-center shadow-md min-h-[48px] text-base"
            >
              Shop All Products
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
