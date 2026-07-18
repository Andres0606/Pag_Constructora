import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import CatalogoTecnico from "@/components/sections/catalogo/CatalogoTecnico";

export default function PatologiasPage() {
  return (
    <div className="bg-[#F9FAFA]">

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <span className="uppercase tracking-[4px] text-xs text-[#0E7A6E] font-bold">
                Ingeniería Forense
              </span>

              <h1 className="mt-3 text-4xl font-extrabold text-gray-900">
                Patologías de Obra
              </h1>

              <p className="mt-6 text-gray-600 leading-8">
                Identificamos las causas que generan daños estructurales,
                fisuras, asentamientos y deterioro de elementos de concreto,
                acero y mampostería mediante inspecciones especializadas y
                ensayos no destructivos.
              </p>

              <div className="mt-10 border-t pt-8">

                <ul className="space-y-5">

  <li className="flex items-start gap-3 text-gray-800">
    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#0E7A6E]" />
    <span>Inspecciones estructurales.</span>
  </li>

  <li className="flex items-start gap-3 text-gray-800">
    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#0E7A6E]" />
    <span>Ensayos de ultrasonido.</span>
  </li>

  <li className="flex items-start gap-3 text-gray-800">
    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#0E7A6E]" />
    <span>Esclerometría.</span>
  </li>

  <li className="flex items-start gap-3 text-gray-800">
    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#0E7A6E]" />
    <span>Estudios de carbonatación.</span>
  </li>

  <li className="flex items-start gap-3 text-gray-800">
    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#0E7A6E]" />
    <span>Diseño de soluciones de reparación.</span>
  </li>

</ul>

              </div>

            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-sm">
              <Image
                src="/concrete_inspection.jpg"
                alt="Patologías de Obra"
                fill
                className="object-cover"
              />
            </div>

          </div>

        </div>
      </section>

      <CatalogoTecnico />

    </div>
  );
}