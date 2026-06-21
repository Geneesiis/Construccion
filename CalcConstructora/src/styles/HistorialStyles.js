import { StyleSheet, Dimensions } from 'react-native';
import { Theme } from '../theme/theme'; // <--- IMPORTAMOS TUS TOKENS CENTRALIZADOS

// Obtenemos el ancho real de la pantalla del celular del usuario
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  // Capa oscura de fondo que cubre la calculadora cuando el menú se abre
  capaFondo: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.75)', 
    flexDirection: 'row',
  },
  // El contenedor del menú que ocupa el 85% del ancho de la pantalla
  menuLateral: {
    width: width * 0.85,
    height: height,
    backgroundColor: Theme.colors.background, // Fondo oscuro centralizado
    padding: 16,
    paddingTop: 50, 
    paddingBottom: 20, 
    borderRightWidth: 3,
    borderRightColor: Theme.colors.primary, // Naranja de marca centralizado
  },
  headerHistorial: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: Theme.colors.border, // Borde gris centralizado
  },
  tituloHistorial: {
    fontSize: Theme.typography.fontSizeMain, // 18px centralizados
    fontWeight: '900',
    color: Theme.colors.primary, // Naranja de marca centralizado
    letterSpacing: 0.5,
  },
  textoBorrarTodo: {
    color: Theme.colors.error, // Rojo brillante de errores/alertas centralizado
    fontSize: Theme.typography.fontSizeLabel, // 16px mínimos de legibilidad
    fontWeight: 'bold',
    paddingVertical: 6, 
  },
  // Capa invisible para detectar toques fuera del menú y cerrarlo
  zonaCierreTáctil: {
    width: width * 0.15,
    height: height,
  },
  scrollLista: {
    flex: 1,
    marginBottom: 16,
  },
  textoHistorialVacio: {
    color: Theme.colors.textMuted, // Gris claro centralizado
    fontSize: Theme.typography.fontSizeLabel,
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 40,
  },
  tarjetaHistorial: {
    backgroundColor: Theme.colors.surface, // Gris intermedio para contenedores
    padding: 16,
    borderRadius: Theme.roundness.small, // Radios de bordes controlados (8px)
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: Theme.colors.textMuted,
    borderWidth: 1,
    borderColor: Theme.colors.border,
  },
  filaHistorialHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  fechaHistorial: {
    color: Theme.colors.textMuted, // Gris claro centralizado
    fontSize: 14, 
    fontWeight: '700',
  },
  medidasHistorial: {
    color: Theme.colors.primary, // Naranja de marca centralizado
    fontSize: Theme.typography.fontSizeLabel, // 16px para identificar rápido
    fontWeight: 'bold',
  },
  detallesHistorial: {
    color: Theme.colors.text, // Blanco puro centralizado
    fontSize: Theme.typography.fontSizeLabel, // 16px para lectura sin esfuerzo
    lineHeight: 22,   
  },
  botonCerrarMenu: {
    backgroundColor: Theme.colors.surfaceVariant, // Botón secundario a tono
    height: 54,       
    borderRadius: Theme.roundness.small,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  textoBotonCerrar: {
    color: Theme.colors.text, // Blanco puro
    fontWeight: '800',
    fontSize: Theme.typography.fontSizeLabel,
    letterSpacing: 1,
  },
  seccionNavegacion: {
    marginBottom: 16,
  },
  botonMenuNavegacion: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1C1C1E', // Fondo de botón oscuro de alto contraste
    height: 50, // Objetivo táctil cómodo
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#2C2C2E',
  },
  textoMenuNavegacion: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 12,
  },
  divisorMenu: {
    height: 1,
    backgroundColor: '#2C2C2E',
    marginBottom: 16,
  },
  subtituloSeccion: {
    color: '#A1A1A6',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1,
    marginBottom: 10,
    textTransform: 'uppercase',
  },
});