import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import TypecontainerWidthfullPr from "../components/TypecontainerWidthfullPr";
import SizetinyRingfalse from "../components/SizetinyRingfalse";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const TelaDeErroDeCriaoDeAn = () => {
  return (
    <View style={styles.telaDeErroDeCriaoDeAn}>
      <View style={[styles.pginaHome, styles.pginaPosition]}>
        <View style={[styles.pginaHomeChild, styles.pginaPosition]} />
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
        <View style={styles.text}>
          <View style={[styles.description, styles.titlePosition]}>
            <Text
              style={[styles.thePageAre, styles.socialrateFlexBox]}
            >{`Ocorreu um erro ao realizar uma análise. 
Tente novamente mais tarde.`}</Text>
          </View>
          <Text style={[styles.title, styles.titlePosition]}>Ah Não!</Text>
        </View>
      </View>
      <Image
        style={styles.nextgenGsSocialRateRemoveIcon}
        contentFit="cover"
        source={require("../assets/nextgen-gs-social-rateremovebgpreview-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  pginaPosition: {
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
  titlePosition: {
    top: "50%",
    position: "absolute",
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
    height: "42.53%",
    width: "95.54%",
    right: "2.23%",
    bottom: "7.47%",
    left: "2.23%",
  },
  title: {
    marginTop: -34,
    left: "32.71%",
    fontSize: FontSize.size_5xl,
    letterSpacing: 1,
    lineHeight: 28,
    fontWeight: "700",
    fontFamily: FontFamily.dMSansBold,
    color: Color.colorDarkslateblue,
    textAlign: "left",
  },
  text: {
    left: 60,
    width: 269,
    height: 174,
    overflow: "hidden",
    top: 24,
    position: "absolute",
  },
  pginaHome: {
    width: 329,
    left: 0,
  },
  nextgenGsSocialRateRemoveIcon: {
    top: 159,
    left: 74,
    width: 242,
    height: 219,
    position: "absolute",
  },
  telaDeErroDeCriaoDeAn: {
    flex: 1,
    height: 441,
    width: "100%",
  },
});

export default TelaDeErroDeCriaoDeAn;
