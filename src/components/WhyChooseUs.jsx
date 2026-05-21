// Section 1: Why Choose Us
const WhyChooseUs = () => {
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 rounded-full bg-yellow-400 opacity-5 blur-3xl pointer-events-none" />

      <div className="relative z-10 w-11/12 mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-yellow-400 text-xs font-semibold uppercase tracking-widest mb-4 border border-yellow-400/30 px-3 py-1 rounded-full">
            Why Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Why Choose <span className="text-yellow-400 italic">CarRental</span>
          </h2>
          <p className="text-zinc-400 mt-3 max-w-md mx-auto text-sm">
            We make renting a car simple, transparent, and enjoyable.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-yellow-400/50 transition-colors">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-white font-bold text-lg mb-2">Instant Booking</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Book your car in minutes with our seamless booking system. No waiting, no hassle.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-yellow-400/50 transition-colors">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-white font-bold text-lg mb-2">Best Prices</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Transparent pricing with no hidden fees. Get the best deal every time you rent.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-yellow-400/50 transition-colors">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="text-white font-bold text-lg mb-2">Fully Insured</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Every car comes fully insured. Drive with confidence and complete peace of mind.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-yellow-400/50 transition-colors">
            <div className="text-4xl mb-4">🕐</div>
            <h3 className="text-white font-bold text-lg mb-2">24/7 Support</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Our support team is always available to help you anytime, anywhere.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;