import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

// Header Responsive
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b-2 border-[#FF4D0B]/30 shadow-2xl">
      <div className="container mx-auto px-3 sm:px-4 py-1.5 sm:py-2 md:py-4 flex items-center justify-between h-full min-h-[50px] sm:min-h-[60px] md:min-h-[80px]">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <img 
            src="./dignita.png" 
            alt="Dignita Logo" 
             className="h-6 sm:h-8 md:h-10 lg:h-12 w-auto mr-2 sm:mr-3 drop-shadow-lg transition-shadow duration-300 ease-in-out
             hover:drop-shadow-[0_0_15px_rgba(255,77,11,0.7)]"
          />
          <h2 className="text-white font-bold text-sm sm:text-lg md:text-xl lg:text-2xl tracking-wide drop-shadow-lg whitespace-nowrap">
            Tech & <span className="text-[#FF4D0B]">Block</span>
          </h2>
        </div>

        {/* Menú Desktop */}
        <nav className="hidden lg:flex items-center space-x-8">
          <a href="#hero" className="text-white hover:text-[#FF4D0B] transition-colors selection-line selection-line-nav">
            Inicio
          </a>
          <a href="#content" className="text-white hover:text-[#FF4D0B] transition-colors selection-line selection-line-nav">
            Contenido
          </a>
          <a href="#profiles" className="text-white hover:text-[#FF4D0B] transition-colors selection-line selection-line-nav">
            Perfiles
          </a>
          <a href="#speakers" className="text-white hover:text-[#FF4D0B] transition-colors selection-line selection-line-nav">
            Ponentes
          </a>
          <a href="#schedule" className="text-white hover:text-[#FF4D0B] transition-colors selection-line selection-line-nav">
            Agenda
          </a>
          <a href="#registration" className="text-white hover:text-[#FF4D0B] transition-colors selection-line selection-line-nav">
            Registro
          </a>
        </nav>

        {/* Botón Desktop */}
        <div className="hidden lg:block">
          <Button
            size="default"
            className="bg-[#FF4D0B] hover:bg-[#FF4D0B]/90 rounded-2xl text-white shadow-lg border-2 border-[#FF4D0B]/30 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm px-4 lg:px-6 py-2 text-sm lg:text-base font-medium selection-line selection-line-button"
            onClick={() => {
              const registrationSection = document.getElementById('registration');
              if (registrationSection) {
                registrationSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Registrar
          </Button>
        </div>

        {/* Botón hamburguesa Mobile */}
        <button
          className="lg:hidden text-white hover:bg-[#FF4D0B]/20 p-1.5 sm:p-2 rounded-2xl transition-all duration-300 backdrop-blur-sm border-2 border-[#FF4D0B]/20 flex-shrink-0"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={18} className="sm:w-5 sm:h-5" /> : <Menu size={18} className="sm:w-5 sm:h-5" />}
        </button>
      </div>

      {/* Menú Mobile desplegable */}
      {menuOpen && (
        <div className="lg:hidden top-full left-0 w-full bg-black/95 backdrop-blur-xl border-t-2 border-[#FF4D0B]/30 px-3 sm:px-4 py-3 sm:py-4 space-y-2 sm:space-y-3 shadow-2xl animate-in fade-in slide-in-from-top duration-300 z-40">
          <a
            href="#hero"
            className="block text-white hover:text-[#FF4D0B] transition-all duration-300 font-medium py-2 sm:py-2.5 px-3 sm:px-4 rounded-2xl hover:bg-[#FF4D0B]/10 hover:backdrop-blur-md border-2 border-[#FF4D0B]/20 hover:border-[#FF4D0B]/40 text-sm selection-line selection-line-nav"
            onClick={() => setMenuOpen(false)}
          >
            Inicio
          </a>
          <a
            href="#content"
            className="block text-white hover:text-[#FF4D0B] transition-all duration-300 font-medium py-2 sm:py-2.5 px-3 sm:px-4 rounded-2xl hover:bg-[#FF4D0B]/10 hover:backdrop-blur-md border-2 border-[#FF4D0B]/20 hover:border-[#FF4D0B]/40 text-sm selection-line selection-line-nav"
            onClick={() => setMenuOpen(false)}
          >
            Contenido
          </a>
          <a
            href="#profiles"
            className="block text-white hover:text-[#FF4D0B] transition-all duration-300 font-medium py-2 sm:py-2.5 px-3 sm:px-4 rounded-2xl hover:bg-[#FF4D0B]/10 hover:backdrop-blur-md border-2 border-[#FF4D0B]/20 hover:border-[#FF4D0B]/40 text-sm selection-line selection-line-nav"
            onClick={() => setMenuOpen(false)}
          >
            Perfiles
          </a>
          <a
            href="#speakers"
            className="block text-white hover:text-[#FF4D0B] transition-all duration-300 font-medium py-2 sm:py-2.5 px-3 sm:px-4 rounded-2xl hover:bg-[#FF4D0B]/10 hover:backdrop-blur-md border-2 border-[#FF4D0B]/20 hover:border-[#FF4D0B]/40 text-sm selection-line selection-line-nav"
            onClick={() => setMenuOpen(false)}
          >
            Ponentes
          </a>
          <a
            href="#schedule"
            className="block text-white hover:text-[#FF4D0B] transition-all duration-300 font-medium py-2 sm:py-2.5 px-3 sm:px-4 rounded-2xl hover:bg-[#FF4D0B]/10 hover:backdrop-blur-md border-2 border-[#FF4D0B]/20 hover:border-[#FF4D0B]/40 text-sm selection-line selection-line-nav"
            onClick={() => setMenuOpen(false)}
          >
            Agenda
          </a>
          <Button
            size="sm"
            className="w-full bg-[#FF4D0B] hover:bg-[#FF4D0B]/90 text-white shadow-lg mt-2 sm:mt-3 border-2 border-[#FF4D0B]/30 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm text-sm font-medium selection-line selection-line-button"
            onClick={() => {
              setMenuOpen(false);
              const registrationSection = document.getElementById('registration');
              if (registrationSection) {
                registrationSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Registro obligatorio
          </Button>
        </div>
      )}
    </header>
  );
}