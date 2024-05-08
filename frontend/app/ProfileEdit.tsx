import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { Color, FontSize } from "../GlobalStyles";
import { atualizarEmpresa } from "../backend/database";
import { getUsuarioLogado } from "../auth/utils";
import { router } from "expo-router";

const ProfileEdit = () => {
  const navigation = useNavigation();

  const [mensagemSucesso, setMensagemSucesso] = useState(""); 

  const [empresaInfo, setEmpresaInfo] = useState({
    idEmpresa: "", 
    nome: "",
    email: "",
    nichos: "", 
    senha: "",
  });

  useEffect(() => {
    carregarDadosUsuario();
  }, []);

  const carregarDadosUsuario = async () => {
    const usuario = await getUsuarioLogado();
    if (usuario) {
      setEmpresaInfo({
        idEmpresa: usuario.idEmpresa, 
        nome: usuario.nomeEmpresa,
        email: usuario.emailEmpresa,
        nichos: usuario.nichos, 
        senha: usuario.senhaEmpresa,
      });
    }
  };

  const handleUpdateInfo = () => {
    const idEmpresaNumber = parseInt(empresaInfo.idEmpresa, 10);
    // Verificar se a conversão foi bem-sucedida
    if (isNaN(idEmpresaNumber)) {
      console.error('O ID da empresa não é um número válido.');
      return;
    }
  
    // Verificar se o campo nichos foi preenchido
    if (!empresaInfo.nichos) {
      console.error('O campo "nichos" não pode estar vazio.');
      return;
    }
  
    atualizarEmpresa(idEmpresaNumber, empresaInfo)
      .then(() => {
        console.log("Informações da empresa atualizadas:", empresaInfo);
        setMensagemSucesso("Perfil atualizado com sucesso!");
        setTimeout(() => {
          setMensagemSucesso("");
          router.push('Home');
        }, 2000);
      })
      .catch((error) => {
        console.error("Erro ao atualizar informações da empresa:", error);
      });
  };

  const handleChangeText = (key: string, value: string) => {
    setEmpresaInfo({ ...empresaInfo, [key]: value });
  };

  const handleLogout = () => {
    router.push('/');
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Atualização de Perfil</Text>
        <TouchableOpacity onPress={() => router.push('Home')}>
          <MaterialIcons name="home" size={24} color={Color.colorDarkturquoise_100} />
        </TouchableOpacity>
      </View>
      {mensagemSucesso ? <Text style={styles.successMessage}>{mensagemSucesso}</Text> : null}
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Nome:</Text>
        <TextInput
          style={styles.infoInput}
          value={empresaInfo.nome}
          onChangeText={(text) => handleChangeText("nome", text)}
        />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Email:</Text>
        <TextInput
          style={styles.infoInput}
          value={empresaInfo.email}
          onChangeText={(text) => handleChangeText("email", text)}
        />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Nicho:</Text>
        <TextInput
          style={styles.infoInput}
          value={empresaInfo.nichos}
          onChangeText={(text) => handleChangeText("nichos", text)}
        />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Senha:</Text>
        <TextInput
          style={styles.infoInput}
          value={empresaInfo.senha}
          onChangeText={(text) => handleChangeText("senha", text)}
        />
      </View>
      <TouchableOpacity style={styles.saveButton} onPress={handleUpdateInfo}>
        <Text style={styles.saveButtonText}>Salvar Alterações</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.saveButtonText}>Deslogar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: FontSize.size_xl,
    fontWeight: 'bold',
    color: Color.colorDarkturquoise_100,
  },
  infoContainer: {
    marginBottom: 20,
  },
  infoTitle: {
    fontSize: FontSize.size_xs,
    fontWeight: "600",
    color: Color.colorDarkturquoise_100,
    marginBottom: 5,
  },
  infoInput: {
    borderWidth: 1,
    borderColor: Color.colorDarkslateblue,
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: FontSize.size_xs,
    marginBottom: 10,
  },
  saveButton: {
    backgroundColor: Color.colorDarkturquoise_100,
    paddingVertical: 15,
    borderRadius: 6,
    marginTop: 20,
    alignItems: 'center',
  },
  saveButtonText: {
    color: "#fff",
    fontSize: FontSize.size_smi,
    fontWeight: "600",
    textAlign: "center",
  },
  logoutButton: {
    backgroundColor: "red",
    paddingVertical: 15,
    borderRadius: 6,
    marginTop: 20,
    alignItems: 'center',
  },
  successMessage: {
    fontSize: FontSize.size_xs,
    fontWeight: "600",
    color: "green",
    textAlign: "center",
    marginBottom: 20,
  },
});

export default ProfileEdit;
