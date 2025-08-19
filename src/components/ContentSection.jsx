import { BookOpen, Users, Bot, Globe, Brain, Settings, TrendingUp, Check } from "lucide-react";

export function ContentSection() {
  const topics = [
    {
      icon: <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF4D0B]" />,
      title: "Framework & Casos de Automatización",
      description: "Metodologías probadas y casos reales de implementación"
    },
    {
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF4D0B]" />,
      title: "Consejo CIT - Tecnología e Innovación",
      description: "Estrategias de innovación tecnológica empresarial"
    },
    {
      icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF4D0B]" />,
      title: "Módulo Web3 y Blockchain",
      description: "Tecnologías descentralizadas y su aplicación práctica"
    },
    {
      icon: <Bot className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF4D0B]" />,
      title: "Inteligencia Artificial Aplicada",
      description: "Implementación real de IA en procesos empresariales"
    },
    {
      icon: <Settings className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF4D0B]" />,
      title: "Sistematización de Procesos",
      description: "Optimización y automatización de flujos de trabajo"
    },
    {
      icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF4D0B]" />,
      title: "Transformación Digital",
      description: "Estrategias para la evolución digital de organizaciones"
    }
  ];

  const intensiveContent = [
    "Framework práctico",
    "Casos de éxito",
    "Networking dirigido",
    "Material descargable"
  ];

  return (
    <section id="content" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-black to-stone-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-20 h-20 sm:w-32 sm:h-32 bg-[#FF4D0B] rounded-full blur-2xl sm:blur-3xl"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-24 h-24 sm:w-40 sm:h-40 bg-[#FF4D0B] rounded-full blur-2xl sm:blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block px-4 sm:px-6 py-2 sm:py-3 rounded-lg border border-[#FF4D0B] mb-4 sm:mb-6 backdrop-blur-sm bg-black/20">
            <span className="text-[#FF4D0B] text-xs sm:text-sm font-semibold">Qué aprenderás</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 px-4">
            Contenido de <span className="text-[#FF4D0B]">alto impacto</span>
          </h2>
          <p className="text-stone-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed px-4">
            Talleres prácticos y conferencias magistrales diseñadas para llevarte del conocimiento teórico a la implementación real.
          </p>
        </div>

        {/* Intensive Content Card */}
        <div className="flex justify-center mb-12 sm:mb-16 px-4">
          <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border-2 border-[#FF4D0B] shadow-2xl w-full max-w-sm sm:max-w-md mx-auto">
            <div className="text-center mb-4 sm:mb-6">
              <h3 className="text-3xl sm:text-4xl font-bold text-[#FF4D0B] mb-1 sm:mb-2">3 horas</h3>
              <p className="text-black text-base sm:text-lg">de contenido intensivo</p>
            </div>
            <div className="space-y-3 sm:space-y-4">
              {intensiveContent.map((item, index) => (
                <div key={index} className="flex items-center space-x-2 sm:space-x-3">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF4D0B] flex-shrink-0" />
                  <span className="text-black font-medium text-sm sm:text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto px-4">
          {topics.map((topic, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-black/80 to-black/60 backdrop-blur-xl rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-[#FF4D0B]/20 shadow-2xl hover:shadow-[#FF4D0B]/10 transition-all duration-500 hover:scale-105"
            >
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FF4D0B]/10 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:bg-[#FF4D0B]/20 transition-all duration-300">
                    {topic.icon}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-[#FF4D0B] transition-colors duration-300 leading-tight">
                    {topic.title}
                  </h3>
                  <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                    {topic.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
