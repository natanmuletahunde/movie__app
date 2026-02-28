import { ScrollView, Text, View, Switch } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

const Notifications = () => {
  const [newMovieNotifs, setNewMovieNotifs] = useState(true);
  const [promotionalNotifs, setPromotionalNotifs] = useState(false);
  const [weeklyDigest, setWeeklyDigest] = useState(true);

  return (
    <SafeAreaView className="flex-1 bg-primary px-5">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text className="text-2xl font-bold text-white mt-6 mb-6">Notifications</Text>

        <View className="bg-secondary/10 rounded-xl p-4 mb-4">
          <View className="flex-row justify-between items-center">
            <View>
              <Text className="text-white text-base font-medium">New Movies</Text>
              <Text className="text-light-400 text-sm">Get notified about new releases</Text>
            </View>
            <Switch
              value={newMovieNotifs}
              onValueChange={setNewMovieNotifs}
              trackColor={{ false: "#3e3e3e", true: "#FFD700" }}
              thumbColor="#fff"
            />
          </View>
        </View>

        <View className="bg-secondary/10 rounded-xl p-4 mb-4">
          <View className="flex-row justify-between items-center">
            <View>
              <Text className="text-white text-base font-medium">Promotional</Text>
              <Text className="text-light-400 text-sm">Receive promotional content</Text>
            </View>
            <Switch
              value={promotionalNotifs}
              onValueChange={setPromotionalNotifs}
              trackColor={{ false: "#3e3e3e", true: "#FFD700" }}
              thumbColor="#fff"
            />
          </View>
        </View>

        <View className="bg-secondary/10 rounded-xl p-4 mb-4">
          <View className="flex-row justify-between items-center">
            <View>
              <Text className="text-white text-base font-medium">Weekly Digest</Text>
              <Text className="text-light-400 text-sm">Weekly summary of new content</Text>
            </View>
            <Switch
              value={weeklyDigest}
              onValueChange={setWeeklyDigest}
              trackColor={{ false: "#3e3e3e", true: "#FFD700" }}
              thumbColor="#fff"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Notifications;
