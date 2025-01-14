import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import { Ionicons } from "@expo/vector-icons";
interface OrderStep {
  status: string;
  date: string;
  isCompleted: boolean;
  isActive: boolean;
}
const OrdeTrackingScreen = () => {
  const router = useRouter();
  const orderSteps: OrderStep[] = [
    {
      status: "Delivered",
      date: "28 May",
      isCompleted: false,
      isActive: false,
    },
    { status: "Shipped", date: "28 May", isCompleted: true, isActive: true },
    {
      status: "Order Confirmed",
      date: "28 May",
      isCompleted: true,
      isActive: true,
    },
    {
      status: "Order Placed",
      date: "28 May",
      isCompleted: true,
      isActive: true,
    },
  ];
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-row items-center px-5 pt-16 pb-4">
        <TouchableOpacity
          className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mb-6"
          onPress={() => {
            router.back();
          }}
        >
          <ChevronLeft size={24} color={"#000"} />
        </TouchableOpacity>
        <Text className="ml-4 text-lg font-rubik-medium text-black">
          Order #456765
        </Text>
      </View>
      <View className="px-5 mt-5">
        {orderSteps.map((step, index) => (
          <View className="mb-2" key={index}>
            <View className="flex-row items-center mb-2">
              <View
                className={`w-6 h-6 rounded-full items-center justify-center ${
                  step.isActive ? "bg-primary-100" : "bg-gray-500"
                }`}
              >
                {step.isCompleted && (
                  <Ionicons name="checkmark" size={10} color={"#fff"} />
                )}
              </View>
              <View className="flex-1 ml-3">
                <Text
                  className={`text-sm font-rubik-medium ${
                    step.isActive ? "text-black" : "text-gray-500"
                  }`}
                >
                  {step.status}
                </Text>
              </View>
              <Text className="text-sm font-rubik-medium text-gray-500">
                {step.date}
              </Text>
            </View>
            {index < orderSteps.length - 1 && (
              <View
                className={`w-0.5 h-10 ml-3 ${
                  step.isActive ? "bg-primary-100" : "bg-gray-500"
                }`}
              />
            )}
          </View>
        ))}
      </View>
      <View className="px-5 mt-8">
        <Text className="text-lg font-rubik-medium mb-4">Order Items</Text>
        <TouchableOpacity className="flex-row items-center justify-between p-4 bg-gray-100 rounded-lg">
          <View className="flex-row items-center">
            <Ionicons name="receipt-outline" size={24} color={"#000"} />
            <Text className="ml-3 text-base font-rubik-medium">4 items</Text>
          </View>
          <View className="flex-row items-center">
            <Text className="text-base text-primary-100 font-rubik-medium mr-1">
              View All
            </Text>
            <Ionicons name="chevron-forward" size={30} color={"#8e6cef"} />
          </View>
        </TouchableOpacity>
      </View>
      <View className="px-5 mt-8">
        <Text className="text-lg font-rubik-medium mb-4">Shipping Details</Text>
        <View className="p-4 bg-gray-100 rounded-lg">
          <Text className="text-base font-rubik mb-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
            quidem laborum, consequatur, ipsum laudantium sunt aliquam esse
            autem quaerat necessitatibus eum repudiandae quo ipsa. Fugiat non
            ullam possimus perspiciatis obcaecati?
          </Text>
          <Text className="text-base font-rubik text-gray-400">
            121-224-7890
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default OrdeTrackingScreen;
