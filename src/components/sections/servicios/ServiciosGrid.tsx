import Link from "next/link";
import Image from "next/image";
import { Trees } from "lucide-react";

export default function ServiciosGrid() {
  const services = [
    {
      id: "consultoria",
      title: "Consultoría",
      image: "/consulting_meeting.jpg",
      isImage: true,
      description: "Asesoramiento integral en las etapas de pre-factibilidad y diseño detallado para grandes infraestructuras. ISO 9001 certificado.",
      badge: "ISO 9001 CERTIFIED",
    },
    {
      id: "patologias",
      title: "Patologías de Obra",
      image: "/concrete_inspection.jpg",
      isImage: true,
      description: "Diagnóstico preciso de fallas estructurales y diseño de planes de remediación técnica mediante instrumentación avanzada.",
      badge: "ANÁLISIS FORENSE",
    },
    {
      id: "suelos",
      title: "Laboratorio de Suelos",
      image: "/soil_laboratory.jpg",
      isImage: true,
      description: "Ensayos geotécnicos avanzados para garantizar la estabilidad de la cimentación en cualquier terreno bajo normativas ISO/ASTM.",
      badge: "DATA-DRIVEN TESTING",
    },
    {
      id: "madera",
      title: "Estructuras en Madera",
      isImage: false,
      description: "Diseño y cálculo de estructuras de madera laminada CLT y Glulam con enfoque en sostenibilidad urbana y bajo impacto ambiental.",
      badge: "SUSTAINABLE TIMBER",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {services.map((service) => (
        <div
          key={service.id}
          className="flex flex-col bg-white border border-gray-200/80 rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow group h-full"
        >
          {/* Card Header Media */}
          <div className="relative h-48 w-full bg-gray-50 flex items-center justify-center">
            {service.isImage && service.image ? (
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            ) : (
              <div className="flex h-16 w-16 items-center justify-center rounded-sm bg-[#0B3A36]/5 text-[#0B3A36]">
                <Trees className="h-10 w-10 text-[#0E7A6E]" />
              </div>
            )}
          </div>

          {/* Card Body */}
          <div className="flex-1 p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 tracking-tight group-hover:text-[#0E7A6E] transition-colors">
                {service.title}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed font-normal mb-6">
                {service.description}
              </p>
            </div>
            
            {/* Card Footer Tag */}
            <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
              <span className="text-[9px] font-bold tracking-wider text-gray-400 uppercase">
                {service.badge}
              </span>
              <Link
                href={`/servicios#${service.id}-section`}
                className="text-[10px] font-bold text-[#0E7A6E] tracking-wider uppercase hover:underline"
              >
                Ver más
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
