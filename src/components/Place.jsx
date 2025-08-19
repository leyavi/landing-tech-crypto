import { useState, useEffect } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Place() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Información del lugar
  const placeInfo = {
    name: "Colegio de Ingenieros del Perú",
    address: "Av. Pacífico Mz. C1 Lt. 11",
    city: "Nuevo Chimbote",
    region: "Ancash, Perú",
    description: "Institución deontológica sin fines de lucro que representa y agrupa a los ingenieros profesionales del Perú, promoviendo la práctica de valores éticos y elevando la calidad de la ingeniería en el desarrollo nacional.",
    features: [
      "Sala de conferencias equipada",
      "WiFi de alta velocidad",
      "Estacionamiento disponible",
      "Área de networking",
      "Espacios para eventos profesionales"
    ],
    contact: {
      phone: "043-316270",
      mobile: "+51 988005567",
      email: "cip.chimbote@cip.org.pe",
      hours: "Lunes a Viernes: 8:00 AM - 6:00 PM"
    },
    googleMapsUrl: "https://www.google.com/maps?sca_esv=280c54e349802271&rlz=1C1ONGR_esPE1176PE1176&sxsrf=AE3TifMMhpX8FpfMWbWHgmierD88kq_p3w:1755559311184&uact=5&gs_lp=Egxnd3Mtd2l6LXNlcnAiJ2NvbGVnaW8gZGUgaW5nZW5pZXJvcyBkZWwgcGVydSBjaGltYm90ZTILEC4YgAQYxwEYrwEyBhAAGBYYHjIGEAAYFhgeMgIQJjIIEAAYgAQYogQyBRAAGO8FMggQABiABBiiBDIIEAAYgAQYogRIphNQuwFY1xFwAXgAkAEAmAHSAaABvQqqAQUwLjkuMbgBA8gBAPgBAZgCCqACvwvCAgoQABiwAxjWBBhHwgINEAAYgAQYsAMYQxiKBcICBRAAGIAEmAMAiAYBkAYMkgcDMS45oAesoQGyBwMwLjm4B4ULwgcHMy0xLjcuMsgHsQI&um=1&ie=UTF-8&fb=1&gl=pe&sa=X&geocode=KV3GaKuyhauRMdW6vASiyzvA&daddr=VFCH%2BJQG,+Av.+Pac%C3%ADfico,+Nuevo+Chimbote+02711"
  };

  const handleGoogleMapsClick = () => {
    window.open(placeInfo.googleMapsUrl, '_blank');
  };

  return (
    <section id="place" className="py-20 bg-gradient-to-b from-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-20 w-24 h-24 bg-[#FF4D0B] rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-20 w-32 h-32 bg-[#FF4D0B] rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#FF4D0B] rounded-full blur-3xl opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 rounded-lg border border-[#FF4D0B] mb-6 backdrop-blur-sm bg-black/20">
            <span className="text-[#FF4D0B] text-sm font-semibold">
              ¿Dónde se realizará?
            </span>
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">
            Ubicación del Evento
          </h2>
          <p className="text-white text-lg max-w-2xl mx-auto leading-relaxed">
            Un espacio profesional diseñado para conectar, aprender y crear el futuro de la tecnología
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Información del lugar */}
            <div className="space-y-8">
              {/* Dirección principal */}
              <div 
                className="bg-gradient-to-br from-black/80 to-black/60 backdrop-blur-xl rounded-2xl p-8 border border-[#FF4D0B]/20 shadow-2xl hover:shadow-[#FF4D0B]/10 transition-all duration-500"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#FF4D0B] rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{placeInfo.name}</h3>
                    <p className="text-[#FF4D0B] font-semibold">{placeInfo.address}</p>
                    <p className="text-white text-sm">{placeInfo.city}, {placeInfo.region}</p>
                  </div>
                </div>
                
                <p className="text-white leading-relaxed mb-6">
                  {placeInfo.description}
                </p>

                {/* Características */}
                <div className="space-y-3">
                  <h4 className="text-white font-semibold mb-4">Características del lugar:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {placeInfo.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-white">
                        <div className="w-2 h-2 bg-[#FF4D0B] rounded-full mr-3"></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Información de contacto */}
              <div className="bg-black rounded-2xl p-6 border border-[#FF4D0B]/20 shadow-xl">
                <h4 className="text-white font-semibold mb-4 flex items-center">
                  <svg className="w-5 h-5 text-[#FF4D0B] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Información de Contacto
                </h4>
                <div className="space-y-3 text-sm text-white">
                  <div className="flex items-center">
                    <span className="text-[#FF4D0B] font-medium w-20">Teléfono:</span>
                    <span>{placeInfo.contact.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-[#FF4D0B] font-medium w-20">Celular:</span>
                    <span>{placeInfo.contact.mobile}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-[#FF4D0B] font-medium w-20">Email:</span>
                    <span>{placeInfo.contact.email}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-[#FF4D0B] font-medium w-20">Horario:</span>
                    <span>{placeInfo.contact.hours}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Imagen del lugar */}
            <div className="relative">
              <div className="relative group">
                {/* Imagen principal */}
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
                  <ImageWithFallback
                    src="./Colegio.png"
                    alt="Colegio de Ingenieros del Perú - Lugar del evento"
                    className="w-full h-auto transform transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay con información */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <div className="bg-black/70 backdrop-blur-sm rounded-xl p-4 border border-[#FF4D0B]/30">
                      <h4 className="text-white font-semibold mb-2">Institución Profesional</h4>
                      <p className="text-white text-sm">
                        Espacio oficial del Colegio de Ingenieros del Perú para eventos tecnológicos
                      </p>
                    </div>
                  </div>
                </div>

                {/* Elementos decorativos */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#FF4D0B] rounded-full opacity-80 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#FF4D0B] rounded-full opacity-60 animate-pulse delay-1000"></div>
              </div>

              {/* Botón de acción */}
              <div className="mt-8 text-center">
                <button 
                  onClick={handleGoogleMapsClick}
                  className="bg-[#FF4D0B] hover:bg-[#FF4D0B]/90 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#FF4D0B]/25 flex items-center mx-auto"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3" />
                  </svg>
                  Ver en Google Maps
                </button>
              </div>
            </div>
          </div>

          {/* Sección adicional con información institucional */}
          <div className="mt-20">
            <div className="bg-black rounded-2xl p-8 border border-[#FF4D0B]/20 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Sobre el Colegio de Ingenieros del Perú</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-[#FF4D0B] font-semibold text-lg mb-3">Misión</h4>
                  <p className="text-white text-sm leading-relaxed">
                    Somos una institución deontológica, sin fines de lucro, que representa y agrupa a los ingenieros profesionales del Perú, 
                    cautelando el comportamiento ético de sus miembros y asegurando una profesión nacional que ejerce la ingeniería con orden, 
                    respeto, competitividad, calidad y ética.
                  </p>
                </div>
                <div>
                  <h4 className="text-[#FF4D0B] font-semibold text-lg mb-3">Visión</h4>
                  <p className="text-white text-sm leading-relaxed">
                    Ser reconocida como una institución sólida que patrocina el manejo eficiente del conocimiento, 
                    orientando a la sociedad peruana en las grandes decisiones y fomentando la práctica de valores 
                    éticos de los ingenieros profesionales.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
