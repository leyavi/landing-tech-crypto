import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useState } from "react";
import { ArrowLeft, ArrowRight, Check, Users, Building, GraduationCap, Briefcase, User, Mail, Phone, CheckCircle, Loader2 } from "lucide-react";
import { useToast } from "../hooks/use-toast";
import { Toaster } from "./ui/toaster";
import { leadsService } from "../services/leadsService";
import "../utils/supabaseSetup"; // Load Supabase utilities

export function RegistrationSection() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
    participantType: "",
    company: "",
    position: "",
    interests: [],
    termsAccepted: false
  });

  const totalSteps = 4;
  const progressPercentage = (currentStep / totalSteps) * 100;

  const participantTypes = [
    { id: "empresa", label: "Empresa", icon: Building },
    { id: "profesional", label: "Profesional", icon: User },
    { id: "instituto", label: "Instituto", icon: GraduationCap },
    { id: "universidad", label: "Universidad", icon: GraduationCap },
    { id: "independiente", label: "Independiente", icon: Briefcase }
  ];

  const interests = [
    "Inteligencia Artificial",
    "Automatización",
    "Blockchain",
    "DeFi",
    "Transformación Digital",
    "Sistematización"
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleInterestToggle = (interest) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Validar que todos los campos requeridos estén completos
      if (!formData.name || !formData.lastname || !formData.email || !formData.phone || 
          !formData.participantType || !formData.company || !formData.position || 
          formData.interests.length === 0 || !formData.termsAccepted) {
        throw new Error('Por favor completa todos los campos requeridos');
      }

      // Crear lead en Supabase
      const result = await leadsService.createLead(formData);
      
      if (!result.success) {
        throw new Error(result.error || 'Error al crear el registro');
      }

      // Mostrar toast de éxito
      toast({
        title: "¡Registro Exitoso! 🎉",
        description: "Tu lugar ha sido reservado correctamente. Recibirás un email de confirmación.",
        variant: "default",
      });
      
      setIsSubmitted(true);
      console.log("Lead created successfully:", result.data);
      
    } catch (error) {
      // Mostrar toast de error
      toast({
        title: "Error en el registro",
        description: error.message || "Hubo un problema al procesar tu registro. Por favor, intenta nuevamente.",
        variant: "destructive",
      });
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-5">
            <h3 className="text-xl font-semibold text-white mb-4">Datos Personales</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white text-sm">Nombre *</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-stone-700 border-stone-600 text-white placeholder:text-stone-400 focus:border-[#FF4D0B] focus:ring-[#FF4D0B] h-11"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastname" className="text-white text-sm">Apellidos *</Label>
                <Input
                  id="lastname"
                  name="lastname"
                  type="text"
                  placeholder="Tus apellidos"
                  value={formData.lastname}
                  onChange={handleChange}
                  required
                  className="bg-stone-700 border-stone-600 text-white placeholder:text-stone-400 focus:border-[#FF4D0B] focus:ring-[#FF4D0B] h-11"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-white text-sm">Correo Electrónico *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="tu@email.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-stone-700 border-stone-600 text-white placeholder:text-stone-400 focus:border-[#FF4D0B] focus:ring-[#FF4D0B] h-11"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-white text-sm">Celular *</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Tu número de celular"
                value={formData.phone}
                onChange={handleChange}
                required
                className="bg-stone-700 border-stone-600 text-white placeholder:text-stone-400 focus:border-[#FF4D0B] focus:ring-[#FF4D0B] h-11"
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-5">
            <h3 className="text-xl font-semibold text-white mb-4">Tipo de Participante</h3>
            
            <div className="space-y-3">
              {participantTypes.map((type) => {
                const Icon = type.icon;
                return (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, participantType: type.id }))}
                    className={`w-full p-3 rounded-lg border-2 transition-all duration-200 text-left ${
                      formData.participantType === type.id
                        ? 'border-[#FF4D0B] bg-[#FF4D0B]/10'
                        : 'border-stone-600 bg-stone-700 hover:border-stone-500'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5 text-white" />
                      <span className="text-white font-medium">{type.label}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-5">
            <h3 className="text-xl font-semibold text-white mb-4">Información Profesional</h3>
            
            <div className="space-y-2">
              <Label htmlFor="company" className="text-white text-sm">Empresa / Institución *</Label>
              <Input
                id="company"
                name="company"
                type="text"
                placeholder="Nombre de tu empresa o institución"
                value={formData.company}
                onChange={handleChange}
                required
                className="bg-stone-700 border-stone-600 text-white placeholder:text-stone-400 focus:border-[#FF4D0B] focus:ring-[#FF4D0B] h-11"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="position" className="text-white text-sm">Cargo / Área *</Label>
              <Input
                id="position"
                name="position"
                type="text"
                placeholder="Tu cargo o área de trabajo"
                value={formData.position}
                onChange={handleChange}
                required
                className="bg-stone-700 border-stone-600 text-white placeholder:text-stone-400 focus:border-[#FF4D0B] focus:ring-[#FF4D0B] h-11"
              />
            </div>

            <div className="space-y-3">
              <Label className="text-white text-sm">Intereses (selecciona uno o más) *</Label>
              <div className="grid grid-cols-2 gap-2">
                {interests.map((interest) => (
                  <button
                    key={interest}
                    type="button"
                    onClick={() => handleInterestToggle(interest)}
                    className={`p-2 rounded-lg border-2 transition-all duration-200 text-xs ${
                      formData.interests.includes(interest)
                        ? 'border-[#FF4D0B] bg-[#FF4D0B]/10 text-[#FF4D0B]'
                        : 'border-stone-600 bg-stone-700 text-white hover:border-stone-500'
                    }`}
                  >
                    {interest}
                  </button>
                ))}
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-5">
            <h3 className="text-xl font-semibold text-white mb-4">Confirmación</h3>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Resumen de tu registro:</h4>
              
                              <div className="bg-black border border-[#FF4D0B]/20 rounded-lg p-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-stone-300">Nombre:</span>
                  <span className="text-white">{formData.name} {formData.lastname}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-300">Correo:</span>
                  <span className="text-white">{formData.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-300">Celular:</span>
                  <span className="text-white">{formData.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-300">Tipo:</span>
                  <span className="text-white">{participantTypes.find(t => t.id === formData.participantType)?.label}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-300">Empresa:</span>
                  <span className="text-white">{formData.company}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-300">Cargo:</span>
                  <span className="text-white">{formData.position}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-300">Intereses:</span>
                  <div className="flex flex-wrap gap-1">
                    {formData.interests.map((interest) => (
                      <span key={interest} className="px-2 py-1 bg-[#FF4D0B] text-white text-xs rounded-full">
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="terms"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                className="mt-1 w-4 h-4 text-[#FF4D0B] bg-stone-700 border-stone-600 rounded focus:ring-[#FF4D0B]"
              />
              <Label htmlFor="terms" className="text-white text-sm">
                Acepto los términos y condiciones del evento *
              </Label>
            </div>
          </div>
        );

      default:
        return null;
    }
  };
  

  return (
    <section id="registration" className="py-16 bg-gradient-to-b from-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-20 w-24 h-24 bg-[#FF4D0B] rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-20 w-32 h-32 bg-[#FF4D0B] rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block px-6 py-3 rounded-lg border border-[#FF4D0B] mb-6 backdrop-blur-sm bg-black/20">
            <span className="text-[#FF4D0B] text-sm font-semibold">Registro</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Reserva tu lugar
          </h2>
          <p className="text-stone-300 text-lg max-w-2xl mx-auto">
            Completa tu registro en 4 simples pasos
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-black rounded-2xl overflow-hidden relative border border-[#FF4D0B]/20 shadow-2xl hover:shadow-[#FF4D0B]/10 transition-all duration-500">
            {/* Orange glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF4D0B]/5 to-transparent opacity-50"></div>
            
            <div className="p-6 md:p-8 relative z-10">
              {/* Header with progress */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Registro</h3>
                  <p className="text-stone-300 text-sm">Paso {currentStep} de {totalSteps}</p>
                  
                  {/* Progress bar */}
                  <div className="mt-3 flex items-center gap-3">
                    <div className="flex-1 bg-stone-700 rounded-full h-2">
                      <div 
                        className="bg-[#FF4D0B] h-2 rounded-full transition-all duration-300"
                        style={{ width: `${progressPercentage}%` }}
                      ></div>
                    </div>
                    <span className="text-[#FF4D0B] text-sm font-semibold">{Math.round(progressPercentage)}%</span>
                  </div>
                  
                  {/* Step indicator */}
                  <p className="text-stone-400 text-sm mt-2">
                    {currentStep === 1 && "Datos Personales"}
                    {currentStep === 2 && "Perfil"}
                    {currentStep === 3 && "Información Profesional"}
                    {currentStep === 4 && "Confirmación"}
                  </p>
                </div>
                
                                 {/* Available spots badge */}
                 <div className="flex items-center gap-2 px-3 py-2 bg-[#FF4D0B] rounded-lg self-start">
                   <Users className="w-4 h-4 text-white" />
                   <span className="text-white text-sm font-medium">50+ cupos disponibles</span>
                 </div>
              </div>

              {/* Form content or success message */}
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-[#FF4D0B]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-[#FF4D0B]" />
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                    ¡Registro Completado!
                  </h3>
                  
                  <p className="text-stone-300 text-base mb-6 max-w-md mx-auto">
                    Tu lugar ha sido reservado exitosamente. Recibirás un email de confirmación con todos los detalles del evento.
                  </p>
                  
                  <div className="bg-black border border-[#FF4D0B]/20 rounded-lg p-4 mb-6 text-sm">
                    <h4 className="text-base font-semibold text-white mb-3">Resumen de tu registro:</h4>
                    <div className="space-y-2 text-left">
                      <div className="flex justify-between">
                        <span className="text-stone-300">Nombre:</span>
                        <span className="text-white">{formData.name} {formData.lastname}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-300">Email:</span>
                        <span className="text-white">{formData.email}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-300">Tipo:</span>
                        <span className="text-white">{participantTypes.find(t => t.id === formData.participantType)?.label}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-300">Empresa:</span>
                        <span className="text-white">{formData.company}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Button
                    onClick={() => {
                      setIsSubmitted(false);
                      setCurrentStep(1);
                      setFormData({
                        name: "",
                        lastname: "",
                        email: "",
                        phone: "",
                        participantType: "",
                        company: "",
                        position: "",
                        interests: [],
                        termsAccepted: false
                      });
                    }}
                    className="bg-[#FF4D0B] hover:bg-[#FF4D0B]/90 text-white"
                  >
                    Registrar otra persona
                  </Button>
                </div>
              ) : (
                <>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {renderStepContent()}

                    {/* Navigation buttons */}
                    <div className="flex justify-between pt-4">
                      <Button
                        type="button"
                        onClick={prevStep}
                        disabled={currentStep === 1}
                        variant="outline"
                        className="border-stone-600 text-stone-300 hover:bg-stone-700 disabled:opacity-50 text-sm"
                      >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Anterior
                      </Button>
                      
                      {currentStep < totalSteps ? (
                        <Button
                          type="button"
                          onClick={nextStep}
                          className="bg-[#FF4D0B] hover:bg-[#FF4D0B]/90 text-white text-sm"
                        >
                          Siguiente
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      ) : (
                        <Button
                          type="submit"
                          disabled={!formData.termsAccepted || isSubmitting}
                          className="bg-[#FF4D0B] hover:bg-[#FF4D0B]/90 text-white disabled:opacity-50 text-sm"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                              Procesando...
                            </>
                          ) : (
                            <>
                              <Check className="w-4 h-4 mr-2" />
                              Reservar mi lugar
                            </>
                          )}
                        </Button>
                      )}
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Toast notifications */}
      <Toaster />
    </section>
  );
}
