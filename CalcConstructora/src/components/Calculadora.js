import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView, Keyboard, Alert } from 'react-native';
import styles from '../styles/CalculadoraStyles'; 
import { guardarCalculo, obtenerHistorial } from '../database/DatabaseManager';
import Historial from './Historial'; 

const DOSIFICACION = {
  arena: 1.20,        
  gravilla: 1.00      
};

export default function Calculadora() {
  const [largo, setLargo] = useState('');
  const [ancho, setAncho] = useState('');
  const [espesor, setEspesor] = useState('');
  const [sacosPorMetro, setSacosPorMetro] = useState('12.5');
  const [resultados, setResultados] = useState(null);
  const [historial, setHistorial] = useState([]);
  const [menuAbierto, setMenuAbierto] = useState(false);

  useEffect(() => {
    cargarHistorialDesdeBD();
  }, []);

  const cargarHistorialDesdeBD = async () => {
    const datosBD = await obtenerHistorial();
    setHistorial(datosBD);
  };

  const calcularMateriales = async () => {
    Keyboard.dismiss();

    const numLargo = parseFloat(largo);
    const numAncho = parseFloat(ancho);
    const numEspesor = parseFloat(espesor);
    const numSacos = parseFloat(sacosPorMetro);

    if (!numLargo || !numAncho || !numEspesor || !numSacos) {
      Alert.alert('Atención', 'Por favor ingresa valores numéricos válidos en todos los campos para poder calcular.');
      return; 
    }

    const volumenMetrosCubicos = numLargo * numAncho * numEspesor;
    
    const nuevosResultados = {
      volumen: volumenMetrosCubicos.toFixed(2),
      cemento: Math.ceil(volumenMetrosCubicos * numSacos), 
      arena: (volumenMetrosCubicos * DOSIFICACION.arena).toFixed(2),
      gravilla: (volumenMetrosCubicos * DOSIFICACION.gravilla).toFixed(2)
    };

    setResultados(nuevosResultados);

    await guardarCalculo({
      largo: numLargo,
      ancho: numAncho,
      espesor: numEspesor,
      ...nuevosResultados
    });

    cargarHistorialDesdeBD();
  };

  const limpiarCampos = () => {
    setLargo('');
    setAncho('');
    setEspesor('');
    setResultados(null);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.botonHamburguesa} onPress={() => setMenuAbierto(true)}>
          <View style={styles.rayasHamburguesa} />
          <View style={styles.rayasHamburguesa} />
          <View style={styles.rayasHamburguesa} />
        </TouchableOpacity>
        <Text style={styles.titulo}>CALCULADORA CONSTRUCTORA</Text>
        <Text style={styles.subtituloHeader}>Cálculo Profesional de Radier</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.seccionTitulo}>MEDIDAS DEL TERRENO</Text>
        
        <Text style={styles.label}>Largo de la superficie (metros):</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Ej: 6.00"
          placeholderTextColor="#95A5A6"
          value={largo}
          onChangeText={setLargo}
        />

        <Text style={styles.label}>Ancho de la superficie (metros):</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Ej: 3.50"
          placeholderTextColor="#95A5A6"
          value={ancho}
          onChangeText={setAncho}
        />

        <Text style={styles.label}>Espesor o alto (centímetros):</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Ej: 0.10 (10 cm = 0.10 m)"
          placeholderTextColor="#95A5A6"
          value={espesor}
          onChangeText={setEspesor}
        />

        <View style={styles.separador} />

        <Text style={styles.seccionTitulo}>DOSIFICACIÓN</Text>
        <Text style={styles.label}>Sacos de cemento por m³:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={sacosPorMetro}
          onChangeText={setSacosPorMetro}
        />

        <View style={styles.contenedorBotones}>
          <TouchableOpacity style={[styles.boton, styles.botonCalcular]} onPress={calcularMateriales}>
            <Text style={styles.textoBoton}>CALCULAR</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.boton, styles.botonLimpiar]} onPress={limpiarCampos}>
            <Text style={styles.textoBotonLimpiar}>LIMPIAR</Text>
          </TouchableOpacity>
        </View>
      </View>

      {resultados && (
        <View style={styles.cardResultados}>
          <Text style={styles.tituloResultados}>TOTAL DE MATERIALES</Text>
          
          <View style={styles.filaResultado}>
            <Text style={styles.textoResultado}>Volumen de Mezcla:</Text>
            <Text style={styles.destacado}>{resultados.volumen} m³</Text>
          </View>
          
          <View style={styles.filaResultado}>
            <Text style={styles.textoResultado}>Cemento (25 kg):</Text>
            <Text style={styles.destacado}>{resultados.cemento} sacos</Text>
          </View>

          <View style={styles.filaResultado}>
            <Text style={styles.textoResultado}>Arena Fina/Gruesa:</Text>
            <Text style={styles.destacado}>{resultados.arena} m³</Text>
          </View>

          <View style={styles.filaResultado}>
            <Text style={styles.textoResultado}>Gravilla (Piedra):</Text>
            <Text style={styles.destacado}>{resultados.gravilla} m³</Text>
          </View>

          {/* ======================================================= */}
          {/* NOTA DE RESPONSABILIDAD DIRECTA Y DE TERRENO            */}
          {/* ======================================================= */}
          <View style={styles.contenedorNotaSeguridad}>
            <Text style={styles.tituloNotaSeguridad}>¡OJO EN LA OBRA!</Text>
            <Text style={styles.textoNotaSeguridad}>
              Esta aplicación es solo una guía para ayudarte a cubicar. Los cálculos pueden fallar porque en terreno influye la humedad, los niveles y el desecho de material. El uso de estos números es bajo tu propio riesgo y NO nos hacemos responsables si falta o sobra material en la obra. ¡Revisa y mide bien antes de comprar!
            </Text>
          </View>
          {/* ======================================================= */}
        </View>
      )}

      <Historial 
        visible={menuAbierto} 
        onCerrar={() => setMenuAbierto(false)} 
        lista={historial} 
        onRefrescar={cargarHistorialDesdeBD} 
      />
    </ScrollView>
  );
}