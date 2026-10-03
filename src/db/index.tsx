import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseconfig";

const collectionName = "notes";

export async function addNote(note: string) {
  try {
    const docRef = await addDoc(collection(db, collectionName), {
      note: note,
      date: new Date().toISOString(),
    });
    return docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export async function getAllNotes() {
  try {
    const response = await getDocs(collection(db, collectionName));
    const notes = response.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return notes;
  } catch (e) {
    console.error("Error get All Notes: ", e);
  }
}
