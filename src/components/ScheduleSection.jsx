import { Clock, Users, Code, Zap, Coffee } from "lucide-react";

export function ScheduleSection() {
  const schedule = [
    {
      time: "7:00 PM – 7:10 PM",
      title: "Transformación Digital | RPA | Automatización | Blockchain",
      description: 
      
      ["Host del evento - Presentación del evento"],
      icon: <Users className="w-5 h-5" />,
      type: "Panel"
    },
    {
      time: "7:10 PM – 7:50 PM",
      title: "Transformación Digital | RPA | Ciberseguridad",
      description: [
        "  IA para vender más: Herramientas gratuitas o económicas para PyMES.",
        "  Protege tu negocio: Riesgos de IA que toda PYME debe evitar.",
        "  Automatiza sin complicarte: 3 tareas para delegar HOY a la IA.",
        "  IA hecha en Perú: Casos de éxito replicables.",
        "  El futuro cercano: Prepárate sin gastar de más."
      ],
      icon: <Zap className="w-5 h-5" />,
      type: "Panel"
    },
    {
      time: "7:50 PM – 8:22 PM",
      title: "Hiperautomatización | RPA | Integración IPA/APA",
      description: [" RPA para PYMEs de Áncash – 10 min.",
" Identifica tus Procesos Automatizables – 12 min",
" Casos Reales y Cómo Empezar – 15 min.",
" Preguntas y cierre – 5 min"],
      icon: <Code className="w-5 h-5" />,
      type: "Panel"
    },
    {
      time: "8:22 PM – 8:40 PM",
      title: "Coffee Break",
      description: ["Momento para networking, café y recargar energías."],
      icon: <Coffee className="w-5 h-5" />,
      type: "Break"
    },

    

    {
      time: "8:55 PM – 9:10 PM",
      title: "Web development",
      description:["Formación de equipos remotos."]
        ,
      icon: <Code className="w-5 h-5" />,
      type: "Panel"
    },
 {
  time: "9:10 PM – 9:30 PM",
  title: "",
 description: [
  " ¿Qué es blockchain y las criptomonedas?",
  " Contratos inteligentes",
  " ¿Qué son las finanzas descentralizadas?",
  " Casos de uso",
  " Ejercicios prácticos"
],
  icon: <Code className="w-5 h-5" />,
  type: "Panel"
},
 {
  time: "9:31 PM – 9:45 PM",
  title: "",
description: [
  " Noticias Crypto & Blockchain que están cambiando el mundo.",
  " Análisis on-chain (Arkham)."
],
  icon: <Code className="w-5 h-5" />,
  type: "Finalización"
},

  ];

  return (
    <section id="schedule" className="py-20 bg-gradient-to-b from-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
       
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 rounded-lg border-2 border-[#FF4D0B] mb-6 backdrop-blur-sm bg-black/20">
            <span className="text-[#FF4D0B] text-sm font-semibold">Agenda</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Cronograma del <span className="text-[#FF4D0B]">Evento</span>
          </h2>
          <p className="text-stone-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Una jornada intensiva de 3 horas diseñada para maximizar tu aprendizaje y networking
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
              <div className="ml-8 flex-1 bg-gradient-to-br from-black/80 to-black/60 backdrop-blur-xl rounded-2xl p-6 border-2 border-[#FF4D0B]/20 shadow-2xl hover:shadow-[#FF4D0B]/10 transition-all duration-500 hover:scale-105">
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

                {/* Si description es array, lo mostramos como lista */}
                {Array.isArray(item.description) ? (
                  <ul className="list-disc list-inside text-stone-300 space-y-1">
                    {item.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-stone-300 leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
