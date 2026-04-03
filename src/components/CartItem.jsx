import { ShoppingCart } from "lucide-react";

const CartItem = ({ item, onRemove }) => {
  return (
    <div className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl p-4">
      {<ShoppingCart />}
      <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 text-xs font-bold flex-shrink-0">
        {/* REPLACE: {item.icon} */}
        IMG
      </div>

      {/* Info */}
      <div className="flex-1">
        <p className="font-semibold text-gray-800 text-sm">{item.name}</p>
        <p className="text-gray-500 text-xs">${item.price}</p>
      </div>

      {/* Remove Button */}
      <button
        onClick={() => onRemove(item.id)}
        className="text-red-600 hover:text-red-700 text-sm font-semibold transition"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;