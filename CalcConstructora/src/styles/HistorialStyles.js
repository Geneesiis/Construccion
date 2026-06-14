import { StyleSheet, Dimensions } from 'react-native';

// Obtenemos el ancho real de la pantalla del celular del usuario
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  // Capa oscura de fondo que cubre la calculadora cuando el menú se abre
  capaFondo: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    flexDirection: 'row',
  },
  // El contenedor del menú que ocupa el 85% del ancho de la pantalla
  menuLateral: {
    width: width * 0.85,
    height: height,
    backgroundColor: '#1E272E', // Fondo oscuro a juego con la app
    padding: 20,
    paddingTop: 50, // Espacio para que no choque con la barra de batería
    paddingBottom: 20, // Espacio para el botón de cerrar
    borderRightWidth: 3,
    borderRightColor: '#F39C12', // Línea decorativa amarilla
  },
  headerHistorial: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#2C3E50',
  },
  tituloHistorial: {
    fontSize: 18,
    fontWeight: '900',
    color: '#F39C12',
    letterSpacing: 0.5,
  },
  textoBorrarTodo: {
    color: '#E74C3C',
    fontSize: 13,
    fontWeight: 'bold',
  },
  // Capa invisible para detectar toques fuera del menú y cerrarlo
  zonaCierreTáctil: {
    width: width * 0.15,
    height: height,
  },
  scrollLista: {
    flex: 1,
    marginBottom: 20,
  },
  textoHistorialVacio: {
    color: '#7F8C8D',
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 30,
  },
  tarjetaHistorial: {
    backgroundColor: '#2C3E50',
    padding: 14,
    borderRadius: 6,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#BDC3C7',
  },
  filaHistorialHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  fechaHistorial: {
    color: '#BDC3C7',
    fontSize: 12,
    fontWeight: 'bold',
  },
  medidasHistorial: {
    color: '#F39C12',
    fontSize: 13,
    fontWeight: 'bold',
  },
  detallesHistorial: {
    color: '#ECF0F1',
    fontSize: 12,
    lineHeight: 16,
  },
  botonCerrarMenu: {
    backgroundColor: '#34495E',
    padding: 14,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: '15', 
    marginBottom: 35,
  },
  textoBotonCerrar: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  }
});