import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import moment from "moment";
import { router } from "expo-router";
import { FontSize } from "../GlobalStyles";

const Base2 = () => {
  const handleBackToAreas = () => {
    router.push("Areas");
  };

  const todayDate = moment().format("DD/MM/YYYY");

  // Definindo as categorias de quantidade de krill em milhões
  const krillCategories = [
    { label: "População de Krill Saudável", range: [1000000, 2000000], emoji: "😀", color: "green", image: require("../assets/densidade_ideal.jpg"), description: "O monitoramento indica que a situação é saudável e corre como o esperado." },
    { label: "Excesso de Krill", range: [2000001, 3000000], emoji: "⚠️", color: "red", image: require("../assets/densidade_alta.jpg"), description: "A análise indica que a população está em excesso e devem ser tomadas medidas para controle." },
    { label: "Quantidade abaixo da Média", range: [500000, 1000000], emoji: "🙁", color: "#FFD700", image: require("../assets/baixa_densidade.jpg"), description: "A população está em déficit, provavelmente há um problema na região." }
  ];

  // Estado para armazenar a quantidade de krill atual
  const [krillQuantity, setKrillQuantity] = useState(getRandomNumberInRange(krillCategories[0].range));

  // Estado para armazenar o resultado da AI
  const [aiResult, setAiResult] = useState({
    label: krillCategories[0].label,
    emoji: krillCategories[0].emoji,
    color: krillCategories[0].color,
    image: krillCategories[0].image,
    description: krillCategories[0].description
  });

  // Função para obter um número aleatório dentro de um intervalo específico
  function getRandomNumberInRange(range) {
    return Math.floor(Math.random() * (range[1] - range[0] + 1)) + range[0];
  }

  useEffect(() => {
    // Atualizar a quantidade de krill e o resultado da AI a cada 10 segundos
    const interval = setInterval(() => {
      const randomCategory = krillCategories[Math.floor(Math.random() * krillCategories.length)];
      setKrillQuantity(getRandomNumberInRange(randomCategory.range));
      setAiResult({
        label: randomCategory.label,
        emoji: randomCategory.emoji,
        color: randomCategory.color,
        image: randomCategory.image,
        description: randomCategory.description
      });
    }, 10000);

    // Limpar o intervalo quando o componente for desmontado
    return () => clearInterval(interval);
  }, []); // Usar um array vazio como segundo argumento para garantir que o useEffect seja executado apenas uma vez

  // Função para formatar o número para milhões
  function formatNumberToMillions(number) {
    return (number / 1000000).toLocaleString("en-US", { maximumFractionDigits: 2 }) + "M";
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>SOS</Text>
      </View>
      <Text style={styles.baseName}>Estação Casey 🇦🇺</Text>
      <Text style={styles.baseCoordinatesText}><Text style={styles.bold}>Coordenadas da Base:</Text> 66° 16′ 55,6″ S, 110° 31′ 31,9″ L</Text>
      <Text style={styles.dateText}><Text style={styles.bold}>Data:</Text> {todayDate}</Text>
      <Text style={styles.descriptionText}><Text style={styles.bold}>Descrição:</Text> {aiResult.description}</Text>
      <Text style={styles.waterTemperatureText}><Text style={styles.bold}>Temperatura da Água:</Text> 25°C</Text>
      <Text style={[styles.krillQuantityText, { color: aiResult.color }]}><Text style={styles.bold}>Quantidade de Krill:</Text> {formatNumberToMillions(krillQuantity)}</Text>
      <View style={styles.registrationContainer}>
        <Text style={[styles.dateText, styles.bold]}>Registro:</Text>
        <Image
          source={aiResult.image} 
          style={styles.registrationImage}
        />
      </View>
      <Text style={[styles.aiResultText, { color: aiResult.color }]}><Text style={styles.bold}>Resultado da AI:</Text> {aiResult.label} {aiResult.emoji}</Text>
      <TouchableOpacity style={styles.backText} onPress={handleBackToAreas}>
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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#004FC5",
  },
  baseName: {
    textAlign: "center",
    fontSize: 24,
    marginBottom: 30,
    color: "#3381f5",
  },
  dateText: {
    fontSize: 20,
    marginBottom: 30,
  },
  descriptionText: {
    fontSize: 20,
    marginBottom: 30,
  },
  baseCoordinatesText: {
    fontSize: 20,
    marginBottom: 30,
  },

  waterTemperatureText: {
    fontSize: 20,
    marginBottom: 30,
  },
  krillQuantityText: {
    fontSize: 20,
    marginBottom: 20,
  },
  registrationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  registrationImage: {
    width: 200,
    height: 150,
    marginLeft: 10,
    marginBottom: 30,
  },
  aiResultText: {
    fontSize: 20,
    marginBottom: 30,
  },
  bold: {
    fontWeight: "bold",
    color: "#004FC5"
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
  backButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: FontSize.size_xl,
    textAlign: "center",
  },
});

export default Base2;

