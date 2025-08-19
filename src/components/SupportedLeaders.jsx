import { useState, useEffect } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function SupportedLeaders() {
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

  const strategicAllies = [
    {
      name: "Universidad Nacional de Ingeniería",
      type: "Aliado Académico",
      image: "./Universidad Nacional de Ingeniería.png"
    },
    {
      name: "TECSUP",
      type: "Aliado Educativo",
      image: "./TecSup.png"
    },
    {
      name: "UTEC",
      type: "Aliado Tecnológico",
      image: "./UTEC.png"
    },
    {
      name: "Universidad de Lima",
      type: "Aliado Académico",
      image: "./Universidad de Lima.png"
    },
    {
      name: "StartupPeru",
      type: "Aliado de Innovación",
      image: "./StartupPeru.png"
    },
    {
      name: "Lima Valley",
      type: "Aliado Empresarial",
      image: "./Lima Valley.png"
    }
  ];

  const mediaAllies = [
    { name: "PERÚ TECH" },
    { name: "TechReview Peru" },
    { name: "InnovaTech" },
    { name: "Digital Business Peru" },
    { name: "Blockchain Peru News" },
    { name: "Emprendedores.pe" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentAlliesIndex, setCurrentAlliesIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === speakers.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [speakers.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAlliesIndex((prev) => (prev === Math.ceil(strategicAllies.length / 3) - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [strategicAllies.length]);

  return (
    <section id="allies" className="py-20 bg-gradient-to-b from-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-md border border-[#FF4D0B] mb-6">
            <span className="text-[#FF4D0B] text-sm font-semibold">Speakers</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-6">
            Respaldado por <span className="text-[#FF4D0B]">lideres</span> de industria
          </h2>
          <p className="text-stone-300 text-lg max-w-2xl mx-auto">
            Organizaciones que apoyan la transformación
digital y el avance tecnológico en el Perú
          </p>
          <h2 className="text-[#FF4D0B] text-4xl font-bold">Patrocinadores Principales</h2>
        <div className="flex justify-center items-center">
  <img
    src="./SchoolIcon.png"
    alt="Icono Escuela"
    className="w-auto h-60 object-contain mt-20"
  />
</div>
         
        </div>

   

        <div className="text-center mt-16">
          <h2 className="text-white text-2xl font-bold">Colegio de Ingenieros del Perú</h2>
         
        </div>
        <div className="text-center mt-16">
          <h2 className="text-[#FF4D0B] text-4xl font-bold">Aliados Estratégicos</h2>
        </div>

        {/* Carrusel de Aliados Estratégicos */}
        <div className="relative max-w-4xl mx-auto overflow-hidden mt-8">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${currentAlliesIndex * 100}%)` }}
          >
            {Array.from({ length: Math.ceil(strategicAllies.length / 3) }, (_, pageIndex) => (
              <div key={pageIndex} className="min-w-full px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {strategicAllies.slice(pageIndex * 3, pageIndex * 3 + 3).map((ally, index) => (
                    <div key={index} className="bg-stone-800 rounded-xl p-4 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-2xl transition-shadow duration-300">
                      <img src={ally.image} alt={ally.name} className="w-20 h-20 mb-2 object-cover" />
                      <h3 className="text-white font-bold text-lg">{ally.name}</h3>
                      <p className="text-stone-300 text-sm">{ally.type}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Botones de navegación para aliados */}
          <button
            onClick={() =>
              setCurrentAlliesIndex((prev) => (prev === 0 ? Math.ceil(strategicAllies.length / 3) - 1 : prev - 1))
            }
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-sm text-white p-2 rounded-full border border-[#FF4D0B]/30 hover:bg-[#FF4D0B]/20 transition-all duration-300 z-20"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={() =>
              setCurrentAlliesIndex((prev) => (prev === Math.ceil(strategicAllies.length / 3) - 1 ? 0 : prev + 1))
            }
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-sm text-white p-2 rounded-full border border-[#FF4D0B]/30 hover:bg-[#FF4D0B]/20 transition-all duration-300 z-20"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Indicadores para aliados */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: Math.ceil(strategicAllies.length / 3) }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentAlliesIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentAlliesIndex 
                    ? "bg-[#FF4D0B] scale-125 shadow-lg shadow-[#FF4D0B]/50" 
                    : "bg-stone-600 hover:bg-stone-500"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <h2 className="text-4xl text-[#FF4D0B] font-bold m-5">Medios Aliados</h2>
        </div>

        {/* Círculos de Medios Aliados - Responsive */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 p-4 max-w-6xl mx-auto">
          {mediaAllies.map((media, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-[#FF4D0B] shadow-lg hover:shadow-2xl transition-shadow duration-300 mb-2"></div>
              <h2 className="text-white font-bold text-lg text-sm sm:text-base">{media.name}</h2>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}