import { ImageWithFallback } from "./figma/ImageWithFallback";

export function OrganizersSection() {
  const organizers = [
    {
      name: "Dignita.tech",
      type: "Organizador Principal",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=100&fit=crop"
    },
    {
      name: "InnovaLatam", 
      type: "Co-organizador",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop"
    },
    {
      name: "Perú Digital Hub",
      type: "Co-organizador", 
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop"
    }
  ];

  const allies = [
    { name: "TechVision", logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=150&h=75&fit=crop" },
    { name: "CodeBridge", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=150&h=75&fit=crop" },
    { name: "DataWave", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=150&h=75&fit=crop" },
    { name: "Future Minds", logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=150&h=75&fit=crop" },
    { name: "AI Perú", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=150&h=75&fit=crop" },
    { name: "Latam Blockchain Alliance", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=150&h=75&fit=crop" }
  ];

  return (
    <section className="py-20 bg-stone-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-md border border-[#FF4D0B] mb-6">
            <span className="text-[#FF4D0B] text-sm font-semibold">Organizadores y Aliados</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-6">
            Respaldado por líderes del sector
          </h2>
          <p className="text-stone-300 text-lg max-w-2xl mx-auto">
            Instituciones y organizaciones que confían en nuestra visión de transformación digital
          </p>
        </div>

        {/* Organizadores */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-white text-center mb-8">
            Organizadores
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {organizers.map((org, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video bg-gray-50 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  <ImageWithFallback
                    src={org.logo}
                    alt={org.name}
                    className="w-full h-full object-contain p-4"
                  />
                </div>
                <h4 className="text-lg font-semibold text-stone-900 text-center mb-2">
                  {org.name}
                </h4>
                <div className="text-center">
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-[#FF4D0B]/10 to-[#FF4D0B]/5 text-[#FF4D0B] text-xs font-medium rounded-full border border-[#FF4D0B]/20">
                    {org.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Aliados Estratégicos */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-white text-center mb-8">
            Aliados Estratégicos
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {allies.map((ally, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 grayscale hover:grayscale-0">
                <div className="aspect-video bg-gray-50 rounded flex items-center justify-center overflow-hidden">
                  <ImageWithFallback
                    src={ally.logo}
                    alt={ally.name}
                    className="w-full h-full object-contain p-2"
                  />
                </div>
                <p className="text-xs text-stone-700 text-center mt-2 font-medium">
                  {ally.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA para alianzas */}
        <div className="bg-gradient-to-r from-[#FF4D0B]/10 to-[#FF4D0B]/5 rounded-xl p-8 max-w-4xl mx-auto border border-[#FF4D0B]/20">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-white mb-4">
              ¿Quieres ser parte de nuestra red de aliados?
            </h3>
            <p className="text-stone-300 mb-6">
              Únete a las organizaciones que están impulsando la transformación digital en el Perú.
              Contáctanos para explorar oportunidades de colaboración.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#FF4D0B] hover:bg-[#FF4D0B]/90 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Contactar para Alianzas
              </button>
              <button className="border border-[#FF4D0B] text-[#FF4D0B] hover:bg-[#FF4D0B] hover:text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Información de Patrocinio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
