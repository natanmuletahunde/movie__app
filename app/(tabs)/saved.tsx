import { useRouter } from "expo-router";
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSavedMoviesStore, SavedMovie } from "@/store/savedMoviesStore";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";

const SavedMovieCard = ({ movie, onRemove }: { movie: SavedMovie; onRemove: () => void }) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      className="w-[48%] mb-4"
      onPress={() => router.push(`/movie/${movie.id}`)}
    >
      <View className="relative rounded-xl overflow-hidden bg-secondary/10">
        <Image
          source={{
            uri: movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : "https://placehold.co/600x400/1a1a1a/FFFFFF.png",
          }}
          className="w-full h-64"
          resizeMode="cover"
        />
        <TouchableOpacity
          onPress={onRemove}
          className="absolute top-2 right-2 bg-black/60 p-2 rounded-full"
        >
          <Image source={icons.save} className="size-5" tintColor="#FFD700" />
        </TouchableOpacity>
      </View>
      <Text className="text-white font-semibold mt-2 text-sm" numberOfLines={1}>
        {movie.title}
      </Text>
      <View className="flex-row items-center gap-x-1 mt-1">
        <Image source={icons.star} className="size-3" />
        <Text className="text-light-300 text-xs">
          {movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"}
        </Text>
        <Text className="text-light-300 text-xs ml-2">
          {movie.release_date?.split("-")[0] || "N/A"}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const Save = () => {
  const { savedMovies, removeMovie } = useSavedMoviesStore();

  return (
    <View className="flex-1 bg-primary">
      <Image
        source={images.bg}
        className="absolute w-full z-0"
        resizeMode="cover"
      />
      
      <SafeAreaView className="flex-1 px-5">
        {savedMovies.length === 0 ? (
          <View className="flex-1 justify-center items-center">
            <Image
              source={icons.save}
              className="size-24 opacity-30"
              tintColor="#fff"
            />
            <Text className="text-light-300 text-lg mt-4">
              No saved movies yet
            </Text>
            <Text className="text-light-400 text-sm mt-2 text-center">
              Tap the bookmark icon on any movie to save it here
            </Text>
          </View>
        ) : (
          <FlatList
            data={savedMovies.filter((item: SavedMovie, index: number, self: SavedMovie[]) => 
              index === self.findIndex((m: SavedMovie) => m.id === item.id)
            )}
            numColumns={2}
            columnWrapperStyle={{
              justifyContent: "space-between",
            }}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingTop: 100, paddingBottom: 100 }}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <SavedMovieCard
                movie={item}
                onRemove={() => removeMovie(item.id)}
              />
            )}
          />
        )}
      </SafeAreaView>
    </View>
  );
};

export default Save;
