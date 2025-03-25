import { singInWithGoogle } from "../../../../firebase";
import { checkingCredentials } from "../authSlice";

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
			type: "auth/checkingCredentials";
		}) => void,
	) => {
		dispatch(checkingCredentials());
		const re = singInWithGoogle();
	};
};
