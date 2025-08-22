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

        {/* 3 HORAS Text - Clean 3D without any shadows */}
        <div className="flex justify-center mb-16 px-4">
          <div className="relative group">
            {/* Main 3D text with gradient and glow effect */}
            <h3 className="relative text-6xl lg:text-8xl font-black bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 text-transparent text-center leading-none tracking-tight z-10 transition-all duration-300 hover-glow cursor-pointer">
              3 HORAS
            </h3>
            
            {/* Top highlight for 3D effect */}
            <h3 className="absolute inset-0 text-6xl lg:text-8xl font-black bg-clip-text bg-gradient-to-r from-white/60 via-white/30 to-transparent text-transparent text-center leading-none tracking-tight -z-5 translate-x-[-1px] translate-y-[-1px] transition-all duration-300 hover-glow">
              3 HORAS
            </h3>
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
