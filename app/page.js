'use client'
import Image from "next/image";
import Lottie from "lottie-react";
import animacion from "@/public/animacion.json";


export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen w-screen bg-gray-50">
      <div className="w-full sm:max-w-2xl md:-mt-40 mx-5">
        <Lottie animationData={animacion} loop={true} />
        <h2 className="text-center text-2xl md:text-4xl font-extrabold text-gray-900">Voy corriendo a pegarte unos combos</h2>
        <h5 className="text-center font-medium mt-1.5 text-gray-600">Atentamente, Sebastián Cifuentes 🤓</h5>
      </div>
    </main>
  );
}
