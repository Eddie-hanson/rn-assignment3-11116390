import React from "react";
import { View, Button, StyleSheet } from "react-native";

const CustomButton = ({ title, onPress }) => {
  return (
    <View style={styles.buttonContainer}>
      <Button title={title} onPress={onPress} color="#FFFFFF" />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#F0522F",
    borderRadius: 10,
    marginVertical: 10,
    width: 150,
    height: 70,
    overflow: "hidden",
    marginHorizontal: 100,
    marginBottom: 60,
    paddingVertical: 15,
  },
});

export default CustomButton;
