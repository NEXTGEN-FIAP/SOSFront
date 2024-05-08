import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const RadioButtontruedefault = () => {
  return <View style={styles.radioButtontruedefault} />;
};

const styles = StyleSheet.create({
  radioButtontruedefault: {
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorDarkturquoise_300,
    width: 234,
    height: 37,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default RadioButtontruedefault;
