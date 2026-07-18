import { Trees } from "lucide-react";

export default function CatalogoTecnico() {
  return (
    <section
      id="catalogo-tecnico"
      className="py-16 px-4 bg-white border-t border-gray-100 text-center"
    >
      <div className="mx-auto max-w-2xl space-y-4">
        <Trees className="h-10 w-10 text-[#0E7A6E] mx-auto" />

        <h3 className="text-lg font-bold text-gray-900">
          Catálogo Técnico de Soluciones
        </h3>

        <p className="text-sm text-gray-600 leading-relaxed">
          Descargue nuestras especificaciones técnicas, manuales y
          documentación para contratistas. Encuentre información detallada
          sobre nuestros servicios y soluciones de ingeniería.
        </p>

        <button className="rounded-sm bg-[#0B3A36] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#082a27]">
          Descargar Catálogo (PDF)
        </button>
      </div>
    </section>
  );
}