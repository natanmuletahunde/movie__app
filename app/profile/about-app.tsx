import { ScrollView, Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "@/constants/icons";

const AboutApp = () => {
  return (
    <SafeAreaView className="flex-1 bg-primary px-5">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text className="text-2xl font-bold text-white mt-6 mb-6">About App</Text>

        <View className="items-center mb-8">
          <Image source={icons.logo} className="w-16 h-14 mb-4" />
          <Text className="text-white text-xl font-bold">Movie App</Text>
          <Text className="text-light-400 text-sm mt-1">Version 1.0.0</Text>
        </View>

        <View className="bg-secondary/10 rounded-xl p-4 mb-4">
          <Text className="text-white text-base font-medium mb-2">Description</Text>
          <Text className="text-light-300 text-sm leading-5">
            Your ultimate movie companion app. Browse trending movies, search for your favorites, and save them for later viewing. Stay updated with the latest releases and discover new films every day.
          </Text>
        </View>

        <View className="bg-secondary/10 rounded-xl p-4 mb-4">
          <Text className="text-white text-base font-medium mb-3">Features</Text>
          <Text className="text-light-300 text-sm mb-2">• Browse trending movies</Text>
          <Text className="text-light-300 text-sm mb-2">• Search for movies</Text>
          <Text className="text-light-300 text-sm mb-2">• Save favorites</Text>
          <Text className="text-light-300 text-sm mb-2">• View movie details</Text>
        </View>

        <View className="bg-secondary/10 rounded-xl p-4 mb-4">
          <Text className="text-white text-base font-medium mb-3">Powered By</Text>
          <Text className="text-light-300 text-sm mb-2">• The Movie Database (TMDB)</Text>
          <Text className="text-light-300 text-sm mb-2">• Appwrite</Text>
          <Text className="text-light-300 text-sm">• React Native & Expo</Text>
        </View>

        <View className="h-10" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AboutApp;
