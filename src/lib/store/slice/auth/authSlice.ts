import { createSlice } from "@reduxjs/toolkit";

export enum AuthStatus {
	Checking = "Checking",
	NotAuthenticated = "Not-authenticated",
	Authenticated = "Authenticated",
}

interface Auth {
	status: AuthStatus;
	uid?: string;
	email: string;
	displayName?: string;
	photoURL?: string;
	error?: string;
}
const authInitialState: Auth = {
	status: AuthStatus.Checking,
	uid: "",
	email: "",
	displayName: "",
	photoURL: "",
	error: "",
};
export const authSlice = createSlice({
	name: "auth",
	initialState: authInitialState,
	reducers: {
		login: (state, { payload }) => {
			state.status = AuthStatus.Authenticated;
			state.uid = payload.uid;
			state.email = payload.email;
			state.displayName = payload.displayName;
			state.photoURL = payload.photoURL;
			state.error = "";
		},
		logout: (state) => {
			state.status = AuthStatus.NotAuthenticated;
			state.uid = "";
			state.email = "";
			state.photoURL = "";
			state.displayName = "";
		},
		checkingCredentials: (state) => {
			state.status = AuthStatus.Checking;
			state.email = "";
		},
	},
});

export const { login, logout, checkingCredentials } = authSlice.actions;
