import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

const NewComp = ({ name }) => {
  // const { name } = props;
  // let txt1 = ;
  const [txt1, setTxt1] = useState("Text 1");
  const [imp1, setImp1] = useState("");
  const changeTitle = () => {
    // console.log(txt1);
    // txt1 = "newwwwww";
    // setTxt1("Newwwwwww !!!!");
    // console.log("this one: ", txt1);
    alert(`${name}: ${imp1}`);
  };
  const track = (event) => {
    setImp1(event);
  };
  return (
    <View style={styles.info}>
      <Text>{txt1}</Text>
      <TextInput style={styles.imp} onChangeText={track} />
      <Text>Text 2</Text>
      <TouchableOpacity
        activeOpacity="0.5"
        style={styles.btn}
        onPress={changeTitle}
      >
        <Text style={{ color: "white", fontSize: 16, margin: 6 }}>
          This is a button
        </Text>
      </TouchableOpacity>

      <View></View>
    </View>
  );
};

export default NewComp;

const styles = StyleSheet.create({
  info: {
    width: "100%",
    margin: 50,
    flex: 2,
  },
  btn: {
    backgroundColor: "blue",
    width: "30%",
    alignSelf: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  imp: {
    borderColor: "black",
    borderWidth: 1,
    height: 40,
    width: "94%",
  },
});
