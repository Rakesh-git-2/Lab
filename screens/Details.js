import { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { Formik } from "formik";

export default function Details({ route, navigation }) {
  const { vals } = route.params;
  const [val, setVal] = useState(null);

  return (
    <View style={styles.container}>
      <Text>Enter your reading</Text>
      <Formik
        initialValues={{ reading: "" }}
        onSubmit={(values) => setVal(values.reading)}
        handleSubmit={() => onSubmit}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <TextInput
              onChangeText={handleChange("reading")}
              keyboardType="numeric"
              onBlur={handleBlur("reading")}
              value={values.reading}
              style={styles.textInput}
            />
            <Button onPress={handleSubmit} title="Submit" />
          </View>
        )}
      </Formik>
      {val ? (
        <View style={{ marginTop: 20 }}>
          {val > vals.min && val < vals.max ? (
            <Text style={{ color: "green" }}>Normal</Text>
          ) : val > vals.min ? (
            <Text style={{ color: "red" }}>Too high</Text>
          ) : (
            <Text style={{ color: "red" }}>Too low</Text>
          )}
          <Text>
            values between {vals.min} and {vals.max} is considered normal
          </Text>
        </View>
      ) : null}
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
  textInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
});
