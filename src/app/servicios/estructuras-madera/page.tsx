import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import CatalogoTecnico from "@/components/sections/catalogo/CatalogoTecnico";

export default function EstructurasMaderaPage() {
  return (
    <div className="bg-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Imagen */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-sm bg-gray-100">
              <Image
                src="/timber_structures.jpg"
                alt="Estructuras en Madera"
                fill
                className="object-cover"
              />
            </div>

            {/* Contenido */}
            <div>
              <span className="uppercase tracking-[4px] text-xs text-[#0E7A6E] font-bold">
                Ingeniería en Madera
              </span>

              <h1 className="mt-3 text-4xl font-extrabold text-gray-900">
                Estructuras en Madera de Alto Desempeño
              </h1>

              <p className="mt-6 text-gray-600 leading-8">
                Diseñamos y calculamos estructuras utilizando madera laminada
                CLT (Cross Laminated Timber) y Glulam, ofreciendo soluciones
                sostenibles, resistentes y eficientes para proyectos
                arquitectónicos y de ingeniería.
              </p>

              <div className="mt-10 border-t pt-8">
                <ul className="space-y-5">
                  <li className="flex gap-3">
                    <CheckCircle2 className="text-[#0E7A6E]" />
                    Cálculo estructural avanzado.
                  </li>

                  <li className="flex gap-3">
                    <CheckCircle2 className="text-[#0E7A6E]" />
                    Diseño de uniones y conexiones.
                  </li>

                  <li className="flex gap-3">
                    <CheckCircle2 className="text-[#0E7A6E]" />
                    Modelado BIM y detallado 3D.
                  </li>

                  <li className="flex gap-3">
                    <CheckCircle2 className="text-[#0E7A6E]" />
                    Optimización de materiales.
                  </li>

                  <li className="flex gap-3">
                    <CheckCircle2 className="text-[#0E7A6E]" />
                    Diseño sismo-resistente y protección contra incendio.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CatalogoTecnico />
    </div>
  );
}