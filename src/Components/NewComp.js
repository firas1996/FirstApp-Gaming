import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const NewComp = () => {
  return (
    <View style={styles.info}>
      <Text>dfgdfgdfgd</Text>
      <Text>sgdfhfghf</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          alert("It works !!!");
        }}
      >
        <Text style={{ color: "white", fontSize: 16, margin: 6 }}>
          This is a button
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default NewComp;

const styles = StyleSheet.create({
  info: {
    width: "100%",
    flex: 2,
  },
  btn: {
    backgroundColor: "blue",
    width: "30%",
    alignSelf: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});
