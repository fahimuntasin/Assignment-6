const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      sub: "Perfect for getting started",
      price: 0,
      period: "month",
      highlight: false,
      tag: null,
      features: ["Access to 5 free tools", "Basic templates", "Community support", "1 project per month"],
      cta: "Get Started Free",
    },
    {
      name: "Pro",
      sub: "Most popular",
      price: 29,
      period: "Month",
      highlight: true,
      tag: "Most Popular",
      features: [
        "Everything's Pro",
        "Access to all premium tools",
        "Unlimited templates",
        "Priority support",
        "Commercial use",
        "Cloud sync",
        "Advanced analytics",
      ],
      cta: "Start Pro Trial",
    },
    {
      name: "Enterprise",
      sub: "Teams and businesses",
      price: 99,
      period: "Month",
      highlight: false,
      tag: null,
      features: [
        "Everything's Pro",
        "Team collaboration",
        "Custom integrations",
        "Dedicated support",
        "SLA guarantee",
        "Custom branding",
      ],
      cta: "Contact Sales",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-gray-900">Simple, Transparent Pricing</h2>
          <p className="text-gray-500 text-sm mt-2">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl p-6 flex flex-col gap-4 border transition ${
                plan.highlight
                  ? "bg-purple-600 text-white border-purple-600 shadow-xl scale-105"
                  : "bg-white text-gray-800 border-gray-200"
              }`}
            >
              {plan.tag && (
                <span className="bg-white text-purple-600 text-xs font-bold px-3 py-1 rounded-full w-fit">
                  {plan.tag}
                </span>
              )}

              <div>
                <p className={`font-bold text-lg ${plan.highlight ? "text-white" : "text-gray-900"}`}>
                  {plan.name}
                </p>
                <p className={`text-xs mt-0.5 ${plan.highlight ? "text-purple-200" : "text-gray-500"}`}>
                  {plan.sub}
                </p>
              </div>

              <div className="flex items-baseline gap-1">
                <span className={`text-4xl font-black ${plan.highlight ? "text-white" : "text-gray-900"}`}>
                  ${plan.price}
                </span>
                <span className={`text-xs ${plan.highlight ? "text-purple-200" : "text-gray-400"}`}>
                  /{plan.period}
                </span>
              </div>

              <ul className="flex flex-col gap-2 flex-1">
                {plan.features.map((f, i) => (
                  <li
                    key={i}
                    className={`text-sm flex items-center gap-2 ${
                      plan.highlight ? "text-purple-100" : "text-gray-600"
                    }`}
                  >
                    {/* REPLACE: check icon */}
                    <span className={plan.highlight ? "text-green-300" : "text-purple-500"}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                className={`mt-2 w-full py-2.5 rounded-full font-semibold text-sm transition ${
                  plan.highlight
                    ? "bg-white text-purple-600 hover:bg-purple-50"
                    : "bg-purple-600 text-white hover:bg-purple-700"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;