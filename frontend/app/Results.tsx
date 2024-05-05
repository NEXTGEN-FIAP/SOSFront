import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import SizetinyRingfalse from "../components/SizetinyRingfalse";
import TypecontainerWidthfullPr from "../components/TypecontainerWidthfullPr";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Results = () => {
  return (
    <View style={styles.results}>
      <View style={styles.pginaDeResultados}>
        <View style={styles.contedoPrincipal}>
          <View style={styles.contedoPrincipal}>
            <View style={styles.pginaEscolherRedeSocialChild} />
            <View style={styles.pginaEscolherRedeSocialChild} />
            <View style={styles.pginaEscolherRedeSocialChild} />
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
        </View>
        <TypecontainerWidthfullPr
          label="Salvar Análise"
          typecontainerWidthfullPrPosition="absolute"
          typecontainerWidthfullPrBorderRadius={6}
          typecontainerWidthfullPrBackgroundColor="transparent"
          typecontainerWidthfullPrWidth={237}
          typecontainerWidthfullPrTop={394}
          typecontainerWidthfullPrLeft={74}
          typecontainerWidthfullPrElevation={8}
          typecontainerWidthfullPrHeight={32}
          labelFontFamily="Inter-SemiBold"
          labelTextAlign="left"
        />
      </View>
      <Text style={[styles.insfraestrutura, styles.tempoDeEsperaTypo]}>
        Insfraestrutura
      </Text>
      <View style={[styles.radioButtontruedefault, styles.radioLayout]} />
      <Text style={[styles.text, styles.textTypo1]}>{`10.000 `}</Text>
      <Text style={[styles.pontosDeMelhoria, styles.pontosDeMelhoriaTypo]}>
        Pontos de melhoria
      </Text>
      <Image
        style={[styles.resultsChild, styles.resultsLayout]}
        contentFit="cover"
        source={require("../assets/group-21.png")}
      />
      <Text style={[styles.text1, styles.textTypo]}>25%</Text>
      <Text style={[styles.text2, styles.textTypo]}>75%</Text>
      <Image
        style={[styles.resultsItem, styles.resultsLayout]}
        contentFit="cover"
        source={require("../assets/group-3.png")}
      />
      <Text style={[styles.tempoDeEspera, styles.tempoDeEsperaTypo]}>
        Tempo de Espera
      </Text>
      <Text
        style={[styles.organizaoDasFilas, styles.tempoDeEsperaTypo]}
      >{`Organização das filas do evento
Preços da alimentação
Pontos de acesso para transporte`}</Text>
      <Text
        style={[styles.dasPessoasFicaram, styles.dasTypo]}
      >{`25% das pessoas ficaram 
insatisfeitas com o tempo de espera.`}</Text>
      <Text
        style={[styles.dasPessoasFicaram1, styles.dasTypo]}
      >{`75% das pessoas ficaram 
satisfeitas com a insfraestrutura 
do evento.`}</Text>
      <View style={[styles.radioButtontruedefault1, styles.radioLayout]} />
      <Text style={[styles.text3, styles.textTypo1]}>{`2.000 `}</Text>
      <View style={[styles.title, styles.titlePosition]} />
      <View style={[styles.frame, styles.titlePosition]}>
        <Text style={styles.pontosDeMelhoriaTypo}>Tópicos mais falados</Text>
      </View>
      <Text style={[styles.tendnciasEmocionais, styles.pontosDeMelhoriaTypo]}>
        Tendências Emocionais
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  avatarLayout: {
    height: 40,
    width: 40,
  },
  tempoDeEsperaTypo: {
    textAlign: "left",
    color: Color.onLight800,
    fontFamily: FontFamily.interRegular,
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  radioLayout: {
    alignItems: "center",
    justifyContent: "center",
    height: 22,
    width: 117,
    backgroundColor: Color.colorDarkturquoise_300,
    borderRadius: Border.br_7xs,
    left: 215,
    position: "absolute",
  },
  textTypo1: {
    color: Color.colorDarkslateblue,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 12,
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    position: "absolute",
  },
  pontosDeMelhoriaTypo: {
    lineHeight: 20,
    color: Color.colorDarkslateblue,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    fontSize: FontSize.size_xs,
  },
  resultsLayout: {
    height: 50,
    width: 50,
    left: 97,
    position: "absolute",
  },
  textTypo: {
    height: 27,
    width: 244,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_smi,
    textAlign: "center",
    left: 0,
    position: "absolute",
  },
  dasTypo: {
    left: 157,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.onLight800,
    fontFamily: FontFamily.interRegular,
    lineHeight: 16,
    position: "absolute",
  },
  titlePosition: {
    width: 302,
    alignItems: "center",
    left: 97,
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
  socialrate: {
    top: 24,
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    width: 250,
    height: 29,
    textAlign: "center",
    color: Color.colorDarkturquoise_100,
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
  contedoPrincipal: {
    left: 0,
    width: 320,
    top: 0,
    position: "absolute",
    height: 441,
  },
  pginaDeResultados: {
    left: 23,
    width: 320,
    top: 0,
    position: "absolute",
    height: 441,
  },
  insfraestrutura: {
    top: 96,
    left: 97,
  },
  radioButtontruedefault: {
    top: 93,
  },
  text: {
    top: 98,
    left: 257,
  },
  pontosDeMelhoria: {
    top: 306,
    left: 97,
    position: "absolute",
  },
  resultsChild: {
    top: 184,
  },
  text1: {
    top: 201,
    color: Color.colorCrimson_100,
  },
  text2: {
    top: 264,
    color: Color.colorDarkturquoise_100,
    height: 27,
    width: 244,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_smi,
  },
  resultsItem: {
    top: 246,
  },
  tempoDeEspera: {
    top: 126,
    left: 97,
  },
  organizaoDasFilas: {
    top: 332,
    left: 90,
  },
  dasPessoasFicaram: {
    top: 193,
  },
  dasPessoasFicaram1: {
    top: 250,
  },
  radioButtontruedefault1: {
    top: 123,
  },
  text3: {
    top: 128,
    left: 259,
  },
  title: {
    top: 71,
    height: 24,
  },
  frame: {
    top: 60,
    flexDirection: "row",
  },
  tendnciasEmocionais: {
    top: 156,
    left: 97,
    position: "absolute",
  },
  results: {
    flex: 1,
    width: "100%",
    height: 441,
  },
});

export default Results;
