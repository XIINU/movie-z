// export const TMDB_CONFIG = {
//   BASE_URL: "https://api.themoviedb.org/3",
//   API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
//   headers: {
//     accept: "application/json",
//     Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,
//   },
// };

// export const fetchMovies = async ({
//   query,
// }: {
//   query: string;
// }): Promise<Movie[]> => {
//   const endpoint = query
//     ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
//     : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;

//   // console.log("TMDB KEY:", process.env.EXPO_PUBLIC_MOVIE_API_KEY);

//   const response = await fetch(endpoint, {
//     method: "GET",
//     headers: TMDB_CONFIG.headers,
//   });

//   if (!response.ok) {
//     throw new Error(`Failed to fetch movies: ${response.statusText}`);
//   }

//   const data = await response.json();
//   return data.results;
// };

import { Movie } from "@/types/types";

type DummyResponse = {
  products: Movie[];
};

export const fetchMovies = async ({
  query,
}: {
  query: string;
}): Promise<Movie[]> => {
  const endpoint = query
    ? `https://dummyjson.com/products/search?q=${encodeURIComponent(query)}`
    : `https://dummyjson.com/products`;

  const response = await fetch(endpoint);

  if (!response.ok) {
    throw new Error(
      `Failed to fetch data: ${response.status} ${response.statusText}`
    );
  }

  const data: DummyResponse = await response.json();
  // console.log("Fetched data:", data);
  return data.products;
};
