import { StyleSheet, Dimensions } from 'react-native';
import { Theme } from '../theme/theme'; // <--- IMPORTAMOS TUS TOKENS CENTRALIZADOS

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.background,
  },
  scrollContainer: {
    flexGrow: 1, // Permite que el ScrollView se expanda de forma elástica
  },
  internalContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingBottom: 24,
    justifyContent: 'space-between', // Mantiene los botones abajo si hay espacio de sobra
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 40,
    marginBottom: 16,
  },
  botonHamburguesa: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  contenedorTextosHeader: {
    marginLeft: 12,
  },
  titulo: {
    fontSize: Theme.typography.fontSizeMain,
    fontWeight: '900',
    color: Theme.colors.text,
    letterSpacing: 1,
  },
  subtituloHeader: {
    fontSize: 14,
    color: Theme.colors.textMuted,
  },
  formularioContainer: {
    backgroundColor: Theme.colors.surface,
    borderRadius: Theme.roundness.large,
    padding: 16,
    marginBottom: 12,
  },
  seccionTitulo: {
    fontSize: 14,
    fontWeight: '800',
    color: Theme.colors.primary,
    letterSpacing: 1.5,
    marginBottom: 16,
  },
  filaInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  columnaInput: {
    width: '48%',
  },
  label: {
    fontSize: Theme.typography.fontSizeLabel,
    color: '#E5E5EA',
    fontWeight: '600',
    marginBottom: 6,
  },
  input: {
    backgroundColor: Theme.colors.surfaceVariant,
    color: Theme.colors.text,
    height: 54,
    borderRadius: Theme.roundness.small,
    paddingHorizontal: 12,
    fontSize: Theme.typography.fontSizeMain,
    fontWeight: '600',
  },
  cardResultados: {
    backgroundColor: Theme.colors.surfaceVariant,
    borderRadius: Theme.roundness.large,
    padding: 16,
    borderWidth: 1,
    borderColor: Theme.colors.border,
  },
  tituloResultados: {
    fontSize: 14,
    fontWeight: '800',
    color: Theme.colors.success,
    letterSpacing: 1.5,
    marginBottom: 12,
    textAlign: 'center',
  },
  grillaResultados: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  itemResultado: {
    width: '48%',
    backgroundColor: '#1C1C1E', // Puedes dejarlo fijo o crear un token si se repite mucho
    padding: 12,
    borderRadius: Theme.roundness.small,
    marginBottom: 8,
    alignItems: 'center',
  },
  textoRes: {
    fontSize: Theme.typography.fontSizeLabel,
    fontWeight: '700',
    color: Theme.colors.text,
  },
  contenedorBotones: {
    width: '100%',
    marginTop: 'auto',
  },
  boton: {
    height: 56,
    borderRadius: Theme.roundness.medium,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  botonCalcular: {
    backgroundColor: Theme.colors.primary,
  },
  botonLimpiar: {
    backgroundColor: Theme.colors.surfaceVariant,
    borderWidth: 1,
    borderColor: '#48484A',
  },
  textoBoton: {
    color: Theme.colors.textDark,
    fontSize: Theme.typography.fontSizeMain,
    fontWeight: '800',
    letterSpacing: 1,
  },
  textoBotonLimpiar: {
    color: Theme.colors.textMuted,
    fontSize: Theme.typography.fontSizeLabel,
    fontWeight: '700',
  }
});