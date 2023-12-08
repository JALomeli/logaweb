import React from "react";
import Image from "next/image";
import { Link } from "react-daisyui";

export default function Footer() {
  return (
    <main>
      <div className="bg-gradient-to-b from-pink-400 to-pink-200 text-black px-2 py-1 flex items-center justify-around">
        <div>
          <p>© 2023 Reposteria LOGA.</p>
          <p>Todos los derechos reservados.</p>
          <p>
            Contáctanos:{" "}
            <a
              href="mailto: reposterialoga@gmail.com"
              className="underline  hover:text-blue-500"
            >
              reposterialoga@gmail.com
            </a>
          </p>
        </div>
        <div className="flex m-1 ">
          <Link href="/">
            <Image
              src="/Imagenes/FacebookLogo.svg"
              alt="Facebook logo"
              width={75}
              height={75}
              objectFit="cover"
              className=" flex items-center justify-center py-1 "
            />
          </Link>
          <div>
            <Link href="/">
              <Image
                src="/Imagenes/InstagramLogo.svg"
                alt="Facebook logo"
                width={75}
                height={75}
                objectFit="cover"
                className=" flex items-center justify-center py-1 "
              />
            </Link>
          </div>
          <div>
            <Link href="/">
              <Image
                src="/Imagenes/WhatsAppLogo.svg"
                alt="Facebook logo"
                width={75}
                height={75}
                objectFit="cover"
                className=" flex items-center justify-center py-1 "
              />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
