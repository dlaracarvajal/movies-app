import { useRoute } from "@react-navigation/native";
import { Center, ScrollView } from "native-base";
import { View, Text, Image } from "react-native";

const MoreDetails = () => {
  const route = useRoute();

  return (
    <ScrollView>
      <Center style={{ marginLeft: 36, marginRight: 36 }}>
        <Text style={{ marginTop: 50, fontSize: 20, fontWeight: "bold" }}>
          {route.params.title}
        </Text>
        <Image
          source={{
            uri: route.params.imgUrl,
          }}
          style={{
            height: 300,
            width: 300,
            marginLeft: 40,
            marginTop: 45,
            marginRight: 40,
            marginBottom: 25,
          }}
        />
        <Text style={{ lineHeight: 25 }}>{route.params.overview}</Text>
        <View style={{ display: "flex", flexDirection: "row", marginTop: 25 }}>
          <Text style={{ marginRight: 15 }}>
            Popularity: {route.params.popularity}
          </Text>
          <Text>|</Text>
          <Text style={{ marginLeft: 15 }}>
            Release Date: {route.params.release}
          </Text>
        </View>
      </Center>
    </ScrollView>
  );
};

export default MoreDetails;
