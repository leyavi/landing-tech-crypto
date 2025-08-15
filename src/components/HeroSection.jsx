import { Button } from "./ui/button";
import { Calendar, MapPin, Users, Clock} from "lucide-react";
import { Header } from "./Header";


// HeroSection con header integrado
export function HeroSection() {
  return (
    <>
      <Header />
      <section className="relative min-h-screen bg-gradient-to-br from-stone-900 via-stone-900 to-stone-800 flex items-center justify-center overflow-hidden pt-[65px]">
        {/* Fondo abstracto mejorado */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#FF4D0B] rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-[#FF4D0B] rounded-full blur-3xl animate-pulse-slow delay-300"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#FF4D0B] rounded-full blur-3xl animate-pulse-slow delay-700"></div>
        </div>

        <div className="container mx-auto px-4 py-16 md:py-28 text-center relative z-10">
          {/* Fecha */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 shadow-md hover:shadow-lg transition-shadow">
            <Calendar className="w-4 h-4 text-white" />
            <span className="text-white text-sm font-medium">29 agosto 2025 • 7:00 PM - 9:45 PM</span>
          </div>

          {/* Título con mejor jerarquía */}
          <div className="mb-10">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight tracking-tight drop-shadow-xl">
              Tech & Crypto<br />
              <span className="text-[#FF4D0B] bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700 text-transparent">
                Day 2025
              </span>
            </h1>
            <div className="w-24 h-1 bg-[#FF4D0B] mx-auto my-6 rounded-full shadow-md"></div>
          </div>

          {/* Subtítulo */}
          <p className="text-xl md:text-2xl text-stone-300 mb-12 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
            Un encuentro único para aprender, conectar y crecer en el mundo de la innovación tecnológica. 
            Descubre cómo las últimas tendencias en IA, blockchain, RPA y transformación digital pueden 
            potenciar tu carrera y tu negocio.
          </p>

          {/* Features con mejor diseño */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
            {[
              {
                icon: <MapPin className="w-6 h-6 text-[#FF4D0B] mb-3 mx-auto" />,
                title: "Auditorio CIP",
                desc: "Nuevo Chimbote, Perú"
              },
              {
                icon: <Users className="w-6 h-6 text-[#FF4D0B] mb-3 mx-auto" />,
                title: "Cupos Limitados",
                desc: "Registro temprano"
              },
              {
                icon: <Clock className="w-6 h-6 text-[#FF4D0B] mb-3 mx-auto" />,
                title: "2 Horas Intensivas",
                desc: "Contenido de valor"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-[#FF4D0B]/30 hover:-translate-y-1"
              >
                {item.icon}
                <h3 className="text-white font-semibold mb-2 text-lg">{item.title}</h3>
                <p className="text-stone-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Botones con mejor spacing */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-[#FF4D0B] hover:bg-[#FF4D0B]/90 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
            >
              Regístrate Ahora
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-stone-900 px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
            >
              Ver Itinerario
            </Button>
          </div>

          {/* Organizadores con mejor diseño */}
          <div className="border-t border-white/20 pt-8 max-w-2xl mx-auto">
            <p className="text-stone-400 text-sm mb-6 tracking-wider">ORGANIZADO POR:</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                <div className="text-center bg-white/5 backdrop-blur-sm px-6 py-3 rounded-lg shadow-inner">
                 <div className="flex items-center justify-center gap-3 mb-2">
                   <img src="src/img/3.png" alt="Dignita.tech logo" className=" h-8" />
                 </div>
                 <p className="text-stone-400 text-xs">Transformación Digital</p>
               </div>
              <div className="hidden sm:block w-px h-10 bg-white/30"></div>
              <div className="text-center bg-white/5 backdrop-blur-sm px-6 py-3 rounded-lg shadow-inner">
                <div className="flex items-center justify-center gap-3 mb-2">
                   <img src="src/img/4.png" alt="Dignita.tech logo" className="h-8" />
                 </div>
                <p className="text-stone-400 text-xs mt-1">Blockchain & Cripto</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}