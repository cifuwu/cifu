'use client'
import Image from "next/image";
import Lottie from "lottie-react";
import animacion from "@/public/animacion.json";


export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen w-screen bg-gray-50">
      <div className="w-full sm:max-w-2xl -mt-40 mx-5">
        <Lottie animationData={animacion} loop={true} />
        <h2 className="text-center text-2xl md:text-4xl font-extrabold text-gray-900">Voy corriendo a pegarte unos combos</h2>
      </div>
    </main>
  );
}
