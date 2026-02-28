import { useRouter } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSavedMoviesStore, SavedMovie } from "@/store/savedMoviesStore";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";

const ProfileOption = ({
  icon,
  title,
  onPress,
}: {
  icon: any;
  title: string;
  onPress?: () => void;
}) => (
  <TouchableOpacity
    className="flex-row items-center justify-between bg-secondary/10 px-4 py-4 rounded-xl mb-3"
    onPress={onPress}
    activeOpacity={0.7}
  >
    <View className="flex-row items-center gap-4">
      <Image source={icon} className="size-6" tintColor="#fff" />
      <Text className="text-white text-base font-medium">{title}</Text>
    </View>
    <Image source={icons.arrow} className="size-5 rotate-180" tintColor="#666" />
  </TouchableOpacity>
);

const Profile = () => {
  const router = useRouter();
  const savedMovies = useSavedMoviesStore((state: { savedMovies: SavedMovie[] }) => state.savedMovies);

  return (
    <View className="flex-1 bg-primary">
      <Image
        source={images.bg}
        className="absolute w-full z-0"
        resizeMode="cover"
      />
      
      <SafeAreaView className="flex-1 px-5">
        <ScrollView showsVerticalScrollIndicator={false}>
        <View className="items-center mt-6 mb-8">
          <View className="w-24 h-24 rounded-full bg-secondary/20 items-center justify-center mb-4">
            <Image source={icons.person} className="size-14" tintColor="#fff" />
          </View>
          <Text className="text-2xl font-bold text-white">Movie Explorer</Text>
          <Text className="text-light-300 mt-1">Welcome back!</Text>
        </View>

        <View className="flex-row justify-around bg-secondary/10 py-6 rounded-2xl mb-6">
          <View className="items-center">
            <Text className="text-2xl font-bold text-white">
              {savedMovies.length}
            </Text>
            <Text className="text-light-400 text-sm mt-1">Saved</Text>
          </View>
          <View className="w-px bg-secondary/30" />
          <View className="items-center">
            <Text className="text-2xl font-bold text-white">0</Text>
            <Text className="text-light-400 text-sm mt-1">Watched</Text>
          </View>
          <View className="w-px bg-secondary/30" />
          <View className="items-center">
            <Text className="text-2xl font-bold text-white">-</Text>
            <Text className="text-light-400 text-sm mt-1">Favorite</Text>
          </View>
        </View>

        <Text className="text-lg font-bold text-white mb-4">Settings</Text>

        <ProfileOption
          icon={icons.person}
          title="Edit Profile"
          onPress={() => router.push("/profile/edit-profile")}
        />
        <ProfileOption
          icon={icons.save}
          title="Saved Movies"
          onPress={() => router.push("/saved")}
        />
        <ProfileOption
          icon={icons.play}
          title="App Theme"
          onPress={() => router.push("/profile/app-theme")}
        />
        <ProfileOption
          icon={icons.star}
          title="Notifications"
          onPress={() => router.push("/profile/notifications")}
        />
        <ProfileOption
          icon={icons.logo}
          title="About App"
          onPress={() => router.push("/profile/about-app")}
        />

        <View className="h-24" />
      </ScrollView>
    </SafeAreaView>
    </View>
  );
};

export default Profile;
