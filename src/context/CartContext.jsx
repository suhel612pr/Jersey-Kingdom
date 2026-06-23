import { createContext, useState, useEffect } from "react";
import { supabase } from "../supabaseClient";

export const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  // Initialize cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (error) {
        console.error("Error loading cart:", error);
      }
    }

    // Try to check Supabase auth if available
    if (supabase) {
      try {
        supabase.auth.getSession().then(({ data }) => {
          setUser(data.session?.user || null);
        });

        const subscription = supabase.auth.onAuthStateChange(
          (event, session) => {
            setUser(session?.user || null);
          }
        );

        return () => {
          if (subscription?.data?.subscription?.unsubscribe) {
            subscription.data.subscription.unsubscribe();
          }
        };
      } catch (error) {
        console.error("Auth check error:", error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        user,
        loading,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
