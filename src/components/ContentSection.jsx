import { BookOpen, Users, Bot, Globe, Brain, Settings, TrendingUp, Check } from "lucide-react";

export function ContentSection() {
  const topics = [
    {
      icon: <BookOpen className="w-6 h-6 text-[#FF4D0B]" />,
      title: "Framework & Casos de Automatización",
      description: "Metodologías probadas y casos reales de implementación"
    },
    {
      icon: <Users className="w-6 h-6 text-[#FF4D0B]" />,
      title: "Consejo CIT - Tecnología e Innovación",
      description: "Estrategias de innovación tecnológica empresarial"
    },
    {
      icon: <Globe className="w-6 h-6 text-[#FF4D0B]" />,
      title: "Módulo Web3 y Blockchain",
      description: "Tecnologías descentralizadas y su aplicación práctica"
    },
    {
      icon: <Bot className="w-6 h-6 text-[#FF4D0B]" />,
      title: "Inteligencia Artificial Aplicada",
      description: "Implementación real de IA en procesos empresariales"
    },
    {
      icon: <Settings className="w-6 h-6 text-[#FF4D0B]" />,
      title: "Sistematización de Procesos",
      description: "Optimización y automatización de flujos de trabajo"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-[#FF4D0B]" />,
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
    <section id="content" className="py-20 bg-gradient-to-b from-black to-stone-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#FF4D0B] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#FF4D0B] rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 rounded-2xl border-2 border-[#FF4D0B] mb-6 backdrop-blur-sm bg-black/20">
            <span className="text-[#FF4D0B] text-sm font-semibold">Qué aprenderás</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 px-4">
            Contenido de <span className="text-[#FF4D0B]">alto impacto</span>
          </h2>
          <p className="text-stone-300 text-lg max-w-3xl mx-auto leading-relaxed px-4">
            Talleres prácticos y conferencias magistrales diseñadas para llevarte del conocimiento teórico a la implementación real.
          </p>
        </div>

        {/* Intensive Content Card */}
        <div className="flex justify-center mb-16 px-4">
          <div className="bg-white rounded-2xl p-8 border-2 border-[#FF4D0B] shadow-2xl w-full max-w-md mx-auto">
            <div className="text-center mb-6">
              <h3 className="text-4xl font-bold bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 text-transparent mb-2">3 HORAS</h3>
              <p className="text-black text-lg">de contenido intensivo</p>
            </div>
            <div className="space-y-4">
              {intensiveContent.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-[#FF4D0B] flex-shrink-0" />
                  <span className="text-black font-medium text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {topics.map((topic, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-black/80 to-black/60 backdrop-blur-xl rounded-2xl p-8 border-2 border-[#FF4D0B]/20 shadow-2xl hover:shadow-[#FF4D0B]/10 transition-all duration-500 hover:scale-105"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#FF4D0B]/10 rounded-2xl flex items-center justify-center group-hover:bg-[#FF4D0B]/20 transition-all duration-300">
                    {topic.icon}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FF4D0B] transition-colors duration-300 leading-tight">
                    {topic.title}
                  </h3>
                  <p className="text-stone-300 text-sm leading-relaxed">
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
