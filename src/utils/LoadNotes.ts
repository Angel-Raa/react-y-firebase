import { db } from "../lib/firebase/firebaseConfig";
import { getDocs, collection, FirestoreError } from "firebase/firestore/lite";

export interface Notes {
  id: string;
  title: string;
  body: string;
  date: string;
  // Agrega otros campos según tu modelo de datos
}

/**
 * Carga las notas de un usuario desde Firestore
 * @param uid Identificador único del usuario
 * @returns Promesa que resuelve con un array de notas
 * @throws Error si el UID no existe o hay problemas al cargar las notas
 */
export const loadNotes = async (uid: string): Promise<Notes[]> => {
  // Validación temprana con mensaje más descriptivo
  if (!uid) {
    throw new Error("El UID del usuario es requerido");
  }

  try {
    // Referencia a la colección de notas
    const notesCollection = collection(db, `${uid}/journal/notes`);

    // Obtener documentos
    const querySnapshot = await getDocs(notesCollection);

    console.log({ querySnapshot });

    // Mapear documentos a array de notas de forma más eficiente
    const notes: Notes[] = querySnapshot.docs.map(
      (doc) =>
        ({
          ...doc.data(),
        } as Notes)
    );

    console.log({ notes });

    return notes;
  } catch (error) {
    // Mejor manejo de errores con tipo específico
    const firestoreError = error as FirestoreError;
    console.error("Error al cargar notas:", {
      code: firestoreError.code,
      message: firestoreError.message,
    });

    // Lanzar error más específico según el caso
    throw new Error(
      `No se pudieron cargar las notas: ${firestoreError.message}`
    );
  }
};
