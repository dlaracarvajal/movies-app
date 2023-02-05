import { ScrollView } from "react-native";
import { useState, useEffect } from "react";
import ShowCard from "../components/ShowCard";
import SelectDropdownTV from "../components/SelectDropdownTV";
import { API_URL, API_TOKEN } from "../api/api.js";


const TVShowScreen = ({ navigation }) => {
  const [tvShows, setTVShows] = useState([]);
  const [option, setOption] = useState("popular");

  const handleOptions = (option) => {
    setOption(option);
    fetchTVShows(option);
  };

  const fetchTVShows = async (option) => {
    fetch(`${API_URL}/tv/${option}?api_key=${API_TOKEN}&page=1`)
      .then((res) => res.json())
      .then((tvShows) => {
        const tvShowsList = tvShows.results;
        setTVShows(tvShowsList);
      });
  };

  useEffect(() => {
    fetchTVShows(option);
  }, []);

  return (
    <ScrollView>
      <SelectDropdownTV defaultValue={option} handleSelection={handleOptions} />
      {tvShows &&
        tvShows.map((tv) => (
          <ShowCard
            id={tv.id}
            imgUrl={`https://www.themoviedb.org/t/p/w185${tv.poster_path}`}
            title={tv.original_name}
            popularity={tv.popularity}
            release={tv.release_date}
            handleClick={() =>
              navigation.navigate("MoreDetails", {
                id: tv.id,
                title: tv.original_name,
                imgUrl: `https://www.themoviedb.org/t/p/w185${tv.poster_path}`,
                popularity: tv.popularity,
                release: tv.release,
                poster: tv.poster_path,
                overview: tv.overview
              })
            }
          />
        ))}
    </ScrollView>
  );
};

export default TVShowScreen;
