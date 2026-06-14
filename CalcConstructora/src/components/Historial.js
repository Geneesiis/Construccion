import React from 'react';
import { Text, View, TouchableOpacity, Alert, Modal, ScrollView, TouchableWithoutFeedback } from 'react-native';
import styles from '../styles/HistorialStyles'; 
import { borrarTodoElHistorial } from '../database/DatabaseManager';

export default function Historial({ visible, onCerrar, lista, onRefrescar }) {
  
  const vaciarHistorialCompleto = () => {
    Alert.alert(
      'Borrar Historial',
      '¿Estás seguro de que quieres eliminar todos los registros guardados?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { 
          text: 'Sí, Borrar', 
          style: 'destructive',
          onPress: async () => {
            await borrarTodoElHistorial();
            onRefrescar();
          }
        }
      ]
    );
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onCerrar}
    >
      <View style={styles.capaFondo}>
        <View style={styles.menuLateral}>
          <View style={styles.headerHistorial}>
            <Text style={styles.tituloHistorial}>HISTORIAL</Text>
            {lista.length > 0 && (
              <TouchableOpacity onPress={vaciarHistorialCompleto}>
                <Text style={styles.textoBorrarTodo}>Borrar todo</Text>
              </TouchableOpacity>
            )}
          </View>

          <ScrollView style={styles.scrollLista} showsVerticalScrollIndicator={false}>
            {lista.length === 0 ? (
              <Text style={styles.textoHistorialVacio}>No hay cálculos registrados en este dispositivo.</Text>
            ) : (
              lista.map((item) => (
                <View key={item.id} style={styles.tarjetaHistorial}>
                  <View style={styles.filaHistorialHeader}>
                    <Text style={styles.fechaHistorial}>{item.fecha}</Text>
                    <Text style={styles.medidasHistorial}>{item.largo}m x {item.ancho}m x {item.espesor}m</Text>
                  </View>
                  <Text style={styles.detallesHistorial}>
                    Volumen: {item.volumen} m³  |  Cemento (25kg): {item.cemento} sacos  |  Arena: {item.arena} m³  |  Gravilla: {item.gravilla} m³
                  </Text>
                </View>
              ))
            )}
          </ScrollView>

          <TouchableOpacity style={styles.botonCerrarMenu} onPress={onCerrar}>
            <Text style={styles.textoBotonCerrar}>VOLVER A LA CALCULADORA</Text>
          </TouchableOpacity>
        </View>

        <TouchableWithoutFeedback onPress={onCerrar}>
          <View style={styles.zonaCierreTáctil} />
        </TouchableWithoutFeedback>
      </View>
    </Modal>
  );
}