import { Button } from "./ui/button";
import { Calendar, MapPin, Users, Clock } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-stone-900 via-stone-900 to-stone-800 flex items-center justify-center overflow-hidden">
      {/* Background abstract pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#FF4D0B] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-[#FF4D0B] rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#FF4D0B] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        {/* Event Date Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
          <Calendar className="w-4 h-4 text-white" />
          <span className="text-white text-sm font-medium">29 agosto 2025 • 7:00 PM - 9:00 PM</span>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Tech & Crypto<br />
          <span className="text-[#FF4D0B]">Day 2025</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-stone-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          Un encuentro único para aprender, conectar y crecer en el mundo de la innovación tecnológica. 
          Descubre cómo las últimas tendencias en IA, blockchain, RPA y transformación digital pueden 
          potenciar tu carrera y tu negocio.
        </p>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
            <MapPin className="w-6 h-6 text-[#FF4D0B] mb-3 mx-auto" />
            <h3 className="text-white font-semibold mb-2">Auditorio CIP</h3>
            <p className="text-stone-300 text-sm">Lima, Perú</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
            <Users className="w-6 h-6 text-[#FF4D0B] mb-3 mx-auto" />
            <h3 className="text-white font-semibold mb-2">Cupos Limitados</h3>
            <p className="text-stone-300 text-sm">Registro temprano</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
            <Clock className="w-6 h-6 text-[#FF4D0B] mb-3 mx-auto" />
            <h3 className="text-white font-semibold mb-2">2 Horas Intensivas</h3>
            <p className="text-stone-300 text-sm">Contenido de valor</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button size="lg" className="bg-[#FF4D0B] hover:bg-[#FF4D0B]/90 text-white px-8 py-3 text-lg">
            Regístrate Ahora
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-stone-900 px-8 py-3 text-lg">
            Ver Itinerario
          </Button>
        </div>

        {/* Organizers */}
        <div className="border-t border-white/20 pt-8">
          <p className="text-stone-400 text-sm mb-4">Organizado por:</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <div className="text-center">
              <h4 className="text-white font-semibold">Dignita.tech</h4>
              <p className="text-stone-400 text-xs">Transformación Digital</p>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/30"></div>
            <div className="text-center">
              <h4 className="text-white font-semibold">Crypnita</h4>
              <p className="text-stone-400 text-xs">Blockchain & Cripto</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
