import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from "react-native";
import { buscarEmpresasCadastradas } from "../backend/database";
import { router, useNavigation } from "expo-router";

const Testes = () => {
  const [empresas, setEmpresas] = useState<any[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchEmpresas = async () => {
      try {
        const empresasCadastradas = await buscarEmpresasCadastradas();
        setEmpresas(empresasCadastradas);
      } catch (error) {
        console.error("Erro ao buscar empresas:", error);
      }
    };

    fetchEmpresas();
  }, []);

  const renderItem = ({ item }: { item: any }) => (
    <View style={styles.item}>
      <Text>ID: {item.idEmpresa}</Text>
      <Text>Nome da Empresa: {item.nomeEmpresa}</Text>
      <Text>Email: {item.emailEmpresa}</Text>
      <Text>Nicho: {item.nichos}</Text>
      <Text>Senha: {item.senhaEmpresa}</Text>
    </View>
  );

  const handleNavigateToLayout = () => {
    router.navigate("/");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Empresas Cadastradas</Text>
      <FlatList
        data={empresas}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      <TouchableOpacity style={styles.button} onPress={handleNavigateToLayout}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
   
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  button: {
    backgroundColor: "#007bff",
    width: 100,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default Testes;
