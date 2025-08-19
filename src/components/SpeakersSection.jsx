import { useState, useEffect } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import 'src/styles/SpeakersSection.css';


export function SpeakersSection() {
  
  const speakers = [
    {
      img: {
        src: "./ceoD.png",
        className: "w-full h-full object-cover rounded-t-xl transition-transform duration-300 hover:scale-110 "
      },
      etiqueta: {
        text: "Transformación Digital",
        className: "bg-[#FF4D0B] text-black px-2 py-1 rounded-full text-xs font-semibold inline-block"
      },
      name: {
        text: "Leonidas Yauri Villanueva",
        className: "text-lg font-bold text-white mt-2"
      },
      role: {
        text: "Founder & CMO dignita - CEO & CMO Crypnita - NeoTech Group",
        className: "text-[#FF4D0B] text-sm font-bold"
      },
      description: {
      text: [
  "Especialista en RPA, SAP, UX/UI designer, transformación digital & Growth Strategy con más de 10 años impulsando la productividad empresarial.",
  "Ex operador de World en el Perú, con experiencia en implementar y escalar modelos de registro y adopción de tecnología blockchain a nivel nacional.",
],
className: "text-white mt-3 text-xs leading-relaxed"
      }
    },
       {
      img: {
        src: "./Antonio.png",
        className: "w-full h-full object-cover rounded-t-xl transition-transform duration-300 hover:scale-110"
      },
      etiqueta: {
        text: " | RPA | Ciberseguridad",
        className: "bg-[#FF4D0B] text-black px-2 py-1 rounded-full text-xs font-semibold inline-block"
      },
      name: {
        text: "Antonio Santiago Fernández Dorrego",
        className: "text-lg font-bold text-white mt-2"
      },
      role: {
        text: "CEO & CTO – NUtech Corp",
        className: "text-[#FF4D0B] text-sm font-bold"
      },


      description: {
        text: "Especialista en RPA, SAP, UX/UI designer, transformación digital & Growth Strategy con más de 10 años impulsando la productividad empresarial, Ex operador de World en el Perú, con experiencia en implementar y escalar modelos de registro y adopción de tecnología blockchain a nivel nacional.",
        className: "text-white mt-3 text-xs leading-relaxed"
      }
    }, 
    
    
    
    
    {
      img: {
        src: "./ceoD.png",
        className: "w-full h-full object-cover rounded-t-xl transition-transform duration-300 hover:scale-110"
      },
      etiqueta: {
        text: "Hiperautomatización | RPA | Integración",
        className: "bg-[#FF4D0B] text-black px-2 py-1 rounded-full text-xs font-semibold inline-block"
      },
      name: {
        text: "Alexander Miguel Castañeda Agreda",
        className: "text-lg font-bold text-white mt-2"
      },
      role: {
        text: "Co- Founder Dignita.tech",
        className: "text-[#FF4D0B] text-sm font-bold"
      },
      description: {
        text: "Arquitecto de automatización con más de 7 años de experiencia diseñando ecosistemas RPA resilientes, escalables y gobernados. Especialista en integración de IPA, APA y RPA, con certificaciones avanzadas en Automation Anywhere y liderazgo en proyectos de hiperautomatización.",
        className: "text-white mt-3 text-xs leading-relaxed"
      }
    }, 
    
    
    
    
    
    {
      img: {
        src: "./Antonio.png",
        className: "w-full h-full object-cover rounded-t-xl transition-transform duration-300 hover:scale-110"
      },
      etiqueta: {
        text: "Smart Automation Architect – Banco Pichincha Perú",
        className: "bg-[#FF4D0B] text-black px-2 py-1 rounded-full text-xs font-semibold inline-block"
      },
      name: {
        text: "Luis Marquez",
        className: "text-lg font-bold text-white mt-2"
      },
      role: {
        text: "IPA/APA",
        className: "text-[#FF4D0B] text-sm font-bold"
      },
      description: {
        text: "Experto en Transformación Digital con más de 20 años de experiencia, especializado en RPA, BPM, IoT, Chatbots, Ciberseguridad y Gobierno Digital. Instructor y conferencista internacional en buenas prácticas TI e implementación de estándares como ISO 27001 e ISO 27032.",
        className: "text-white mt-3 text-xs leading-relaxed"
      }
    },
    
    
    
    
    
    {
      img: {
        src: "./ceoD.png",
        className: "w-full h-full object-cover rounded-t-xl transition-transform duration-300 hover:scale-110"
      },
      etiqueta: {
        text: " | RPA | Ciberseguridad",
        className: "bg-[#FF4D0B] text-black px-2 py-1 rounded-full text-xs font-semibold inline-block"
      },
      name: {
        text: "Jesús Castillo",
        className: "text-lg font-bold text-white mt-2"
      },
      role: {
        text: "CEO KipiCash",
        className: "text-[#FF4D0B] text-sm font-bold"
      },
      description: {
        text: "Especialista en desarrollo de plataformas web, automatización de procesos y diseño UX/UI, con experiencia en liderar proyectos tecnológicos y crear productos digitales de alto impacto. Indie Hacker enfocado en el desarrollo y lanzamiento de proyectos que resuelven problemas reales y generan valor para los usuarios.",
        className: "text-white mt-3 text-xs leading-relaxed"
      }
    },





       {
      img: {
        src: "./ceoD.png",
        className: "w-full h-full object-cover rounded-t-xl transition-transform duration-300 hover:scale-110"
      },
      etiqueta: {
        text: "Web3 | Criptomonedas | Banca e Inversiones",
        className: "bg-[#FF4D0B] text-black px-2 py-1 rounded-full text-xs font-semibold inline-block"
      },
      name: {
        text: "Ricardo Asto",
        className: "text-lg font-bold text-white mt-2"
      },
      role: {
        text: "Embajador en LATAM de IOTA - Foundation & Especialista en Defi",
        className: "text-[#FF4D0B] text-sm font-bold"
      },
      description: {
        text: "Profesional disruptivo con más de 6 años de experiencia en banca, AFP, trading algorítmico, Web3 y consumo masivo. Creador de contenido sobre Web3 e Internet de las Cosas, consultor en criptomonedas y billeteras virtuales, y ex Community Manager de la criptomoneda IOTA, liderando la comunidad hispanohablante a nivel global.",
        className: "text-white mt-3 text-xs leading-relaxed"
      }
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
    <section id="speakers" className="py-20 bg-gradient-to-b from-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#FF4D0B] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#FF4D0B] rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 rounded-lg border border-[#FF4D0B] mb-6 backdrop-blur-sm bg-black/20">
            <span className="text-[#FF4D0B] text-sm font-semibold">Ponentes</span>
          </div>
          <h2 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-white to-stone-300 bg-clip-text text-transparent">
            Aprende de los mejores
          </h2>
          <p className="text-stone-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Líderes tecnológicos que están transformando el panorama digital en Latinoamérica
          </p>
        </div>

        {/* Carrusel */}
        <div className="relative max-w-4xl mx-auto overflow-hidden">
         <div
  className="flex transition-transform duration-700 ease-out"
  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
>
  {speakers.map((speaker, index) => (
    <div key={index} className="min-w-full px-4">
      <div
        className="bg-gradient-to-br from-black/80 to-black/60 backdrop-blur-xl rounded-2xl overflow-hidden flex flex-col items-center text-center speaker-container hover:scale-105 border border-[#FF4D0B]/20 shadow-2xl max-w-md mx-auto"
      >
        {/* Imagen */}
        <div className="w-full h-80 overflow-hidden relative bg-black">
          <ImageWithFallback
            src={speaker.img.src}
            alt={speaker.name.text}
            className="w-full h-full object-contain object-center"
            style={{ filter: 'brightness(1.1) contrast(1.05)' }}
          />
        </div>

        {/* Contenido */}
        <div className="p-6 flex flex-col items-start text-left space-y-3 w-full">
          <span className={speaker.etiqueta.className}>{speaker.etiqueta.text}</span>
          <h3 className={speaker.name.className}>{speaker.name.text}</h3>
          <p className={speaker.role.className}>{speaker.role.text}</p>
          {Array.isArray(speaker.description.text) ? (
            <div className={speaker.description.className}>
              {speaker.description.text.map((paragraph, idx) => (
                <p key={idx} className="mb-2">{paragraph}</p>
              ))}
            </div>
          ) : (
            <p className={speaker.description.className}>{speaker.description.text}</p>
          )}
        </div>
      </div>
    </div>
  ))}
</div>

          {/* Botones de navegación */}
          <button
            onClick={() =>
              setCurrentIndex((prev) => (prev === 0 ? speakers.length - 1 : prev - 1))
            }
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-sm text-white p-2 rounded-full border border-[#FF4D0B]/30 hover:bg-[#FF4D0B]/20 transition-all duration-300 z-20"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={() =>
              setCurrentIndex((prev) => (prev === speakers.length - 1 ? 0 : prev + 1))
            }
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-sm text-white p-2 rounded-full border border-[#FF4D0B]/30 hover:bg-[#FF4D0B]/20 transition-all duration-300 z-20"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Indicadores */}
          <div className="flex justify-center mt-6 space-x-2">
            {speakers.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "bg-[#FF4D0B] scale-125 shadow-lg shadow-[#FF4D0B]/50" 
                    : "bg-stone-600 hover:bg-stone-500"
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA final */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#FF4D0B]/10 to-[#FF4D0B]/5 backdrop-blur-xl rounded-2xl p-8 max-w-2xl mx-auto border border-[#FF4D0B]/20 shadow-2xl">
            <h3 className="text-xl font-semibold text-white mb-4">
              ¿Listo para aprender de los expertos?
            </h3>
            <p className="text-stone-300 mb-6 leading-relaxed">
              Únete a nosotros y obtén insights exclusivos de líderes que están definiendo el futuro tecnológico
            </p>
            <button className="bg-[#FF4D0B] hover:bg-[#FF4D0B]/90 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#FF4D0B]/25">
              Reservar mi lugar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
