import { View, Text, Pressable, Image, Dimensions } from "react-native";
import { Link } from "expo-router";

const SCREEN_WIDTH = Dimensions.get("window").width;

const NUM_COLUMNS = 3;
const GAP = 16;
const HORIZONTAL_PADDING = 16;

const CARD_WIDTH =
  (SCREEN_WIDTH - HORIZONTAL_PADDING * 2 - GAP * (NUM_COLUMNS - 1)) /
  NUM_COLUMNS;

const MovieCard = ({ ...item }) => {
  return (
    <View style={{ width: CARD_WIDTH }}>
      <Link href={`/movie/${item.id}`} asChild>
        <Pressable>
          <Image
            source={{ uri: item.thumbnail }}
            style={{
              width: "100%",
              height: 200,
              borderRadius: 14,
              borderColor: "#fff",
              borderWidth: 1,
            }}
            resizeMode="cover"
          />

          <Text
            numberOfLines={2}
            className="mt-2 text-xs font-semibold text-white"
          >
            {item.title.length > 20
              ? item.title.slice(0, 17) + "..."
              : item.title}
          </Text>
          <View className="absolute top-2 right-2 bg-black/70 px-2 py-1 rounded-md">
            <Text className="text-xs text-yellow-400">⭐ {item.rating}</Text>
          </View>

          <View className="flex-grow items-start justify-start">
            <Text className="text-xs text-gray-300 mt-1">${item.price}</Text>
          </View>
        </Pressable>
      </Link>
    </View>
  );
};

export default MovieCard;
