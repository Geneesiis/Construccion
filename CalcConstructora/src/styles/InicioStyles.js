import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E272E',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  contenedorLogotipo: {
    alignItems: 'center',
    marginBottom: 60,
    width: '100%',
  },
  lineaDecorativa: {
    width: 40,
    height: 4,
    backgroundColor: '#F39C12',
    marginBottom: 20,
    borderRadius: 2,
  },
  tituloMasivo: {
    fontSize: 32,
    fontWeight: '900',
    color: '#FFFFFF', // Blanco puro para el impacto principal
    textAlign: 'center',
    letterSpacing: 2,
    lineHeight: 38,
  },
  tituloDestacado: {
    color: '#F39C12', // Amarillo técnico de acento
  },
  subtituloTecnico: {
    fontSize: 12,
    color: '#7F8C8D',
    textAlign: 'center',
    marginTop: 14,
    fontWeight: '600',
    letterSpacing: 3, // Efecto de tracking expandido estilo plano técnico
    textTransform: 'uppercase',
  },
  botonAvanzado: {
    borderWidth: 1.5,
    borderColor: '#F39C12',
    backgroundColor: 'transparent', // Fondo transparente minimalista
    width: width * 0.75,
    paddingVertical: 16,
    borderRadius: 4, // Bordes sutiles y rectos, menos curvos
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoBoton: {
    color: '#F39C12',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 2,
  }
});