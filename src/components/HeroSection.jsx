import { Button } from "./ui/button";
import { Calendar, MapPin, Users, Clock} from "lucide-react";
import { Header } from "./Header";
import '../styles/BinaryBackground.css';
import '../styles/Header.css';
import { useEffect, useRef, useState } from "react";

// Hook personalizado para optimizar el video de fondo
const useVideoOptimization = () => {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Función simple para reproducir video
    const playVideo = async () => {
      try {
        if (video.paused) {
          await video.play();
          console.log('Video reproduciéndose');
        }
      } catch (error) {
        console.log('Error al reproducir video:', error);
      }
    };

    // Reproducir cuando el video esté listo
    const handleCanPlay = () => {
      console.log('Video puede reproducirse');
      if (isVisible) {
        playVideo();
      }
    };

    // Event listeners básicos
    video.addEventListener('canplay', handleCanPlay);
    
    // Intentar reproducir inmediatamente
    if (video.readyState >= 2) {
      playVideo();
    }

    // Intersection Observer simple
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (video.paused) {
            playVideo();
          }
        } else {
          // Solo pausar si no está visible por mucho tiempo
          setTimeout(() => {
            if (!entry.isIntersecting && videoRef.current) {
              video.pause();
              setIsVisible(false);
            }
          }, 1500);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(video);

    // Cleanup
    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      observer.disconnect();
    };
  }, [isVisible]);

  return { videoRef, isVisible };
};


// HeroSection con header integrado
export function HeroSection() {
  const { videoRef, isVisible } = useVideoOptimization();

  return (
    <>
      <Header />
      <section id="hero" className="min-h-screen bg-gradient-to-b from-black to-stone-900 relative overflow-hidden flex items-center pt-[60px] sm:pt-[70px] md:pt-[80px]">
        {/* Fondo de video sutil */}
        <div className="binary-background">
          <div className="video-container">
            <video
              ref={videoRef}
              className={`background-video ${!isVisible ? 'paused' : ''}`}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster=""
              onLoadStart={() => console.log('Video cargando...')}
              onLoadedData={() => console.log('Video cargado completamente')}
              onCanPlay={() => console.log('Video puede reproducirse')}
              onPlay={() => console.log('Video reproduciéndose')}
              onPause={() => console.log('Video pausado')}
              onError={(e) => console.log('Error en video:', e)}
              onLoad={() => console.log('Video load event')}
              onLoadedMetadata={() => console.log('Video metadata cargado')}
            >
              <source src="/animation.mp4" type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
          </div>
          
          {/* Fallback visual si el video no carga */}
          <div className="fallback-background"></div>
        </div>

        <div className="container mx-auto px-4 py-8 md:py-16 text-center relative z-10">
          {/* Fecha */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/60 mb-6 shadow-md hover:shadow-lg transition-shadow">
            <Calendar className="w-4 h-4 text-white" />
            <span className="text-white text-sm font-medium">29 agosto 2025 • 7:00 PM - 9:45 PM</span>
          </div>

          {/* Título principal */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Tech & Block<br />
            <span className="text-[#FF4D0B] bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700 text-transparent">
              2025
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="text-lg md:text-xl text-stone-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Transformación digital, sistematización, automatización & IA + blockchain & cripto
          </p>

          {/* Botón de Registro Obligatorio */}
          <div className="text-center mb-8">
            <Button
              size="lg"
              className="bg-[#FF4D0B] hover:bg-[#FF4D0B]/90 text-white shadow-lg px-10 py-6 text-xl font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm registration-button-pulse "
              onClick={() => {
                const registrationSection = document.getElementById('registration');
                if (registrationSection) {
                  registrationSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Registro obligatorio
            </Button>
          </div>

          {/* Información del evento */}
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="container mx-auto px-4">
                <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border-2 border-[#FF4D0B]/30 shadow-2xl hover:shadow-[#FF4D0B]/20 transition-all duration-500 hover:scale-105">
                  <div className="flex flex-col items-center text-center selection-line selection-line-icon">
                    <div className="w-14 h-14 bg-[#FF4D0B]/20 rounded-2xl flex items-center justify-center mb-3">
                      <MapPin className="w-7 h-7 text-[#FF4D0B]" />
                    </div>
                    <h3 className="text-white font-semibold mb-2 text-base">Ubicación</h3>
                    <p className="text-stone-300 text-sm">Nuevo Chimbote, Perú</p>
                  </div>
                </div>
              </div>
              
              <div className="container mx-auto px-4">
                <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border-2 border-[#FF4D0B]/30 shadow-2xl hover:shadow-[#FF4D0B]/20 transition-all duration-500 hover:scale-105">
                  <div className="flex flex-col items-center text-center selection-line selection-line-icon">
                    <div className="w-14 h-14 bg-[#FF4D0B]/20 rounded-2xl flex items-center justify-center mb-3">
                      <Users className="w-7 h-7 text-[#FF4D0B]" />
                    </div>
                    <h3 className="text-white font-semibold mb-2 text-base">Cupos Limitados</h3>
                    <p className="text-stone-300 text-sm">Registro temprano</p>
                  </div>
                </div>
              </div>
              
              <div className="container mx-auto px-4">
                <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border-2 border-[#FF4D0B]/30 shadow-2xl hover:shadow-[#FF4D0B]/20 transition-all duration-500 hover:scale-105">
                  <div className="flex flex-col items-center text-center selection-line selection-line-icon">
                    <div className="w-14 h-14 bg-[#FF4D0B]/20 rounded-2xl flex items-center justify-center mb-3">
                      <Clock className="w-7 h-7 text-[#FF4D0B]" />
                    </div>
                    <h3 className="text-white font-semibold mb-2 text-base">3 Horas Intensivas</h3>
                    <p className="text-stone-300 text-sm">Contenido de valor</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Organizadores */}
          <div className="container mx-auto px-4 mt-8">
            <div className="border-t border-white/20 pt-6 max-w-2xl mx-auto">
              <p className="text-stone-400 text-sm mb-4 tracking-wider text-center">ORGANIZADO POR:</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <div className="text-center bg-white/5 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-inner border-2 border-[#FF4D0B]/30">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <img src="./3.png" alt="Dignita.tech logo" className="h-8" />
                  </div>
                  <p className="text-stone-400 text-xs">Transformación Digital</p>
                </div>
                <div className="hidden sm:block w-px h-10 bg-white/30"></div>
                <div className="text-center bg-white/5 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-inner border-2 border-[#FF4D0B]/30">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <img src="./4.png" alt="Dignita.tech logo" className="h-8" />
                  </div>
                  <p className="text-stone-400 text-xs mt-1">Blockchain & Cripto</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}