import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import TypecontainerWidthfullPr from "../components/TypecontainerWidthfullPr";
import SizetinyRingfalse from "../components/SizetinyRingfalse";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles"

const Home = () => {
  return (
    <View style={styles.home}>
      <View style={styles.homeChild} />
      <TypecontainerWidthfullPr
        label="Criar nova análise +"
        typecontainerWidthfullPrPosition="absolute"
        typecontainerWidthfullPrBorderRadius={6}
        typecontainerWidthfullPrBackgroundColor="transparent"
        typecontainerWidthfullPrWidth={236}
        typecontainerWidthfullPrTop={372}
        typecontainerWidthfullPrLeft={74}
        typecontainerWidthfullPrElevation={8}
        typecontainerWidthfullPrHeight={32}
        labelFontFamily="Inter-SemiBold"
        labelTextAlign="center"
        labelFlex={1}
      />
      <Text style={styles.encontreOInfluencer}>
        Encontre o influencer perfeito para a divugação da sua marca.
      </Text>
      <View style={styles.miroodlesSticker} />
      <Text style={styles.socialrate}>SocialRate</Text>
      <SizetinyRingfalse
        wrapper={require("../assets/wrapper.png")}
        sizetinyRingfalsePosition="absolute"
        sizetinyRingfalseTop={13}
        sizetinyRingfalseLeft={271}
      />
      <View style={[styles.avatar, styles.avatarLayout]}>
        <Image
          style={[styles.wrapperIcon, styles.avatarLayout]}
          contentFit="cover"
          source={require("../assets/wrapper1.png")}
        />
      </View>
      <Image
        style={styles.nextgenGsSocialRate3ReIcon}
        contentFit="cover"
        source={require("../assets/nextgen-gs-social-rate--3-removebgpreview-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  avatarLayout: {
    height: 40,
    width: 40,
  },
  homeChild: {
    top: 0,
    left: 64,
    borderRadius: Border.br_lg,
    backgroundColor: Color.colorGray,
    width: 256,
    position: "absolute",
    height: 441,
  },
  encontreOInfluencer: {
    top: 80,
    left: 73,
    fontSize: FontSize.size_smi,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorDarkslateblue,
    textAlign: "left",
    width: 244,
    height: 27,
    position: "absolute",
  },
  miroodlesSticker: {
    top: 128,
    left: 129,
    width: 121,
    height: 114,
    position: "absolute",
  },
  socialrate: {
    top: 24,
    left: 0,
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorDarkturquoise_100,
    textAlign: "center",
    width: 250,
    height: 29,
    position: "absolute",
  },
  wrapperIcon: {
    display: "none",
  },
  avatar: {
    top: 8,
    left: 267,
    flexDirection: "row",
    position: "absolute",
  },
  nextgenGsSocialRate3ReIcon: {
    top: 118,
    left: 45,
    width: 288,
    height: 215,
    position: "absolute",
  },
  home: {
    flex: 1,
    width: "100%",
    height: 441,
  },
});

export default Home;
