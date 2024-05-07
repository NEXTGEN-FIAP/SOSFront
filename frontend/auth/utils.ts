import AsyncStorage from '@react-native-async-storage/async-storage';

export const salvarUsuarioLogado = async (usuario: any) => {
  try {
    await AsyncStorage.setItem('usuario', JSON.stringify(usuario));
  } catch (error) {
    console.error('Erro ao salvar dados do usuário:', error);
  }
};

export const getUsuarioLogado = async () => {
    try {
      const usuario = await AsyncStorage.getItem('usuario');
      return usuario ? JSON.parse(usuario) : null;
    } catch (error) {
      console.error('Erro ao obter dados do usuário:', error);
      return null;
    }
  };
  

export const removerUsuarioLogado = async () => {
  try {
    await AsyncStorage.removeItem('usuario');
  } catch (error) {
    console.error('Erro ao remover dados do usuário:', error);
  }
};
