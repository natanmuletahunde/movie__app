import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

const AppTheme = () => {
  const [selectedTheme, setSelectedTheme] = useState("dark");

  const themes = [
    { id: "dark", name: "Dark Mode", description: "Easy on the eyes" },
    { id: "light", name: "Light Mode", description: "Bright and clean" },
    { id: "system", name: "System", description: "Follow device settings" },
  ];

  return (
    <SafeAreaView className="flex-1 bg-primary px-5">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text className="text-2xl font-bold text-white mt-6 mb-6">App Theme</Text>

        <View className="gap-4">
          {themes.map((theme) => (
            <TouchableOpacity
              key={theme.id}
              className={`p-4 rounded-xl mb-3 ${
                selectedTheme === theme.id ? "bg-accent/20 border border-accent" : "bg-secondary/10"
              }`}
              onPress={() => setSelectedTheme(theme.id)}
            >
              <Text
                className={`text-base font-medium ${
                  selectedTheme === theme.id ? "text-accent" : "text-white"
                }`}
              >
                {theme.name}
              </Text>
              <Text className="text-light-400 text-sm mt-1">{theme.description}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AppTheme;
