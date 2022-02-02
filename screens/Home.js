import { View, Text, StyleSheet, Button } from "react-native";
import Categoriesexpand from "../components/categoriesexpand";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Categoriesexpand navigation={navigation} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e6f2ff",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
});
