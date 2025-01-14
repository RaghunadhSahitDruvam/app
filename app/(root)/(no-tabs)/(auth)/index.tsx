import { View, Text, Platform } from "react-native";
import React from "react";
import CustomButton from "@/components/shared/CustomButton";
import CustomInput from "@/components/shared/CustomInput";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, useRouter } from "expo-router";
import { SvgUri } from "react-native-svg";
import { StatusBar } from "expo-status-bar";
const LoginScreen = () => {
  const router = useRouter();
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
        <CustomInput placeHolder="Email Address" placeholderTextColor="#999" />
        <CustomButton
          title="Continue"
          buttonClassName={"bg-primary-100"}
          onPress={() => {
            router.push("/(root)/(no-tabs)/(auth)/password");
          }}
        />
        <View className="mb-8 mt-4">
          <Text className="text-base text-black">
            Don't have an account?{" "}
            <Link href={"/(root)/(no-tabs)/(auth)/register"}>
              <Text className="text-black font-bold">Create one</Text>
            </Link>
          </Text>
        </View>
        <View className="gap-3">
          <CustomButton
            title="Continue with Apple"
            buttonClassName="bg-gray-100"
            icon={
              <SvgUri
                width={24}
                height={24}
                uri={
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg"
                }
              />
            }
            onPress={() => {
              console.log("hello");
            }}
          />
          <CustomButton
            title="Continue with Google"
            buttonClassName="bg-gray-100"
            icon={
              <SvgUri
                width={24}
                height={24}
                uri={
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                }
              />
            }
            onPress={() => {
              console.log("hello");
            }}
          />
          <CustomButton
            title="Continue with Facebook"
            buttonClassName="bg-gray-100"
            icon={
              <SvgUri
                width={24}
                height={24}
                uri="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg"
              />
            }
            onPress={() => {
              console.log("hello");
            }}
          />
        </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default LoginScreen;
