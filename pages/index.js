import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import React from "react";
import Footer from "@/components/Footer";
import Accordion from "@/components/Accordion";
import LandingPage from "@/components/LandingPage";



const items = [
  { title: "Sección 1", content: "Contenido de la Sección 1" },
  { title: "Sección 2", content: "Contenido de la Sección 2" },
  { title: "Sección 3", content: "Contenido de la Sección 3" },
];

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Header />
      <LandingPage />

      {/* Resto del contenido */}
      {/* <div className="container mx-auto mt-8">
        <h1 className="text-2xl font-bold mb-4">Acordeón de Ejemplo</h1>
        <Accordion items={items} />
      </div> */}
      <Footer />
    </main>
  );
}
