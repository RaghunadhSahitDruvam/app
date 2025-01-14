import { View, Text, Platform } from "react-native";
import React, { useState } from "react";
import CustomButton from "@/components/shared/CustomButton";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomInput from "@/components/shared/CustomInput";
import { Link, useRouter } from "expo-router";

const PasswordScreen = () => {
  const router = useRouter();
  const [password, setPassword] = useState("");
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View
        className={`flex-1 px-6 ${
          Platform.OS === "android" ? "pt-10" : "pt-5"
        }`}
      >
        <Text className="text-3xl font-rubik-semibold text-black mb-8">
          Sign in
        </Text>
        <CustomInput
          placeHolder="Password"
          placeholderTextColor="#999"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <CustomButton
          title="Continue"
          buttonClassName={"bg-primary-100"}
          onPress={() => {
            router.push("/(root)/(no-tabs)/onboarding");
          }}
        />
        <View className="mb-8 mt-4">
          <Text className="text-base text-black">
            Forgot Password?{" "}
            <Link href={"/(root)/(no-tabs)/(auth)/reset"}>
              <Text className="text-black font-bold">Reset</Text>
            </Link>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PasswordScreen;
