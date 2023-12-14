import React from "react";
import Image from "next/image";
import Testimonios from "@/components/Testimonios";
import { Link } from "react-daisyui";

export default function LandingPage() {
  return (
    <main>
      <div className="relative min-h-screen flex items-center justify-center flex-col sm:py-16 py-8 px-2">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover absolute"
        >
          <source src="/Video/FondoBlanco.mp4" type="video/mp4" />
          Tu navegador no soporta video.
        </video>
        <div className="flex flex-col text-center text-black relative z-10 items-center">
          <Image
            src="/Imagenes/Logalogo.png"
            alt="Facebook logo"
            width={700}
            height={700}
            styles={{ objectFit: 'cover' }}
            className="flex items-center justify-center py-2 px-2"
          />
          <h1 className="text-4xl md:text-6xl font-bold mb-4 py-2 px-2">
            Deliciosos Postres Hechos con Amor
          </h1>
          <p className="text-lg md:text-xl mb-8 py-2 px-2">
            Descubre nuestra exquisita selección de postres artesanales.
            ¡Endulza tu día con cada bocado!
          </p>

          <Link
            style={{ textDecoration: "none" }}
            href="/Productos"
            className="bg-orange-500 text-white py-5 px-6 rounded-full text-xl hover:bg-orange-600 border border-black transition duration-300"
          >
            <button>Checa nuestros productos</button>
          </Link>
        </div>

        <Testimonios />
      </div>
    </main>
  );
}