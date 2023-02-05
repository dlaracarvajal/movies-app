import { Select, CheckIcon, Box, Center } from "native-base";

const SelectDropdownMovies = (props) => {
  const { defaultValue, handleSelection } = props;

  return (
    <Center style={{ marginTop: 20, marginBottom: 20 }}>
      <Box maxW="300">
        <Select
          selectedValue={defaultValue}
          minWidth="200"
          accessibilityLabel={defaultValue}
          placeholder={defaultValue}
          _selectedItem={{
            bg: "teal.600",
            endIcon: (
              <CheckIcon size="6" color="white" style={{ color: "white" }} />
            ),
          }}
          mt={1}
          onValueChange={handleSelection}
        >
          <Select.Item label="Now Playing" value="now_playing" />
          <Select.Item label="Popular" value="popular" />
          <Select.Item label="Top Rated" value="top_rated" />
          <Select.Item label="Upcoming" value="upcoming" />
        </Select>
      </Box>
    </Center>
  );
};

export default SelectDropdownMovies;
