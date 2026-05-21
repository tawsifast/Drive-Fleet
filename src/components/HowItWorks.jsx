// Section 2: How It Works
const HowItWorks = () => {
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
      <div className="absolute top-1/2 left-0 w-100 h-100 rounded-full bg-yellow-400 opacity-5 blur-3xl pointer-events-none" />

      <div className="relative z-10 w-11/12 mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-yellow-400 text-xs font-semibold uppercase tracking-widest mb-4 border border-yellow-400/30 px-3 py-1 rounded-full">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Rent a Car in <span className="text-yellow-400 italic">3 Easy Steps</span>
          </h2>
          <p className="text-zinc-400 mt-3 max-w-md mx-auto text-sm">
            Getting behind the wheel of your dream car has never been easier.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

          {/* Connector line */}
          <div className="hidden md:block absolute top-10 left-1/3 right-1/3 h-px bg-yellow-400/20" />

          {/* Step 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-yellow-400 text-zinc-950 flex items-center justify-center text-3xl font-bold mb-6 relative z-10">
              1
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 w-full">
              <div className="text-3xl mb-3">🔍</div>
              <h3 className="text-white font-bold text-lg mb-2">Browse & Search</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Explore our wide range of cars. Filter by type, price, or location to find your perfect match.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-yellow-400 text-zinc-950 flex items-center justify-center text-3xl font-bold mb-6 relative z-10">
              2
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 w-full">
              <div className="text-3xl mb-3">📅</div>
              <h3 className="text-white font-bold text-lg mb-2">Book Instantly</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Select your dates, choose your options, and confirm your booking in just a few clicks.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-yellow-400 text-zinc-950 flex items-center justify-center text-3xl font-bold mb-6 relative z-10">
              3
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 w-full">
              <div className="text-3xl mb-3">🚗</div>
              <h3 className="text-white font-bold text-lg mb-2">Drive & Enjoy</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Pick up your car and hit the road. Return it when done — it's that simple.
              </p>
            </div>
          </div>

        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          
            {/* href="/explore"
            className="inline-block px-10 py-4 bg-yellow-400 hover:bg-yellow-300 text-zinc-950 font-bold text-sm uppercase tracking-widest rounded-lg transition-colors"
          >
            Get Started →
          </a> */}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;