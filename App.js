import { StatusBar } from "expo-status-bar";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import NewComp from "./src/Components/NewComp";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ width: "100%", flex: 1 }}>
        <Image
          style={{ width: "100%", height: "100%", position: "relative" }}
          source={{
            uri: "https://promo.com/tools/image-resizer/static/Pattern_image-8c050053eab884e51b8599607865d112.jpg",
          }}
        />
        <Image
          style={{
            width: 120,
            height: 120,
            borderRadius: 100,
            alignSelf: "center",
            position: "absolute",
            top: "80%",
            borderColor: "gray",
            borderWidth: 5,
          }}
          source={{ uri: "https://www.w3schools.com/howto/img_avatar.png" }}
        />
      </View>
      <NewComp />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
