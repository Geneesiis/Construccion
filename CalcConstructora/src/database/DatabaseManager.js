import * as SQLite from 'expo-sqlite';

const dbName = 'historial_constructora.db';
let dbInstance = null;

const getDB = async () => {
  if (!dbInstance) {
    dbInstance = await SQLite.openDatabaseAsync(dbName);
  }
  return dbInstance;
};

// 1. Ahora devuelve un booleano para avisarle a la app que terminó
export const inicializarBaseDeDatos = async () => {
  try {
    const db = await getDB();
    
    await db.execAsync(`
      PRAGMA journal_mode = WAL;
      CREATE TABLE IF NOT EXISTS calculos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        fecha TEXT NOT NULL,
        largo REAL NOT NULL,
        ancho REAL NOT NULL,
        espesor REAL NOT NULL,
        volumen REAL NOT NULL,
        cemento INTEGER NOT NULL,
        arena REAL NOT NULL,
        gravilla REAL NOT NULL
      );
    `);
    console.log('Base de datos lista.');
    return true; // Éxito
  } catch (error) {
    console.error('Error al inicializar la base de datos:', error);
    return false; // Falló
  }
};

export const guardarCalculo = async (datos) => {
  try {
    const db = await getDB();
    if (!db) return;
    const fechaActual = new Date().toLocaleDateString();

    await db.runAsync(
      `INSERT INTO calculos (fecha, largo, ancho, espesor, volumen, cemento, arena, gravilla) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?);`,
      [
        fechaActual,
        parseFloat(datos.largo),
        parseFloat(datos.ancho),
        parseFloat(datos.espesor),
        parseFloat(datos.volumen),
        parseInt(datos.cemento),
        parseFloat(datos.arena),
        parseFloat(datos.gravilla)
      ]
    );
  } catch (error) {
    console.error('Error al guardar el cálculo:', error);
  }
};

export const obtenerHistorial = async () => {
  try {
    const db = await getDB();
    if (!db) return [];
    return await db.getAllAsync('SELECT * FROM calculos ORDER BY id DESC;');
  } catch (error) {
    console.error('Error al obtener el historial:', error);
    return [];
  }
};

export const borrarTodoElHistorial = async () => {
  try {
    const db = await getDB();
    if (!db) return;
    await db.runAsync('DELETE FROM calculos;');
  } catch (error) {
    console.error('Error al vaciar el historial:', error);
  }
};