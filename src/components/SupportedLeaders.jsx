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

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === speakers.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [speakers.length]);

  return (
    <section className="py-20 bg-gradient-to-b bg-black to-stone-800">
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
          <h2 className="text-[#FF4D0B] text-4xl font-bold">Alidos Estratégicos</h2>
        </div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
  {/* Cuadro 1 */}
  <div className="bg-stone-800 rounded-xl p-4 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-2xl transition-shadow duration-300">
    <img src="./Universidad Nacional de Ingeniería.png" alt="Universidad Nacional de Ingeniería" className="w-20 h-20 mb-2 object-cover" />
    <h3 className="text-white font-bold text-lg">Universidad Nacional de Ingeniería</h3>
    <p className="text-stone-300 text-sm">Aliado Académico</p>
  </div>

  {/* Cuadro 2 */}
  <div className="bg-stone-800 rounded-xl p-4 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-2xl transition-shadow duration-300">
    <img src="./TecSup.png" alt="TECSUP" className="w-20 h-20 mb-2 object-cover"/>
    <h3 className="text-white font-bold text-lg">TECSUP</h3>
    <p className="text-stone-300 text-sm">Aliado Educativo</p>
  </div>

  {/* Cuadro 3 */}
  <div className="bg-stone-800 rounded-xl p-4 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-2xl transition-shadow duration-300">
    <img src="./UTEC.png" alt="UTEC" className="w-20 h-20 mb-2 object-cover"/>
    <h3 className="text-white font-bold text-lg">UTEC</h3>
    <p className="text-stone-300 text-sm">Aliado Tecnológico</p>
  </div>

  {/* Cuadro 4 */}
  <div className="bg-stone-800 rounded-xl p-4 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-2xl transition-shadow duration-300">
    <img src="./Universidad de Lima.png" alt="Universidad de Lima" className="w-20 h-20 mb-2 object-cover"/>
    <h3 className="text-white font-bold text-lg">Universidad de Lima</h3>
    <p className="text-stone-300 text-sm">Aliado Académico</p>
  </div>

  {/* Cuadro 5 */}
  <div className="bg-stone-800 rounded-xl p-4 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-2xl transition-shadow duration-300">
    <img src="./StartupPeru.png" alt="StartupPeru" className="w-20 h-20 mb-2 object-cover"/>
    <h3 className="text-white font-bold text-lg">StartupPeru</h3>
    <p className="text-stone-300 text-sm">Aliado de Innovación</p>
  </div>

  {/* Cuadro 6 */}
  <div className="bg-stone-800 rounded-xl p-4 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-2xl transition-shadow duration-300">
    <img src="./Lima Valley.png" alt="Lima Valley" className="w-20 h-20 mb-2 object-cover"/>
    <h3 className="text-white font-bold text-lg">Lima Valley</h3>
    <p className="text-stone-300 text-sm">Aliado Empresarial</p>
  </div>
</div>
 <div className="text-center">
    <h2 className="text-4xl text-[#FF4D0B] font-bold m-5">Medios Aliados </h2>
 </div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
  {/* Cuadro 1 */}
  <div className="flex flex-col items-center text-center">
    <div className="w-24 h-24 rounded-full bg-[#FF4D0B] shadow-lg hover:shadow-2xl transition-shadow duration-300 mb-2"></div>
    <h2 className="text-white font-bold text-lg">PERÚ TECH</h2>
  </div>

  {/* Cuadro 2 */}
  <div className="flex flex-col items-center text-center">
    <div className="w-24 h-24 rounded-full bg-[#FF4D0B] shadow-lg hover:shadow-2xl transition-shadow duration-300 mb-2"></div>
    <h2 className="text-white font-bold text-lg">TechReview Peru</h2>
  </div>

  {/* Cuadro 3 */}
  <div className="flex flex-col items-center text-center">
    <div className="w-24 h-24 rounded-full bg-[#FF4D0B] shadow-lg hover:shadow-2xl transition-shadow duration-300 mb-2"></div>
    <h2 className="text-white font-bold text-lg">InnovaTech</h2>
  </div>

  {/* Cuadro 4 */}
  <div className="flex flex-col items-center text-center">
    <div className="w-24 h-24 rounded-full bg-[#FF4D0B] shadow-lg hover:shadow-2xl transition-shadow duration-300 mb-2"></div>
    <h2 className="text-white font-bold text-lg">Digital Business Peru</h2>
  </div>

  {/* Cuadro 5 */}
  <div className="flex flex-col items-center text-center">
    <div className="w-24 h-24 rounded-full bg-[#FF4D0B] shadow-lg hover:shadow-2xl transition-shadow duration-300 mb-2"></div>
    <h2 className="text-white font-bold text-lg">Blockchain Peru News</h2>
  </div>

  {/* Cuadro 6 */}
  <div className="flex flex-col items-center text-center">
    <div className="w-24 h-24 rounded-full bg-[#FF4D0B] shadow-lg hover:shadow-2xl transition-shadow duration-300 mb-2"></div>
    <h2 className="text-white font-bold text-lg">Emprendedores.pe</h2>
  </div>
</div>



      </div>
    </section>
  );
}