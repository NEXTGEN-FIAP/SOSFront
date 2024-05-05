import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import TypecontainerWidthfullPr from "../components/TypecontainerWidthfullPr";
import SizetinyRingfalse from "../components/SizetinyRingfalse";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const BackToHome = () => {
  return (
    <View style={styles.backtohome}>
      <View
        style={[styles.telaDeErroDeCriaoDeAn, styles.pginaHomeChildPosition]}
      >
        <View
          style={[styles.telaDeErroDeCriaoDeAn, styles.pginaHomeChildPosition]}
        >
          <View
            style={[styles.pginaHomeChild, styles.pginaHomeChildPosition]}
          />
          <TypecontainerWidthfullPr
            label="Voltar para página inicial "
            typecontainerWidthfullPrPosition="absolute"
            typecontainerWidthfullPrBorderRadius={6}
            typecontainerWidthfullPrBackgroundColor="transparent"
            typecontainerWidthfullPrWidth={236}
            typecontainerWidthfullPrTop={372}
            typecontainerWidthfullPrLeft={74}
            typecontainerWidthfullPrElevation={8}
            typecontainerWidthfullPrHeight={32}
            labelFontFamily="Inter-SemiBold"
            labelTextAlign="left"
          />
          <View style={styles.miroodlesSticker} />
          <Text style={[styles.socialrate, styles.socialrateFlexBox]}>
            SocialRate
          </Text>
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
          <View style={styles.text} />
        </View>
      </View>
      <View style={styles.description}>
        <Text
          style={[styles.thePageAre, styles.socialrateFlexBox]}
        >{`Você pode conferir sua nova análise 
no seu perfil. 🚀`}</Text>
      </View>
      <Image
        style={styles.nextgenGsSocialRate1ReIcon}
        contentFit="cover"
        source={require("../assets/nextgen-gs-social-rate--1-removebgpreview-1.png")}
      />
      <Text style={styles.title}>Parabéns!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  pginaHomeChildPosition: {
    top: 0,
    position: "absolute",
    height: 441,
  },
  socialrateFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  avatarLayout: {
    height: 40,
    width: 40,
  },
  pginaHomeChild: {
    left: 64,
    borderRadius: Border.br_lg,
    backgroundColor: Color.colorGray,
    width: 256,
  },
  miroodlesSticker: {
    top: 128,
    left: 129,
    width: 121,
    height: 114,
    position: "absolute",
  },
  socialrate: {
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorDarkturquoise_100,
    width: 250,
    height: 29,
    top: 24,
    left: 0,
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
  text: {
    left: 60,
    width: 269,
    height: 174,
    overflow: "hidden",
    top: 24,
    position: "absolute",
  },
  telaDeErroDeCriaoDeAn: {
    width: 329,
    left: 0,
  },
  thePageAre: {
    height: "100%",
    top: "0%",
    left: "0%",
    fontSize: FontSize.size_xs,
    letterSpacing: 0,
    lineHeight: 26,
    fontFamily: FontFamily.dMSansRegular,
    color: Color.colorDimgray,
    width: "100%",
    textAlign: "center",
  },
  description: {
    height: "16.78%",
    width: "78.12%",
    top: "67.12%",
    right: "1.82%",
    bottom: "16.1%",
    left: "20.06%",
    position: "absolute",
  },
  nextgenGsSocialRate1ReIcon: {
    top: 77,
    left: 78,
    width: 228,
    height: 152,
    position: "absolute",
  },
  title: {
    marginTop: 43.5,
    top: "50%",
    left: "40.73%",
    fontSize: FontSize.size_5xl,
    letterSpacing: 1,
    lineHeight: 28,
    fontWeight: "700",
    fontFamily: FontFamily.dMSansBold,
    color: Color.colorDarkslateblue,
    textAlign: "left",
    position: "absolute",
  },
  backtohome: {
    flex: 1,
    height: 441,
    width: "100%",
  },
});

export default BackToHome;
