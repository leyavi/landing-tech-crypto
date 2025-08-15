import { useState, useEffect } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function SpeakersSection() {
  const speakers = [
    {
      name: "Leonidas Yauri Villanueva",
      role: "Founder & CMO dignita - CEO & CMO Crypnita",
      company: "NeoTech Group",
      description: "Especialista en RPA, SAP, UX/UI designer, transformación digital & Growth Strategy  con más de 10 años impulsando la productividad empresarial, Ex operador de World en el Perú, con experiencia en implementar y escalar modelos de registro y adopción de tecnología blockchain a nivel nacional.",
      image: "https://valornoticias.com/wp-content/uploads/2024/07/AnyConv.com__Tips-for-creating-content-and-growing-on-TikTok-2-1024x569.webp"
    },
    {
      name: "Antonio Santiago Fernández Dorrego",
      role: "CEO & CTO – NUtech Corp",
      company: "BlockWave",
      description: "Experto en Transformación Digital con más de 20 años de experiencia, especializado en RPA, BPM, IoT, Chatbots, Ciberseguridad y Gobierno Digital. Instructor y conferencista internacional en buenas prácticas TI e implementación de estándares como ISO 27001 e ISO 27032.",
      image: "https://blog.ativocontabilidade.cnt.br/wp-content/uploads/2022/10/empresario-individual-o-que-e.jpg"
    },
    {
      name: "Alexander Miguel Castañeda Agreda ",
      role: "Co- Founder Dignita.tech",
      company: "DeepBridge Labs",
      description: "Arquitecto de automatización con más de 7 años de experiencia diseñando ecosistemas RPA resilientes, escalables.",
      image: "https://rsv.com.br/wp-content/uploads/2022/10/3-1.jpg"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === speakers.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [speakers.length]);

  return (
    <section className="py-20 bg-gradient-to-b from-stone-900 to-stone-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-md border border-[#FF4D0B] mb-6">
            <span className="text-[#FF4D0B] text-sm font-semibold">Speakers</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-6">
            Aprende de los mejores
          </h2>
          <p className="text-stone-300 text-lg max-w-2xl mx-auto">
            Líderes tecnológicos que están transformando el panorama digital en Latinoamérica
          </p>
        </div>

        {/* Carrusel */}
        <div className="relative max-w-2xl mx-auto overflow-hidden">
          <div className="flex transition-transform duration-500 ease-in-out" 
               style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {speakers.map((speaker, index) => (
              <div key={index} className="min-w-full px-4">
                <div className="bg-stone-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group hover:scale-105 flex flex-col items-center text-center">
                  <div className="aspect-square overflow-hidden w-full">
                    <ImageWithFallback
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 flex flex-col items-center text-center">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {speaker.name}
                    </h3>
                    <p className="text-stone-300 text-sm leading-relaxed">
                      {speaker.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

         
          
          <button 
            onClick={() => setCurrentIndex(prev => prev === speakers.length - 1 ? 0 : prev + 1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-transparent text-4xl text-black font-extrabold  p-5 rounded-2xl mr-2"
        >
            </button>
     
          <div className="flex justify-center mt-4 space-x-2">
            {speakers.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? "bg-[#FF4D0B]" : "bg-stone-600"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#FF4D0B]/10 to-[#FF4D0B]/5 rounded-xl p-8 max-w-2xl mx-auto border border-[#FF4D0B]/20">
            <h3 className="text-xl font-semibold text-white mb-4">
              ¿Listo para aprender de los expertos?
            </h3>
            <p className="text-stone-300 mb-6">
              Únete a nosotros y obtén insights exclusivos de líderes que están definiendo el futuro tecnológico
            </p>
            <button className="bg-[#FF4D0B] hover:bg-[#FF4D0B]/90 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Reservar mi lugar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}