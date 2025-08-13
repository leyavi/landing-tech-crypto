import { ImageWithFallback } from "./figma/ImageWithFallback";

export function SpeakersSection() {
  const speakers = [
    {
      name: "Clara Mendoza",
      role: "Chief Innovation Officer",
      company: "NeoTech Group",
      description: "Ha liderado la digitalización de procesos en multinacionales de banca y energía.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Rodrigo Salazar",
      role: "Lead Blockchain Architect",
      company: "BlockWave",
      description: "Especialista en arquitecturas descentralizadas aplicadas al sector logístico.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Gabriela Torres",
      role: "Head of AI Solutions",
      company: "DeepBridge Labs",
      description: "Experta en inteligencia artificial aplicada a productos SaaS para mercados emergentes.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Andrés Villalobos",
      role: "CTO",
      company: "QuantumApps",
      description: "Ha desarrollado plataformas escalables para e-commerce y fintech en LatAm.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-stone-900 to-stone-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-md border border-[#FF4D0B] mb-6">
            <span className="text-[#FF4D0B] text-sm font-semibold">Speakers</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-6">
            Aprende de los mejores
          </h2>
          <p className="text-stone-300 text-lg max-w-2xl mx-auto">
            Líderes tecnológicos que están transformando el panorama digital en Latinoamérica
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {speakers.map((speaker, index) => (
            <div 
              key={index} 
              className="bg-stone-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group hover:scale-105"
            >
              <div className="aspect-square overflow-hidden">
                <ImageWithFallback
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {speaker.name}
                </h3>
                <div className="mb-4">
                  <p className="text-[#FF4D0B] font-medium text-sm">
                    {speaker.role}
                  </p>
                  <p className="text-stone-400 text-sm">
                    {speaker.company}
                  </p>
                </div>
                <p className="text-stone-300 text-sm leading-relaxed">
                  {speaker.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#FF4D0B]/10 to-[#FF4D0B]/5 rounded-xl p-8 max-w-2xl mx-auto border border-[#FF4D0B]/20">
            <h3 className="text-xl font-semibold text-white mb-4">
              ¿Listo para aprender de los expertos?
            </h3>
            <p className="text-stone-300 mb-6">
              Únete a nosotros y obtén insights exclusivos de líderes que están definiendo el futuro tecnológico
            </p>
            <button className="bg-[#FF4D0B] hover:bg-[#FF4D0B]/90 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Reservar mi lugar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
