import { Building, GraduationCap, Briefcase, Users } from "lucide-react";
import '../styles/ProfilesSection.css';

export function ProfilesSection() {
  const profiles = [
    {
      icon: <GraduationCap className="w-10 h-10 text-[#FF4D0B]" />,
      title: "Gerentes",
      subtitle: "Líderes & Decision Makers",
      description: "Ejecutivos y gerentes que buscan entender cómo las tecnologías emergentes pueden transformar sus organizaciones y tomar decisiones estratégicas informadas sobre inversiones en transformación digital.",
      benefits: [
        "Estrategias de transformación digital",
        "ROI de inversiones tecnológicas",
        "Liderazgo en la era digital",
        "Networking con expertos del sector"
      ]
    },
    {
      icon: <Users className="w-10 h-10 text-[#FF4D0B]" />,
      title: "Ingenieros",
      subtitle: "Profesionales Técnicos",
      description: "Ingenieros y profesionales técnicos que quieren actualizar sus habilidades en tecnologías emergentes y aplicar conocimientos prácticos en proyectos de innovación tecnológica.",
      benefits: [
        "Habilidades técnicas de vanguardia",
        "Implementación práctica de soluciones",
        "Certificaciones en nuevas tecnologías",
        "Colaboración en proyectos innovadores"
      ]
    },
    {
      icon: <Briefcase className="w-10 h-10 text-[#FF4D0B]" />,
      title: "Profesionales de Tecnología",
      subtitle: "Especialistas IT & Digital",
      description: "Profesionales del sector tecnológico que buscan especializarse en áreas emergentes como RPA, IA, blockchain y automatización para mantenerse competitivos en el mercado.",
      benefits: [
        "Especialización en tecnologías emergentes",
        "Herramientas para optimizar procesos",
        "Reconversión profesional",
        "Mejora de la empleabilidad en IT"
      ]
    }
  ];

  return (
    <section id="profiles" className="profiles-section py-24">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header de la sección */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 rounded-2xl border-2 border-[#FF4D0B] mb-6 backdrop-blur-sm bg-black/20">
            <span className="text-[#FF4D0B] text-sm font-semibold">Perfiles Destinados</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Dirigido a <span className="text-[#FF4D0B]">profesionales</span> como tú
          </h2>
          <p className="text-stone-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Identifica tu perfil y descubre cómo este evento puede acelerar tu carrera en tecnología
          </p>
        </div>

        {/* Grid de perfiles */}
        <div className="grid md:grid-cols-3 gap-10 mb-20">
          {profiles.map((profile, index) => (
            <div
              key={index}
              className="profile-card selection-line selection-line-card bg-gradient-to-br from-black/80 to-black/60 backdrop-blur-xl rounded-2xl p-8 border-2 border-[#FF4D0B]/20 shadow-2xl hover:shadow-[#FF4D0B]/10 transition-all duration-500 hover:scale-105"
            >
              {/* Icono centrado */}
              <div 
                className="profile-icon"
                style={{
                  width: '80px',
                  height: '80px',
                  padding: '1.5rem',
                  background: 'rgba(255, 77, 11, 0.2)',
                  borderRadius: '50%',
                  margin: '0 auto 1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease'
                }}
              >
                {profile.icon}
              </div>

              {/* Título principal */}
              <h3 
                className="profile-title"
                style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: '#ffffff',
                  marginBottom: '0.5rem',
                  textAlign: 'center'
                }}
              >
                {profile.title}
              </h3>
              
              {/* Subtítulo */}
              <p 
                className="profile-subtitle"
                style={{
                  fontSize: '1rem',
                  color: '#FF4D0B',
                  fontWeight: '600',
                  marginBottom: '1rem',
                  textAlign: 'center'
                }}
              >
                {profile.subtitle}
              </p>

              {/* Descripción */}
              <p 
                className="profile-description"
                style={{
                  color: '#d1d5db',
                  lineHeight: '1.6',
                  marginBottom: '1.5rem',
                  textAlign: 'center'
                }}
              >
                {profile.description}
              </p>

              {/* Beneficios en lista simple */}
              <div className="profile-benefits">
                {profile.benefits.map((benefit, benefitIndex) => (
                  <div 
                    key={benefitIndex} 
                    className="benefit-item"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginBottom: '0.75rem',
                      color: '#e5e7eb',
                      fontSize: '0.9rem'
                    }}
                  >
                    <div 
                      className="benefit-dot"
                      style={{
                        width: '6px',
                        height: '6px',
                        background: '#FF4D0B',
                        borderRadius: '50%',
                        marginRight: '0.75rem',
                        flexShrink: '0'
                      }}
                    ></div>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      
      </div>
    </section>
  );
}
