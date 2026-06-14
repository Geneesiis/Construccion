# CalcConstructora

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white)
![Android](https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white)

## Descripción

**CalcConstructora** es una aplicación móvil nativa desarrollada con **React Native y Expo**, diseñada específicamente para contratistas, maestros de obra y profesionales de la construcción que necesitan cubicar materiales para radieres en terreno de manera rápida, precisa y **sin necesidad de conexión a internet (Offline-First)**.

A diferencia de las calculadoras teóricas de laboratorio, el motor matemático de esta app está calibrado con **coeficientes de volumen suelto comercial** (validados en faenas reales) para evitar que falte material debido al esponjamiento, humedad de los áridos o desniveles en el terreno.

## Integrantes

- **[Genesis Flores]**

---

## Funcionalidades Principales

### 1. Cubicación Real de Radieres
- ✅ Ingreso de dimensiones (largo, ancho y espesor) en metros
- ✅ Cálculo instantáneo de materiales exactos
- ✅ Resultados basados en proporciones de compra real (no teóricas)

### 2. Dosificación Comercial Adaptada
- ✅ Cálculo en **sacos de cemento de 25 kg** (estándar comercial chileno)
- ✅ Coeficientes calibrados por esponjamiento y pérdidas en terreno
- ✅ Aproximación al entero superior para evitar faltantes

### 3. Historial Local con SQLite
- ✅ Guardado automático de cada cálculo con fecha
- ✅ Revisión del historial en cualquier momento
- ✅ Opción de vaciar el historial completo
- ✅ Funciona completamente sin internet

### 4. Diseño para Terreno
- ✅ Interfaz Dark Mode optimizada para uso en exteriores
- ✅ Descargo de responsabilidad integrado en la pantalla de resultados
- ✅ Diseño moderno, fluido e intuitivo

---

## Algoritmo de Calibración Comercial

Para el cálculo de **1 m³** de mezcla en terreno, la aplicación utiliza las siguientes proporciones de compra real (aproximando siempre al entero superior en sacos):

| Material     | Cantidad por m³ | Unidad Comercial       | Criterio de Terreno                                           |
| :----------- | :-------------- | :--------------------- | :------------------------------------------------------------ |
| **Cemento**  | 12.5 sacos      | Sacos de 25 kg         | Resistencia estándar para radieres habitacionales.            |
| **Arena**    | 1.20 m³         | Metro cúbico suelto    | Incrementado por contracción al mojar y pérdidas.             |
| **Gravilla** | 1.00 m³         | Metro cúbico suelto    | Esqueleto granular estructural.                               |

---

## Tecnologías Utilizadas

- **Framework:** React Native con Expo SDK
- **Base de Datos:** Expo-SQLite (operaciones asíncronas)
- **Compilación:** EAS Build (`.apk` para pruebas / `.aab` para producción)
- **Arquitectura:** Offline-First (sin dependencia de servidor)

---

## Instalación y Desarrollo Local

### Prerrequisitos

- [Node.js](https://nodejs.org/) instalado
- Expo CLI y EAS CLI instalados globalmente

```bash
npm install -g expo-cli
npm install -g eas-cli
```

### Pasos

**1. Clonar el repositorio:**
```bash
git clone https://github.com/Geneesiis/CalcConstructora.git
cd CalcConstructora
```

**2. Instalar dependencias:**
```bash
npm install
```

**3. Iniciar el servidor de desarrollo:**
```bash
npx expo start
```

Escanea el código QR desde tu celular con la app **Expo Go** para probarla en vivo.

---

## Compilación con EAS (Android)

Para generar las aplicaciones e instalarlas de forma independiente:

**Instalador directo (.apk) para pruebas:**
```bash
eas build --platform android --profile preview
```

**Paquete para Google Play Store (.aab):**
```bash
eas build --platform android --profile production
```

---

## ⚠️ Nota Legal / Disclaimer

La aplicación incluye el siguiente mensaje de advertencia en la pantalla de resultados para mitigar responsabilidades por errores en la faena:

> ⚠️ **ADVERTENCIA IMPORTANTE:** Esta aplicación es solo una guía para ayudarte a cubicar. Los cálculos pueden fallar porque en terreno influye la humedad, los niveles y el desecho de material. El uso de estos números es bajo tu propio riesgo y **NO nos hacemos responsables** si falta o sobra material en la obra. ¡Revisa y mide bien antes de comprar!

---

Desarrollado con ❤️ para el mundo de la construcción.
