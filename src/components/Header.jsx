import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

// Header Responsive
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-[#FF4D0B]/20 shadow-2xl">
      <div className="container mx-auto px-4 py-4 sm:py-6 flex items-center justify-between h-full">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="./dignita.png" 
            alt="Dignita Logo" 
             className="h-12 sm:h-14 w-auto mr-3 drop-shadow-lg transition-shadow duration-300 ease-in-out
             hover:drop-shadow-[0_0_15px_rgba(255,77,11,0.7)]"
          />
          <h2 className="text-white font-bold text-xl sm:text-2xl tracking-wide drop-shadow-lg">
            Tech & <span className="text-[#FF4D0B]">Blockchain</span>
          </h2>
        </div>

        {/* Menú Desktop */}
        <nav className="hidden md:flex items-center gap-6">
          <a 
            href="#content" 
            className="text-white hover:text-[#FF4D0B] transition-all duration-300 font-medium relative group text-sm"
          >
            Contenido
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF4D0B] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a 
            href="#speakers" 
            className="text-white hover:text-[#FF4D0B] transition-all duration-300 font-medium relative group text-sm"
          >
            Ponentes
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF4D0B] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a 
            href="#place" 
            className="text-white hover:text-[#FF4D0B] transition-all duration-300 font-medium relative group text-sm"
          >
            Lugar
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF4D0B] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a 
            href="#schedule" 
            className="text-white hover:text-[#FF4D0B] transition-all duration-300 font-medium relative group text-sm"
          >
            Cronograma
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF4D0B] transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>

        {/* Botón Desktop */}
        <div className="hidden md:block">
          <Button
            size="default"
            className="bg-[#FF4D0B] hover:bg-[#FF4D0B]/90 text-white shadow-lg border border-[#FF4D0B]/30 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm px-6 py-2 text-base font-medium"
            onClick={() => {
              const registrationSection = document.getElementById('registration');
              if (registrationSection) {
                registrationSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Regístrate
          </Button>
        </div>

        {/* Botón hamburguesa Mobile */}
        <button
          className="md:hidden text-white hover:bg-[#FF4D0B]/20 p-2 rounded-lg transition-all duration-300 backdrop-blur-sm border border-[#FF4D0B]/20"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menú Mobile desplegable */}
      {menuOpen && (
        <div className="md:hidden top-full left-0 w-full bg-black/95 backdrop-blur-xl border-t border-[#FF4D0B]/20 px-4 py-6 space-y-4 shadow-2xl animate-in fade-in slide-in-from-top duration-300 z-40">
          <a
            href="#content"
            className="block text-white hover:text-[#FF4D0B] transition-all duration-300 font-medium py-3 px-4 rounded-xl hover:bg-[#FF4D0B]/10 hover:backdrop-blur-md border border-[#FF4D0B]/20 hover:border-[#FF4D0B]/40 text-sm"
            onClick={() => setMenuOpen(false)}
          >
            Contenido
          </a>
          <a
            href="#speakers"
            className="block text-white hover:text-[#FF4D0B] transition-all duration-300 font-medium py-3 px-4 rounded-xl hover:bg-[#FF4D0B]/10 hover:backdrop-blur-md border border-[#FF4D0B]/20 hover:border-[#FF4D0B]/40 text-sm"
            onClick={() => setMenuOpen(false)}
          >
            Ponentes
          </a>
          <a
            href="#place"
            className="block text-white hover:text-[#FF4D0B] transition-all duration-300 font-medium py-3 px-4 rounded-xl hover:bg-[#FF4D0B]/10 hover:backdrop-blur-md border border-[#FF4D0B]/20 hover:border-[#FF4D0B]/40 text-sm"
            onClick={() => setMenuOpen(false)}
          >
            Lugar
          </a>
          <a
            href="#schedule"
            className="block text-white hover:text-[#FF4D0B] transition-all duration-300 font-medium py-3 px-4 rounded-xl hover:bg-[#FF4D0B]/10 hover:backdrop-blur-md border border-[#FF4D0B]/20 hover:border-[#FF4D0B]/40 text-sm"
            onClick={() => setMenuOpen(false)}
          >
            Cronograma
          </a>
          <Button
            size="sm"
            className="w-full bg-[#FF4D0B] hover:bg-[#FF4D0B]/90 text-white shadow-lg mt-3 border border-[#FF4D0B]/30 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm text-sm font-medium"
            onClick={() => {
              setMenuOpen(false);
              const registrationSection = document.getElementById('registration');
              if (registrationSection) {
                registrationSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Regístrate
          </Button>
        </div>
      )}
    </header>
  );
}