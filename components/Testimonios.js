
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from "react";

export default function Testimonios() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600); 
    };


    handleResize();


    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const testimonios = [
    {
      id: 1,
      comentario: '"Los muffins de LOGA son mi perdición. Tienen un don para crear magia en forma de pequeños muffins. Cada uno es como una obra de arte comestible y lo mejor de todo es que son veganos. La frescura, la suavidad y los sabores innovadores me mantienen regresando por más.¡En LOGA, han convertido mi amor por los muffins en una verdadera obsesión!"',
      nombre: "Ana Victoria López",
      cargo: "Contadora jubilada",
      imagen: "/Imagenes/AnaVictoria.jpg",
    },
    {
        id: 2,
        comentario: '"Como aficionado a los pays, he probado muchos en mi vida, pero los de LOGA son incomparables. LOGA ha elevado el arte de hacer pays a otro nivel. La mezcla perfecta de sabores y la textura inigualable hacen que cada bocado sea una experiencia culinaria única. ¡Definitivamente soy un cliente para toda la vida!"',
        nombre: "Bob Smith",
        cargo: "Electricista de CFE",
        imagen: "/Imagenes/Bob.jpg",
      },
      {
        id: 3,
        comentario: '"Las empanadas de LOGA son simplemente irresistibles. Cada bocado es una explosión de sabores auténticos que me transportan directamente a la cocina de mi abuela. Han capturado la esencia de la tradición en cada empanada. ¡Mis papilas gustativas están eternamente agradecidas!"',
        nombre: "Lucia Rodríguez",
        cargo: "Enfermera de IMSS",
        imagen: "/Imagenes/Lucia.jpg",
      },
    
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000, 
  };

  if (isMobile) {
  
    return null;
  }

  return (
    <main>
      <section className="relative z-10 px-6 py-22 sm:py-1 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <Slider {...settings}>
            {testimonios.map((testimonio) => (
              <div key={testimonio.id} className="mt-10">
                <blockquote className="flex text-center text-base sm:text-sm md:text-l lg:text-2xl xl:text-3xl font-semibold leading-8 text-gray-900">
                  <p>{testimonio.comentario}</p>
                </blockquote>
                <figcaption className="mt-8 flex items-center justify-center flex-col">
                  <div className="rounded-full overflow-hidden w-20 h-20 mx-auto">
                    <Image
                      src={testimonio.imagen}
                      alt="Testimonio"
                      width={250}
                      height={150}
                      styles={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                    <div className="font-semibold text-gray-900">{testimonio.nombre}</div>
                    <svg
                      viewBox="0 0 2 2"
                      width="3"
                      height="3"
                      aria-hidden="true"
                      className="fill-gray-900"
                    >
                      <circle cx="5" cy="1" r="1" />
                    </svg>
                    <div className="text-gray-600">{testimonio.cargo}</div>
                  </div>
                </figcaption>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </main>
  );
}

