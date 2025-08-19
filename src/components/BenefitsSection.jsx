import { BookOpen, Bot, Users, Network, Award } from "lucide-react";

export function BenefitsSection() {
  const benefits = [
 {
  icon: <BookOpen className="w-20 h-20 text-[#FF4D0B] mx-auto" />,
  title: <span className="font-bold text-center block">Framework & Casos Reales</span>,
  description: (
    <p className="text-center">
      Metodologías probadas con ejemplos prácticos del mercado peruano
    </p>
  ),
},
       {
        
  icon: <Bot className="w-20 h-20 text-[#FF4D0B] mx-auto" />,
  title: <span className="font-bold text-center block">Automatización & IA</span>,
  description: (
    <p className="text-center">
      Herramientas de vanguardia para optimizar procesos empresariales
    </p>
  ),
},

   
    {
    icon: <Users className="w-20 h-20 text-[#FF4D0B] mx-auto" />,
    title: <span className="font-bold text-center block">Talleres Prácticos</span>,
    description: (
      <p className="text-center">
        Tecnologías descentralizadas y su aplicación en negocios.
      </p>
    ),
  },
  {
    icon: <Network className="w-20 h-20 text-[#FF4D0B] mx-auto" />,
    title: <span className="font-bold text-center block">Networking Premium</span>,
    description: (
      <p className="text-center">
        Conecta con líderes tecnológicos y emprendedores del sector.
      </p>
    ),
  },
  {
    icon: <Award className="w-20 h-20 text-[#FF4D0B] mx-auto" />,
    title: <span className="font-bold text-center block">Certificación CIP</span>,
    description: (
      <p className="text-center">
        Reconocimiento oficial del Colegio de Ingenieros del Perú.
      </p>
    ),
  }
    
  ];

  return (
    <section id="benefits" className="py-20 bg-gradient-to-b from-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-lg border border-[#FF4D0B] mb-6">
            <span className="text-[#FF4D0B] text-sm font-semibold">Beneficios</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-6">
          Una experiencia única
de <span className="text-orange-600">aprendizaje </span>
          </h2>
          <p className="text-stone-300 text-2xl max-w-2xl mx-auto">
Sumérgete en un evento diseñado para
acelerar tu transformación digital y dominio
de tecnologías emergentes


          </p>
        </div>
        

       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
  {benefits.map((benefit, index) => (
    <div
      key={index}
      className="group bg-stone-800 rounded-xl p-8 border border-stone-700 hover:border-[#FF4D0B] transition-all duration-300 hover:shadow-lg hover:shadow-[#FF4D0B]/20 flex flex-col items-center text-center"
    >
      <div className="mb-6">
        {benefit.icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
      <p className="text-stone-300 leading-relaxed">{benefit.description}</p>
    </div>
  ))}
</div>
      </div>
    </section>
  );
}
