import { doc, collection, setDoc } from "firebase/firestore/lite";
import { db } from "../../../firebase/firebaseConfig";
import { addNewNotes, savingNewNotes, setActiveNote } from "./journalSlice";
import { loadNotes } from "../../../../utils/LoadNotes";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    //console.log(getState());
    const { uid } = getState().auth;
    dispatch(savingNewNotes());

    // uid
    console.info("Start New Notes.....");

    interface Note {
      id: string;
      title: string;
      body: string;
      date: number;
    }

    const newNotes: Note = {
      id: "",
      title: "",
      body: "",
      date: new Date().getTime(),
    };

    const newDoc = doc(collection(db, `${uid}/journal/notes`));
    const docResponse = await setDoc(newDoc, newNotes);
    console.log({ newDoc, docResponse });
    newNotes.id = newDoc.id;
    dispatch(addNewNotes(newNotes));
    dispatch(setActiveNote(newNotes));
  };
};

export const startLoadingNotes = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    console.log("UID recibido:", uid);
    if (!uid) {
      console.error("UID no disponible");
    }
    try {
      await loadNotes(uid);
    } catch (error) {
      console.error("Error en startLoadingNotes:", error);
    }
  };
};
