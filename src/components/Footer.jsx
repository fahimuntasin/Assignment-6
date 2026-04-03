import { FaYoutube, FaFacebookF, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const cols = {
    Product: ["Features", "About", "Pricing", "Templates", "Integrations"],
    Company: ["About", "Blog", "Careers", "Press"],
    Resources: ["Documentation", "Help Center", "Community", "Contact"],
  };

  const socialIcons = [
    { icon: <FaYoutube size={14} />, key: "youtube" },
    { icon: <FaFacebookF size={14} />, key: "facebook" },
    { icon: <FaXTwitter size={14} />, key: "twitter" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-8">
        {/* Brand */}
        <div className="md:col-span-2">
          <span className="text-white font-extrabold text-2xl">DigiTools</span>
          <p className="text-sm mt-3 text-gray-400 max-w-xs leading-relaxed">
            Premium digital tools for creators, professionals, and businesses. Work smarter
            with our suite of powerful tools.
          </p>
        </div>

        {/* Link Columns */}
        {Object.entries(cols).map(([title, links]) => (
          <div key={title}>
            <p className="text-white font-semibold text-sm mb-4">{title}</p>
            <ul className="flex flex-col gap-3">
              {links.map((l) => (
                <li key={l} className="text-sm text-gray-400 hover:text-white cursor-pointer transition">
                  {l}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Social Links */}
        <div>
          <p className="text-white font-semibold text-sm mb-4">Social Links</p>
          <div className="flex items-center gap-2">
            {socialIcons.map((s) => (
              <div
                key={s.key}
                className="w-9 h-9 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center cursor-pointer transition text-white"
              >
                {s.icon}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-500">
        <span>© 2026 Digitools. All rights reserved.</span>
        <div className="flex gap-6">
          {["Privacy Policy", "Terms of Service", "Cookies"].map((l) => (
            <span key={l} className="hover:text-white cursor-pointer transition">
              {l}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;