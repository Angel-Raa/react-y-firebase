import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { auth } from "../lib/firebase/firebaseConfig";
import { login, logout } from "../lib/store";
import { startLoadingNotes } from "../lib/store/slice/journal/thunk";

export const useAuth = () => {
	const { status } = useAppSelector((state) => state.auth);
	const dispatch = useAppDispatch();

	useEffect(() => {
		onAuthStateChanged(auth, async (user) => {
			console.log(user);
			if (!user) return dispatch(logout());
			const { uid, email, displayName, photoURL } = user;
			dispatch(
				login({
					uid,
					email,
					displayName,
					photoURL,
				}),
			);
			dispatch(startLoadingNotes());
		});
	}, [dispatch]);
	return {
		status,
	};
};
