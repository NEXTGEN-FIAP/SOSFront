// LoginPage.tsx
import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { Link, router, useNavigation } from "expo-router";
import * as SQLite from 'expo-sqlite';
import { salvarUsuarioLogado } from "../auth/utils";


const db = SQLite.openDatabase('meuBancoDeDados.db');

interface LoginForm {
  email: string;
  senha: string;
}

const LoginPage = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<LoginForm>();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const navigation = useNavigation();

  const onSubmit = async (data: LoginForm) => {
    try {
      const user = await buscarUsuarioPorCredenciais(data.email, data.senha);
      if (user) {
        await salvarUsuarioLogado(user); // Salva o usuário logado no AsyncStorage
        setSuccessMessage("Login efetuado com sucesso!");
        setTimeout(() => {
          setSuccessMessage(null);
          router.push('/Home');
        }, 2000);
      } else {
        setErrorMessage("Credenciais inválidas. Por favor, tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  };

  const buscarUsuarioPorCredenciais = (email: string, senha: string): Promise<any> => {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          "SELECT * FROM T_EMPRESA WHERE emailEmpresa = ? AND senhaEmpresa = ?",
          [email, senha],
          (_, { rows }) => {
            if (rows.length > 0) {
              resolve(rows.item(0));
            } else {
              resolve(null);
            }
          },
          (_, error) => {
            console.error("Erro ao buscar usuário:", error);
            reject(error);
            return false;
          }
        );
      });
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>SocialRate</Text>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Login</Text>
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
          rules={{ required: "Email é obrigatório." }}
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
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
        {successMessage && <Text style={styles.successMessage}>{successMessage}</Text>}
        <Link href="/SignUp" asChild>
          <Text style={styles.signUpText}>Não tem uma conta? Cadastre-se</Text>
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
    textAlign: "center",
  },
  signUpText: {
    color: "#002fff",
    marginTop: 20,
    textAlign: "center",
  },
});


export default LoginPage;
