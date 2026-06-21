import { StyleSheet, Dimensions } from 'react-native';
import { Theme } from '../theme/theme'; // <--- IMPORTAMOS TUS TOKENS CENTRALIZADOS

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.background, // Fondo negro puro centralizado
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingTop: 100,
    paddingBottom: 40,
  },
  contenedorLogotipo: {
    alignItems: 'center',
    width: '100%',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  lineaDecorativa: {
    width: 50,
    height: 5,
    backgroundColor: Theme.colors.primary, // Naranja de marca centralizado
    marginBottom: 20,
    borderRadius: 2,
  },
  tituloMasivo: {
    fontSize: Theme.typography.fontSizeHeading, // Tamaño masivo centralizado (34px)
    fontWeight: '900',
    color: Theme.colors.text, // Blanco puro
    textAlign: 'center',
    letterSpacing: 2,
    lineHeight: 40,
  },
  tituloDestacado: {
    color: Theme.colors.primary, // Naranja de marca centralizado
  },
  subtituloTecnico: {
    fontSize: Theme.typography.fontSizeLabel, // 16px mínimos de legibilidad
    color: Theme.colors.textMuted, // Gris claro accesible
    textAlign: 'center',
    marginTop: 16,
    fontWeight: '600',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  botonAvanzado: {
    backgroundColor: Theme.colors.primary, // Fondo sólido brillante centralizado
    width: width * 0.85,
    height: 56, // Altura táctil ideal
    borderRadius: Theme.roundness.small, // Radio de borde controlado
    alignItems: 'center',
    justifyContent: 'center',
    // Sombras nativas
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  textoBoton: {
    color: Theme.colors.textDark, // Texto negro para contraste perfecto
    fontSize: Theme.typography.fontSizeMain, // 18px para lectura rápida
    fontWeight: '800',
    letterSpacing: 2,
  }
});