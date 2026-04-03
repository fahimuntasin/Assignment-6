import userIcon from "../assets/assets/user.png";
import packageIcon from "../assets/assets/package.png";
import rocketIcon from "../assets/assets/rocket.png";

const Steps = () => {
  const steps = [
    {
      step: "01",
      title: "Create Account",
      desc: "Sign up for free in seconds. No credit card required to get started.",
      icon: userIcon,
    },
    {
      step: "02",
      title: "Choose Products",
      desc: "Browse our catalog and select the tools that fit your needs.",
      icon: packageIcon,
    },
    {
      step: "03",
      title: "Start Creating",
      desc: "Download and start using your premium tools immediately.",
      icon: rocketIcon,
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-gray-900">Get Started In 3 Steps</h2>
          <p className="text-gray-500 text-sm mt-2">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s) => (
            <div
              key={s.step}
              className="relative bg-white border border-gray-200 rounded-2xl p-8 flex flex-col items-center text-center gap-5 hover:-translate-y-1 hover:shadow-md hover:border-purple-300 transition-all duration-300"
            >
              <span className="absolute top-4 right-4 w-9 h-9 bg-purple-600 text-white text-sm font-bold rounded-full flex items-center justify-center">
                {s.step}
              </span>

              <div className="w-24 h-24 rounded-full bg-purple-50 flex items-center justify-center mt-4 transition-colors duration-300 group-hover:bg-purple-100">
                <img src={s.icon} alt={s.title} className="w-12 h-12 object-contain" />
              </div>

              <div>
                <h3 className="font-bold text-gray-900 text-lg">{s.title}</h3>
                <p className="text-gray-500 text-sm mt-2 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;