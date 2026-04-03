import { ShoppingCart } from "lucide-react";

// Navbar Component
// Navbar Component
const Navbar = ({ cartCount }) => {
  return (
    <nav className="bg-white sticky top-0 z-50 border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <span className="text-xl font-extrabold text-purple-600 tracking-tight">
          DigiTools
        </span>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-6 text-sm text-gray-600 font-medium">
          {["Products", "Features", "Pricing", "Testimonials", "FAQ"].map((l) => (
            <li key={l} className="hover:text-purple-600 cursor-pointer transition-colors">
              {l}
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-600 hover:text-purple-600 cursor-pointer hidden md:block">
            Login
          </span>
          {<ShoppingCart />}
          <button className="relative p-2 rounded-full hover:bg-purple-50 transition">
            {}
        
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>
          <button className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold px-4 py-2 rounded-full transition">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;