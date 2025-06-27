
import React from 'react';

const Logo = ({ className = "h-8 w-auto" }: { className?: string }) => {
  return (
    <div className={`${className} flex items-center`}>
      <div className="bg-blue-800 text-white px-3 py-1 rounded-md font-bold text-xl">
        Ad Astra
      </div>
    </div>
  );
};

export default Logo;
