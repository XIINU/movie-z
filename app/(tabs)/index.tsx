import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import {
  Text,
  View,
  Image,
  ScrollView,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";
import useFetch from "@/services/useFetch";
import { fetchMovies } from "@/services/api";
import MovieCard from "@/components/MovieCard";

export default function Index() {
  const router = useRouter();

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetch(() => fetchMovies({ query: "" }));

  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full z-0" />
      <View className="flex-1">
        <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />

        {moviesLoading ? (
          <ActivityIndicator
            size="large"
            color="#0000ff"
            className="mt-10 self-center"
          />
        ) : moviesError ? (
          <Text>Error: {moviesError?.message}</Text>
        ) : (
          <View className="flex-1 mt-5">
            <SearchBar
              onPress={() => router.push("/search")}
              placeholder="Search for a movie"
            />
            <>
              <Text className="text-lg text-white font-bold mt-5 mb-3 ml-4">
                Latest Movies
              </Text>

              <FlatList
                data={movies?.slice(0, 20)}
                keyExtractor={(item) => item.id.toString()}
                numColumns={3}
                columnWrapperStyle={{
                  gap: 16,
                  marginBottom: 16,
                }}
                contentContainerStyle={{
                  paddingHorizontal: 16,
                  paddingBottom: 120,
                }}
                renderItem={({ item }) => <MovieCard {...item} />}
              />
            </>
          </View>
        )}
      </View>
    </View>
  );
}
