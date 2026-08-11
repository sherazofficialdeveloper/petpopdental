import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import PetCategories from './components/PetCategories';
import Products from './components/Products';
import CustomPackBuilder from './components/CustomPackBuilder';
import IngredientsSection from './components/IngredientsSection';
import SubscriptionSection from './components/SubscriptionSection';
import ProductFeature from './components/ProductFeature';
import DentalFeature from './components/DentalFeature';
import WhyPetpop from './components/WhyPetpop';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import PetLifestyleBanner from './components/PetLifestyleBanner';
import FAQ from './components/FAQ';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import ProductModal from './components/ProductModal';
import SearchModal from './components/SearchModal';
import Toast from './components/Toast';
import { PRODUCTS } from './data/products';

export default function App() {
  const [cart, setCart] = useState([
    {
      ...PRODUCTS[0],
      quantity: 1
    }
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Show Toast Message helper
  const showToast = (msg) => {
    setToastMessage(msg);
    setIsToastVisible(true);
    setTimeout(() => {
      setIsToastVisible(false);
    }, 3500);
  };

  // Add to cart handler
  const handleAddToCart = (product, qty = 1) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + qty } : item
        );
      }
      return [...prevCart, { ...product, quantity: qty }];
    });
    showToast(`Added ${qty}x ${product.name} to cart!`);
  };

  // Update cart quantity
  const handleUpdateQuantity = (id, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(id);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
    );
  };

  // Remove item from cart
  const handleRemoveItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Clear cart
  const handleClearCart = () => {
    setCart([]);
  };

  // Open Quick View Modal
  const handleQuickView = (product) => {
    setSelectedProduct(product);
    setIsProductModalOpen(true);
  };

  // Scroll spy for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'products', 'custom-pack', 'ingredients', 'subscription', 'why-petpop', 'reviews', 'faq'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans selection:bg-lime-300 selection:text-green-950">
      
      {/* Sticky Header & Navbar */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        activeSection={activeSection}
        onNavigate={(id) => {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        
        {/* Hero Section with Auto-cycling Carousel */}
        <Hero
          onNavigate={(id) => {
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Benefits Section (4 Trust Blocks with Hover Icon Effect) */}
        <Benefits />

        {/* Pet Category Avatar Navigation */}
        <PetCategories
          onSelectCategory={(catName) => {
            const el = document.getElementById('products');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Products Collection Section */}
        <Products
          onQuickView={handleQuickView}
          onAddToCart={handleAddToCart}
        />

        {/* Custom Pack Builder Section ("Build Your Own Pack") */}
        <CustomPackBuilder
          onAddToCart={handleAddToCart}
        />

        {/* Clean & Transparent Ingredients Section */}
        <IngredientsSection />

        {/* Subscription & Auto-Repeat Section */}
        <SubscriptionSection
          onQuickView={handleQuickView}
        />

        {/* Featured Section 1: Skin & Coat Support Powder */}
        <ProductFeature
          onQuickView={handleQuickView}
          onAddToCart={handleAddToCart}
        />

        {/* Featured Section 2: Dog Dental Powder */}
        <DentalFeature
          onQuickView={handleQuickView}
          onAddToCart={handleAddToCart}
        />

        {/* Why Pet Parents Choose PETPOP */}
        <WhyPetpop />

        {/* How It Works (3 Steps) */}
        <HowItWorks />

        {/* Testimonials / Pet Parent Reviews */}
        <Testimonials />

        {/* PETPOP Green Lifestyle Banner */}
        <PetLifestyleBanner />

        {/* Accordion FAQ Section */}
        <FAQ />

        {/* Newsletter Subscription Section */}
        <Newsletter
          onSubscribe={(email) => {
            showToast(`Thank you for subscribing, ${email}!`);
          }}
        />

      </main>

      {/* Footer */}
      <Footer
        onNavigate={(id) => {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Product Detail Quick View Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isProductModalOpen}
        onClose={() => setIsProductModalOpen(false)}
        onAddToCart={handleAddToCart}
      />

      {/* Instant Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={handleQuickView}
      />

      {/* Toast Notification */}
      <Toast
        message={toastMessage}
        isVisible={isToastVisible}
        onClose={() => setIsToastVisible(false)}
      />

    </div>
  );
}
