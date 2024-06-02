import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { MaterialIcons } from '@expo/vector-icons';
import { Color, FontSize, FontFamily } from "../GlobalStyles";
import { router } from "expo-router";

const Areas = () => {
  const handleMonitorarBase1 = () => {
    router.push("Base1");
  };

  const handleMonitorarBase2 = () => {
    router.push("Base2");
  };

  const handleMonitorarBase3 = () => {
    router.push("Base3");
  };

  const handleMonitorarBase4 = () => {
    router.push("Base4");
  };
  const handleMonitorarBase5 = () => {
    router.push("Base5");
  };

  const handleBackToHome = () => {
    router.push('/Home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>SOS</Text>
      </View>
      <Text style={styles.introText}>
        Escolha a base que quer monitorar!      
      </Text>
      <TouchableOpacity style={styles.monitorarButton} onPress={handleMonitorarBase1}>
        <Text style={styles.monitorarButtonText}>Comandante Ferraz 🇧🇷</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.monitorarButton2} onPress={handleMonitorarBase2}>
        <Text style={styles.monitorarButtonText}>Estação Casey 🇦🇺</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.monitorarButton} onPress={ handleMonitorarBase3}>
        <Text style={styles.monitorarButtonText}>Belgrano II 🇦🇷</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.monitorarButton2} onPress={handleMonitorarBase4}>
        <Text style={styles.monitorarButtonText}>Showa 🇯🇵</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.monitorarButton} onPress={handleMonitorarBase5}>
        <Text style={styles.monitorarButtonText}>McMurdo 🇺🇸</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.backText} onPress={handleBackToHome}>
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  backButton: {
    position: "absolute",
    bottom: 20,
    left: 20,
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  backText: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    backgroundColor: "#ff2600",
    padding: 10,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerText: {
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: "#004FC5",
  },
  profileIconContainer: {
    zIndex: 999,
  },
  introText: {
    fontSize: FontSize.size_xl,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorDarkslateblue,
    textAlign: "center",
    marginBottom: 20,
    marginTop: 40,
  },
  monitorarButton: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
    width: "80%",
    alignSelf: "center",
    marginTop: 10,
    marginBottom:20,
  },
  monitorarButton2: {
    backgroundColor: "#1EB5C8",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
    width: "80%",
    alignSelf: "center",
    marginTop: 10,
    marginBottom:20,
  },
  monitorarButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: FontSize.size_xl,
    textAlign: "center",
  },
  backButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: FontSize.size_xl,
    textAlign: "center",
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    alignItems: "center",
  },
  sticker: {
    width: 400,
    height: 400,
    marginBottom: 20,
  },
  backgroundImage: {
    width: 288,
    height: 215,
  },
});

export default Areas;
