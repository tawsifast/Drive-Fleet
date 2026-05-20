import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div>
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-zinc-950">
        {/* Background grid pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(#ffffff1a 1px, transparent 1px),
            linear-gradient(90deg, #ffffff1a 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Accent glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full bg-yellow-400 opacity-5 blur-3xl pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-8 py-24 grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <span className="inline-block text-yellow-400 text-xs font-semibold uppercase tracking-widest mb-6 border border-yellow-400/30 px-3 py-1 rounded-full">
              Premium Car Rental
            </span>

            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Drive Your
              <span className="block text-yellow-400 italic">Dream Car</span>
              Today.
            </h1>

            <p className="text-zinc-400 text-lg leading-relaxed mb-10 max-w-md">
              Discover a handpicked fleet of premium vehicles for every
              occasion. Seamless booking, transparent pricing, and comfort you
              deserve.
            </p>

            <div className="flex items-center gap-4 flex-wrap">
              <Link
                href="/explore"
                className="px-8 py-3 bg-yellow-400 text-zinc-950 text-sm font-semibold uppercase tracking-widest rounded hover:bg-yellow-300 transition-colors duration-200"
              >
                Explore Cars →
              </Link>
              <Link
                href="/booking"
                className="px-8 py-3 border border-zinc-700 text-zinc-300 text-sm uppercase tracking-widest rounded hover:border-zinc-400 hover:text-white transition-colors duration-200"
              >
                My Bookings
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-12 pt-8 border-t border-zinc-800">
              {[
                { value: "500+", label: "Cars Available" },
                { value: "10k+", label: "Happy Customers" },
                { value: "50+", label: "Cities Covered" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs text-zinc-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — decorative car card */}
          <div className="hidden md:flex justify-center">
            <div className="relative">
              {/* Main card */}
              <div className="w-80 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                <div className="w-full h-48 bg-zinc-800 rounded-xl mb-4 flex items-center justify-center text-6xl">
                  🚗
                </div>
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-white font-semibold">Premium Sedan</h3>
                  <span className="text-yellow-400 font-bold">$89/day</span>
                </div>
                <p className="text-zinc-500 text-sm mb-4">
                  Luxury · Automatic · 5 Seats
                </p>
                <div className="flex gap-2">
                  <span className="text-xs bg-zinc-800 text-zinc-400 px-3 py-1 rounded-full">
                    ⛽ Petrol
                  </span>
                  <span className="text-xs bg-zinc-800 text-zinc-400 px-3 py-1 rounded-full">
                    ❄️ AC
                  </span>
                  <span className="text-xs bg-zinc-800 text-zinc-400 px-3 py-1 rounded-full">
                    📍 GPS
                  </span>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-zinc-950 text-xs font-bold px-3 py-2 rounded-xl shadow-lg">
                ✓ Available Now
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
