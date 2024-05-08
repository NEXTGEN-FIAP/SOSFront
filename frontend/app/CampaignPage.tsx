import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import TypecontainerWidthfullPr from "../components/TypecontainerWidthfullPr";
import SizetinyRingfalse from "../components/SizetinyRingfalse";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const CampaignPage = () => {
  return (
    <View style={styles.campaignpage}>
      <View style={styles.campaignpage1}>
        <View style={styles.campaignpage1}>
          <View style={styles.campaignpage1}>
            <View style={styles.pginaEscolherRedeSocialChild} />
            <View style={styles.pginaEscolherRedeSocialChild} />
            <TypecontainerWidthfullPr
              label={`Próximo ->`}
              typecontainerWidthfullPrPosition="absolute"
              typecontainerWidthfullPrBorderRadius={6}
              typecontainerWidthfullPrBackgroundColor="transparent"
              typecontainerWidthfullPrWidth={237}
              typecontainerWidthfullPrTop={372}
              typecontainerWidthfullPrLeft={74}
              typecontainerWidthfullPrElevation={8}
              typecontainerWidthfullPrHeight={32}
              labelFontFamily="Inter-SemiBold"
              labelTextAlign="left"
            />
            <Text style={styles.nosForneaInformaes}>
              Nos forneça informações da campanha que sua empresa irá realizar.
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
          </View>
          <Image
            style={styles.pageIndicatorIcon}
            contentFit="cover"
            source={require("../assets/pageindicator1.png")}
          />
        </View>
      </View>
      <View style={styles.radioButtontruedefault}>
        <View style={styles.elements} />
      </View>
      <Text style={[styles.canalDeDistribuio, styles.alcanceTypo]}>
        Canal de Distribuição
      </Text>
      <View style={[styles.radioButtontruedefault1, styles.radioLayout]}>
        <View style={styles.elements} />
      </View>
      <Text style={[styles.pblicoAlvoDa, styles.pblicoTypo]}>
        Público Alvo da Campanha
      </Text>
      <View style={[styles.radioButtontruedefault2, styles.radioLayout]}>
        <View style={styles.elements} />
      </View>
      <Text style={[styles.interessesDoPblico, styles.pblicoTypo]}>
        Interesses do Público Alvo
      </Text>
      <View style={[styles.radioButtontruedefault3, styles.radioSpaceBlock]}>
        <View style={styles.elements} />
      </View>
      <Text
        style={[styles.gneroDoPblico, styles.alcanceTypo]}
      >{`Gênero do Público Alvo `}</Text>
      <View style={[styles.radioButtontruedefault4, styles.alcancePosition]}>
        <View style={styles.elements} />
      </View>
      <Text style={[styles.alcance, styles.alcancePosition]}>Alcance</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  avatarLayout: {
    height: 40,
    width: 40,
  },
  alcanceTypo: {
    width: 143,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 26,
    letterSpacing: 0.2,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.colorDarkslateblue,
  },
  radioLayout: {
    width: 237,
    left: 77,
    paddingVertical: Padding.p_2xs,
    paddingHorizontal: Padding.p_base,
    justifyContent: "center",
    alignItems: "center",
    height: 31,
    backgroundColor: Color.colorDarkturquoise_200,
    borderRadius: Border.br_7xs,
    position: "absolute",
  },
  pblicoTypo: {
    width: 200,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 26,
    letterSpacing: 0.2,
    textAlign: "left",
    color: Color.colorDarkslateblue,
    fontSize: FontSize.size_xs,
    left: 76,
    position: "absolute",
  },
  radioSpaceBlock: {
    top: 313,
    paddingVertical: Padding.p_2xs,
    paddingHorizontal: Padding.p_base,
    justifyContent: "center",
    alignItems: "center",
    height: 31,
    backgroundColor: Color.colorDarkturquoise_200,
    borderRadius: Border.br_7xs,
  },
  alcancePosition: {
    left: 202,
    position: "absolute",
  },
  pginaEscolherRedeSocialChild: {
    left: 64,
    borderRadius: Border.br_lg,
    backgroundColor: Color.colorGray,
    width: 256,
    top: 0,
    position: "absolute",
    height: 441,
  },
  nosForneaInformaes: {
    top: 80,
    width: 238,
    height: 27,
    textAlign: "left",
    color: Color.colorDarkslateblue,
    fontSize: FontSize.size_xs,
    left: 76,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
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
    fontSize: FontSize.size_xl,
    color: Color.colorDarkturquoise_100,
    textAlign: "center",
    width: 250,
    height: 29,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    left: 0,
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
  campaignpage1: {
    width: 320,
    left: 0,
    top: 0,
    position: "absolute",
    height: 441,
  },
  pageIndicatorIcon: {
    top: 415,
    left: 179,
    width: 26,
    height: 6,
    position: "absolute",
  },
  elements: {
    alignSelf: "stretch",
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  radioButtontruedefault: {
    top: 253,
    width: 236,
    paddingVertical: Padding.p_2xs,
    paddingHorizontal: Padding.p_base,
    height: 31,
    backgroundColor: Color.colorDarkturquoise_200,
    borderRadius: Border.br_7xs,
    justifyContent: "center",
    alignItems: "center",
    left: 78,
    position: "absolute",
  },
  canalDeDistribuio: {
    top: 230,
    left: 77,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 26,
    letterSpacing: 0.2,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  radioButtontruedefault1: {
    top: 141,
  },
  pblicoAlvoDa: {
    top: 118,
  },
  radioButtontruedefault2: {
    top: 199,
  },
  interessesDoPblico: {
    top: 176,
  },
  radioButtontruedefault3: {
    width: 113,
    left: 78,
    top: 313,
    position: "absolute",
  },
  gneroDoPblico: {
    top: 290,
    left: 77,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 26,
    letterSpacing: 0.2,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  radioButtontruedefault4: {
    width: 112,
    top: 313,
    paddingVertical: Padding.p_2xs,
    paddingHorizontal: Padding.p_base,
    justifyContent: "center",
    alignItems: "center",
    height: 31,
    backgroundColor: Color.colorDarkturquoise_200,
    borderRadius: Border.br_7xs,
  },
  alcance: {
    top: 288,
    width: 143,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 26,
    letterSpacing: 0.2,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.colorDarkslateblue,
  },
  campaignpage: {
    flex: 1,
    width: "100%",
    height: 441,
  },
});

export default CampaignPage;
