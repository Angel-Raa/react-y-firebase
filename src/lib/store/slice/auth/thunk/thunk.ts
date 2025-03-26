import {
	registerUserWithEmailPassword,
	singInWithGoogle,
} from "../../../../firebase";
import { checkingCredentials, login, logout } from "../authSlice";

export const startCheckingAuthentication = ({
	email,
	password,
}: {
	email: string;
	password: string;
}) => {
	return async (
		dispatch: (arg0: {
			payload: undefined;
			type: "auth/checkingCredentials";
		}) => void,
	) => {
		console.log(email, password);

		dispatch(checkingCredentials());
	};
};
export const startGoogleSign = () => {
	return async (
		dispatch: (arg0: {
			payload: undefined;
			type: "auth/checkingCredentials" | "auth/logout" | "auth/login";
		}) => void,
	) => {
		dispatch(checkingCredentials());
		const re = await singInWithGoogle();
		if (!re.ok) dispatch(logout());
		const { displayName, email, photoURL, uid } = re;
		dispatch(
			login({
				uid,
				email,
				displayName,
				photoURL,
			}),
		);
	};
};

export const startCreateUserWithEmailAndPassword = ({
	name,
	email,
	password,
}: {
	name: string;
	email: string;
	password: string;
}) => {
	return async (
		dispatch: (arg0: {
			payload: undefined;
			type: "auth/checkingCredentials";
		}) => void,
	) => {
		dispatch(checkingCredentials());
		const r = await registerUserWithEmailPassword({ name, email, password });
		console.log({ r });
	};
};
