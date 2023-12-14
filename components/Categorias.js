import React from "react";
import Image from "next/image";
import Searchbar from "./Searchbar";
import PromocionDia from "./PromocionDia";
import Link from "next/link";

export default function Header() {
  return (
    <div class="bg-gray-100">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5">
        <div class="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 class="text-2xl font-bold text-gray-900">Nuestros Productos</h2>
          <Searchbar />
          <div class="mt-6 space-y-12 mb-2 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
            <div class="group relative">
              <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                <Image
                  src="/Imagenes/Reposteria.jpeg"
                  alt="Reposteria"
                  width={250}
                  height={150}
                  styles={{ objectFit: 'cover' }}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 class="mt-6 text-sm text-gray-500 text-center">
                <Link href="/ProductoReposteria">
                  <span class="absolute inset-0"></span>
                  Kilogramo, medio kilo, cuarto de kilo.
                </Link>
              </h3>
              <p class="text-base font-semibold text-gray-900 text-center mb-2">
              Reposteria
              </p>
            </div>
            <div class="group relative">
              <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                <Image
                  src="/Imagenes/MUFFINSgrupo.jpeg"
                  alt="Testimonio"
                  width={250}
                  height={150}
                  styles={{ objectFit: 'cover' }}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 class="mt-6 text-sm text-gray-500 text-center">

                <Link href="/ProductoMuffins">
                  <span class="absolute inset-0 "></span>
                  Capuchino, manzana chai, chocolate, etc.
                </Link>
              </h3>
              <p class="text-base font-semibold text-gray-900 text-center">
                Muffins
              </p>
            </div>
            <div class="group relative">
              <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                <Image
                  src="/Imagenes/empanadas.jpeg"
                  alt="Testimonio"
                  width={250}
                  height={150}
                  styles={{ objectFit: 'cover' }}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 class="mt-6 text-sm text-gray-500 text-center ">
                <Link href="/ProductoEmpanadas">
                  <span class="absolute inset-0"></span>
                  Manzana, piña, chocolate, cajeta entre otros.
                </Link>
              </h3>
              <p class="text-base font-semibold text-gray-900 text-center">
                Empanadas
              </p>
            </div>
            <div class="group relative">
              <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                <Image
                  src="/Imagenes/rollocompleto.jpeg"
                  alt="Testimonio"
                  width={250}
                  height={150}
                  styles={{ objectFit: 'cover' }}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 class="mt-6 text-sm text-gray-500 text-center">
                <Link href="/ProductoRollo">
                  <span class="absolute inset-0"></span>
                  De calabaza, de zanahoria, de chocolate, etc.
                </Link>
              </h3>
              <p class="text-base font-semibold text-gray-900 text-center">
                Rollos
              </p>
            </div>
            <div class="group relative">
              <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                <Image
                  src="/Imagenes/pay nuez.jpeg"
                  alt="Testimonio"
                  width={250}
                  height={150}
                  styles={{ objectFit: 'cover' }}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 class="mt-6 text-sm text-gray-500 text-center">
                <Link href="ProductoPays">
                  <span class="absolute inset-0"></span>
                  De manzana, de queso, de chocolate, etc.
                </Link>
              </h3>
              <p class="text-base font-semibold text-gray-900 text-center">
                Pays
              </p>
            </div>
            <div class="group relative">
              <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                <Image
                  src="/Imagenes/Galletas avena.jpg"
                  alt="Testimonio"
                  width={250}
                  height={150}
                  styles={{ objectFit: 'cover' }}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 class="mt-6 text-sm text-gray-500 text-center">
                <Link href="ProductoGallletas">
                  <span class="absolute inset-0"></span>
                  De chocolate, de vainilla, de fresa, etc.
                </Link>
              </h3>
              <p class="text-base font-semibold text-gray-900 text-center">
                Galletas
              </p>
            </div>
          </div>
        </div>
        {/* <PromocionDia
          imageSrc="/Imagenes/AnaVictoria.jpg"
          category="Desk and Office"
          title="Work from home accessories"
          description="Explore a variety of accessories for your home office."
        /> */}
      </div>
    </div>
  );
}
