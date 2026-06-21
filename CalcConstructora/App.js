import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, StatusBar, ActivityIndicator } from 'react-native';
import Calculadora from './src/components/Calculadora';
import CalculadoraLadrillos from './src/components/CalculadoraLadrillos'; // Nueva
import Inicio from './src/components/Inicio'; 
import { inicializarBaseDeDatos } from './src/database/DatabaseManager';
import { Theme } from './src/theme/theme'; // Importamos tus tokens para consistencia

export default function App() {
  const [dbLista, setDbLista] = useState(false);
  
  // ESTADO EXTENDIDO: 'inicio', 'radier' o 'ladrillos'
  const [pantallaActual, setPantallaActual] = useState('inicio');

  useEffect(() => {
    const prepararApp = async () => {
      const exito = await inicializarBaseDeDatos();
      if (exito) {
        setDbLista(true);
      }
    };
    preparApp();
  }, []);

  if (!dbLista) {
    return (
      <SafeAreaView style={styles.containerCarga}>
        <ActivityIndicator size="large" color={Theme.colors.primary} />
      </SafeAreaView>
    );
  }

  // ENRUTADOR DINÁMICO MEJORADO
  const renderizarPantalla = () => {
    switch (pantallaActual) {
      case 'inicio':
        return <Inicio onEntrar={() => setPantallaActual('radier')} />;
      case 'radier':
        return (
          <Calculadora 
            onCambiarPantalla={(pantalla) => setPantallaActual(pantalla)} 
          />
        );
      case 'ladrillos':
        return (
          <CalculadoraLadrillos 
            onCambiarPantalla={(pantalla) => setPantallaActual(pantalla)} 
          />
        );
      default:
        return <Inicio onEntrar={() => setPantallaActual('radier')} />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={Theme.colors.background} />
      {renderizarPantalla()}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  containerCarga: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center',
  }
});