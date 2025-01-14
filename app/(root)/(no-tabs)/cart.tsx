import { View, Text } from "react-native";
import React from "react";
import CartScreen from "@/components/shared/cart/cart";
import EmptyCart from "@/components/shared/cart/empty-cart";

const Cart = () => {
  const cartItems = true;
  return cartItems ? <CartScreen /> : <EmptyCart />;
};

export default Cart;
