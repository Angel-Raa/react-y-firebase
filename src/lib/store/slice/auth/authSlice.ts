import { createSlice } from "@reduxjs/toolkit";

enum AuthStatus {
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
		login: () => {},
		logout: () => {},
		checkingCredentials: () => {},
	},
});

export const { login, logout, checkingCredentials } = authSlice.actions;
