import React from 'react';

export default function BrandLogo({ size = 'md', className = '' }) {
  const isSmall = size === 'sm';
  const isLarge = size === 'lg';

  return (
    <div className={`inline-flex items-center gap-2.5 font-bold tracking-tight select-none cursor-pointer ${className}`}>
      {/* Dog Paw / Mascot Badge */}
      <img src="logo.jpeg" className="w-56 h-16 md:w-40" alt="logo" />
    </div>
  );
}
