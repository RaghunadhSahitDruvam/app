import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/shared/home/Header";
import SearchBar from "@/components/shared/home/SearchBar";
import CategoriesListHomePage from "@/components/shared/home/Categories";
import ProductList from "@/components/shared/home/ProductList";

const Home = () => {
  const topSellingProducts = [
    {
      id: 1,
      title: "Men's Harrington Jacket",
      price: 148.0,
      image: "/placeholder.svg",
    },
    {
      id: 2,
      title: "Max Cirro Men's Slides",
      price: 55.0,
      originalPrice: 100.97,
      image: "/placeholder.svg",
    },
    {
      id: 3,
      title: "Max Cirro Men's a",
      price: 55.0,
      originalPrice: 100.97,
      image: "/placeholder.svg",
    },
    // Add more products as needed
  ];

  const newInProducts = [
    // Similar structure to topSellingProducts
    // Add products as needed
    {
      id: 1,
      title: "Men's Harrington Jacket",
      price: 148.0,
      image: "/placeholder.svg",
    },
    {
      id: 2,
      title: "Max Cirro Men's Slides",
      price: 55.0,
      originalPrice: 100.97,
      image: "/placeholder.svg",
    },
    {
      id: 3,
      title: "Max Cirro Men's a",
      price: 55.0,
      originalPrice: 100.97,
      image: "/placeholder.svg",
    },
  ];
  return (
    <SafeAreaView className="bg-white flex-1">
      <ScrollView>
        <Header />
        <SearchBar />
        <CategoriesListHomePage />
        <ProductList title="Top Selling" products={topSellingProducts} />
        <ProductList title="New In" products={newInProducts} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
