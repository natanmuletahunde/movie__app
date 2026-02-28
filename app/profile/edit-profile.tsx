import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "@/constants/icons";

const EditProfile = () => {
  return (
    <SafeAreaView className="flex-1 bg-primary px-5">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text className="text-2xl font-bold text-white mt-6 mb-6">Edit Profile</Text>

        <View className="items-center mb-8">
          <View className="w-24 h-24 rounded-full bg-secondary/20 items-center justify-center mb-4">
            <Image source={icons.person} className="size-14" tintColor="#fff" />
          </View>
          <TouchableOpacity className="text-accent text-sm font-medium">
            <Text className="text-accent text-sm">Change Photo</Text>
          </TouchableOpacity>
        </View>

        <View className="bg-secondary/10 rounded-xl p-4 mb-4">
          <Text className="text-light-400 text-sm mb-2">Username</Text>
          <Text className="text-white text-base">Movie Explorer</Text>
        </View>

        <View className="bg-secondary/10 rounded-xl p-4 mb-4">
          <Text className="text-light-400 text-sm mb-2">Email</Text>
          <Text className="text-white text-base">user@movieapp.com</Text>
        </View>

        <View className="bg-secondary/10 rounded-xl p-4 mb-6">
          <Text className="text-light-400 text-sm mb-2">Bio</Text>
          <Text className="text-white text-base">Movie enthusiast</Text>
        </View>

        <TouchableOpacity className="bg-accent py-4 rounded-xl items-center mb-6">
          <Text className="text-black font-semibold">Save Changes</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditProfile;
