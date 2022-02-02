import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";

const categories = [
  {
    categoryName: "Category 1",
    categoryItems: [
      { name: "item 1", max: 78, min: 50 },
      { name: "item 2", max: 78, min: 50 },
      { name: "item 3", max: 78, min: 50 },
    ],
  },
  {
    categoryName: "Category 2",
    categoryItems: [
      { name: "item 4", max: 78, min: 50 },
      { name: "item 5", max: 78, min: 50 },
      { name: "item 6", max: 78, min: 50 },
    ],
  },
];

export default function Categoriesexpand(props) {
  const [active, setActive] = useState(null);
  return (
    <View>
      {categories.map((item) => {
        return (
          <View>
            <TouchableOpacity>
              <View style={styles.category}>
                <Text
                  style={styles.text}
                  onPress={() =>
                    active === item.categoryName
                      ? setActive(null)
                      : setActive(item.categoryName)
                  }
                >
                  {item.categoryName}
                </Text>
              </View>
            </TouchableOpacity>

            {active === item.categoryName
              ? item.categoryItems.map((i) => (
                  <TouchableOpacity
                    onPress={() =>
                      props.navigation.navigate("Details", { vals: i })
                    }
                  >
                    <View style={styles.categoryItem}>
                      <Text style={styles.text}>{i.name}</Text>
                    </View>
                  </TouchableOpacity>
                ))
              : null}
          </View>
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  category: {
    display: "flex",
    justifyContent: "center",
    width: 300,
    height: 60,
    backgroundColor: "#99ceff",
    borderRadius: 3,
    margin: 2,
  },
  text: {
    textAlign: "center",
    fontSize: 20,
  },
  categoryItem: {
    display: "flex",
    justifyContent: "center",
    width: 300,
    height: 60,
    backgroundColor: "#cce6ff",
    borderRadius: 3,
    margin: 2,
  },
});
