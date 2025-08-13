import { Shield, Award, Users, CheckCircle } from "lucide-react";

export function CIPEndorsementSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 relative overflow-hidden py-8 sm:py-12 md:py-16 lg:py-20">
     

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Glassmorphism Container - Centered */}
        <div className="max-w-6xl mx-auto">
          <div className="relative group">
            {/* Glassmorphism Background */}
            <div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/20 shadow-2xl"></div>
            
            {/* Content Container */}
            <div className="relative p-6 sm:p-8 md:p-12 lg:p-16">
              {/* Header Section */}
              <div className="text-center mb-8 sm:mb-12 md:mb-16">
                <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 sm:mb-8">
                  <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#FF4D0B] rounded-full animate-pulse"></div>
                  <span className="text-white text-xs sm:text-sm font-semibold tracking-wide">Aval Oficial</span>
                  <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#FF4D0B] rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 sm:mb-8 leading-tight px-4">
                  Avalado por el Colegio de<br className="hidden sm:block" />
                  <span className="bg-gradient-to-r from-[#FF4D0B] to-[#FF6B35] bg-clip-text text-transparent">
                    Ingenieros del Perú
                  </span>
                </h2>
                <p className="text-stone-300 text-base sm:text-lg md:text-xl max-w-4xl mx-auto leading-relaxed px-4">
                  Nuestro evento cuenta con el respaldo oficial del CIP, la institución que representa 
                  y regula la profesión de ingeniería en el Perú, garantizando la calidad y relevancia 
                  de nuestro contenido.
                </p>
              </div>

              {/* Logo Section - Centered */}
              <div className="flex justify-center mb-8 sm:mb-12 md:mb-16">
                <div className="relative group">
                  {/* Logo Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FF4D0B]/20 to-blue-600/20 rounded-full blur-xl sm:blur-2xl group-hover:blur-2xl sm:group-hover:blur-3xl transition-all duration-700 opacity-0 group-hover:opacity-100"></div>
                   
                  {/* Logo Container with Glassmorphism */}
                  <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl border border-white/20 transform group-hover:scale-105 transition-all duration-700 hover:shadow-[0_0_80px_rgba(255,77,11,0.3)]">
                    
                    {/* Logo Image Container */}
                    <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 flex items-center justify-center">
                      
                      {/* Background Glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-[#FF4D0B]/20 rounded-full blur-lg sm:blur-xl opacity-30"></div>
                      
                      {/* Logo Image */}
                      <div className="relative z-10">
                        <img 
                          src="/src/assets/cip.png" 
                          alt="Colegio de Ingenieros del Perú - CIP" 
                          className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-contain drop-shadow-xl sm:drop-shadow-2xl"
                        />
                      </div>
                      
                      {/* Floating Elements - Hidden on small screens */}
                      <div className="absolute top-2 sm:top-4 right-2 sm:right-4 w-2 sm:w-3 h-2 sm:h-3 bg-[#FF4D0B] rounded-full animate-bounce hidden sm:block"></div>
                      <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white rounded-full animate-bounce hidden sm:block" style={{animationDelay: '0.5s'}}></div>
                      <div className="absolute top-1/2 right-1 sm:right-2 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#FF4D0B] rounded-full animate-pulse hidden sm:block"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description Section - Centered */}
              <div className="text-center space-y-6 sm:space-y-8">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white px-4">
                  Colegio de Ingenieros del Perú
                </h3>
                <p className="text-stone-300 leading-relaxed text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
                  Institución fundada en 1962 que representa a más de 200,000 ingenieros en todo el país. 
                  El CIP es la máxima autoridad en la regulación y desarrollo de la ingeniería peruana, 
                  promoviendo la excelencia profesional y la innovación tecnológica.
                </p>
                
                {/* Enhanced Badges with Glassmorphism */}
                <div className="flex flex-wrap justify-center gap-3 sm:gap-4 px-4">
                  <span className="px-4 sm:px-6 py-2 sm:py-3 bg-white/10 backdrop-blur-md text-white text-xs sm:text-sm font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                    +200K Ingenieros
                  </span>
                  <span className="px-4 sm:px-6 py-2 sm:py-3 bg-white/10 backdrop-blur-md text-white text-xs sm:text-sm font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                    Desde 1962
                  </span>
                  <span className="px-4 sm:px-6 py-2 sm:py-3 bg-white/10 backdrop-blur-md text-white text-xs sm:text-sm font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                    Autoridad Nacional
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
