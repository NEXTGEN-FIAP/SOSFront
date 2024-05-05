import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import TypecontainerWidthfullPr from "../components/TypecontainerWidthfullPr";
import SizetinyRingfalse from "../components/SizetinyRingfalse";
import { Padding, Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const InfluencerData = () => {
  return (
    <View style={styles.influencerdata}>
      <View style={[styles.influencerdata1, styles.outerCirclePosition]}>
        <View style={[styles.influencerdata1, styles.outerCirclePosition]}>
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
          <Text style={styles.insiraOsDados}>
            Insira os dados do Influencer que você pensa em incluir na sua
            campanha.
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
          source={require("../assets/pageindicator2.png")}
        />
        <View style={[styles.radioButtontruedefault, styles.radioSpaceBlock]}>
          <View style={[styles.elements, styles.elementsFlexBox]}>
            <View style={styles.icon}>
              <View style={[styles.wrapper, styles.wrapperLayout]}>
                <View style={[styles.outerCircle, styles.circleLayout]} />
                <View style={[styles.innerCircle, styles.circleLayout]} />
              </View>
            </View>
          </View>
        </View>
        <Text style={[styles.nomeDoInfluencer, styles.reaDeAtuaoTypo]}>
          Nome do Influencer
        </Text>
      </View>
      <View style={[styles.radioButtontruedefault1, styles.radioPosition1]}>
        <View style={[styles.elements, styles.elementsFlexBox]}>
          <View style={styles.icon}>
            <View style={[styles.wrapper, styles.wrapperLayout]}>
              <View style={[styles.outerCircle, styles.circleLayout]} />
              <View style={[styles.innerCircle, styles.circleLayout]} />
            </View>
          </View>
        </View>
      </View>
      <Text style={[styles.faixaEtriaDo, styles.faixaEtriaDoTypo]}>
        Faixa Etária do Público
      </Text>
      <View style={[styles.radioButtontruedefault2, styles.radioPosition1]}>
        <View style={[styles.elements, styles.elementsFlexBox]}>
          <View style={styles.icon}>
            <View style={[styles.wrapper, styles.wrapperLayout]}>
              <View style={[styles.outerCircle, styles.circleLayout]} />
              <View style={[styles.innerCircle, styles.circleLayout]} />
            </View>
          </View>
        </View>
      </View>
      <Text style={[styles.gneroDoPblico, styles.faixaEtriaDoTypo]}>
        Gênero do Público
      </Text>
      <View style={[styles.radioButtontruedefault3, styles.radioSpaceBlock]}>
        <View style={[styles.elements3, styles.elementsFlexBox]} />
      </View>
      <Text style={[styles.reaDeAtuao, styles.reaDeAtuaoTypo]}>
        Área de Atuação
      </Text>
      <View style={[styles.radioButtontruedefault4, styles.radioPosition]}>
        <View style={[styles.elements3, styles.elementsFlexBox]} />
      </View>
      <Text style={[styles.gnero, styles.gneroTypo]}>{`Gênero `}</Text>
      <View style={[styles.radioButtontruedefault5, styles.radioPosition]}>
        <View style={[styles.elements3, styles.elementsFlexBox]} />
      </View>
      <Text style={[styles.alcance, styles.gneroTypo]}>Alcance</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  outerCirclePosition: {
    left: 0,
    top: 0,
  },
  avatarLayout: {
    height: 40,
    width: 40,
  },
  radioSpaceBlock: {
    paddingVertical: Padding.p_2xs,
    paddingHorizontal: Padding.p_base,
    justifyContent: "center",
    alignItems: "center",
    height: 31,
    backgroundColor: Color.colorDarkturquoise_200,
    borderRadius: Border.br_7xs,
    position: "absolute",
  },
  elementsFlexBox: {
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  wrapperLayout: {
    height: 20,
    width: 20,
  },
  circleLayout: {
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  reaDeAtuaoTypo: {
    width: 143,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 26,
    letterSpacing: 0.2,
    textAlign: "left",
    color: Color.colorDarkslateblue,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  radioPosition1: {
    top: 313,
    paddingVertical: Padding.p_2xs,
    paddingHorizontal: Padding.p_base,
    justifyContent: "center",
    alignItems: "center",
    height: 31,
    backgroundColor: Color.colorDarkturquoise_200,
    borderRadius: Border.br_7xs,
    position: "absolute",
  },
  faixaEtriaDoTypo: {
    height: 26,
    width: 149,
    top: 290,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 26,
    letterSpacing: 0.2,
    textAlign: "left",
    color: Color.colorDarkslateblue,
    position: "absolute",
  },
  radioPosition: {
    top: 257,
    paddingVertical: Padding.p_2xs,
    paddingHorizontal: Padding.p_base,
    justifyContent: "center",
    alignItems: "center",
    height: 31,
    backgroundColor: Color.colorDarkturquoise_200,
    borderRadius: Border.br_7xs,
    position: "absolute",
  },
  gneroTypo: {
    fontSize: FontSize.size_3xs,
    width: 143,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 26,
    letterSpacing: 0.2,
    textAlign: "left",
    color: Color.colorDarkslateblue,
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
  insiraOsDados: {
    top: 80,
    width: 244,
    height: 27,
    textAlign: "left",
    color: Color.colorDarkslateblue,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    left: 73,
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
  influencerdata1: {
    width: 320,
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
  outerCircle: {
    borderStyle: "solid",
    borderColor: Color.colorDarkslateblue,
    borderWidth: 2,
    height: 20,
    width: 20,
    left: 0,
    top: 0,
  },
  innerCircle: {
    top: 5,
    left: 5,
    backgroundColor: Color.colorDarkslateblue,
    width: 10,
    height: 10,
  },
  wrapper: {
    display: "none",
  },
  icon: {
    width: 24,
    padding: Padding.p_11xs,
    height: 24,
    flexDirection: "row",
  },
  elements: {
    flexDirection: "row",
  },
  radioButtontruedefault: {
    top: 141,
    width: 237,
    left: 74,
  },
  nomeDoInfluencer: {
    top: 118,
    left: 73,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 26,
    letterSpacing: 0.2,
  },
  radioButtontruedefault1: {
    width: 112,
    left: 76,
  },
  faixaEtriaDo: {
    left: 76,
  },
  radioButtontruedefault2: {
    left: 198,
    width: 113,
  },
  gneroDoPblico: {
    left: 199,
  },
  elements3: {
    height: 24,
  },
  radioButtontruedefault3: {
    top: 201,
    width: 236,
    left: 75,
  },
  reaDeAtuao: {
    top: 178,
    left: 74,
  },
  radioButtontruedefault4: {
    left: 75,
    width: 113,
  },
  gnero: {
    top: 234,
    left: 76,
  },
  radioButtontruedefault5: {
    left: 199,
    width: 112,
  },
  alcance: {
    top: 233,
    left: 199,
  },
  influencerdata: {
    flex: 1,
    width: "100%",
    height: 441,
  },
});

export default InfluencerData;
