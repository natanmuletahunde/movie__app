import { Text, View, Pressable, Alert } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#f0f4f8", // light background
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          marginBottom: 12,
          color: "#1f2937", // dark gray
        }}
      >
        Welcome to my App
      </Text>

      <Text
        style={{
          fontSize: 16,
          marginBottom: 20,
          color: "#4b5563", // lighter gray
          textAlign: "center",
        }}
      >
        Explore amazing features in this small demo UI.
      </Text>

      <Pressable
        onPress={() => Alert.alert("Hello!", "You clicked the button")}
        style={{
          backgroundColor: "#2563eb", // blue button
          paddingVertical: 10,
          paddingHorizontal: 24,
          borderRadius: 8,
        }}
      >
        <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>
          Get Started
        </Text>
      </Pressable>
    </View>
  );
}
