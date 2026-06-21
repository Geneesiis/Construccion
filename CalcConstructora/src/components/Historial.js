import React from 'react';
import { Text, View, TouchableOpacity, Alert, Modal, ScrollView, TouchableWithoutFeedback } from 'react-native';
import styles from '../styles/HistorialStyles'; 
import { borrarTodoElHistorial } from '../database/DatabaseManager';
import { Ionicons } from '@expo/vector-icons'; 
import { Theme } from '../theme/theme'; 

export default function Historial({ visible, onCerrar, lista, onRefrescar, onCambiarPantalla }) {
  
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
          
          {/* HEADER PRINCIPAL */}
          <View style={styles.headerHistorial}>
            <Text style={styles.tituloHistorial}>MENÚ PRINCIPAL</Text>
            {/* AQUÍ SOLO SE QUEDA EL BOTÓN DE BORRAR TODO SI HAY ELEMENTOS */}
            {lista.length > 0 && (
              <TouchableOpacity onPress={vaciarHistorialCompleto}>
                <Text style={styles.textoBorrarTodo}>Borrar todo</Text>
              </TouchableOpacity>
            )}
          </View>

          {/* SECCIÓN DE NAVEGACIÓN GLOBAL (FUERA DE LA CONDICIÓN DE LA LISTA) */}
          <View style={styles.seccionNavegacion}>
            <TouchableOpacity 
              style={styles.botonMenuNavegacion} 
              onPress={() => { onCambiarPantalla('radier'); onCerrar(); }}
            >
              <Ionicons name="construct-outline" size={22} color={Theme.colors.primary} />
              <Text style={styles.textoMenuNavegacion}>Calculadora de Radier</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.botonMenuNavegacion} 
              onPress={() => { onCambiarPantalla('ladrillos'); onCerrar(); }}
            >
              <Ionicons name="grid-outline" size={22} color={Theme.colors.primary} />
              <Text style={styles.textoMenuNavegacion}>Calculadora de Muros</Text>
            </TouchableOpacity>
          </View>

          {/* LÍNEA DIVISORIA SUTIL */}
          <View style={styles.divisorMenu} />

          {/* LISTADO DE CÁLCULOS */}
          <Text style={styles.subtituloSeccion}>HISTORIAL DE CÁLCULOS</Text>
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
                    Vol: {item.volumen} m³  |  Cem: {item.cemento} sacos  |  Are: {item.arena} m³  |  Gra: {item.gravilla} m³
                  </Text>
                </View>
              ))
            )}
          </ScrollView>

          {/* BOTÓN INFERIOR DE RETORNO */}
          <TouchableOpacity style={styles.botonCerrarMenu} onPress={onCerrar}>
            <Text style={styles.textoBotonCerrar}>CERRAR MENÚ</Text>
          </TouchableOpacity>
        </View>

        <TouchableWithoutFeedback onPress={onCerrar}>
          <View style={styles.zonaCierreTáctil} />
        </TouchableWithoutFeedback>
      </View>
    </Modal>
  );
}