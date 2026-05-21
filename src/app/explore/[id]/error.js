"use client"
import Link from "next/link";


const error = () => {
    return (
         <section className="min-h-screen bg-zinc-950 flex items-center justify-center px-4 relative overflow-hidden">

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

      <div className="relative z-10 flex flex-col items-center text-center">

        {/* Icon */}
        <div
          className="w-24 h-24 rounded-full border border-zinc-800 bg-zinc-900 flex items-center justify-center text-5xl mb-8"
          style={{ animation: "float 3s ease-in-out infinite" }}
        >
          🚗
        </div>
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
        `}</style>

        {/* 404 */}
        <h1 className="text-8xl font-bold text-white leading-none mb-2">
          4<span className="text-yellow-400 italic">0</span>4
        </h1>

        <span className="inline-block text-yellow-400 text-xs font-semibold uppercase tracking-widest my-4 border border-yellow-400/30 px-3 py-1 rounded-full">
          Page Not Found
        </span>

        <p className="italic text-xl text-zinc-400 mb-2">
          You`ve taken a wrong turn.
        </p>
        <p className="text-zinc-500 text-sm mb-10 max-w-sm">
          The page you`re looking for doesn`t exist or has been moved to another location.
        </p>

        <div className="flex gap-3 flex-wrap justify-center">
          <Link
            href="/"
            className="px-8 py-3 bg-yellow-400 hover:bg-yellow-300 text-zinc-950 font-bold text-sm uppercase tracking-widest rounded-lg transition-colors"
          >
            ← Back to Home
          </Link>
          <Link
            href="/explore"
            className="px-8 py-3 border border-zinc-700 hover:border-zinc-500 text-zinc-400 hover:text-white text-sm uppercase tracking-widest rounded-lg transition-colors"
          >
            Explore Cars
          </Link>
        </div>

        <div className="w-12 h-px bg-zinc-800 my-8" />
        <p className="text-xs tracking-widest text-zinc-600 uppercase">
          23°42′N · 90°21′E · Lost somewhere
        </p>

      </div>
    </section>
    );
};

export default error;