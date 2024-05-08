import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const NotFoundUserError = () => {
  return (
    <View style={[styles.rectangleParent, styles.groupChildLayout]}>
      <View style={[styles.groupChild, styles.groupChildLayout]} />
      <View style={[styles.groupChild, styles.groupChildLayout]} />
      <Text style={[styles.erroAoEncontrar, styles.tenteNovamenteLayout]}>
        Erro ao encontrar usuário
      </Text>
      <Text style={[styles.tenteNovamente, styles.tenteNovamenteLayout]}>
        Tente novamente...
      </Text>
      <Image
        style={[styles.toastIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/toast-icon.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 51,
    width: 236,
    position: "absolute",
  },
  tenteNovamenteLayout: {
    width: 166,
    textAlign: "left",
    color: Color.colorWhitesmoke,
    lineHeight: 20,
    position: "absolute",
  },
  iconPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  groupChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorCrimson_100,
  },
  erroAoEncontrar: {
    top: 8,
    left: 52,
    fontSize: FontSize.size_xs,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
  },
  tenteNovamente: {
    top: 28,
    left: 51,
    fontSize: FontSize.size_3xs,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
  },
  toastIcon: {
    top: 5,
    left: 7,
    width: 32,
    height: 39,
  },
  vectorIcon: {
    height: "20.98%",
    width: "4.53%",
    top: "13.73%",
    right: "3.52%",
    bottom: "65.29%",
    left: "91.95%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  rectangleParent: {
    top: 360,
    left: 10,
  },
});

export default NotFoundUserError;
