import { useState, useEffect } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Place() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Si en el futuro quieres usar un slider de imágenes
  const speakers = []; // placeholder, puedes agregar datos si deseas

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === speakers.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [speakers.length]);

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-md border border-[#FF4D0B] mb-6">
            <span className="text-[#FF4D0B] text-sm font-semibold">
              ¿Dónde se realizará?
            </span>
          </div>
        <div className="bg-black shadow-2xl font-bold text-center block px-6 py-16 rounded-md border border-stone-800 hover:border-[#FF4D0B] transition-colors duration-300">
  <h2 className="text-2xl font-bold text-white mb-6">
    Av. Pacífico Mz. C1 Lt. 11 Nuevo Chimbote
  </h2>
  <div className="flex justify-center items-center ">
    <img
      src="./Colegio.png"
      alt="Colegio"
      className="w-full max-w-md h-auto shadow-2xl shadow-black hover:scale-105 transition-transform duration-300"
    />
  </div>
</div>
          
      
        </div>
      </div>
    </section>
  );
}
