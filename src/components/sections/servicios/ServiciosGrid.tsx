import Link from "next/link";
import Image from "next/image";
import { Trees } from "lucide-react";

export default function ServiciosGrid() {
  const services = [
    {
      title: "Consultoría",
      href: "/servicios/consultoria",
      image: "/consulting_meeting.jpg",
      isImage: true,
      description:
        "Asesoramiento integral en las etapas de pre-factibilidad y diseño detallado para grandes infraestructuras.",
      badge: "ISO 9001 CERTIFIED",
    },
    {
      title: "Patologías de Obra",
      href: "/servicios/patologias",
      image: "/concrete_inspection.jpg",
      isImage: true,
      description:
        "Diagnóstico preciso de fallas estructurales y diseño de planes de remediación técnica.",
      badge: "ANÁLISIS FORENSE",
    },
    {
      title: "Estructuras en Madera",
      href: "/servicios/estructuras-madera",
      isImage: false,
      description:
        "Diseño y cálculo de estructuras CLT y Glulam con enfoque sostenible.",
      badge: "SUSTAINABLE TIMBER",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {services.map((service) => (
        <div
          key={service.title}
          className="flex flex-col bg-white border border-gray-200 rounded-sm overflow-hidden shadow-sm hover:shadow-md transition group"
        >
          <div className="relative h-48 bg-gray-100">
            {service.isImage ? (
              <Image
                src={service.image!}
                alt={service.title}
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
              />
            ) : (
              <div className="flex items-center justify-center h-full">
                <Trees className="w-16 h-16 text-[#0E7A6E]" />
              </div>
            )}
          </div>

          <div className="flex-1 p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold mb-3 group-hover:text-[#0E7A6E]">
                {service.title}
              </h3>

              <p className="text-sm text-gray-600">
                {service.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t flex justify-between items-center">
              <span className="text-[9px] uppercase tracking-widest text-gray-400 font-bold">
                {service.badge}
              </span>

              <Link
                href={service.href}
                className="text-xs uppercase font-bold text-[#0E7A6E] hover:underline"
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