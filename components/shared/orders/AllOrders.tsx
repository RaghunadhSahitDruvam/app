import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Ionicons } from "@expo/vector-icons";
import { router, useRouter } from "expo-router";

const Tab = createMaterialTopTabNavigator();
const OrderItem = ({
  orderNumber,
  itemCount,
}: {
  orderNumber: string;
  itemCount: number;
}) => (
  <TouchableOpacity
    onPress={() => {
      router.push("/(root)/(no-tabs)/order/1");
    }}
  >
    <View className="flex-row items-center justify-between p-4 bg-gray-100 mx-4 my-2 rounded-lg">
      <View className="flex-row items-center">
        <Ionicons
          name="document-text-outline"
          size={24}
          color={"#000"}
          className="mr-3"
        />
        <View>
          <Text className="text-lg font-rubik-medium text-black mb-1">
            Order #{orderNumber}
          </Text>
          <Text className="text-sm text-gray-500">{itemCount} items</Text>
        </View>
      </View>
      <Ionicons name="arrow-forward-circle-outline" size={26} color={"#000"} />
    </View>
  </TouchableOpacity>
);
const OrdersList = () => {
  const orders = [
    { id: "456765", items: 4 },
    { id: "454569", items: 2 },
    { id: "454809", items: 1 },
  ];
  return (
    <ScrollView className="flex-1 bg-white">
      {orders.map((order) => (
        <OrderItem
          key={order.id}
          orderNumber={order.id}
          itemCount={order.items}
        />
      ))}
    </ScrollView>
  );
};
const TabScreen = () => <OrdersList />;
const AllOrders = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="p-4 bg-white">
        <Text className="text-2xl font-rubik-semibold text-black">Orders</Text>
      </View>
      <Tab.Navigator
        screenOptions={{
          tabBarScrollEnabled: true,
          tabBarStyle: {
            backgroundColor: "#fff",
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
          tabBarItemStyle: {
            width: "auto",
            paddingHorizontal: 16,
          },
          tabBarLabelStyle: {
            textTransform: "none",
            fontSize: 16,
            fontWeight: "500",
          },
          tabBarIndicatorStyle: {
            backgroundColor: "#8e6cef",
            height: "100%",
          },
          tabBarActiveTintColor: "#fff",
          tabBarInactiveTintColor: "#000",
        }}
      >
        <Tab.Screen name="Processing" component={TabScreen} />
        <Tab.Screen name="Shipped" component={TabScreen} />
        <Tab.Screen name="Delivered" component={TabScreen} />
        <Tab.Screen name="Returned" component={TabScreen} />
        <Tab.Screen name="Cancelled" component={TabScreen} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default AllOrders;
