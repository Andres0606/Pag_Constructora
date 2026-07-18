import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function ConsultoriaPage() {
  return (
    <div className="bg-white">

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-sm">
              <Image
                src="/consulting_meeting.jpg"
                alt="Consultoría Integral"
                fill
                className="object-cover"
              />
            </div>

            <div>

              <span className="uppercase tracking-[4px] text-xs text-[#0E7A6E] font-bold">
                Servicio Especializado
              </span>

              <h1 className="mt-3 text-4xl font-extrabold text-gray-900">
                Consultoría Integral
              </h1>

              <p className="mt-6 text-gray-600 leading-8">
                Ofrecemos asesoramiento técnico de alto nivel desde la
                concepción del proyecto. Nuestro equipo acompaña cada etapa del
                proceso mediante análisis de viabilidad, evaluación de riesgos,
                optimización estructural y cumplimiento de la normativa
                nacional e internacional.
              </p>

              <div className="mt-10 border-t pt-8">

                <ul className="space-y-5">

                  <li className="flex gap-3">
                    <CheckCircle2 className="text-[#0E7A6E]" />
                    Estudios de Factibilidad Técnica.
                  </li>

                  <li className="flex gap-3">
                    <CheckCircle2 className="text-[#0E7A6E]" />
                    Gestión Integral de Proyectos.
                  </li>

                  <li className="flex gap-3">
                    <CheckCircle2 className="text-[#0E7A6E]" />
                    Diseños estructurales optimizados.
                  </li>

                  <li className="flex gap-3">
                    <CheckCircle2 className="text-[#0E7A6E]" />
                    Supervisión técnica especializada.
                  </li>

                  <li className="flex gap-3">
                    <CheckCircle2 className="text-[#0E7A6E]" />
                    Cumplimiento NSR-10, ACI y Eurocódigos.
                  </li>

                </ul>

              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}