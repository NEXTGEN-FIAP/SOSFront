import * as SQLite from 'expo-sqlite';

export const db = SQLite.openDatabase('meuBancoDeDados.db');

export const deletarTabelaEmpresa = () => {
  db.transaction((tx: SQLite.SQLTransaction) => {
    tx.executeSql(
      `DROP TABLE IF EXISTS T_EMPRESA;`,
      [],
      (_, result: SQLite.SQLResultSet) => {
        console.log('Tabela T_EMPRESA deletada com sucesso!');
        return true; // Continuar a transação
      },
      (_, error: SQLite.SQLError) => {
        console.error('Erro ao deletar tabela T_EMPRESA:', error);
        return false; // Interromper a transação
      }
    );
  });
};

// Função para criar as tabelas
export const criarTabelas = () => {
  db.transaction((tx: SQLite.SQLTransaction) => {
    // Criação da tabela T_INFLUENCER
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS T_INFLUENCER (
        idInfluencer INTEGER PRIMARY KEY,
        nomeInfluencer TEXT NOT NULL,
        areaAtuacaoInfluencer TEXT NOT NULL,
        faixaEtariaPublico TEXT NOT NULL,
        generoPublico TEXT NOT NULL,
        alcanceInfluencer INTEGER NOT NULL,
        generoInfluencer TEXT NOT NULL
      );`,
      [],
      (_, result: SQLite.SQLResultSet) => {
        console.log('Tabela T_INFLUENCER criada com sucesso!');
        return true; // Continuar a transação
      },
      (_, error: SQLite.SQLError) => {
        console.error('Erro ao criar tabela T_INFLUENCER:', error);
        return false; // Interromper a transação
      }
    );

    // Criação da tabela T_CAMPANHA
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS T_CAMPANHA (
        idCampanha INTEGER PRIMARY KEY,
        publicoAlvoCampanha TEXT NOT NULL,
        generoPublicoAlvoCampanha TEXT NOT NULL,
        interessesDoPublico TEXT NOT NULL,
        canalDaCampanha TEXT NOT NULL,
        alcanceDaCampanha TEXT NOT NULL
      );`,
      [],
      (_, result: SQLite.SQLResultSet) => {
        console.log('Tabela T_CAMPANHA criada com sucesso!');
        return true; // Continuar a transação
      },
      (_, error: SQLite.SQLError) => {
        console.error('Erro ao criar tabela T_CAMPANHA:', error);
        return false; // Interromper a transação
      }
    );



    // Criação da tabela T_EMPRESA
    tx.executeSql(
       `CREATE TABLE IF NOT EXISTS T_EMPRESA (
        idEmpresa INTEGER PRIMARY KEY,
        nomeEmpresa TEXT NOT NULL,
        emailEmpresa TEXT NOT NULL,
        senhaEmpresa TEXT NOT NULL,
        nichos TEXT NOT NULL,
        idCampanha INTEGER,
        FOREIGN KEY (idCampanha) REFERENCES T_CAMPANHA(idCampanha)
      );`,
      [],
      (_, result: SQLite.SQLResultSet) => {
        console.log('Tabela T_EMPRESA criada com sucesso!');
        return true; // Continuar a transação
      },
      (_, error: SQLite.SQLError) => {
        console.error('Erro ao criar tabela T_EMPRESA:', error);
        return false; // Interromper a transação
      }
    );
  });
};

export const buscarEmpresasCadastradas = (): Promise<any[]> => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        "SELECT * FROM T_EMPRESA",
        [],
        (_, { rows }) => {
          resolve(rows._array);
        },
        (_, error) => {
          console.error("Erro ao buscar empresas:", error);
          reject(error);
          return false;
        }
      );
    });
  });
};

export const atualizarEmpresa = (idEmpresa: number, novaInfoEmpresa: any) => {
  return new Promise<void>((resolve, reject) => {
    db.transaction(
      (tx: SQLite.SQLTransaction) => {
        tx.executeSql(
          `UPDATE T_EMPRESA SET nomeEmpresa = ?, emailEmpresa = ?, nichos = ?, senhaEmpresa = ? WHERE idEmpresa = ?;`,
          [
            novaInfoEmpresa.nome,
            novaInfoEmpresa.email,
            novaInfoEmpresa.nichos, 
            novaInfoEmpresa.senha,
            idEmpresa,
          ],
          (_, result: SQLite.SQLResultSet) => {
            console.log("Informações da empresa atualizadas com sucesso:", novaInfoEmpresa);
            resolve();
          },
          (_, error: SQLite.SQLError) => {
            console.error("Erro ao atualizar informações da empresa:", error);
            reject(error);
            return false;
          }
        );
      },
      (error) => {
        console.error("Erro ao iniciar transação:", error);
        reject(error);
      }
    );
  });
};
