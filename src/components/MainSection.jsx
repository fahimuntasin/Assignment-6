import { useState } from "react";
import products from "./Products";
import ProductCard from "./ProductCard";
import CartItem from "./CartItem";
const MainSection = ({ cart, onAddToCart, onRemove, onCheckout }) => {
  const [activeTab, setActiveTab] = useState("products");

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-3">
          <h2 className="text-3xl font-black text-gray-900">Premium Digital Tools</h2>
          <p className="text-gray-500 text-sm mt-2">
            Choose from our curated collection of premium digital products designed
            to boost your productivity and creativity.
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex justify-center gap-2 mt-6 mb-10">
          <button
            onClick={() => setActiveTab("products")}
            className={`px-6 py-2 rounded-full font-semibold text-sm transition ${
              activeTab === "products"
                ? "bg-purple-600 text-white shadow"
                : "bg-white border border-gray-300 text-gray-600 hover:border-purple-400"
            }`}
          >
            Products
          </button>
          <button
            onClick={() => setActiveTab("cart")}
            className={`px-6 py-2 rounded-full font-semibold text-sm transition ${
              activeTab === "cart"
                ? "bg-purple-600 text-white shadow"
                : "bg-white border border-gray-300 text-gray-600 hover:border-purple-400"
            }`}
          >
            Cart ({cart.length})
          </button>
        </div>

        {/* Products Grid */}
        {activeTab === "products" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />
            ))}
          </div>
        )}

        {/* Cart View */}
        {activeTab === "cart" && (
          <div className="max-w-2xl mx-auto">
            {cart.length === 0 ? (
              <div className="text-center py-16 text-gray-400">
                {/* REPLACE: empty cart icon */}
                <p className="text-5xl mb-4">EMPTY_CART_ICON</p>
                <p className="font-semibold text-lg">Your cart is empty</p>
                <p className="text-sm mt-1">Add some products to get started.</p>
              </div>
            ) : (
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 text-lg mb-4">Your Cart</h3>

                <div className="flex flex-col gap-3">
                  {cart.map((item) => (
                    <CartItem key={item.id} item={item} onRemove={onRemove} />
                  ))}
                </div>

                {/* Total */}
                <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-100">
                  <span className="font-semibold text-gray-700">Total</span>
                  <span className="font-black text-gray-900 text-lg">${total}</span>
                </div>

                {/* Checkout Button */}
                <button
                  onClick={onCheckout}
                  className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-full transition"
                >
                  Proceed To Checkout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default MainSection;