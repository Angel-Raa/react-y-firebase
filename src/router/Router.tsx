import { Route, Routes } from "react-router";

import { AuthRouter } from "../auth";
import { Journal } from "../page";

export const Router = () => {
	return (
		<>
			<Routes>
				{/** Login Y Sign */}
				<Route path="/auth/*" element={<AuthRouter />} />

				{/** Journal */}
				<Route path="/" element={<Journal />} />
			</Routes>
		</>
	);
};
