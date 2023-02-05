import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight,
} from "react-native";

const ShowCard = ({ id, imgUrl, title, popularity, release, handleClick }) => {
  return (
    <View style={styles.cardContainer} id={id}>
      <Image
        source={{
          uri: imgUrl,
        }}
        style={styles.image}
      />
      <View style={styles.text}>
        <Text style={{ fontWeight: "bold", fontSize: 16, paddingBottom: 3 }}>
          {title}
        </Text>
        <Text style={{ paddingBottom: 3 }}>Popularity: {popularity}</Text>
        <Text>Release Date: {release}</Text>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#137185"
          onPress={handleClick}
          style={styles.detailsButton}
        >
          <Text style={{ color: "white", fontSize: 16 }}>More Details</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 15,
    marginTop: 20,
    marginRight: 50,
  },
  image: {
    width: 100,
    height: 100,
  },
  text: {
    marginLeft: 15,
    flex: 1,
  },
  detailsButton: {
    backgroundColor: "#18accc",
    padding: 10,
    borderRadius: 4,
    flex: 1,
    alignContent: "center",
    alignItems: "center",
  },
});

export default ShowCard;
