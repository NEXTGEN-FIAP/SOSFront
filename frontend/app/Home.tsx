import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { MaterialIcons } from '@expo/vector-icons';

import { Color, FontSize, FontFamily } from "../GlobalStyles";
import { router } from "expo-router";

const Home = () => {
  const handleCreateAnalysis = () => {
    console.log('Nova análise');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>SocialRate</Text>
        <TouchableOpacity style={styles.profileIconContainer} onPress={() => router.push('/ProfileEdit')}>
          <MaterialIcons name="account-circle" size={30} color={Color.colorDarkturquoise_100}  />
        </TouchableOpacity>
      </View>
      <Text style={styles.introText}>
        Encontre o influencer perfeito para a divulgação da sua marca.
      </Text>
        <View style={styles.imageContainer}>
          <Image source={require('../assets/Pessoas.png')} style={styles.sticker} />
      </View>
      <TouchableOpacity style={styles.createAnalysisButton} onPress={handleCreateAnalysis}>
        <Text style={styles.createAnalysisButtonText}>Criar nova análise +</Text>
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
    color: Color.colorDarkturquoise_100,
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
  createAnalysisButton: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
    width: "80%",
    alignSelf: "center",
    marginTop: 60,
  },

  createAnalysisButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: FontSize.size_smi,
    textAlign: "center",
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    alignItems: "center",
  },
  sticker: {
    width: 250,
    height: 250,
    marginBottom: 20,
    marginTop: 40,
    
  },
  backgroundImage: {
    width: 288,
    height: 215,
  },
});

export default Home;
