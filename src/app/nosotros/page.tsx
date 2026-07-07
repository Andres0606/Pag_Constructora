import Image from "next/image";
import { Shield, Leaf, FileText, CheckCircle2, User } from "lucide-react";

export default function NosotrosPage() {
  return (
    <div className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        
        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Team Cards (40% width approx, lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-8 justify-center items-center">
            
            {/* Card 1: Claudia Pacheco */}
            <div className="relative w-full max-w-[280px] aspect-[3/4] rounded-sm overflow-hidden shadow-md border border-gray-100 group">
              <Image
                src="/director_claudia.jpg"
                alt="Ing. Claudia Pacheco - Directora Técnica"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="280px"
              />
              {/* Bottom Banner */}
              <div className="absolute bottom-0 inset-x-0 bg-[#0B3A36] text-white p-4">
                <span className="block text-[9px] font-bold tracking-widest text-[#24DFCE] uppercase">
                  Directora Técnica
                </span>
                <h3 className="text-sm font-bold mt-1">
                  Ing. Claudia Pacheco
                </h3>
              </div>
            </div>

            {/* Card 2: Andres Apellido */}
            <div className="relative w-full max-w-[280px] aspect-[3/4] rounded-sm overflow-hidden shadow-md border border-gray-100 group bg-slate-50 flex flex-col justify-between">
              
              {/* Fallback Premium Graphic Avatar for Andres (due to image generation model limits) */}
              <div className="relative flex-1 w-full bg-gradient-to-br from-[#0B3A36]/10 to-[#C5A880]/10 flex flex-col items-center justify-center p-8 text-[#0B3A36]/40">
                <div className="h-20 w-20 rounded-full bg-white flex items-center justify-center shadow-sm border border-gray-100 mb-2">
                  <User className="h-10 w-10 text-[#0B3A36]" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Ing. Andres Apellido</span>
                <span className="text-[9px] text-gray-400 mt-1">Especialista en Geotecnia y Estructuras</span>
              </div>

              {/* Bottom Banner */}
              <div className="bg-[#C5A880] text-white p-4">
                <span className="block text-[9px] font-bold tracking-widest text-slate-900 uppercase">
                  Consultor Senior
                </span>
                <h3 className="text-sm font-bold mt-1 text-slate-950">
                  Ing. Andres Apellido
                </h3>
              </div>
            </div>

          </div>

          {/* Right Column: Philosophy (60% width, lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Header */}
            <div>
              <span className="text-[10px] font-bold tracking-widest text-[#0E7A6E] uppercase">
                Nuestra Filosofía
              </span>
              <h1 className="mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
                Excelencia que Sostiene el Mañana
              </h1>
              
              <p className="mt-6 text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                Con más de <strong>20 años de experiencia</strong> en el sector, en Ing. Civil no solo diseñamos estructuras; construimos confianza a través del rigor científico y la excelencia. Nuestro equipo de ingenieros combina décadas de experiencia en campo con las últimas herramientas de análisis estructural y modelado paramétrico para garantizar el éxito de cada proyecto.
              </p>
            </div>

            {/* Checklists / Bullet Pillars */}
            <div className="space-y-6 pt-6 border-t border-gray-100">
              
              {/* Pillar 1 */}
              <div className="flex items-start space-x-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-[#0E7A6E]/10 text-[#0E7A6E]">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Rigurosidad Técnica</h4>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                    Cada cálculo es verificado mediante simulaciones estructurales avanzadas y normativas internacionales de diseño estructural.
                  </p>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="flex items-start space-x-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-[#0E7A6E]/10 text-[#0E7A6E]">
                  <Leaf className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Compromiso Ambiental</h4>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                    Líderes en implementación de sistemas constructivos de baja huella de carbono y materiales sostenibles como la madera laminada cruzada (CLT).
                  </p>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="flex items-start space-x-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-[#0E7A6E]/10 text-[#0E7A6E]">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Confianza y Transparencia</h4>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                    Proporcionamos informes técnicos y forenses totalmente transparentes y detallados en cada etapa de la obra.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
