import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import CustomButton from "@/components/shared/CustomButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { ArrowDown } from "lucide-react-native";

const onboardingScreen = () => {
  const [selectedGender, setSelectedGender] = useState("men");
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 px-6 pt-10">
        <Text className="text-3xl font-rubik-semibold text-gray-800 mb-10">
          Tell us about yourself
        </Text>

        <View className="mb-8">
          <Text className="text-lg font-rubik-medium text-gray-800 mb-4">
            Who do you shop for?
          </Text>
          <View className="flex-row space-x-3">
            <TouchableOpacity
              className={`flex-1 h-14 rounded-full justify-center items-center ${
                selectedGender === "men" ? "bg-primary-100" : "bg-gray-200"
              }`}
              onPress={() => setSelectedGender("men")}
            >
              <Text
                className={`text-base font-rubik-medium ${
                  selectedGender == "men" ? "text-white" : "text-black"
                }`}
              >
                Men
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className={`flex-1 h-14 rounded-full justify-center items-center ${
                selectedGender === "women" ? "bg-primary-100" : "bg-gray-200"
              }`}
              onPress={() => setSelectedGender("women")}
            >
              <Text
                className={`text-base font-rubik-medium ${
                  selectedGender == "women" ? "text-white" : "text-black"
                }`}
              >
                Women
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="mb-8">
          <Text className="text-lg font-rubik-medium text-gray-800 mb-4">
            How old are you?
          </Text>
          <TouchableOpacity className="h-14 bg-gray-200 rounded-full px-5 flex-row items-center justify-between">
            <Text className="text-base text-gray-800">Age Range</Text>
            <Text className="text-xl text-gray-800">
              <ArrowDown color={"#000"} />
            </Text>
          </TouchableOpacity>
        </View>
        <CustomButton
          onPress={() => {
            router.push("/(root)/(tabs)/home");
          }}
          title="Finish"
          buttonClassName="absolute bottom-6 left-6 right-6 bg-primary-100"
          textClassName="text-lg font-rubik-semibold"
        />
      </View>
    </SafeAreaView>
  );
};

export default onboardingScreen;
