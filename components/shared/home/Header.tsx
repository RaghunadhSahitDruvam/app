import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
  ShoppingBag,
  ChevronDown,
  ShoppingBagIcon,
  ShoppingBasket,
} from "lucide-react-native";
import { useRouter } from "expo-router";

const Header = () => {
  const router = useRouter();
  return (
    <View className="flex-row items-center justify-between px-4">
      <Image
        source={require("@/assets/images/home/Header/profile-image.png")}
        className="w-10 h-10 rounded-full"
      />
      <TouchableOpacity className="flex-row items-center bg-gray-200 px-4 py-2 rounded-full space-x-2">
        <Text className="text-base font-rubik">Men</Text>
        <ChevronDown size={20} color={"#000"} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          router.push("/(root)/(no-tabs)/cart");
        }}
        className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center"
      >
        <ShoppingBasket size={15} color={"#fff"} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
