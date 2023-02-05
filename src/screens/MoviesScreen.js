import { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import ShowCard from "../components/ShowCard";
import SelectDropdownMovies from "../components/SelectDropdownMovies";
import { API_URL, API_TOKEN } from "../api/api.js";
import { useNavigation } from "@react-navigation/native";


const MoviesScreen = () => {
  const navigation = useNavigation();
  const [movies, setMovies] = useState([]);
  const [option, setOption] = useState("popular");

  const handleOptions = (option) => {
    setOption(option);
    fetchMovies(option);
  };

  const fetchMovies = async (option) => {
    fetch(`${API_URL}/movie/${option}?api_key=${API_TOKEN}&page=1`)
      .then((res) => res.json())
      .then((movies) => {
        const moviesList = movies.results;
        setMovies(moviesList);
      });
  };

  useEffect(() => {
    fetchMovies(option);
  }, []);

  return (
    <ScrollView>
      <SelectDropdownMovies
        defaultValue={option}
        handleSelection={handleOptions}
      />
      {movies &&
        movies.map((movie) => (
          <ShowCard
            id={movie.id}
            imgUrl={`https://www.themoviedb.org/t/p/w185${movie.poster_path}`}
            title={movie.title}
            popularity={movie.popularity}
            release={movie.release_date}
            handleClick={() =>
              navigation.navigate("MoreDetails", {
                id: movie.id,
                title: movie.title,
                imgUrl: `https://www.themoviedb.org/t/p/w185${movie.poster_path}`,
                popularity: movie.popularity,
                release: movie.release,
                poster: movie.poster_path,
                overview: movie.overview
              })
            }
          />
        ))}
    </ScrollView>
  );
};

export default MoviesScreen;
