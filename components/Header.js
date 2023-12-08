import React from "react";
import Image from "next/image";
import { Link } from "react-daisyui";

export default function Header() {
  return (
    <main>
      <div className="bg-gradient-to-b from-pink-200 to-pink-400 text-black px-2 py-1 flex items-center justify-around">
        <div className="flex m-1 ">
          <Link href="/">
            <Image
              src="/Imagenes/Logalogo.png"
              alt="Loga logo"
              width={250}
              height={150}
              objectFit="cover"
              className=" flex items-center justify-center py-1 "
            />
          </Link>
        </div>
        <div className="flex  justify-between space-x-12 m-1 p-1">
          <button className="border border-black rounded px-3 py-1  text-black hover:bg-red-500  hover:border-black-500 m-1">
            Inicio
          </button>
          <button className="border border-black rounded px-3 py-1  text-black hover:bg-red-500  hover:border-black-500 m-1">
            Productos
          </button>
          <button className="border border-black rounded px-3 py-1  text-black hover:bg-red-500  hover:border-black-500 m-1">
            Inicia Sesion
          </button>
          <div className="flex ">
            <Link href="/">
              <Image
                src="Imagenes/cart.svg"
                alt="Profile Pic"
                width={35}
                height={35}
                objectFit="cover"
                className="flex align-center justify-center py-2 "
              />
            </Link>


          </div>
        </div>
      </div>
    </main>
  );
}
