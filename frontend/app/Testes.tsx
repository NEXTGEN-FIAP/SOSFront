// Testes.tsx

import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { buscarEmpresasCadastradas } from "../backend/database";

const Testes = () => {
  const [empresas, setEmpresas] = useState<any[]>([]);

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
      <Text>Nome da Empresa: {item.nomeEmpresa}</Text>
      <Text>Email: {item.emailEmpresa}</Text>
      <Text>Nicho: {item.nichos}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Empresas Cadastradas</Text>
      <FlatList
        data={empresas}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
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
});

export default Testes;
