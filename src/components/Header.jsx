import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

// Header Responsive
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black opacity-70 backdrop-blur-xl border-b border-white/20 shadow-2xl">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between h-full">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="./dignita.png" 
            alt="Dignita Logo" 
             className="h-10 w-auto mr-3 drop-shadow-lg transition-shadow duration-300 ease-in-out
             hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.7)]"
          />
          <h2 className="text-white font-bold text-xl tracking-wide drop-shadow-lg ">
            Tech & <span className="text-orange-300">Cryptop</span>
          </h2>
        </div>

        {/* Menú Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          <a 
            href="#agendar" 
            className="text-white hover:text-orange-300 transition-all duration-300 font-medium relative group"
          >
            Contenido
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-300 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a 
            href="#sponsor" 
            className="text-white hover:text-orange-300 transition-all duration-300 font-medium relative group"
          >
            Itinerario
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-300 transition-all duration-300 group-hover:w-full"></span>
          </a>

           <a 
            href="#Place" 
            className="text-white hover:text-orange-300 transition-all duration-300 font-medium relative group"
          >
            Lugar
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-300 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>

        {/* Botón Desktop */}
        <div className="hidden md:block">
         
        </div>

        {/* Botón hamburguesa Mobile */}
        <button
          className="md:hidden text-white hover:bg-white/20 p-2 rounded-lg transition-all duration-300 backdrop-blur-sm"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menú Mobile desplegable */}
      {menuOpen && (
        <div className="md:hidden top-full left-0 w-full  border-t border-white/20 px-4 py-6 space-y-4 shadow-2xl animate-in fade-in slide-in-from-top duration-300 z-40">
          <a
            href="#registrate"
            className="block text-white hover:text-orange-300 transition-all duration-300 font-medium py-3 px-4 rounded-xl hover:bg-white/10 hover:backdrop-blur-md border border-white/10 hover:border-white/20"
            onClick={() => setMenuOpen(false)}
          >
              Contenido
          </a>
          <a
            href="#agendar"
            className="block text-white hover:text-orange-300 transition-all duration-300 font-medium py-3 px-4 rounded-xl hover:bg-white/10 hover:backdrop-blur-md border border-white/10 hover:border-white/20"
            onClick={() => setMenuOpen(false)}
          >
            Itinerario
          </a>
          <a
            href="#sponsor"
            className="block text-white hover:text-orange-300 transition-all duration-300 font-medium py-3 px-4 rounded-xl hover:bg-white/10 hover:backdrop-blur-md border border-white/10 hover:border-white/20"
            onClick={() => setMenuOpen(false)}
          >
            Lugar
          </a>
          <Button
            size="sm"
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg mt-3 border border-white/20 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          >
            Regístrate
          </Button>
        </div>
      )}
    </header>
  );
}