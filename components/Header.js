import React, { useEffect } from "react";
import Image from "next/image";
import { Link } from "react-daisyui";
import BtnLogin from "./BtnLogin";
import { useSession } from 'next-auth/react';

export default function Header() {
  const { data: session } = useSession();
  const isAdmin = session && session.user.roles && session.user.roles.includes('admin');

  useEffect(() => {
    // Esto forzará una actualización del componente cuando el usuario inicie sesión.
  }, [session]);

  return (
    <main>
      <div className="bg-gradient-to-b from-pink-200 to-pink-400 text-black px-2 py-1 flex flex-col md:flex-row items-center justify-center">
        <div className="flex m-1">
          <Link href="/">
            <Image
              src="/Imagenes/Logalogo.png"
              alt="Loga logo"
              width={250}
              height={150}
              styles={{ objectFit: 'cover' }}
              className="flex items-center justify-center py-1"
            />
          </Link>
        </div>
        <div className="md:flex justify-center md:space-x-12 m-1 p-1 md:items-center">
          <Link
            style={{ textDecoration: "none" }}
            href="/"
            className="border border-black rounded px-3 py-1 text-black hover:bg-red-500 hover:border-black-500 m-1 flex items-center justify-center no-underline "
          >
            <button>Inicio</button>
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            href="/Productos"
            className="border border-black rounded px-3 py-1 text-black hover:bg-red-500 hover:border-black-500 m-1 flex items-center justify-center no-underline my-3"
          >
            <button>Productos</button>
          </Link>

          {/* Condiciona la renderización del enlace "Registro Historico" basado en el rol de administrador */}
          {isAdmin && (
            <Link
              style={{ textDecoration: "none" }}
              href="/RegistroHistorico"
              className={`border border-black rounded px-3 py-1 text-black hover:bg-red-500 hover:border-black-500 m-1 flex items-center justify-center no-underline my-3 `}
            >
              <button>Registro Historico</button>
            </Link>
          )}

           <BtnLogin />
        </div>
      </div>
    </main>
  );
}
