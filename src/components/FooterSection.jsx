import { Mail, Phone, MapPin, ExternalLink, Heart, Linkedin, Instagram, Twitter, Youtube } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function FooterSection() {
  return (
    <footer id="footer" className="bg-black border-t-2 border-[#FF4D0B]/30">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
           <img src="./3.png" alt="Dignita Tech Logo" className="w-auto h-12 md:h-16 lg:h-20 max-w-full object-contain mb-5" />
            <p className="text-stone-300 mb-6 leading-relaxed">
              Transformamos organizaciones a través de la innovación tecnológica. 
              Especialistas en IA, automatización, sistematización y transformación digital.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#FF4D0B]" />
                <a href="mailto:info@dignita.tech" className="text-stone-300 hover:text-white transition-colors">
                  info@dignita.tech
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#FF4D0B]" />
                <a href="tel:+51 930 591 017" className="text-stone-300 hover:text-white transition-colors">
                  +51 930 591 017"
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#FF4D0B]" />
                <span className="text-stone-300">Nuevo Chimbote, Perú</span>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <a 
                href="https://www.linkedin.com/in/businessintelligencelatam?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#0077B5] border-2 border-[#0077B5] rounded-md flex items-center justify-center hover:bg-[#0077B5]/90 hover:border-[#0077B5]/80 transition-all duration-300 group shadow-lg hover:shadow-xl"
              >
                <Linkedin className="w-4 h-4 text-white group-hover:text-white" />
              </a>
              <a 
                href="https://www.linkedin.com/company/dignita.tech/?originalSubdomain=pe"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#0077B5] border-2 border-[#0077B5] rounded-md flex items-center justify-center hover:bg-[#0077B5]/90 hover:border-[#0077B5]/80 transition-all duration-300 group shadow-lg hover:shadow-xl"
              >
                <Linkedin className="w-4 h-4 text-white group-hover:text-white" />
              </a>
              <a 
                href="https://www.linkedin.com/in/leonidasyauri/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#0077B5] border-2 border-[#0077B5] rounded-md flex items-center justify-center hover:bg-[#0077B5]/90 hover:border-[#0077B5]/80 transition-all duration-300 group shadow-lg hover:shadow-xl"
              >
                <Linkedin className="w-4 h-4 text-white group-hover:text-white" />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Enlaces Rápidos
            </h4>
            <nav className="space-y-3">
              {['Sobre el Evento', 'Speakers', 'Agenda', 'Registro'].map((link) => (
                <a 
                  key={link} 
                  href="#" 
                  className="block text-stone-300 hover:text-white transition-colors"
                >
                  {link}
                </a>
              ))}
            </nav>

            <div className="mt-8 bg-gradient-to-r from-[#FF4D0B]/10 to-[#FF4D0B]/5 rounded-lg p-4 border-2 border-[#FF4D0B]/30">
              <h5 className="text-white font-medium mb-2">Tech & Block 2025</h5>
              <div className="text-stone-400 text-sm space-y-1">
                <p>29 agosto 2025</p>
                <p>7:00 PM - 9:45 PM</p>
                <p>Finalización</p>
              </div>
            </div>
          </div>

          {/* Legal & Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Legal</h4>
            <nav className="space-y-3 mb-8">
              {['Términos y Condiciones', 'Política de Privacidad', 'Política de Cookies', 'Código de Conducta'].map((link) => (
                <a 
                  key={link} 
                  href="#" 
                  className="block text-stone-300 hover:text-white transition-colors text-sm"
                >
                  {link}
                </a>
              ))}
            </nav>

            <div>
              <h5 className="text-white font-medium mb-3">Newsletter</h5>
              <p className="text-stone-300 text-sm mb-4">
                Recibe noticias sobre tecnología y próximos eventos
              </p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="tu@email.com"
                  className="bg-stone-800 border-stone-600 text-white placeholder:text-stone-400 text-sm"
                />
                <Button size="sm" className="bg-[#FF4D0B] hover:bg-[#FF4D0B]/90">
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-stone-400 text-sm">
            © 2025 Dignita.tech. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-2 text-stone-400 text-sm">
            <span>Hecho con</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>en Perú</span>
          </div>
          <p className="text-stone-400 text-sm">
            En colaboración con Crypnita
          </p>
        </div>
      </div>
    </footer>
  );
}
