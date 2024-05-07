// SignUp.tsx
import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Pressable } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { Link, useNavigation, router } from "expo-router";
import * as SQLite from 'expo-sqlite';
import { criarTabelas, deletarTabelaEmpresa } from "../backend/database";
import { salvarUsuarioLogado } from "../auth/utils";

const db = SQLite.openDatabase('meuBancoDeDados.db');

useEffect(() => {
  criarTabelas(); // Chama a função de criação de tabelas ao montar o componente
}, []);

interface SignUpFormData {
  nomeEmpresa: string;
  email: string;
  nicho: string;
  senha: string;
}

const SignUp = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<SignUpFormData>();
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const onSubmit = async (data: any) => {
    try {
      const id = generateRandomId(); // Gera um ID aleatório
      await inserirUsuarioNoBancoDeDados({ ...data, id }); // Insere o ID na tabela
      await salvarUsuarioLogado({ id, ...data }); // Salva o usuário logado no AsyncStorage
      setSuccessMessage("Empresa cadastrada com sucesso!");
      setTimeout(() => {
        setSuccessMessage(null);
        router.push('/Home');
      }, 2000);
    } catch (error) {
      console.error("Erro ao cadastrar empresa:", error);
    }
  };

  const inserirUsuarioNoBancoDeDados = (data: any) => {
    return new Promise<void>((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          `INSERT INTO T_EMPRESA (idEmpresa, nomeEmpresa, emailEmpresa, nichos, senhaEmpresa) VALUES (?, ?, ?, ?, ?);`,
          [data.id, data.nomeEmpresa, data.email, data.nicho, data.senha],
          () => {
            console.log('Usuário cadastrado com sucesso!');
            resolve();
          },
          (_, error) => {
            console.error('Erro ao cadastrar usuário:', error);
            reject(error);
            return true; 
          }
        );
      });
    });
  };

  const generateRandomId = () => {
    return Math.floor(Math.random() * 1000000); // Gera um ID aleatório de 0 a 999999
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>SocialRate</Text>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Cadastro de Empresa</Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              placeholder="Email"
              keyboardType="email-address"
            />
          )}
          name="email"
          rules={{ required: "Email é obrigatório.", pattern: { value: /\S+@\S+\.\S+/, message: "Email inválido" } }}
          defaultValue=""
        />
        {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              placeholder="Nome da Empresa"
            />
          )}
          name="nomeEmpresa"
          rules={{ required: "Nome da empresa é obrigatório." }}
          defaultValue=""
        />
        {errors.nomeEmpresa && <Text style={styles.error}>{errors.nomeEmpresa.message}</Text>}
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              placeholder="Nicho que trabalha"
            />
          )}
          name="nicho"
          rules={{ required: "Nicho é obrigatório." }}
          defaultValue=""
        />
        {errors.nicho && <Text style={styles.error}>{errors.nicho.message}</Text>}
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              secureTextEntry={true}
              placeholder="Senha"
            />
          )}
          name="senha"
          rules={{ required: "Senha é obrigatória." }}
          defaultValue=""
        />
        {errors.senha && <Text style={styles.error}>{errors.senha.message}</Text>}
        <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
        {successMessage && <Text style={styles.successMessage}>{successMessage}</Text>}
        <Link href="/LoginPage" asChild>
          <Pressable>
            <Text style={styles.loginText}>Já tem uma conta? Login</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#11b2e4",
    marginTop: 40,
    marginBottom: 20,
  },
  formContainer: {
    width: "100%",
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#007bff",
    width: "100%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  error: {
    color: "red",
    marginBottom: 5,
  },
  successMessage: {
    color: "green",
    marginTop: 10,
  },
  loginText: {
    color: "#002fff",
    marginTop: 20,
    textAlign: "left",
  },
});

export default SignUp;
