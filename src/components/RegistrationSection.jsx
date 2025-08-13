import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useState } from "react";

export function RegistrationSection() {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    company: "",
    position: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-gradient-to-b from-stone-800 to-stone-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-md border border-[#FF4D0B] mb-6">
            <span className="text-[#FF4D0B] text-sm font-semibold">Registro</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-6">
            Reserva tu lugar
          </h2>
          <p className="text-stone-300 text-lg">
            Completa tu registro en 4 simples pasos
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-stone-800 rounded-xl shadow-2xl overflow-hidden border border-stone-700">
            <div className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white">Nombre *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Tu nombre"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-stone-700 border-stone-600 text-white placeholder:text-stone-400 focus:border-[#FF4D0B] focus:ring-[#FF4D0B]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastname" className="text-white">Apellidos *</Label>
                    <Input
                      id="lastname"
                      name="lastname"
                      type="text"
                      placeholder="Tus apellidos"
                      value={formData.lastname}
                      onChange={handleChange}
                      required
                      className="bg-stone-700 border-stone-600 text-white placeholder:text-stone-400 focus:border-[#FF4D0B] focus:ring-[#FF4D0B]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">Correo Electrónico *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-stone-700 border-stone-600 text-white placeholder:text-stone-400 focus:border-[#FF4D0B] focus:ring-[#FF4D0B]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-white">Empresa</Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Tu empresa"
                    value={formData.company}
                    onChange={handleChange}
                    className="bg-stone-700 border-stone-600 text-white placeholder:text-stone-400 focus:border-[#FF4D0B] focus:ring-[#FF4D0B]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="position" className="text-white">Cargo</Label>
                  <Input
                    id="position"
                    name="position"
                    type="text"
                    placeholder="Tu cargo actual"
                    value={formData.position}
                    onChange={handleChange}
                    className="bg-stone-700 border-stone-600 text-white placeholder:text-stone-400 focus:border-[#FF4D0B] focus:ring-[#FF4D0B]"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-[#FF4D0B] hover:bg-[#FF4D0B]/90 text-white py-3"
                  size="lg"
                >
                  Siguiente
                </Button>
              </form>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-stone-400 mb-4">O regístrate rápidamente con:</p>
            <div className="flex justify-center gap-4">
              <Button variant="outline" className="border-stone-600 text-stone-300 hover:bg-stone-700">
                Google
              </Button>
              <Button variant="outline" className="border-stone-600 text-stone-300 hover:bg-stone-700">
                Apple
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
