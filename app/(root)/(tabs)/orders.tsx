import { View, Text } from "react-native";
import React from "react";
import AllOrders from "@/components/shared/orders/AllOrders";
import NoOrders from "@/components/shared/orders/NoOrders";

const Orders = () => {
  const showOrders = true;
  return showOrders ? <AllOrders /> : <NoOrders />;
};

export default Orders;
