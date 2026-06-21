// src/theme/theme.js
export const Theme = {
  colors: {
    background: '#121212',  // Fondo oscuro puro anti-reflejo
    surface: '#1E1E1E',     // Gris oscuro para contenedores/cards
    surfaceVariant: '#2C2C2E', // Gris un poco más claro para inputs/tarjetas secundarias
    primary: '#FF9F0A',     // Naranja técnico de alta visibilidad
    success: '#30D158',     // Verde éxito para resultados
    error: '#FF453A',       // Rojo brillante para alertas/borrar
    text: '#FFFFFF',        // Blanco puro para lectura sin esfuerzo
    textMuted: '#A1A1A6',   // Gris claro para subtítulos/labels
    textDark: '#000000',    // Negro para botones claros
    border: '#3A3A3C',
  },
  roundness: {
    small: 8,
    medium: 10,
    large: 12,
  },
  typography: {
    fontSizeLabel: 16,
    fontSizeMain: 18,
    fontSizeHeading: 34,
  }
};