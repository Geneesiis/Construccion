import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, StatusBar, View, ActivityIndicator } from 'react-native';
import Calculadora from './src/components/Calculadora';
import Inicio from './src/components/Inicio'; // Importamos la nueva pantalla
import { inicializarBaseDeDatos } from './src/database/DatabaseManager';

export default function App() {
  const [dbLista, setDbLista] = useState(false);
  
  // NUEVO ESTADO: Controla si estamos en 'inicio' o en 'calculadora'
  const [pantallaActual, setPantallaActual] = useState('inicio');

  useEffect(() => {
    const prepararApp = async () => {
      const exito = await inicializarBaseDeDatos();
      if (exito) {
        setDbLista(true); // La base de datos se inicializa silenciosamente de fondo
      }
    };
    prepararApp();
  }, []);

  // Si la BD se está creando en el primer milisegundo, mostramos carga silenciosa
  if (!dbLista) {
    return (
      <SafeAreaView style={styles.containerCarga}>
        <ActivityIndicator size="large" color="#F39C12" />
      </SafeAreaView>
    );
  }

  // ENRUTADOR DINÁMICO: Evaluamos qué pantalla renderizar
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1E272E" />
      
      {pantallaActual === 'inicio' ? (
        // Si el estado es 'inicio', le pasamos la orden de cambiar de pantalla al presionar el botón
        <Inicio onEntrar={() => setPantallaActual('calculadora')} />
      ) : (
        // Si ya cambió, entra directo a la calculadora constructora
        <Calculadora />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E272E',
  },
  containerCarga: {
    flex: 1,
    backgroundColor: '#1E272E',
    justifyContent: 'center',
    alignItems: 'center',
  }
});