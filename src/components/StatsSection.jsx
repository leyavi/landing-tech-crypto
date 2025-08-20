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
    {
      icon: <Clock className="w-8 h-8 sm:w-10 sm:h-10 text-[#FF4D0B]" />,
      number: "3h",
      label: "De Contenido Premium"
    },
    {
      icon: <Gift className="w-8 h-8 sm:w-10 sm:h-10 text-[#FF4D0B]" />,
      number: "100%",
      label: "Gratuito"
    }
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

        {/* Audience Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block px-6 py-3 rounded-lg border-2 border-[#FF4D0B] mb-6 bg-black">
            <span className="text-white text-sm font-semibold">Quiénes pueden inscribirse</span>
          </div>
          <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6 px-4">
            Dirigido a <span className="text-[#FF4D0B]">profesionales</span> como tú
          </h3>
        </div>

        {/* Audience Carousel 2x2 */}
        <div className="relative max-w-4xl mx-auto px-4">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentAudienceIndex * 100}%)` }}
            >
              {audiencePairs.map((pair, pairIndex) => (
                <div
                  key={pairIndex}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {pair.map((audience, index) => (
                      <div
                        key={index}
                        className="group bg-white rounded-2xl p-6 sm:p-8 shadow-2xl hover:shadow-[#FF4D0B]/20 transition-all duration-500 hover:scale-105 border-2 border-[#FF4D0B]/20 hover:border-[#FF4D0B]/40"
                      >
                        <div className="flex justify-center mb-4 sm:mb-6">
                          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#FF4D0B]/10 rounded-2xl flex items-center justify-center group-hover:bg-[#FF4D0B]/20 transition-all duration-300">
                            {audience.icon}
                          </div>
                        </div>
                        <h4 className="text-lg sm:text-xl font-bold text-black mb-2 sm:mb-3 group-hover:text-[#FF4D0B] transition-colors duration-300">
                          {audience.title}
                        </h4>
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                          {audience.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevAudience}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 backdrop-blur-sm text-white p-2 rounded-full border border-[#FF4D0B]/30 hover:bg-[#FF4D0B]/20 transition-all duration-300 z-20"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextAudience}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 backdrop-blur-sm text-white p-2 rounded-full border border-[#FF4D0B]/30 hover:bg-[#FF4D0B]/20 transition-all duration-300 z-20"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {audiencePairs.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentAudienceIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentAudienceIndex
                    ? 'bg-[#FF4D0B] scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
