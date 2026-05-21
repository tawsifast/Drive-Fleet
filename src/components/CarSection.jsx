import React from "react";
import CarCard from "./CarCard";
import Link from "next/link";

const CarSection = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/explore`);
  const cars = await res.json();
  console.log(cars);
  return (
    <section className="bg-zinc-950 py-16 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(#ffffff1a 1px, transparent 1px),
                            linear-gradient(90deg, #ffffff1a 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-75 rounded-full bg-yellow-400 opacity-5 blur-3xl pointer-events-none" />

      <div className="relative z-10 w-11/12 mx-auto">

        {/* Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="inline-block text-yellow-400 text-xs font-semibold uppercase tracking-widest mb-3 border border-yellow-400/30 px-3 py-1 rounded-full">
              Featured
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Popular <span className="text-yellow-400 italic">Cars</span>
            </h2>
          </div>
          <Link href="/explore" className="text-yellow-400 hover:text-yellow-300 text-md uppercase tracking-widest font-semibold transition-colors"> View All →</Link>
        </div>

        {/* Horizontal Scroll */}
        <div className="flex overflow-x-auto gap-5 scroll-smooth pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {cars.map((car) => (
            <div key={car._id} className="shrink-0 w-75">
              <CarCard car={car} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CarSection;
