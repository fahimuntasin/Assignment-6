const Stats = () => {
  const items = [
    { value: "50K+", label: "Active Users" },
    { value: "200+", label: "Premium Tools" },
    { value: "4.9", label: "Rating" },
  ];

  return (
    <section className="bg-purple-600 py-10 px-4">
      <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-around gap-8">
        {items.map((s, i) => (
          <div key={i} className="text-center text-white">
            <p className="text-4xl font-black">{s.value}</p>
            <p className="text-purple-200 text-sm mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;