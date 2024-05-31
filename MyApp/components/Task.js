import React from "react";
import { StyleSheet, View, Text } from "react-native";

const TaskItem = ({ title }) => {
  return (
    <View style={styles.taskContainer}>
      <Text style={styles.taskText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    backgroundColor: "#f9f9f9",
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    borderColor: "#E8D1BA",
    height: 128,

    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  taskText: {
    fontSize: 20,
    color: "#333",
    fontWeight: "bold",
    marginVertical: 15,
  },
});

export default TaskItem;
