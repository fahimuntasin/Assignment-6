import HeroImage from "../assets/assets/banner.png";
import { Target, Play } from "lucide-react";


const Banner = () => {
  return (
    <section className="bg-white py-16 md:py-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
       
        <div className="flex-1">
     <span className="inline-flex items-center gap-1.5 bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 w-fit">
  <Target size={14} />
  New: AI-Powered Tools Available
</span>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-4">
            Supercharge Your
            <br />
            Digital Workflow
          </h1>
          <p className="text-gray-500 text-sm md:text-base mb-8 max-w-md">
            Access premium AI tools, design assets, templates, and productivity
            software — all in one place. Start creating faster today.
          </p>
          <div className="flex items-center gap-3 flex-wrap">
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-full text-sm transition">
              Explore Products
            </button>
            <button className="border border-gray-300 hover:border-purple-400 text-gray-700 font-semibold px-6 py-3 rounded-full text-sm transition flex items-center gap-2">
             
              <span className="w-5 h-5 flex items-center justify-center text-xs">
                <Play size={16} />
              </span>
              Watch Demo
            </button>
          </div>
        </div>

        
        <div className="flex-1 flex justify-center">
          <div className="w-72 h-72 md:w-96 md:h-120 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400 text-sm border border-gray-200 transition-all duration-300 hover:scale-110">
            <img src={HeroImage} alt="Hero" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;