// src/components/CalculadoraLadrillos.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import styles from '../styles/CalculadoraStyles'; // Reutilizamos tus estilos de alta visibilidad
import { Ionicons } from '@expo/vector-icons';
import FormInput from './FormInput'; // ¡Nuestro componente LEGO!

export default function CalculadoraLadrillos({ onCambiarPantalla }) {
  const [largoMuro, setLargoMuro] = useState('');
  const [altoMuro, setAltoMuro] = useState('');
  const [resultados, setResultados] = useState(null);

  const calcularLadrillos = () => {
    // Aquí irá la matemática de los ladrillos más adelante
    setResultados({ cantidad: 450, mortero: 0.5 });
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.scrollContainer} bounces={false}>
        <View style={styles.internalContainer}>
          
          {/* HEADER */}
          <View style={styles.header}>
            <TouchableOpacity style={styles.botonHamburguesa} onPress={onCambiarPantalla}>
              <Ionicons name="menu-outline" size={32} color="#FF9F0A" />
            </TouchableOpacity>
            <View style={styles.contenedorTextosHeader}>
              <Text style={styles.titulo}>CÁLCULO DE MUROS</Text>
              <Text style={styles.subtituloHeader}>Cubicación de Ladrillos</Text>
            </View>
          </View>

          {/* FORMULARIO REUTILIZANDO LEGO INPUTS */}
          <View style={styles.formularioContainer}>
            <Text style={styles.seccionTitulo}>MEDIDAS DEL MURO</Text>
            <View style={styles.filaInput}>
              <View style={styles.columnaInput}>
                <FormInput label="Largo Muro (m):" placeholder="Ej: 4.00" value={largoMuro} onChangeText={setLargoMuro} />
              </View>
              <View style={styles.columnaInput}>
                <FormInput label="Alto Muro (m):" placeholder="Ej: 2.30" value={altoMuro} onChangeText={setAltoMuro} />
              </View>
            </View>
          </View>

          {/* BOTONES */}
          <View style={styles.contenedorBotones}>
            <TouchableOpacity style={[styles.boton, styles.botonCalcular]} onPress={calcularLadrillos}>
              <Text style={styles.textoBoton}>CALCULAR LADRILLOS</Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}