import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import TypecontainerWidthfullPr from "../components/TypecontainerWidthfullPr";
import RadioButtontruedefault from "../components/RadioButtontruedefault";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const SignUp = () => {
  return (
    <View style={styles.signup}>
      <View style={styles.signuppagePosition}>
        <View style={styles.signuppagePosition}>
          <View style={styles.signuppagePosition}>
            <View style={styles.signuppagePosition}>
              <View
                style={[
                  styles.pginaEscolherRedeSocialChild,
                  styles.signuppagePosition,
                ]}
              />
              <View
                style={[
                  styles.pginaEscolherRedeSocialChild,
                  styles.signuppagePosition,
                ]}
              />
              <View
                style={[
                  styles.pginaEscolherRedeSocialChild,
                  styles.signuppagePosition,
                ]}
              />
              <View style={styles.signIn}>
                <Text style={styles.cadastreSe}>Cadastre-se</Text>
              </View>
              <View style={styles.miroodlesSticker} />
              <Text style={styles.socialrate}>SocialRate</Text>
              <View style={[styles.avatar, styles.avatarLayout]}>
                <Image
                  style={[styles.wrapperIcon, styles.avatarLayout]}
                  contentFit="cover"
                  source={require("../assets/wrapper.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.radioButtontruedefault, styles.radioLayout]} />
          <Text style={[styles.email, styles.senhaTypo]}>Email</Text>
          <Text style={[styles.jTemUmaContainer, styles.senhaTypo1]}>
            <Text style={styles.senhaTypo}>{`Já tem uma conta? `}</Text>
            <Text style={styles.login1}>Login.</Text>
          </Text>
          <TypecontainerWidthfullPr
            label="Finalizar Cadastro"
            typecontainerWidthfullPrPosition="absolute"
            typecontainerWidthfullPrBorderRadius={6}
            typecontainerWidthfullPrBackgroundColor="transparent"
            typecontainerWidthfullPrWidth={234}
            typecontainerWidthfullPrTop={369}
            typecontainerWidthfullPrLeft={12}
            typecontainerWidthfullPrElevation={8}
            typecontainerWidthfullPrHeight={32}
            labelFontFamily="Inter-SemiBold"
            labelTextAlign="left"
          />
        </View>
        <View style={[styles.radioButtontruedefault1, styles.radioLayout]} />
        <Text style={[styles.senha, styles.senhaTypo]}>Senha</Text>
      </View>
      <RadioButtontruedefault />
      <Text style={[styles.confirmarSenha, styles.senhaTypo]}>
        Confirmar senha
      </Text>
      <View style={[styles.radioButtontruedefault2, styles.radioLayout]} />
      <Text style={[styles.nome, styles.senhaTypo]}>Nome</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  signuppagePosition: {
    width: 256,
    left: 0,
    top: 0,
    position: "absolute",
    height: 441,
  },
  avatarLayout: {
    height: 40,
    width: 40,
  },
  radioLayout: {
    justifyContent: "center",
    height: 37,
    width: 236,
    backgroundColor: Color.colorDarkturquoise_300,
    borderRadius: Border.br_7xs,
    left: 10,
    alignItems: "center",
    position: "absolute",
  },
  senhaTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.colorDarkslateblue,
  },
  senhaTypo1: {
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  pginaEscolherRedeSocialChild: {
    borderRadius: Border.br_lg,
    backgroundColor: Color.colorGray,
  },
  cadastreSe: {
    fontSize: FontSize.size_5xl,
    lineHeight: 40,
    textAlign: "left",
    color: Color.colorDarkslateblue,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  signIn: {
    top: 66,
    left: 94,
    width: 67,
    height: 104,
    alignItems: "center",
    position: "absolute",
  },
  miroodlesSticker: {
    top: 128,
    left: 65,
    width: 121,
    height: 114,
    position: "absolute",
  },
  socialrate: {
    top: 24,
    left: 3,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    width: 250,
    height: 29,
    color: Color.colorDarkturquoise_100,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  wrapperIcon: {
    display: "none",
  },
  avatar: {
    top: 13,
    left: 207,
    flexDirection: "row",
    position: "absolute",
  },
  radioButtontruedefault: {
    top: 188,
  },
  email: {
    top: 164,
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
    left: 12,
    fontWeight: "500",
  },
  login1: {
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorDarkturquoise_100,
  },
  jTemUmaContainer: {
    top: 411,
    left: 17,
  },
  radioButtontruedefault1: {
    top: 253,
  },
  senha: {
    top: 230,
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
    left: 10,
    fontWeight: "500",
  },
  confirmarSenha: {
    top: 296,
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
    left: 12,
    fontWeight: "500",
  },
  radioButtontruedefault2: {
    top: 122,
  },
  nome: {
    top: 98,
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
    left: 12,
    fontWeight: "500",
  },
  signup: {
    flex: 1,
    width: "100%",
    height: 441,
  },
});

export default SignUp;
