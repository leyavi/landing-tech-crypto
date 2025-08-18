import { useState, useEffect } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import 'src/styles/SpeakersSection.css';


export function SpeakersSection() {
  
  const speakers = [
    {
      img: {
        src: "./ceoD.png",
        className: " w-full h-30 object-cover  animate-heartbeat p-5"
      },
      etiqueta: {
        text: "Transformación Digital",
        className: "bg-[#FF4D0B] text-black px-2 py-1 rounded-full text-1xl font-semibold "
      },
      name: {
        text: "Leonidas Yauri Villanueva",
        className: "text-xl font-bold text-white mt-2"
      },
      role: {
        text: "Founder & CMO dignita - CEO & CMO Crypnita - NeoTech Group",
        className: "text-[#FF4D0B] text-xl font-bold "
      },
      description: {
      text: [
  "Especialista en RPA, SAP, UX/UI designer, transformación digital & Growth Strategy con más de 10 años impulsando la productividad empresarial.",
  "Ex operador de World en el Perú, con experiencia en implementar y escalar modelos de registro y adopción de tecnología blockchain a nivel nacional.",
],
className: "text-stone-300 mt-4"
      }
    },
       {
      img: {
        src: "./Antonio.png",
        className: " w-full h-100 object-cover object-cover animate-heartbeat p-5 mx-auto"
      },
      etiqueta: {
        text: " | RPA | Ciberseguridad",
        className: "bg-[#FF4D0B] text-black px-2 py-1 rounded-full text-1xl font-semibold "
      },
      name: {
        text: "Antonio Santiago Fernández Dorrego",
        className: "text-xl font-bold text-white mt-2"
      },
      role: {
        text: "CEO & CTO – NUtech Corp",
        className: "text-[#FF4D0B] text-xl font-bold "
      },


      description: {
        text: "Especialista en RPA, SAP, UX/UI designer, transformación digital & Growth Strategy con más de 10 años impulsando la productividad empresarial, Ex operador de World en el Perú, con experiencia en implementar y escalar modelos de registro y adopción de tecnología blockchain a nivel nacional.",
        className: "text-stone-300 mt-4 "
      }
    }, 
    
    
    
    {
      img: {
        src: "./ceoD.png",
        className: " w-full h-full object-cover object-cover animate-heartbeat p-5"
      },
      etiqueta: {
        text: "Hiperautomatización | RPA | Integración",
        className: "bg-[#FF4D0B] text-black px-2 py-1 rounded-full text-1xl font-semibold "
      },
      name: {
        text: "Alexander Miguel Castañeda Agreda",
        className: "text-xl font-bold text-white mt-2"
      },
      role: {
        text: "Co- Founder Dignita.tech",
        className: "text-[#FF4D0B] text-xl font-bold "
      },
      description: {
        text: "Arquitecto de automatización con más de 7 años de experiencia diseñando ecosistemas RPA resilientes, escalables y gobernados. Especialista en integración de IPA, APA y RPA, con certificaciones avanzadas en Automation Anywhere y liderazgo en proyectos de hiperautomatización.",
        className: "text-stone-300 mt-4 "
      }
    }, 
    
    
    
    
    {
      img: {
        src: "./LuisMarquez.jpeg",
        className: " w-full h-full object-cover object-cover animate-heartbeat p-5"
      },
      etiqueta: {
        text: "Smart Automation Architect – Banco Pichincha Perú",
        className: "bg-[#FF4D0B] text-black px-2 py-1 rounded-full text-1xl font-semibold "
      },
      name: {
        text: "Luis Marquez",
        className: "text-xl font-bold text-white mt-2"
      },
      role: {
        text: "IPA/APA",
        className: "text-[#FF4D0B] text-xl font-bold "
      },
      description: {
        text: "Experto en Transformación Digital con más de 20 años de experiencia, especializado en RPA, BPM, IoT, Chatbots, Ciberseguridad y Gobierno Digital. Instructor y conferencista internacional en buenas prácticas TI e implementación de estándares como ISO 27001 e ISO 27032.",
        className: "text-stone-300 mt-4 "
      }
    },
    
    
    
    
    {
      img: {
        src: "./ceoD.png",
        className: " w-full h-full object-cover object-cover animate-heartbeat p-5"
      },
      etiqueta: {
        text: " | RPA | Ciberseguridad",
        className: "bg-[#FF4D0B] text-black px-2 py-1 rounded-full text-1xl font-semibold "
      },
      name: {
        text: "Jesús Castillo",
        className: "text-xl font-bold text-white mt-2"
      },
      role: {
        text: "CEO KipiCash",
        className: "text-[#FF4D0B] text-xl font-bold "
      },
      description: {
        text: "Especialista en desarrollo de plataformas web, automatización de procesos y diseño UX/UI, con experiencia en liderar proyectos tecnológicos y crear productos digitales de alto impacto. Indie Hacker enfocado en el desarrollo y lanzamiento de proyectos que resuelven problemas reales y generan valor para los usuarios.",
        className: "text-stone-300 mt-4 "
      }
    },





       {
      img: {
        src: "./ceoD.png",
        className: " w-full h-full object-cover object-cover animate-heartbeat p-5"
      },
      etiqueta: {
        text: "Web3 | Criptomonedas | Banca e Inversiones",
        className: "bg-[#FF4D0B] text-black px-2 py-1 rounded-full text-1xl font-semibold "
      },
      name: {
        text: "Ricardo Asto",
        className: "text-xl font-bold text-white mt-2"
      },
      role: {
        text: "Embajador en LATAM de IOTA - Foundation & Especialista en Defi",
        className: "text-[#FF4D0B] text-xl font-bold "
      },
      description: {
        text: "Profesional disruptivo con más de 6 años de experiencia en banca, AFP, trading algorítmico, Web3 y consumo masivo. Creador de contenido sobre Web3 e Internet de las Cosas, consultor en criptomonedas y billeteras virtuales, y ex Community Manager de la criptomoneda IOTA, liderando la comunidad hispanohablante a nivel global.",
        className: "text-stone-300 mt-4 "
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
    <section className="py-20 bg-gradient-to-b from-black ">
      <div className="container mx-auto px-4">
        {/* Header */}
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
         <div
  className="flex transition-transform duration-500 ease-in-out m-6"
  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
>
  {speakers.map((speaker, index) => (
    <div key={index} className="min-w-full px-10">
      <div
        className="bg-black rounded-xl overflow-hidden flex flex-col items-center text-center speaker-container hover:scale-105"
      >
        {/* Imagen */}
        <div className="aspect-square overflow-hidden w-full">
          <ImageWithFallback
            src={speaker.img.src}
            alt={speaker.name.text}
            className={`${speaker.img.className}`}
          />
        </div>

        {/* Contenido */}
        <div className="p-6 flex flex-col items-start text-left space-y-2">
          <span className={speaker.etiqueta.className}>{speaker.etiqueta.text}</span>
          <h3 className={speaker.name.className}>{speaker.name.text}</h3>
          <p className={speaker.role.className}>{speaker.role.text}</p>
          <p className={speaker.description.className}>{speaker.description.text}</p>
        </div>
      </div>
    </div>
  ))}
</div>


          {/* Botón siguiente */}
          <button
            onClick={() =>
              setCurrentIndex((prev) => (prev === speakers.length - 1 ? 0 : prev + 1))
            }
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-transparent text-4xl text-white font-extrabold p-5 rounded-2xl mr-2"
          >
            &gt;
          </button>

          {/* Indicadores */}
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

        {/* CTA final */}
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
