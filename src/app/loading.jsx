// src/app/loading.jsx
export default function Loading() {
  return (
    <section className="min-h-screen bg-zinc-950 flex items-center justify-center relative overflow-hidden">

      {/* Grid bg */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(#ffffff1a 1px, transparent 1px),
                            linear-gradient(90deg, #ffffff1a 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 rounded-full bg-yellow-400 opacity-5 blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* Spinner */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-2 border-zinc-800" />
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-yellow-400 animate-spin" />
          <div className="absolute inset-2 rounded-full border-2 border-transparent border-t-yellow-400/50 animate-spin" style={{ animationDuration: "0.6s" }} />
        </div>

        <div className="text-center">
          <p className="text-yellow-400 text-xs font-semibold uppercase tracking-widest mb-1">
            Please wait
          </p>
          <p className="text-zinc-500 text-sm">Loading your experience...</p>
        </div>

        {/* Logo */}
        <div className="text-white font-bold text-lg mt-4">
          🚗 Car<span className="text-yellow-400">Rental</span>
        </div>
      </div>

    </section>
  );
}