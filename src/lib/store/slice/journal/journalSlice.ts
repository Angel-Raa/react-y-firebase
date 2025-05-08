import { createSlice } from "@reduxjs/toolkit";
import { Notes } from "../../../../utils/LoadNotes";
interface Active {
  id: string;
  title?: string;
  body?: string;
  date?: Date | string;
  imageUrls?: string[];
}
interface Note {
  isSaving: boolean;
  message: string;
  notes: Notes[];
  active: Active | undefined;
}

const journalInitialState: Note = {
  isSaving: false,
  message: "",
  notes: [],
  active: undefined,
};
export const journalSice = createSlice({
  name: "journal",
  initialState: journalInitialState,
  reducers: {
    addNewNotes: (state, action) => {
      state.notes.push(action.payload);
      state.isSaving = false;
    },
    setActiveNote: (state, action) => {
      state.active = action.payload;
    },
    setNotes: (state, action) => {
      state.notes = action.payload;
    },
    setSaving: (state, action) => {},
    updateNotes: (state, action) => {},
    deleteByIdNotes: (state, action) => {},
    savingNewNotes: (state) => {
      state.isSaving = true;
    },
    //creatingNewNotes :(state, action) => {}
  },
});

export const {
  addNewNotes,
  setActiveNote,
  setNotes,
  updateNotes,
  deleteByIdNotes,
  setSaving,
  savingNewNotes,
} = journalSice.actions;
