import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

import { Color, FontSize, FontFamily } from "../GlobalStyles";
import { router } from "expo-router";

const Home = () => {
  const handleMonitorarArea = () => {
    router.push('/Areas');;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>SOS</Text>
        <TouchableOpacity style={styles.profileIconContainer} onPress={() => router.push('/ProfileEdit')}>
        <Image source={require('../assets/circle-user.png')} style={{ width: 20, height: 20 }} />
        </TouchableOpacity>
      </View>
      <Text style={styles.introText}>
        Verifique e Monitore as Áreas de concentração de Krill na Antártida.
      </Text>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/LOGO.png')} style={styles.sticker} />
      </View>
      <TouchableOpacity style={styles.monitorarButton} onPress={handleMonitorarArea}>
        <Text style={styles.monitorarButtonText}>Monitorar Áreas</Text>
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
    marginRight: 10,
    marginTop: 5,
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
    marginTop: 60,
  },

  monitorarButtonText: {
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
});

export default Home;
