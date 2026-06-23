import { supabase } from "../supabaseClient";

// Create order from cart
export const createOrder = async (userId, cartItems, totalPrice) => {
  try {
    const { data, error } = await supabase
      .from("orders")
      .insert({
        user_id: userId,
        items: cartItems,
        total_price: totalPrice,
        status: "pending",
        created_at: new Date().toISOString(),
      });

    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Get user orders
export const getUserOrders = async (userId) => {
  try {
    const { data, error } = await supabase
      .from("orders")
      .select("*")
      .eq("user_id", userId)
      .order("created_at", { ascending: false });

    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    return { success: false, error: error.message, data: [] };
  }
};

// Get order details
export const getOrderDetails = async (orderId) => {
  try {
    const { data, error } = await supabase
      .from("orders")
      .select("*")
      .eq("id", orderId)
      .single();

    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Update order status
export const updateOrderStatus = async (orderId, status) => {
  try {
    const { data, error } = await supabase
      .from("orders")
      .update({ status })
      .eq("id", orderId);

    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    return { success: false, error: error.message };
  }
};
