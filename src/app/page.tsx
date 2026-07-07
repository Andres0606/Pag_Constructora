import Hero from "@/components/sections/hero/Hero";
import Stats from "@/components/sections/stats/Stats";
import Diagnostico from "@/components/sections/diagnostico/Diagnostico";
import { Mail, MapPin, PhoneCall, ShieldCheck, Clock, Award } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      <Stats />

      {/* Diagnostico Section */}
      <Diagnostico />

      {/* Why Choose Us Section (Value Prop) */}
      <section className="bg-[#F5F7F7] py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold tracking-widest text-[#0E7A6E] uppercase">
              Valor Técnico
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              ¿Por qué elegir nuestra ingeniería?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 flex flex-col items-start">
              <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-[#0E7A6E]/10 text-[#0E7A6E] mb-6">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Máximo Rigor Técnico</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Utilizamos instrumentación avanzada y simulaciones de elementos finitos para garantizar resultados de alta confiabilidad y conformidad normativa.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 flex flex-col items-start">
              <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-[#0E7A6E]/10 text-[#0E7A6E] mb-6">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Soporte Técnico 24/7</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Acompañamos a su equipo en obra y laboratorio durante todas las fases críticas del proyecto, respondiendo a imprevistos de forma inmediata.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 flex flex-col items-start">
              <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-[#0E7A6E]/10 text-[#0E7A6E] mb-6">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Materiales Sostenibles</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Pioneros en el diseño y cálculo de estructuras de madera laminada (CLT y Glulam) bajo criterios de baja huella de carbono y construcción limpia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Consultation Section */}
      <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left side: Contact Details */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-[10px] font-bold tracking-widest text-[#0E7A6E] uppercase" id="consulta">
                  Contacto Directo
                </span>
                <h2 className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight leading-tight">
                  Inicie su proyecto con nosotros hoy
                </h2>
                <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                  Consulte de forma gratuita con un especialista técnico. Analizamos la viabilidad inicial de su estructura y le proponemos la mejor ruta de acción.
                </p>
              </div>

              <div className="space-y-6 pt-4">
                <div className="flex items-start space-x-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-[#0B3A36]/5 text-[#0B3A36]">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">Oficina Principal</h4>
                    <p className="text-xs text-gray-600 mt-1">Calle 100 #8A-49, Oficina 502, Bogotá, Colombia</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-[#0B3A36]/5 text-[#0B3A36]">
                    <PhoneCall className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">Línea Técnica</h4>
                    <p className="text-xs text-gray-600 mt-1">+57 310 639 2432</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-[#0B3A36]/5 text-[#0B3A36]">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">Correo Electrónico</h4>
                    <p className="text-xs text-gray-600 mt-1">proyectos@ingcivil.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side: Form Card */}
            <div className="lg:col-span-7 bg-[#F9FAFA] border border-gray-200/60 p-8 sm:p-10 shadow-sm rounded-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Solicitud de Consulta Técnica</h3>
              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full rounded-sm border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 focus:border-[#0E7A6E] focus:outline-none"
                      placeholder="Ej. Juan Pérez"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full rounded-sm border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 focus:border-[#0E7A6E] focus:outline-none"
                      placeholder="juan@ejemplo.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                      Teléfono / Celular
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full rounded-sm border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 focus:border-[#0E7A6E] focus:outline-none"
                      placeholder="+57 300 123 4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                      Servicio Requerido
                    </label>
                    <select
                      id="service"
                      className="w-full rounded-sm border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 focus:border-[#0E7A6E] focus:outline-none"
                      required
                    >
                      <option value="">Seleccione un servicio</option>
                      <option value="consultoria">Consultoría Integral</option>
                      <option value="patologia">Patologías de Obra</option>
                      <option value="suelos">Laboratorio de Suelos</option>
                      <option value="madera">Estructuras en Madera</option>
                      <option value="otro">Otro Requerimiento</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Detalles del Proyecto
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full rounded-sm border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 focus:border-[#0E7A6E] focus:outline-none"
                    placeholder="Describa brevemente la estructura, dimensiones y requerimiento de su obra..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-sm bg-[#0B3A36] px-5 py-3 text-xs font-bold tracking-wider text-white uppercase transition-colors hover:bg-[#082a27]"
                >
                  Enviar Solicitud
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
