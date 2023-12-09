import React from "react";
import Image from "next/image";
import { Link } from "react-daisyui";

export default function Footer() {
  return (
    <main>
      <div className="bg-gradient-to-b from-pink-400 to-pink-200 text-black px-2 py-1 flex items-center justify-around">
        <div>
          <p>© 2024 Reposteria LOGA.</p>
          <p>Todos los derechos reservados.</p>
          <p>
            Contáctanos:{" "}
            <a
              href="mailto: logareposteria@gmail.com"
              className="underline  hover:text-blue-500"
            >
              logareposteria@gmail.com
            </a>
          </p>
        </div>
        <div className="flex m-1">
          <Link href="https://www.facebook.com/" className="flex items-center justify-center py-2 px-4">
            <Image
              src="/Imagenes/FacebookLogo.svg"
              alt="Facebook logo"
              width={75}
              height={75}
              objectFit="cover"
            />
          </Link>
          <div className="flex items-center justify-center py-2 px-4">
            <Link href="https://www.instagram.com/">
              <Image
                src="/Imagenes/InstagramLogo.svg"
                alt="Instagram logo"
                width={75}
                height={75}
                objectFit="cover"
              />
            </Link>
          </div>
          <div className="flex items-center justify-center py-2 px-4">
            <Link href="https://wa.me/+526143943434">
              <Image
                src="/Imagenes/WhatsAppLogo.svg"
                alt="WhatsApp logo"
                width={75}
                height={75}
                objectFit="cover"
              />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
