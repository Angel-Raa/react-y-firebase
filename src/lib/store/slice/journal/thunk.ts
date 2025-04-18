import { doc, collection, setDoc } from "firebase/firestore/lite";
import { db } from "../../../firebase/firebaseConfig";

export const startNewNote = () => {
    return async(dispatch, getState) => {
        //console.log(getState());
        const {uid} = getState().auth;

        
      // uid
      console.info("Start New Notes.....");
      
      const newNotes = {
        title:'',
        body:'',
        date:new Date().getTime()
      }

      const newDoc = doc(collection(db, `${uid}/journal/notes`))
      const docResponse =await setDoc(newDoc, newNotes);
      console.log({newDoc, docResponse});
      



    }
}