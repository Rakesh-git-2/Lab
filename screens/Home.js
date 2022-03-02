import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import Categoriesexpand from "../components/categoriesexpand";
import { auth } from "../firebase.mjs";

export default function Home({ navigation }) {
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          alignSelf: "flex-start",
          marginLeft: 50,
          marginVertical: 40,
        }}
      >
        <Text style={{ textTransform: "capitalize" }}>
          Hi {auth.currentUser?.displayName} !
        </Text>
      </View>
      <Categoriesexpand navigation={navigation} />
      <View style={styles.container}>
        <TouchableOpacity onPress={handleSignOut} style={styles.button}>
          <Text style={styles.buttonText}>Sign out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "flex-end",
  },
  button: {
    backgroundColor: "#0782F9",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 40,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 10,
  },
});
