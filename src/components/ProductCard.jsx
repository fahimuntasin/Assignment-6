import { useState } from "react";

const TagBadge = ({ tag, tagType }) => {
  const styles = {
    popular: "bg-purple-100 text-purple-700",
    new: "bg-green-100 text-green-700",
    "best-seller": "bg-orange-100 text-orange-700",
  };
  return (
    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${styles[tagType] || "bg-gray-100 text-gray-700"}`}>
      {tag}
    </span>
  );
};

const ProductCard = ({ product, onAddToCart }) => {
  const [added, setAdded] = useState(false);

  const handleBuy = () => {
    onAddToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 flex flex-col gap-3 hover:shadow-xl transition-shadow relative">
      <div className="absolute top-4 right-4">
        <TagBadge tag={product.tag} tagType={product.tagType} />
      </div>

      {/* Icon */}
      <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center overflow-hidden">
        <img src={product.icon} alt={product.name} className="w-8 h-8 object-contain" />
      </div>

      <div>
        <h3 className="font-bold text-gray-900 text-base">{product.name}</h3>
        <p className="text-gray-500 text-xs mt-1 line-clamp-2">{product.description}</p>
      </div>

      <div className="flex items-baseline gap-1">
        <span className="text-2xl font-black text-gray-900">${product.price}</span>
        <span className="text-gray-400 text-xs">/{product.period}</span>
      </div>

      <ul className="flex flex-col gap-1">
        {product.features.map((f, i) => (
          <li key={i} className="text-xs text-gray-600 flex items-center gap-1.5">
            <span className="text-purple-500 font-bold">✓</span>
            {f}
          </li>
        ))}
      </ul>

      <button
        onClick={handleBuy}
        className={`mt-auto w-full py-2.5 rounded-full text-sm font-semibold transition ${
          added
            ? "bg-green-500 text-white"
            : "bg-purple-600 hover:bg-purple-700 text-white"
        }`}
      >
        {added ? "Added to Cart ✓" : "Buy Now"}
      </button>
    </div>
  );
};

export default ProductCard;