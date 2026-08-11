import React from 'react';
import { HiCheck, HiSparkles, HiOutlineArrowPath, HiOutlineShieldCheck, HiOutlineTruck, HiOutlineGift } from 'react-icons/hi2';

export default function SubscriptionSection({ onQuickView }) {
  return (
    <section id="subscription" className="py-20 bg-emerald-950 text-white relative overflow-hidden">
      {/* Background Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-800/20 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            <div className="inline-flex items-center gap-2 bg-lime-400/10 border border-lime-400/30 text-lime-300 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider">
              <HiSparkles className="w-4 h-4 text-lime-400" />
              <span>Auto-Repeat &amp; Save VIP Club</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Never Run Out of Your Pet's Daily Routine
            </h2>

            <p className="text-base sm:text-lg text-emerald-100/90 font-normal leading-relaxed max-w-2xl">
              Consistency is key to glowing skin, a lustrous coat, and clean dental health. Subscribe to monthly deliveries and unlock automatic discounts, free shipping, and priority support.
            </p>

            {/* 4 Feature Cards with Icon Hover Effect */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              
              <div className="group bg-emerald-900/40 hover:bg-emerald-900/80 border border-emerald-800/80 rounded-2xl p-4 transition-all duration-300 flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-lime-400/10 border border-lime-400/30 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-lime-400 group-hover:scale-105">
                  <HiSparkles className="w-5 h-5 text-lime-300 transition-colors duration-300 group-hover:text-emerald-950" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Save 15% on Every Order</h4>
                  <p className="text-xs text-emerald-200/80 font-normal">Discount automatically applied to all shipments.</p>
                </div>
              </div>

              <div className="group bg-emerald-900/40 hover:bg-emerald-900/80 border border-emerald-800/80 rounded-2xl p-4 transition-all duration-300 flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-lime-400/10 border border-lime-400/30 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-lime-400 group-hover:scale-105">
                  <HiOutlineTruck className="w-5 h-5 text-lime-300 transition-colors duration-300 group-hover:text-emerald-950" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Free US Tracked Delivery</h4>
                  <p className="text-xs text-emerald-200/80 font-normal">Zero shipping fees on all subscription orders.</p>
                </div>
              </div>

              <div className="group bg-emerald-900/40 hover:bg-emerald-900/80 border border-emerald-800/80 rounded-2xl p-4 transition-all duration-300 flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-lime-400/10 border border-lime-400/30 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-lime-400 group-hover:scale-105">
                  <HiOutlineArrowPath className="w-5 h-5 text-lime-300 transition-colors duration-300 group-hover:text-emerald-950" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Pause, Skip or Cancel</h4>
                  <p className="text-xs text-emerald-200/80 font-normal">Manage your delivery schedule with 1 click.</p>
                </div>
              </div>

              <div className="group bg-emerald-900/40 hover:bg-emerald-900/80 border border-emerald-800/80 rounded-2xl p-4 transition-all duration-300 flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-lime-400/10 border border-lime-400/30 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-lime-400 group-hover:scale-105">
                  <HiOutlineGift className="w-5 h-5 text-lime-300 transition-colors duration-300 group-hover:text-emerald-950" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Free Mystery Treat Gift</h4>
                  <p className="text-xs text-emerald-200/80 font-normal">Special surprise included in every 3rd order.</p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Premium Subscription Card */}
          <div className="lg:col-span-5">
            <div className="bg-white text-gray-900 rounded-3xl p-8 shadow-2xl border border-emerald-200/40 relative">
              
              <span className="absolute -top-3.5 right-6 bg-amber-400 text-gray-950 text-xs font-black uppercase px-4 py-1 rounded-full shadow-md">
                Best Value Plan
              </span>

              <div className="text-center pb-6 border-b border-gray-100">
                <span className="text-xs font-bold text-green-700 bg-green-50 px-3 py-1 rounded-full">
                  Monthly Repeat Delivery
                </span>
                <div className="flex items-baseline justify-center gap-2 mt-3">
                  <span className="text-4xl sm:text-5xl font-black text-gray-900">$24.64</span>
                  <span className="text-sm text-gray-500 font-bold line-through">$28.99</span>
                  <span className="text-xs text-gray-500 font-medium">/ month</span>
                </div>
                <p className="text-xs font-bold text-green-700 mt-1">
                  You Save 15% OFF on Every Jar
                </p>
              </div>

              <ul className="py-6 space-y-3 text-sm font-medium text-gray-700">
                <li className="flex items-center gap-3">
                  <HiCheck className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span>Choose any PETPOP daily powder formula</span>
                </li>
                <li className="flex items-center gap-3">
                  <HiCheck className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span>Delivered to your doorstep every 30 days</span>
                </li>
                <li className="flex items-center gap-3">
                  <HiCheck className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span>Free US Tracked Shipping included</span>
                </li>
                <li className="flex items-center gap-3">
                  <HiCheck className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span>Cancel or pause schedule anytime without fees</span>
                </li>
              </ul>

              <button
                onClick={() => {
                  const el = document.getElementById('products');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full bg-green-700 hover:bg-green-800 text-white font-black text-base py-4 rounded-xl shadow-lg shadow-green-700/20 transition-all duration-200 min-h-[52px] flex items-center justify-center gap-2"
              >
                <span>Subscribe &amp; Save 15% Now</span>
              </button>

              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500 font-medium">
                <HiOutlineShieldCheck className="w-4 h-4 text-green-700" />
                <span>30-Day Happiness Guarantee • Cancel Anytime</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
