import { Link } from 'expo-router';
import { Text, View } from "react-native";
import "../global.css";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center">
      
      <Text className="text-5xl text-gray-800 font-bold">
        Welcome!
      </Text>

      <Link href="/onboarding">
        onboarding
      </Link>

      <Link
        href={{
          pathname: "/movie/[id]",
          params: { id: "avengers" }
        }}
      >
        avengers movie
      </Link>

    </View>
  ); 
}
