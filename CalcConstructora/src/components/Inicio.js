import React, { useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity, Animated, StatusBar } from 'react-native';
import styles from '../styles/InicioStyles';

export default function Inicio({ onEntrar }) {
  // Declaramos las variables de animación en la memoria del dispositivo
  const opacidadElemento = useRef(new Animated.Value(0)).current;
  const escalaElemento = useRef(new Animated.Value(0.95)).current;

  useEffect(() => {
    // Ejecuta la animación de entrada inmediatamente al abrir la app
    Animated.parallel([
      Animated.timing(opacidadElemento, {
        toValue: 1,
        duration: 800, // Milisegundos de transición suave
        useNativeDriver: true, // Forzar ejecución en el chip gráfico para evitar tirones
      }),
      Animated.timing(escalaElemento, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      })
    ]).start();
  }, []);

  const ejecutarSalidaAnimada = () => {
    // Animación inversa antes de cambiar de pantalla
    Animated.parallel([
      Animated.timing(opacidadElemento, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(escalaElemento, {
        toValue: 1.05,
        duration: 400,
        useNativeDriver: true,
      })
    ]).start(() => {
      // Una vez terminada la animación de desvanecimiento, llamamos a la calculadora
      onEntrar();
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1E272E" />
      
      {/* Contenedor Animado de la identidad visual */}
      <Animated.View 
        style={[
          styles.contenedorLogotipo, 
          { opacity: opacidadElemento, transform: [{ scale: escalaElemento }] }
        ]}
      >
        <View style={styles.lineaDecorativa} />
        <Text style={styles.tituloMasivo}>
          CONSTRUCTORA{"\n"}
          <Text style={styles.tituloDestacado}>DIGITAL</Text>
        </Text>
        <Text style={styles.subtituloTecnico}>Calculadora Constructora</Text>
      </Animated.View>

      {/* Botón estructural animado */}
      <Animated.View style={{ opacity: opacidadElemento, transform: [{ scale: escalaElemento }] }}>
        <TouchableOpacity 
          style={styles.botonAvanzado} 
          onPress={ejecutarSalidaAnimada} 
          activeOpacity={0.6}
        >
          <Text style={styles.textoBoton}>INICIAR </Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}