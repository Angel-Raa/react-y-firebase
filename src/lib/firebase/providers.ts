import {
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signInWithPopup,
	updateProfile,
} from "firebase/auth";
import { auth } from "./firebaseConfig";

export const googleProvider = new GoogleAuthProvider();
export const singInWithGoogle = async () => {
	try {
		const result = await signInWithPopup(auth, googleProvider);
		const { displayName, email, uid, photoURL } = result.user;
		return {
			ok: true,
			displayName,
			email,
			uid,
			photoURL,
		};
	} catch (error) {
		console.error("Error signing in with Google: ", error);
		return {
			ok: false,
		};
	}
};

export const registerUserWithEmailPassword = async ({
	name,
	email,
	password,
}: {
	name: string;
	email: string;
	password: string;
}) => {
	try {
		const response = await createUserWithEmailAndPassword(
			auth,
			email,
			password,
		);
		const { uid, photoURL } = response.user;
		if (auth.currentUser) {
			await updateProfile(auth.currentUser, {
				displayName: name,
			});
		}

		return {
			ok: true,
			uid,
			photoURL,
			email,
			name,
		};
	} catch (error) {
		console.error("Error signing in with email: ", error);
		return {
			ok: false,
		};
	}
};

export const loginWithEmailAndPassword = async ({
	email,
	password,
}: {
	email: string;
	password: string;
}) => {
	try {
		const r = await signInWithEmailAndPassword(auth, email, password);
		const { photoURL, uid, displayName } = r.user;

		return {
			ok: true,
			uid,
			photoURL,
			name: displayName,
		};
	} catch (error) {
		console.error("Error signing in with email: ", error);
		return {
			ok: false,
		};
	}
};

export const logoutFirebase = async (): Promise<void> => {
	return await auth.signOut();
};
