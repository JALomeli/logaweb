import React from "react";
import Image from "next/image";
import Searchbar from "./Searchbar";
import PromocionDia from "./PromocionDia";

export default function Header() {
  return (
    <div class="bg-gray-100">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5">
        <div class="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 class="text-2xl font-bold text-gray-900">Collections</h2>
          <Searchbar />
          <div class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
            <div class="group relative">
              <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                <Image
                  src="/Imagenes/AnaVictoria.jpg"
                  alt="Testimonio"
                  width={250}
                  height={150}
                  styles={{ objectFit: 'cover' }}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 class="mt-6 text-sm text-gray-500">
                <a href="#">
                  <span class="absolute inset-0"></span>
                  Desk and Office
                </a>
              </h3>
              <p class="text-base font-semibold text-gray-900">
                Work from home accessories
              </p>
            </div>
            <div class="group relative">
              <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                <Image
                  src="/Imagenes/Bob.jpg"
                  alt="Testimonio"
                  width={250}
                  height={150}
                  styles={{ objectFit: 'cover' }}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 class="mt-6 text-sm text-gray-500">
                <a href="#">
                  <span class="absolute inset-0"></span>
                  Self-Improvement
                </a>
              </h3>
              <p class="text-base font-semibold text-gray-900">
                Journals and note-taking
              </p>
            </div>
            <div class="group relative">
              <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                <Image
                  src="/Imagenes/Lucia.jpg"
                  alt="Testimonio"
                  width={250}
                  height={150}
                  styles={{ objectFit: 'cover' }}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 class="mt-6 text-sm text-gray-500">
                <a href="#">
                  <span class="absolute inset-0"></span>
                  Travel
                </a>
              </h3>
              <p class="text-base font-semibold text-gray-900">
                Daily commute essentials
              </p>
            </div>
            <div class="group relative">
              <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                <Image
                  src="/Imagenes/Lucia.jpg"
                  alt="Testimonio"
                  width={250}
                  height={150}
                  styles={{ objectFit: 'cover' }}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 class="mt-6 text-sm text-gray-500">
                <a href="#">
                  <span class="absolute inset-0"></span>
                  Travel
                </a>
              </h3>
              <p class="text-base font-semibold text-gray-900">
                Daily commute essentials
              </p>
            </div>
            <div class="group relative">
              <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                <Image
                  src="/Imagenes/Lucia.jpg"
                  alt="Testimonio"
                  width={250}
                  height={150}
                  styles={{ objectFit: 'cover' }}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 class="mt-6 text-sm text-gray-500">
                <a href="#">
                  <span class="absolute inset-0"></span>
                  Travel
                </a>
              </h3>
              <p class="text-base font-semibold text-gray-900">
                Daily commute essentials
              </p>
            </div>
            <div class="group relative">
              <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                <Image
                  src="/Imagenes/Lucia.jpg"
                  alt="Testimonio"
                  width={250}
                  height={150}
                  styles={{ objectFit: 'cover' }}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 class="mt-6 text-sm text-gray-500">
                <a href="#">
                  <span class="absolute inset-0"></span>
                  Travel
                </a>
              </h3>
              <p class="text-base font-semibold text-gray-900">
                Daily commute essentials
              </p>
            </div>
          </div>
        </div>
        <PromocionDia
          imageSrc="/Imagenes/AnaVictoria.jpg"
          category="Desk and Office"
          title="Work from home accessories"
          description="Explore a variety of accessories for your home office."
        />
      </div>
    </div>
  );
}
