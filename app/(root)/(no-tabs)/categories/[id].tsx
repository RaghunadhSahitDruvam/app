import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeft, Scroll } from "lucide-react-native";
// Product data constant
const HOODIES_DATA = [
  {
    id: "1",
    title: "Men's Fleece Pullover Hoodie",
    price: 100.0,
    image: require("@/assets/images/home/category-products/1.png"),
    isFavorite: false,
  },
  {
    id: "2",
    title: "Fleece Pullover Skate Hoodie",
    price: 150.97,
    image: require("@/assets/images/home/category-products/2.png"),
    isFavorite: false,
  },
  {
    id: "3",
    title: "Fleece Skate Hoodie",
    price: 110.0,
    image: require("@/assets/images/home/category-products/3.png"),
    isFavorite: false,
  },
  {
    id: "4",
    title: "Men's Ice-Dye Pullover Hoodie",
    price: 128.97,
    image: require("@/assets/images/home/category-products/4.png"),
    isFavorite: false,
  },
  {
    id: "5",
    title: "Men's Ice-Dye Pullover Hoodie",
    price: 128.97,
    image: require("@/assets/images/home/category-products/5.png"),
    isFavorite: false,
  },
  {
    id: "6",
    title: "Men's Ice-Dye Pullover Hoodie",
    price: 128.97,
    image: require("@/assets/images/home/category-products/6.png"),
    isFavorite: false,
  },
];
const { width } = Dimensions.get("window");
const CARD_WIDTH = (width - 48) / 2;
const ProductCard = ({
  title,
  price,
  image,
  onToggleFavourite,
  isFavourite,
}: any) => (
  <View
    className="bg-gray-100 rounded-xl mb-4 overflow-hidden"
    style={{ width: CARD_WIDTH }}
  >
    <Image source={image} className="w-full h-64 object-cover" />
    <TouchableOpacity
      className="absolute top-3 right-3 bg-white rounded-full p-2"
      onPress={onToggleFavourite}
    >
      <Ionicons
        name={isFavourite ? "heart" : "heart-outline"}
        size={24}
        color={isFavourite ? "red" : "black"}
      />
    </TouchableOpacity>
    <View className="p-3">
      <Text className="text-sm font-rubik-medium mb-2 line-clamp-2">
        {title}
      </Text>
      <Text className="text-lg font-semibold">${price.toFixed(2)}</Text>
    </View>
  </View>
);
const CategoryProductsScreen = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [products, setProducts] = useState(HOODIES_DATA);
  const toggleFavourite = (productId: any) => {
    setProducts(
      products.map((product) =>
        product.id === productId
          ? { ...product, isFavourite: !product.isFavorite }
          : product
      )
    );
  };
  console.log(id);
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-row items-center px-4 py-2 space-x-3">
        <TouchableOpacity
          className="w-10 h-10 rounded-full bg-gray-200 items-center justify-center "
          onPress={() => {
            router.back();
          }}
        >
          <ChevronLeft size={24} color={"#000"} />
        </TouchableOpacity>
      </View>
      <Text className="p-2 mr-2 px-4 pb-5 text-2xl font-rubik-medium">
        Hoodies (240)
      </Text>
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 16 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-row flex-wrap justify-between">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onToggleFavourite={() => toggleFavourite(product.id)}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CategoryProductsScreen;
