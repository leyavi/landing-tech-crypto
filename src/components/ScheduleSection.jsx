import { Clock, Users, Code, Zap } from "lucide-react";

export function ScheduleSection() {
  const schedule = [
    {
      time: "7:00 PM – 7:20 PM",
      title: "Transformación Digital | RPA | Ciberseguridad",
      description: "Introducción a la innovación digital y casos reales en automatización y protección de datos.",
      icon: <Users className="w-5 h-5" />,
      type: "Introducción"
    },
    {
      time: "7:20 PM – 8:25 PM",
      title: "Hiperautomatización (RPA) | Integración",
      description: "Soluciones integradas para optimizar procesos y aumentar eficiencia.",
      icon: <Zap className="w-5 h-5" />,
      type: "Workshop"
    },
    {
      time: "8:25 PM – 9:00 PM",
      title: "Módulo Web3 & Blockchain",
      description: "Aplicaciones descentralizadas, contratos inteligentes y tendencias en criptoactivos.",
      icon: <Code className="w-5 h-5" />,
      type: "Panel"
    }
  ];

  return (
    <section className="py-20 bg-stone-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF4D0B] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#FF4D0B] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-md bg-[#FF4D0B]/10 border border-[#FF4D0B] mb-6">
            <span className="text-[#FF4D0B] text-sm font-semibold">Itinerario</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-6">
            Itinerario del evento
          </h2>
          <p className="text-stone-300 text-lg max-w-2xl mx-auto">
            Agenda diseñada para maximizar el aprendizaje y la interacción entre participantes
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {schedule.map((item, index) => (
            <div key={index} className="relative flex items-start mb-12 last:mb-0">
              {/* Timeline Line */}
              {index < schedule.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-24 bg-stone-700"></div>
              )}
              
              {/* Timeline Dot */}
              <div className="flex-shrink-0 w-12 h-12 bg-[#FF4D0B] rounded-full flex items-center justify-center text-white shadow-lg shadow-[#FF4D0B]/25 z-10">
                {item.icon}
              </div>

              {/* Content */}
              <div className="ml-8 flex-1 bg-stone-800/50 backdrop-blur-sm rounded-xl p-6 border border-stone-700 hover:border-[#FF4D0B]/50 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div className="flex items-center gap-3 mb-2 md:mb-0">
                    <Clock className="w-4 h-4 text-[#FF4D0B]" />
                    <span className="text-[#FF4D0B] font-semibold">
                      {item.time}
                    </span>
                    <span className="bg-[#FF4D0B]/20 text-[#FF4D0B] px-2 py-1 rounded text-xs font-medium">
                      {item.type}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">
                  {item.title}
                </h3>
                
                <p className="text-stone-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
