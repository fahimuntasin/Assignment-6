const CTA = () => {
  return (
    <section className="bg-purple-600 py-16 px-4 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-black text-white mb-3">
          Ready To Transform Your Workflow?
        </h2>
        <p className="text-purple-200 text-sm mb-8">
          Join thousands of professionals who are already using DigiTools to work smarter.
          Start your free trial now.
        </p>
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <button className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-full text-sm hover:bg-purple-50 transition">
            Explore Products
          </button>
          <button className="border border-purple-300 text-white font-semibold px-6 py-3 rounded-full text-sm hover:border-white transition">
            View Pricing
          </button>
        </div>
        <p className="text-purple-300 text-xs mt-5">
          No risk free trial · No credit card required · Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default CTA;