import React, { useState, useEffect } from 'react';
import { 
  Text, 
  View, 
  Keyboard, 
  Alert, 
  ScrollView, 
  KeyboardAvoidingView, 
  Platform,
  TouchableOpacity
} from 'react-native';
import styles from '../styles/CalculadoraStyles'; 
import { guardarCalculo, obtenerHistorial } from '../database/DatabaseManager';
import Historial from './Historial'; 
import { Ionicons } from '@expo/vector-icons';
import FormInput from './FormInput';

const DOSIFICACION = {
  arena: 1.20,        
  gravilla: 1.00      
};

export default function Calculadora({ onCambiarPantalla }) {
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
      Alert.alert('Atención', 'Por favor ingresa valores numéricos válidos en todos los campos.');
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
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
      style={{ flex: 1 }}
    >
      <ScrollView 
        contentContainerStyle={styles.scrollContainer}
        bounces={false}
        showsVerticalScrollIndicator={true}
      >
        <View style={styles.internalContainer}>
          
          {/* HEADER */}
          <View style={styles.header}>
            <TouchableOpacity style={styles.botonHamburguesa} onPress={() => setMenuAbierto(true)}>
              <Ionicons name="menu-outline" size={32} color="#FF9F0A" />
            </TouchableOpacity>
            <View style={styles.contenedorTextosHeader}>
              <Text style={styles.titulo}>CALCULADORA CONSTRUCTORA</Text>
              <Text style={styles.subtituloHeader}>Cálculo Profesional de Radier</Text>
            </View>
          </View>

          {/* FORMULARIO LIMPIO CON COMPONENTES LEGO */}
          <View style={styles.formularioContainer}>
            <Text style={styles.seccionTitulo}>MEDIDAS DEL TERRENO (METROS)</Text>
            
            <View style={styles.filaInput}>
              <View style={styles.columnaInput}>
                <FormInput
                  label="Largo:"
                  placeholder="Ej: 6.00"
                  value={largo}
                  onChangeText={setLargo}
                />
              </View>
              <View style={styles.columnaInput}>
                <FormInput
                  label="Ancho:"
                  placeholder="Ej: 3.50"
                  value={ancho}
                  onChangeText={setAncho}
                />
              </View>
            </View>

            <View style={styles.filaInput}>
              <View style={styles.columnaInput}>
                <FormInput
                  label="Espesor (Alto):"
                  placeholder="Ej: 0.10"
                  value={espesor}
                  onChangeText={setEspesor}
                />
              </View>
              <View style={styles.columnaInput}>
                <FormInput
                  label="Sacos / m³:"
                  placeholder="Ej: 12.5"
                  value={sacosPorMetro}
                  onChangeText={setSacosPorMetro}
                />
              </View>
            </View>
          </View>

          {/* RESULTADOS */}
          {resultados && (
            <View style={styles.cardResultados}>
              <Text style={styles.tituloResultados}>TOTAL MATERIALES</Text>
              <View style={styles.grillaResultados}>
                <View style={styles.itemResultado}><Text style={styles.textoRes}>Vol: {resultados.volumen} m³</Text></View>
                <View style={styles.itemResultado}><Text style={styles.textoRes}>Cem: {resultados.cemento} sacos</Text></View>
                <View style={styles.itemResultado}><Text style={styles.textoRes}>Are: {resultados.arena} m³</Text></View>
                <View style={styles.itemResultado}><Text style={styles.textoRes}>Gra: {resultados.gravilla} m³</Text></View>
              </View>
            </View>
          )}

          {/* BOTONES ANCLADOS ABAJO */}
          <View style={styles.contenedorBotones}>
            <TouchableOpacity style={[styles.boton, styles.botonCalcular]} onPress={calcularMateriales}>
              <Text style={styles.textoBoton}>CALCULAR</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.boton, styles.botonLimpiar]} onPress={limpiarCampos}>
              <Text style={styles.textoBotonLimpiar}>LIMPIAR</Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>

      <Historial 
        visible={menuAbierto} 
        onCerrar={() => setMenuAbierto(false)} 
        lista={historial} 
        onRefrescar={cargarHistorialDesdeBD} 
        onCambiarPantalla={onCambiarPantalla}
      />
    </KeyboardAvoidingView>
  );
}