import { supabase } from "../supabaseClient";

// Add item to cart
export const addToCartDB = async (userId, product) => {
  try {
    // Check if item already exists
    const { data: existingItem } = await supabase
      .from("cart")
      .select("*")
      .eq("user_id", userId)
      .eq("product_id", product.id)
      .single();

    if (existingItem) {
      // Update quantity if exists
      const { data, error } = await supabase
        .from("cart")
        .update({ quantity: existingItem.quantity + 1 })
        .eq("id", existingItem.id);

      if (error) throw error;
      return { success: true, data };
    } else {
      // Add new item
      const { data, error } = await supabase
        .from("cart")
        .insert({
          user_id: userId,
          product_id: product.id,
          product_name: product.name,
          product_price: product.price,
          product_image: product.image,
          quantity: 1,
        });

      if (error) throw error;
      return { success: true, data };
    }
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Get cart items
export const getCartItems = async (userId) => {
  try {
    const { data, error } = await supabase
      .from("cart")
      .select("*")
      .eq("user_id", userId);

    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    return { success: false, error: error.message, data: [] };
  }
};

// Remove item from cart
export const removeFromCartDB = async (cartItemId) => {
  try {
    const { error } = await supabase
      .from("cart")
      .delete()
      .eq("id", cartItemId);

    if (error) throw error;
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Update cart quantity
export const updateCartQuantity = async (cartItemId, quantity) => {
  try {
    const { data, error } = await supabase
      .from("cart")
      .update({ quantity })
      .eq("id", cartItemId);

    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Clear cart
export const clearCart = async (userId) => {
  try {
    const { error } = await supabase
      .from("cart")
      .delete()
      .eq("user_id", userId);

    if (error) throw error;
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};
