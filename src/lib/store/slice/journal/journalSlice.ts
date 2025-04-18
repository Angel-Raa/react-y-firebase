import { createSlice } from "@reduxjs/toolkit";
interface Active {
  id: string;
  title: string;
  body: string;
  date: Date;
  imageUrls: string[];
}
interface Note {
  isSaving: boolean;
  message: string;
  notes: string[];
  active: Active | undefined;
}

const journalInitialState: Note = {
  isSaving: true,
  message: "",
  notes: [],
  active: undefined,
};
export const journalSice = createSlice({
  name: "journal",
  initialState: journalInitialState,
  reducers: {
    addNewNotes: (state, action) => {},
    setActiveNote: (state, action) => {},
    setNotes: (state, action) => {},
    setSaving: (state, action) => {},
    updateNotes: (state, action) => {},
    deleteByIdNotes: (state, action) => {},
  },
});

export const {addNewNotes, setActiveNote, setNotes, updateNotes,deleteByIdNotes, setSaving} = journalSice.actions;
