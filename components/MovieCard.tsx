import { Link } from "expo-router";
import { Text, Image, TouchableOpacity, View } from "react-native";

import { icons } from "@/constants/icons";
import { useSavedMoviesStore, SavedMovie } from "@/store/savedMoviesStore";

const MovieCard = ({
  id,
  poster_path,
  title,
  vote_average,
  release_date,
  overview,
  backdrop_path,
}: Movie) => {
  const { isMovieSaved, toggleMovie } = useSavedMoviesStore();
  const saved = isMovieSaved(id);

  const handleSave = () => {
    const movie: SavedMovie = {
      id,
      title,
      poster_path,
      release_date,
      vote_average,
      overview: overview || "",
      backdrop_path,
    };
    toggleMovie(movie);
  };

  return (
    <Link href={`/movie/${id}`} asChild>
      <TouchableOpacity className="w-[30%]">
        <View className="relative">
          <Image
            source={{
              uri: poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : "https://placehold.co/600x400/1a1a1a/FFFFFF.png",
            }}
            className="w-full h-52 rounded-lg"
            resizeMode="cover"
          />
          <TouchableOpacity
            onPress={handleSave}
            className="absolute top-2 right-2 bg-black/50 p-1.5 rounded-full"
          >
            <Image
              source={icons.save}
              className="size-5"
              tintColor={saved ? "#FFD700" : "#fff"}
            />
          </TouchableOpacity>
        </View>

        <Text className="text-sm font-bold text-white mt-2" numberOfLines={1}>
          {title}
        </Text>

        <View className="flex-row items-center justify-start gap-x-1">
          <Image source={icons.star} className="size-4" />
          <Text className="text-xs text-white font-bold uppercase">
            {Math.round(vote_average / 2)}
          </Text>
        </View>

        <View className="flex-row items-center justify-between">
          <Text className="text-xs text-light-300 font-medium mt-1">
            {release_date?.split("-")[0]}
          </Text>
          <Text className="text-xs font-medium text-light-300 uppercase">
            Movie
          </Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default MovieCard;