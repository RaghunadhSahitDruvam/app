import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import CustomButton from "@/components/shared/CustomButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { SizeBottomSheet } from "@/components/shared/product/SizeBottomSheet";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("window");
const ProductScreen = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("S");
  const [isSizeSheetVisible, setSizeSheetVisible] = useState(false);
  const images = [
    require("@/assets/images/product/1.png"),
    require("@/assets/images/product/2.png"),
    require("@/assets/images/product/3.png"),
  ];

  const reviews = [
    {
      id: "1",
      name: "Alex Morgan",
      avatar: require("@/assets/images/product/user/1.png"),
      rating: 3,
      text: "Gucci transcribes its heritage, creativity, and innovation into a plenitude of collections. From staple items to distinctive accessories.",
      date: "12 days ago",
    },
    {
      id: "2",
      name: "Alex Morgan",
      avatar: require("@/assets/images/product/user/2.png"),
      rating: 3,
      text: "Gucci transcribes its heritage, creativity, and innovation into a plenitude of collections. From staple items to distinctive accessories.",
      date: "12 days ago",
    },
  ];
  const ReviewCard = ({ review }: any) => (
    <View className="gap-3 mb-[10px]">
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center gap-3">
          <Image source={review.avatar} className="w-12 h-12 rounded-full" />
          <Text className="text-lg font-rubik-bold">{review.name}</Text>
        </View>
        <View className="flex-row gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Ionicons
              key={star}
              name={star <= review.rating ? "star" : "star-outline"}
              size={16}
              color={"#8e6cef"}
            />
          ))}
        </View>
      </View>
      <Text className="text-base font-rubik-light leading-6 text-gray-800">
        {review.text}
      </Text>
      <Text className="text-sm font-rubik-medium text-black">
        {review.date}
      </Text>
    </View>
  );
  const renderCarouselItem = ({ item }: { item: string }) => (
    <Image source={item} style={styles.carouselImage} resizeMode="contain" />
  );
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row justify-between px-5 py-2">
        <TouchableOpacity
          onPress={() => router.back()}
          className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center"
        >
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
          <Ionicons name="heart-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Content */}
      <ScrollView className="flex-1">
        <FlatList
          data={images}
          renderItem={renderCarouselItem}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          className="h-[100%]"
        />

        {/* Product Info */}
        <View className="px-5">
          <Text className="text-xl font-semibold mb-2">
            Men's Harrington Jacket
          </Text>
          <Text className="text-xl text-primary-100 font-semibold">$148</Text>
        </View>

        {/* Options */}
        <View className="px-5 py-5 space-y-5">
          <View className="bg-gray-100 mt-4 flex-row items-center justify-between px-4 py-2 rounded-full">
            <Text className="text-lg font-medium">Size</Text>
            <TouchableOpacity
              className="flex-row items-center bg-gray-100 px-4 py-3 rounded-lg"
              onPress={() => setSizeSheetVisible(true)}
            >
              <Text className="text-base mr-2">S</Text>
              <Ionicons name="chevron-down" size={20} color="#000" />
            </TouchableOpacity>
            <SizeBottomSheet
              visible={isSizeSheetVisible}
              onClose={() => setSizeSheetVisible(false)}
              selectedSize={selectedSize}
              onSelectSize={setSelectedSize}
            />
          </View>

          <View className="bg-gray-100 mt-4 flex-row items-center justify-between px-4 py-2 rounded-full">
            <Text className="text-lg font-medium">Color</Text>
            <TouchableOpacity className="flex-row items-center bg-gray-100 px-4 py-3 rounded-lg">
              <View className="w-6 h-6 rounded-full bg-[#B4B98B] mr-2" />
              <Ionicons name="chevron-down" size={20} color="#000" />
            </TouchableOpacity>
          </View>

          <View className="bg-gray-100 flex-row items-center justify-between px-4 py-2 mt-4 rounded-full">
            <Text className="text-lg font-medium">Quantity</Text>
            <View className="flex-row items-center">
              <TouchableOpacity
                className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center"
                onPress={() => setQuantity(Math.max(1, quantity - 1))}
              >
                <Text className="text-white text-xl font-semibold">-</Text>
              </TouchableOpacity>
              <Text className="text-lg mx-5">{quantity}</Text>
              <TouchableOpacity
                className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center"
                onPress={() => setQuantity(quantity + 1)}
              >
                <Text className="text-white text-xl font-semibold">+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <Text className="px-5 text-base leading-6 text-black-100">
          Built for life and made to last, this full-zip corduroy jacket is part
          of our Nike Life collection. The spacious fit gives you plenty of room
          to layer underneath, while the soft corduroy keeps it casual and
          timeless.
        </Text>

        <View className="px-5  py-5">
          <Text className="text-xl font-rubik-semibold mb-3">
            Shipping & Returns
          </Text>
          <Text className="text-base leading-6 text-black-100">
            Free standard shipping and free 60-day returns
          </Text>
        </View>

        <View className="px-5 py-5 space-y-4">
          <Text className="text-xl font-rubik-medium mb-[10px]">Reviews</Text>
          <View>
            <Text className="text-2xl font-rubik-semibold mb-[10px]">
              4.5 Ratings
            </Text>
            <Text className="text-base text-black-100 mb-[10px]">
              213 Reviews
            </Text>
          </View>

          <View className="space-y-5">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Footer */}
      <View className="flex-row  items-center px-5 py-2  bg-white">
        {/* <TouchableOpacity className="flex-row items-center justify-center bg-primary-100 rounded-full py-3 px-7 space-x-3">
        <Text className="text-white text-base font-semibold">Add to Bag</Text>
      </TouchableOpacity> */}
        <CustomButton
          buttonClassName="bg-primary-100"
          textClassName="font-rubik-medium"
          title="$148 - Add to Bag"
        />
      </View>
    </SafeAreaView>
  );
};

export default ProductScreen;
const styles = StyleSheet.create({
  carouselImage: {
    width: 200,
    height: 300,
  },
});
