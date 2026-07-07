import ServiciosGrid from "@/components/sections/servicios/ServiciosGrid";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Trees, ArrowUpRight } from "lucide-react";

export default function ServiciosPage() {
  return (
    <div className="w-full bg-white">
      
      {/* Hero Header Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div className="max-w-2xl">
              <span className="text-[10px] font-bold tracking-widest text-[#0E7A6E] uppercase">
                Nuestros Servicios
              </span>
              <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                Servicios <span className="relative inline-block">Especializados<span className="absolute bottom-1 left-0 h-1 w-full bg-[#0E7A6E]/30" /></span>
              </h1>
              <p className="mt-6 text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                Nuestra metodología combina el rigor matemático con el respeto por el material, entregando estructuras que perduran en el tiempo.
              </p>
            </div>
            
            <div>
              <Link
                href="#catalogo-tecnico"
                className="inline-flex items-center space-x-2 text-[10px] font-bold tracking-widest text-gray-500 uppercase hover:text-gray-900 transition-colors"
              >
                <span>Explorar Catálogo Técnico</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Grid Cards component */}
          <ServiciosGrid />
        </div>
      </section>

      {/* Detail Section 1: Consultoria */}
      <section id="consultoria-section" className="py-24 px-4 sm:px-6 lg:px-8 bg-white scroll-mt-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Image */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm shadow-sm bg-gray-100">
              <Image
                src="/consulting_meeting.jpg"
                alt="Reunión de ingenieros consultores"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Right Text */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight leading-tight">
                Consultoría Integral
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                Ofrecemos asesoramiento técnico de alto nivel desde la concepción del proyecto. Nuestra metodología integra análisis de viabilidad, gestión de riesgos estructurales y optimización de recursos.
              </p>
              
              <ul className="space-y-4 pt-4 border-t border-gray-100">
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-[#0E7A6E] shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-gray-700">Estudios de Factibilidad Técnica</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-[#0E7A6E] shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-gray-700">Gestión de Proyectos de Ingeniería Estructural</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-[#0E7A6E] shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-gray-700">Certificación y Cumplimiento Normativo (NSR-10 / ACI / Eurocódigos)</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Detail Section 2: Patologías de Obra */}
      <section id="patologias-section" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F9FAFA] scroll-mt-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Text (Layout swap for premium rhythm) */}
            <div className="space-y-6 order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight leading-tight">
                Patologías de Obra
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                Identificación precisa de fallos estructurales mediante instrumentación avanzada y ensayos no destructivos. Formulamos planes de remediación a la medida para rehabilitar y extender la vida útil de sus obras.
              </p>
              
              <ul className="space-y-4 pt-4 border-t border-gray-100">
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-[#0E7A6E] shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-gray-700">Ensayos No Destructivos (Ultrasonido, Esclerometría, Carbonatación)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-[#0E7A6E] shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-gray-700">Modelamiento Numérico de Patologías y Fisuras</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-[#0E7A6E] shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-gray-700">Diseño Técnico de Refuerzos y Remediación en Concreto y Acero</span>
                </li>
              </ul>
            </div>

            {/* Right Image */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm shadow-sm bg-gray-100 order-1 lg:order-2">
              <Image
                src="/concrete_inspection.jpg"
                alt="Inspección de grietas en concreto"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Detail Section 3: Laboratorio de Suelos */}
      <section id="suelos-section" className="py-24 px-4 sm:px-6 lg:px-8 bg-white scroll-mt-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Image */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm shadow-sm bg-gray-100">
              <Image
                src="/soil_laboratory.jpg"
                alt="Geotecnia y laboratorio de mecánica de suelos"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Right Text */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight leading-tight">
                Laboratorio de Suelos
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                Análisis físico-químico del terreno para determinar su capacidad de carga y comportamiento dinámico. Nuestros laboratorios proporcionan datos de alta fidelidad necesarios para diseñar cimentaciones estables.
              </p>
              
              <ul className="space-y-4 pt-4 border-t border-gray-100">
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-[#0E7A6E] shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-gray-700">Determinación de Capacidad Portante y Asentamientos</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-[#0E7A6E] shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-gray-700">Análisis Granulométrico y Límites de Atterberg</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-[#0E7A6E] shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-gray-700">Ensayos de Permeabilidad, Corte Directo y Triaxiales (ISO/ASTM)</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Detail Section 4: Estructuras en Madera */}
      <section id="madera-section" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F9FAFA] scroll-mt-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Text */}
            <div className="space-y-6 order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight leading-tight">
                Estructuras en Madera de Alto Desempeño
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                Somos especialistas en el diseño y cálculo de estructuras complejas utilizando madera laminada cruzada CLT (Cross Laminated Timber) y Glulam. Proyectamos con la madera en su máximo potencial logrando estructuras ligeras, sismo-resistentes y eco-sostenibles.
              </p>
              
              <ul className="space-y-4 pt-4 border-t border-gray-100">
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-[#0E7A6E] shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-gray-700">Cálculo Estructural Avanzado de Uniones y Nodos</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-[#0E7A6E] shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-gray-700">Optimización de Volúmenes y Detallado 3D BIM</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-[#0E7A6E] shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-gray-700">Análisis Estructural Sismo-resistente y Protección al Fuego (Eurocódigo 5)</span>
                </li>
              </ul>
            </div>

            {/* Right Image */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm shadow-sm bg-gray-100 order-1 lg:order-2">
              <Image
                src="/timber_structures.jpg"
                alt="Diseño de estructuras de madera laminada"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Catalog Anchor */}
      <section id="catalogo-tecnico" className="py-16 px-4 bg-white border-t border-gray-100 text-center">
        <div className="max-w-2xl mx-auto space-y-4">
          <Trees className="h-10 w-10 text-[#0E7A6E] mx-auto mb-2" />
          <h3 className="text-lg font-bold text-gray-900">Catálogo Técnico de Soluciones</h3>
          <p className="text-xs text-gray-600">
            Descargue nuestras especificaciones técnicas de materiales, tablas de capacidad portante de CLT y manuales de instalación para contratistas.
          </p>
          <div className="pt-2">
            <button className="rounded-sm bg-[#0B3A36] text-white text-xs font-bold uppercase tracking-wider px-6 py-3 hover:bg-[#082a27] transition-colors">
              Descargar Catálogo (PDF)
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
