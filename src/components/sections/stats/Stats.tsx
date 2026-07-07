export default function Stats() {
  const statsList = [
    { value: "150+", label: "Proyectos Completados" },
    { value: "15", label: "Años de Experiencia" },
    { value: "0%", label: "Fallas Estructurales" },
    { value: "24/7", label: "Soporte Técnico" },
  ];

  return (
    <section className="w-full bg-[#F5F7F7] border-y border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
          {statsList.map((stat, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col items-center justify-center text-center ${
                idx !== 3 ? "md:border-r md:border-gray-300" : ""
              }`}
            >
              <span className="text-3xl sm:text-4xl font-extrabold text-[#0B3A36] tracking-tight">
                {stat.value}
              </span>
              <span className="mt-2 text-[10px] sm:text-xs font-bold tracking-widest text-gray-500 uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
