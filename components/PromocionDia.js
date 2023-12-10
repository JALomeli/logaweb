import React from 'react';
import Image from 'next/image';

const PromocionDia = ({ imageSrc, category, title, description }) => {
  return (
    <div className="group relative">
      <label className="flex text-5xl font-bold text-red-500 justify-center py-5">
        PROMOCION DEL DIA
      </label>
      <div className="relative h-96 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 flex flex-col items-center justify-center">
        <Image
          src={imageSrc}
          alt="Promoción del día"
          width={250}
          height={150}
          objectFit="contain"
          className="h-full w-full object-center"
        />
      </div>
      <h3 className="mt-6 text-sm text-gray-500 text-center">
        <a href="#">
          <span className="absolute inset-0"></span>
          {category}
        </a>
      </h3>
      <p className="text-base font-semibold text-gray-900 text-center">{title}</p>
      <p className="text-sm text-gray-500 text-center">{description}</p>
    </div>
  );
};

export default PromocionDia;
