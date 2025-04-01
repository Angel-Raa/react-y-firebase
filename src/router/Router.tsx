import { Navigate, Route, Routes } from "react-router";

import { AuthRouter } from "../auth";
import { useAuth } from "../hook/useAuth";
import { AuthStatus } from "../lib/store";
import { Journal } from "../page";
import { Checking } from "../ui/components";

export const Router = () => {
	const { status } = useAuth();
	if (status === AuthStatus.Checking) return <Checking />;

	return (
		<>
			<Routes>
				{status === AuthStatus.Authenticated ? (
					<>
						<Route path="/" element={<Journal />} />
						<Route path="/journal" element={<Journal />} />
						<Route path="/*" element={<Navigate to="/journal" />} />
					</>
				) : (
					<>
						<Route path="/auth/*" element={<AuthRouter />} />
						<Route path="/*" element={<Navigate to="/auth/login" />} />
					</>
				)}
			</Routes>
		</>
	);
};
