import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
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
