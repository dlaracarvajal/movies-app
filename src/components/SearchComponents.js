import { ScrollView, View, Text } from "react-native";
import { useState } from "react";
import {
  FormControl,
  Select,
  CheckIcon,
  Center,
  Input,
  Button,
  Icon,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { API_URL, API_TOKEN } from "../api/api.js";
import ShowCard from "./ShowCard";
import { useNavigation } from "@react-navigation/native";

const SearchComponents = (props) => {
  const navigation = useNavigation();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("");
  const [shows, setShows] = useState([]);

  const handleSelection = (value) => {
    setSearchType(value);
  };

  const handleSearch = async () => {
    if (!searchTerm) {
      return setErrorMessage("Search Movie/TV show name is required");
    }
    if (!searchType) {
      return setErrorMessage("Choose search type is required");
    }
    fetch(
      `${API_URL}/search/${searchType}?api_key=${API_TOKEN}&language=en-US&query=${searchTerm}&page=1&include_adult=false`
    )
      .then((response) => response.json())
      .then((data) => setShows(data.results))
      .catch((err) => {
        console.error(err);
        Alert.alert("Error", "Failed to fetch data");
      });
  };

  return (
    <ScrollView style={{ marginTop: 15 }}>
      <Center>
        <FormControl w="75%" maxW="300px" isRequired isInvalid={!searchTerm}>
          <FormControl.Label>Search Movie/TV Show Name</FormControl.Label>
          <Input
            placeholder="i.e James Bond, CSI"
            onChangeText={setSearchTerm}
            value={searchTerm}
            InputLeftElement={
              <Icon
                size={5}
                ml={2}
                color="gray.400"
                as={<Ionicons name="md-search-outline" />}
              />
            }
          />
        </FormControl>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: "70%",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <FormControl
            w="75%"
            maxW="300px"
            isRequired
            style={{ marginRight: 20 }}
            isInvalid={!searchType}
          >
            <FormControl.Label>Choose Search Type</FormControl.Label>
            <Select
              minWidth="200"
              selectedValue={searchType}
              accessibilityLabel={searchType}
              placeholder="Select search type"
              _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon color="white" size={5} />,
              }}
              mt="1"
              onValueChange={handleSelection}
            >
              <Select.Item label="Movie" value="movie" />
              <Select.Item label="Multi" value="multi" />
              <Select.Item label="TV" value="tv" />
            </Select>
          </FormControl>
          <Button
            onPress={handleSearch}
            leftIcon={
              <Icon
                as={Ionicons}
                name="md-search-outline"
                size="md"
                color={"white"}
              />
            }
            style={{ height: 40, alignSelf: "flex-end" }}
          >
            Search
          </Button>
        </View>
        {!searchTerm && !searchType ? (
          <Text style={{ width: "70%" }}>Please select a search type </Text>
        ) : !searchTerm ? (
          <Text style={{ width: "70%", color: "red" }}>
            Search Movie/TV show name is required{" "}
          </Text>
        ) : !searchType ? (
          <Text style={{ width: "70%", color: "red" }}>
            Choose search type is required{" "}
          </Text>
        ) : null}
        {shows.length > 0 ? (
          shows.map((show, i) => (
            <ShowCard
              id={show.id}
              imgUrl={`https://www.themoviedb.org/t/p/w185${show.poster_path}`}
              title={show.title || show.original_name || show.orginal_title}
              popularity={show.popularity}
              release={show.release_date}
              handleClick={() =>
                navigation.navigate("MoreDetails", {
                  id: show.id,
                  title: show.title || show.original_name || show.orginal_title,
                  imgUrl: `https://www.themoviedb.org/t/p/w185${show.poster_path}`,
                  popularity: show.popularity,
                  release: show.release,
                  poster: show.poster_path,
                  overview: show.overview,
                })
              }
            />
          ))
        ) : (
          <Text style={{ paddingTop: 160, fontSize: 26, fontWeight: "bold" }}>
            Please initiate a search
          </Text>
        )}
      </Center>
    </ScrollView>
  );
};

export default SearchComponents;
