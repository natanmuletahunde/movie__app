import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface SavedMovie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  overview: string;
  backdrop_path: string;
}

interface SavedMoviesState {
  savedMovies: SavedMovie[];
  addMovie: (movie: SavedMovie) => void;
  removeMovie: (movieId: number) => void;
  isMovieSaved: (movieId: number) => boolean;
  toggleMovie: (movie: SavedMovie) => void;
}

export const useSavedMoviesStore = create<SavedMoviesState>()(
  persist(
    (set, get) => ({
      savedMovies: [],
      addMovie: (movie) =>
        set((state) => ({
          savedMovies: [...state.savedMovies, movie],
        })),
      removeMovie: (movieId) =>
        set((state) => ({
          savedMovies: state.savedMovies.filter((m) => m.id !== movieId),
        })),
      isMovieSaved: (movieId) =>
        get().savedMovies.some((m) => m.id === movieId),
      toggleMovie: (movie) => {
        const isSaved = get().isMovieSaved(movie.id);
        if (isSaved) {
          get().removeMovie(movie.id);
        } else {
          get().addMovie(movie);
        }
      },
    }),
    {
      name: "saved-movies-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
