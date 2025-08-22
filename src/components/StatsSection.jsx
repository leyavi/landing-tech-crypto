import { Users, Star, Clock, Gift, Building2, GraduationCap, Briefcase, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

export function StatsSection() {
  const stats = [
    {
      icon: <Users className="w-8 h-8 sm:w-10 sm:h-10 text-[#FF4D0B]" />,
      number: "50+",
      label: "Participantes Esperados"
    },
    {
      icon: <Star className="w-8 h-8 sm:w-10 sm:h-10 text-[#FF4D0B]" />,
      number: "4",
      label: "Speakers Expertos"
    },
  
   
  ];

  const audiences = [
    {
      icon: <Building2 className="w-8 h-8 sm:w-10 sm:h-10 text-[#FF4D0B]" />,
      title: "Empresas",
      description: "Líderes y gerentes buscando digitalizar procesos"
    },
    {
      icon: <Users className="w-8 h-8 sm:w-10 sm:h-10 text-[#FF4D0B]" />,
      title: "Profesionales CIP",
      description: "Ingenieros colegiados en constante actualización"
    },
    {
      icon: <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10 text-[#FF4D0B]" />,
      title: "Institutos y Universidades",
      description: "Docentes y estudiantes de carreras tech"
    },
    {
      icon: <Briefcase className="w-8 h-8 sm:w-10 sm:h-10 text-[#FF4D0B]" />,
      title: "Independientes",
      description: "Freelancers y consultores especializados"
    }
  ];

  const [currentAudienceIndex, setCurrentAudienceIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAudienceIndex((prevIndex) => 
        prevIndex === 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextAudience = () => {
    setCurrentAudienceIndex((prevIndex) => 
      prevIndex === 1 ? 0 : prevIndex + 1
    );
  };

  const prevAudience = () => {
    setCurrentAudienceIndex((prevIndex) => 
      prevIndex === 0 ? 1 : prevIndex - 1
    );
  };

  // Crear pares de audiencias para el carrusel 2x2
  const audiencePairs = [
    [audiences[0], audiences[1]], // Empresas + Profesionales CIP
    [audiences[2], audiences[3]]  // Institutos + Independientes
  ];

  return (
    <section id="stats" className="py-12 sm:py-16 lg:py-20 bg-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-20 h-20 sm:w-32 sm:h-32 bg-[#FF4D0B] rounded-full blur-2xl sm:blur-3xl"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-24 h-24 sm:w-40 sm:h-40 bg-[#FF4D0B] rounded-full blur-2xl sm:blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#FF4D0B] mb-6 px-4">
            ¿Listo para transformar tu futuro digital?
          </h2>
          <p className="text-white text-lg max-w-4xl mx-auto leading-relaxed px-4">
            Únete a empresas, profesionales CIP, institutos, universidades y emprendedores independientes en este evento que marcará un antes y después en tu carrera profesional.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto px-4 mb-16 sm:mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-black/80 to-black/60 backdrop-blur-xl border-2 border-[#FF4D0B]/20 rounded-2xl p-8 text-center hover:shadow-[#FF4D0B]/10 transition-all duration-500 hover:scale-105 selection-line selection-line-card"
            >
              <div className="flex justify-center mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#FF4D0B]/10 rounded-2xl flex items-center justify-center group-hover:bg-[#FF4D0B]/20 transition-all duration-300">
                  {stat.icon}
                </div>
              </div>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2 sm:mb-3 group-hover:text-[#FF4D0B] transition-colors duration-300">
                {stat.number}
              </div>
              <p className="text-white text-sm sm:text-base font-medium leading-tight">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

       

        {/* Audience Carousel 2x2 */}
        
         

         
        
        </div>
      
    </section>
  );
}
