import React from 'react';
import { HiXMark, HiPlus, HiMinus, HiTrash, HiOutlineShoppingBag, HiCheckCircle } from 'react-icons/hi2';

export default function CartDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onClearCart }) {
  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.numericPrice * item.quantity, 0);
  const freeShippingThreshold = 39.00;
  const progressPercent = Math.min(100, (subtotal / freeShippingThreshold) * 100);
  const amountNeeded = (freeShippingThreshold - subtotal).toFixed(2);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden font-sans">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between">
          
          {/* Cart Header */}
          <div className="p-6 bg-gray-50 border-b border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <HiOutlineShoppingBag className="w-6 h-6 text-green-700" />
              <h2 className="text-xl font-bold text-gray-900">Your Cart</h2>
              <span className="bg-green-100 text-green-800 text-xs font-extrabold px-2.5 py-0.5 rounded-full">
                {cartItems.reduce((acc, i) => acc + i.quantity, 0)} items
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-700 rounded-xl hover:bg-gray-200 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Close Cart"
            >
              <HiXMark className="w-6 h-6" />
            </button>
          </div>

          {/* Free Shipping Progress Bar */}
          <div className="bg-green-50 px-6 py-3 border-b border-green-100 text-xs sm:text-sm font-medium text-green-900">
            {subtotal >= freeShippingThreshold ? (
              <div className="flex items-center gap-2 text-green-800 font-bold">
                <HiCheckCircle className="w-5 h-5 text-green-600" />
                <span>You've unlocked <strong>FREE US Delivery!</strong></span>
              </div>
            ) : (
              <p>
                Add <strong>${amountNeeded}</strong> more to get <strong>FREE US Delivery</strong>!
              </p>
            )}
            <div className="w-full bg-green-200 rounded-full h-2 mt-2 overflow-hidden">
              <div
                className="bg-green-600 h-full rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {cartItems.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-20 h-20 bg-gray-100 text-gray-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HiOutlineShoppingBag className="w-10 h-10" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Your cart is empty</h3>
                <p className="text-sm text-gray-500 font-medium mb-6">
                  Add PETPOP Skin &amp; Coat Support or Dental Powder to begin.
                </p>
                <button
                  onClick={onClose}
                  className="bg-green-700 hover:bg-green-800 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-md transition-all min-h-[44px]"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100 items-center justify-between"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-xl border border-gray-200"
                  />

                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-gray-900 leading-snug">
                      {item.name}
                    </h4>
                    <p className="text-xs text-gray-500 font-medium mt-0.5">
                      {item.size}
                    </p>
                    <p className="text-sm font-extrabold text-green-700 mt-1">
                      ${(item.numericPrice * item.quantity).toFixed(2)}
                    </p>

                    {/* Quantity Modifier */}
                    <div className="flex items-center gap-2 mt-2">
                      <div className="inline-flex items-center border border-gray-300 rounded-lg bg-white">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="p-1.5 text-gray-600 hover:text-green-700 min-w-[32px] min-h-[32px] flex items-center justify-center"
                          aria-label="Decrease"
                        >
                          <HiMinus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-3 text-xs font-bold text-gray-800">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="p-1.5 text-gray-600 hover:text-green-700 min-w-[32px] min-h-[32px] flex items-center justify-center"
                          aria-label="Increase"
                        >
                          <HiPlus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-gray-400 hover:text-red-600 p-1.5 transition-colors ml-auto"
                        title="Remove"
                      >
                        <HiTrash className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Subtotal & Checkout */}
          {cartItems.length > 0 && (
            <div className="p-6 bg-gray-50 border-t border-gray-200 space-y-4">
              <div className="flex justify-between items-center text-base font-bold text-gray-900">
                <span>Subtotal</span>
                <span className="text-xl text-green-800 font-extrabold">${subtotal.toFixed(2)}</span>
              </div>

              <p className="text-xs text-gray-500 font-medium">
                Taxes and shipping calculated at checkout preview.
              </p>

              <button
                onClick={() => {
                  alert('Thank you for trying out the PETPOP demo! Order process completed successfully.');
                  onClearCart();
                  onClose();
                }}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-extrabold py-4 px-6 rounded-xl shadow-lg shadow-green-600/20 transition-all text-base min-h-[52px] flex items-center justify-center"
              >
                Proceed to Checkout
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
