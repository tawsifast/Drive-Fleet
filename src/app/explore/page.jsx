import CarCard from "@/components/CarCard";

const ExploreCarPage = async () => {
  const res = await fetch(`http://localhost:5000/explore`, {
    cache: "no-store",
  });
  const cars = await res.json();

  return (
    <section className="min-h-screen bg-zinc-950 relative overflow-hidden">
      {/* Grid bg */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(#ffffff1a 1px, transparent 1px),
                     linear-gradient(90deg, #ffffff1a 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-150 rounded-full bg-yellow-400 opacity-5 blur-3xl pointer-events-none" />

      <div className="relative z-10 w-11/12 mx-auto py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-yellow-400 text-xs font-semibold uppercase tracking-widest mb-4 border border-yellow-400/30 px-3 py-1 rounded-full">
            Our Fleet
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white ">
            Explore <span className="text-yellow-400 italic">Cars</span>
          </h1>
          <p className="text-zinc-400 mt-3 max-w-md mx-auto text-sm">
            Handpicked vehicles for every journey — from city drives to
            cross-country adventures.
          </p>

          {/* Stats */}
          <div className="flex justify-center gap-10 mt-8 pt-8 border-t border-zinc-800">
            <div>
              <div className="text-2xl font-bold text-yellow-400">{cars.length}+</div>
              <div className="text-xs text-zinc-500 mt-1 uppercase tracking-widest">
                Cars Available
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-400">50+</div>
              <div className="text-xs text-zinc-500 mt-1 uppercase tracking-widest">
                Cities Covered
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-400">10k+</div>
              <div className="text-xs text-zinc-500 mt-1 uppercase tracking-widest">
                Happy Customers
              </div>
            </div>
          </div>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 items-stretch">
          {cars.map((car) => (
            <CarCard key={car._id} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreCarPage;
