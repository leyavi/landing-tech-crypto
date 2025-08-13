import { Award, Users, TrendingUp } from "lucide-react";

export function BenefitsSection() {
  const benefits = [
    {
      icon: <Award className="w-8 h-8 text-[#FF4D0B]" />,
      title: "Certificación Online",
      description: "Obtén un certificado digital que respalde tus nuevos conocimientos y habilidades."
    },
    {
      icon: <Users className="w-8 h-8 text-[#FF4D0B]" />,
      title: "Networking de Alto Nivel",
      description: "Conecta con expertos y profesionales líderes que han creado productos digitales de impacto."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[#FF4D0B]" />,
      title: "Casos Reales de Éxito",
      description: "Aprende de experiencias y estrategias aplicadas en proyectos tecnológicos innovadores."
    }
  ];

  return (
    <section className="py-20 bg-stone-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-md border border-[#FF4D0B] mb-6">
            <span className="text-[#FF4D0B] text-sm font-semibold">Beneficios</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-6">
            Un encuentro que transformará tu perspectiva
          </h2>
          <p className="text-stone-300 text-lg max-w-2xl mx-auto">
            Instituciones y organizaciones que confían en nuestra visión de transformación digital
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="group bg-stone-800 rounded-xl p-8 hover:border-[#FF4D0B] border border-stone-700 transition-all duration-300 hover:shadow-lg hover:shadow-[#FF4D0B]/20"
            >
              <div className="mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {benefit.title}
              </h3>
              <p className="text-stone-300 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
