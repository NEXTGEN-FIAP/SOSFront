import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

export default function WelcomePage() {

  const handleLogin = () => {
    router.push('/LoginPage');
  };

  const handleSignUp = () => {
    router.push('/SignUp');
  };

  const handleViewUsers = () => {
    router.push('/Testes')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Southern Ocean Sentinel!</Text>
      <Text style={styles.description}>Navegue com facilidade pelo nosso App</Text>
      <TouchableOpacity style={[styles.button, styles.signupButton]} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Criar uma Conta</Text>
      </TouchableOpacity>
      <Text style={styles.orText}>OU</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Fazer Login</Text>
      </TouchableOpacity>
      <Text style={styles.orText}>OU</Text>
      <TouchableOpacity style={[styles.button, styles.testButton]} onPress={handleViewUsers}>
        <Text style={styles.buttonText}>Ver o Banco de Dados</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: "#11b2e4"
  },
  description: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007bff',
    width: '80%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  signupButton: {
    backgroundColor: '#28a745',
  },
    testButton: {
        backgroundColor: '#dc3545',
    },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  orText: {
    fontSize: 16,
    marginVertical: 10,
  },
});
