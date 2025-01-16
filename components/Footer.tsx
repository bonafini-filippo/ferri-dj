import React from 'react';
import Line from './ui/Line';

const Footer = () => {
  return (
    <div className="p-4 mt-3">
      <div className="mb-4">
        <Line />
      </div>

      <div className="flex justify-center items-center font-extralight text-sm">
        Se ti piace finisco i dettagli, sei un grande!
      </div>
    </div>
  );
};

export default Footer;
