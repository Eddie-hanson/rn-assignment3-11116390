import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const CategoryItem = ({ title, taskCount, image }) => {
  return (
    <View style={styles.categoryContainer}>
      <Text style={styles.categoryText}>{title}</Text>
      <Text style={styles.tasksText}>{taskCount}</Text>
      <Image source={image} style={styles.categoryImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    backgroundColor: "#FBF9F7",
    paddingTop: 20,
    marginHorizontal: 10,
    borderRadius: 10,
    borderColor: "#fff",
    borderWidth: 1,
    height: 192,
    marginBottom: 12,
    left: 20,
    width: 186,
  },
  categoryText: {
    fontSize: 20,
    color: "#000000",
    fontWeight: 700,
    marginLeft: 20,
    textAlign: "left",
    fontWeight: "bold",
  },
  tasksText: {
    fontSize: 16,
    color: "#555",
    left: 20,
  },
  categoryImage: {
    width: 121,
    height: 112,
    left: 31,
    borderRadius: 10,
    marginTop: 10,
  },
});

export default CategoryItem;
