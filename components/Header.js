import React from "react";
import BtnLogin from "@/components/BtnLogin";
import Image from "next/image";
import Imagenes from "@/Imagenes";

export default function Header() {
  return (
    <main>
      <div className="bg-gradient-to-b from-pink-200 to-pink-400 text-black p-4 flex items-center justify-center">
        <div className="flex items-center ">
            <Image
                src="/Imagenes/Logalogo.png"
                alt="Picture of the author"
                width={50}
                height={50}
            />
          <span className="font-bold">Logotipo</span>
        </div>
        <div className="flex  ">
          <button className="hover:bg-gray-700 px-3 py-2 rounded">
            Inicio
          </button>
          <button className="hover:bg-gray-700 px-3 py-2 rounded">
            Productos
          </button>
          <button className="hover:bg-gray-700 px-3 py-2 rounded">Otro</button>
        </div>
        <div className="flex "></div>
        <BtnLogin />
      </div>
    </main>
  );
}
