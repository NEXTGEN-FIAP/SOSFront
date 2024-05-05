import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import SizetinyRingfalse from "../components/SizetinyRingfalse";
import { FontSize, Color, Border, FontFamily } from "../GlobalStyles";

const Loading = () => {
  return (
    <View style={styles.loading}>
      <View style={[styles.contedoPrincipal, styles.contedoPrincipalPosition]}>
        <View
          style={[styles.contedoPrincipal, styles.contedoPrincipalPosition]}
        >
          <View
            style={[
              styles.pginaEscolherRedeSocialChild,
              styles.contedoPrincipalPosition,
            ]}
          />
          <View
            style={[
              styles.pginaEscolherRedeSocialChild,
              styles.contedoPrincipalPosition,
            ]}
          />
          <View
            style={[
              styles.pginaEscolherRedeSocialChild,
              styles.contedoPrincipalPosition,
            ]}
          />
          <Text style={[styles.nossaIntelignciaArtificial, styles.textLayout]}>
            Nossa Inteligência Artificial está trabalhando para trazer as
            melhores informações para sua empresa!
          </Text>
          <Text style={[styles.text, styles.textClr]}>25%</Text>
          <View style={styles.miroodlesSticker} />
          <Text style={[styles.socialrate, styles.textClr]}>SocialRate</Text>
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
        </View>
        <Image
          style={styles.pageIndicatorIcon}
          contentFit="cover"
          source={require("../assets/pageindicator.png")}
        />
      </View>
      <Image
        style={styles.loadingChild}
        contentFit="cover"
        source={require("../assets/group-2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contedoPrincipalPosition: {
    top: 0,
    position: "absolute",
    height: 441,
  },
  textLayout: {
    height: 27,
    width: 244,
    fontSize: FontSize.size_smi,
    left: 70,
  },
  textClr: {
    color: Color.colorDarkturquoise_100,
    textAlign: "center",
    position: "absolute",
  },
  avatarLayout: {
    height: 40,
    width: 40,
  },
  pginaEscolherRedeSocialChild: {
    left: 64,
    borderRadius: Border.br_lg,
    backgroundColor: Color.colorGray,
    width: 256,
  },
  nossaIntelignciaArtificial: {
    top: 252,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorDarkslateblue,
    textAlign: "center",
    width: 244,
    fontSize: FontSize.size_smi,
    left: 70,
    position: "absolute",
  },
  text: {
    top: 193,
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    height: 27,
    width: 244,
    fontSize: FontSize.size_smi,
    left: 70,
    color: Color.colorDarkturquoise_100,
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
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    width: 250,
    height: 29,
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
  contedoPrincipal: {
    width: 320,
    left: 0,
  },
  pageIndicatorIcon: {
    top: 415,
    left: 179,
    width: 26,
    height: 6,
    position: "absolute",
  },
  loadingChild: {
    top: 170,
    left: 160,
    width: 60,
    height: 60,
    position: "absolute",
  },
  loading: {
    flex: 1,
    width: "100%",
    height: 441,
  },
});

export default Loading;
