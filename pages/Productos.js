import { Inter } from "next/font/google";
import Header from "@/components/Header";
import React from "react";
import Footer from "@/components/Footer";
import Categorias from "@/components/Categorias";
import Searchbar from "@/components/Searchbar";



const inter = Inter({ subsets: ["latin"] });

export default function Productos() {
  return (
    <main>
      <Header />
    <Categorias />
      <Footer />
    </main>
  );
}