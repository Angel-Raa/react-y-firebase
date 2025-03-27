import { Navigate, Route, Routes } from "react-router";

import { AuthRouter } from "../auth";
import { useAuth } from "../hook/useAuth";
import { AuthStatus } from "../lib/store";
import { Journal } from "../page";

export const Router = () => {
	const { status } = useAuth();

	return (
		<>
			<Routes>
				{status === AuthStatus.Authenticated ? (
					<Route path="/" element={<Journal />} />
				) : (
					<Route path="/auth/*" element={<AuthRouter />} />
				)}
				<Route path="/*" element={<Navigate to={"/auth/login"} />} />
			</Routes>
		</>
	);
};
