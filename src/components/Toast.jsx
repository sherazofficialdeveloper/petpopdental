import React from 'react';
import { HiCheckCircle, HiXMark } from 'react-icons/hi2';

export default function Toast({ message, isVisible, onClose }) {
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-slide-up max-w-sm font-sans">
      <div className="bg-gray-900 text-white px-5 py-4 rounded-2xl shadow-2xl flex items-center gap-3 border border-gray-700">
        <HiCheckCircle className="w-6 h-6 text-lime-400 flex-shrink-0" />
        <span className="text-sm font-bold leading-snug flex-1">{message}</span>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white p-1 transition-colors min-w-[32px] min-h-[32px] flex items-center justify-center"
        >
          <HiXMark className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
