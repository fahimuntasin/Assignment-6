import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Stats from "./components/Stats";
import MainSection from "./components/MainSection";
import Steps from "./components/Steps";
import Pricing from "./components/Pricing";
import CTA from "./components/Cta";
import Footer from "./components/Footer";

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    if (cart.find((i) => i.id === product.id)) {
      toast.info(`"${product.name}" is already in your cart.`);
      return;
    }
    setCart((prev) => [...prev, product]);
    toast.success(`"${product.name}" added to cart!`);
  };

  const removeFromCart = (id) => {
    const item = cart.find((i) => i.id === id);
    setCart((prev) => prev.filter((i) => i.id !== id));
    if (item) toast.error(`"${item.name}" removed from cart.`);
  };

  const checkout = () => {
    if (cart.length === 0) return;
    setCart([]);
    toast.success("Checkout successful! Cart cleared. 🎉");
  };

  return (
    <div className="min-h-screen font-sans">
      <Navbar cartCount={cart.length} />
      <Banner />
      <Stats />
      <MainSection
        cart={cart}
        onAddToCart={addToCart}
        onRemove={removeFromCart}
        onCheckout={checkout}
      />
      <Steps />
      <Pricing />
      <CTA />
      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="light"
      />
    </div>
  );
}