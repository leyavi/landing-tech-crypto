import { useState } from "react";
import { ChevronDown, ChevronUp, Mail, Phone } from "lucide-react";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "¿Qué es el Tech & Blockchain Day 2025?",
      answer: "Es un evento gratuito de 3 horas que reúne a expertos en tecnologías emergentes como RPA, IA, blockchain y automatización para compartir conocimientos y experiencias prácticas."
    },
    {
      question: "¿Quién puede asistir al evento?",
      answer: "El evento está dirigido a gerentes, ingenieros, profesionales de tecnología y cualquier persona interesada en la transformación digital y las tecnologías emergentes."
    },
    {
      question: "¿El evento es completamente gratuito?",
      answer: "Sí, el evento es 100% gratuito. Solo necesitas registrarte previamente para asegurar tu lugar."
    },
    {
      question: "¿Se entregará algún certificado?",
      answer: "Sí, todos los participantes recibirán un certificado de asistencia al finalizar el evento."
    },
    {
      question: "¿Puedo asistir virtualmente?",
      answer: "El evento es presencial en Lima, Perú. No hay modalidad virtual disponible."
    },
    {
      question: "¿Qué temas se cubrirán?",
      answer: "RPA (Automatización Robótica de Procesos), IA, blockchain, transformación digital, hiperautomatización y estrategias de implementación tecnológica."
    },
    {
      question: "¿Habrá networking con los speakers?",
      answer: "Sí, habrá tiempo dedicado para networking y preguntas directas a los expertos."
    },
    {
      question: "¿Puedo llevar mi laptop?",
      answer: "Sí, se recomienda llevar laptop para tomar notas y participar en las sesiones interactivas."
    },
    {
      question: "¿Habrá material de apoyo disponible?",
      answer: "Sí, se proporcionará material digital y recursos adicionales después del evento."
    },
    {
      question: "¿Qué debo hacer si no puedo asistir después de registrarme?",
      answer: "Por favor, cancela tu registro con anticipación para que otra persona pueda ocupar tu lugar."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-black to-stone-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-20 w-24 h-24 bg-[#FF4D0B] rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-20 w-32 h-32 bg-[#FF4D0B] rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#FF4D0B] rounded-full blur-3xl opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 rounded-lg border-2 border-[#FF4D0B] mb-6 backdrop-blur-sm bg-black/20">
            <span className="text-[#FF4D0B] text-sm font-semibold">FAQ</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Preguntas Frecuentes
          </h2>
          <p className="text-stone-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Resolvemos las dudas más comunes sobre nuestro evento de tecnología y blockchain
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid gap-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-black/80 to-black/60 backdrop-blur-xl border-2 border-[#FF4D0B]/20 rounded-2xl overflow-hidden hover:shadow-[#FF4D0B]/10 transition-all duration-500 hover:scale-105"
              >
                <button
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-black/20 transition-colors duration-300"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg md:text-xl font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-[#FF4D0B] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-[#FF4D0B] flex-shrink-0" />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-stone-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        
      </div>
    </section>
  );
}
