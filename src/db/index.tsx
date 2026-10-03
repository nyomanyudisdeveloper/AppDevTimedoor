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
    return response;
  } catch (e) {
    console.error("Error get All Notes: ", e);
  }
}
