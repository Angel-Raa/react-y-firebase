import { ThemeProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import type { ReactNode } from "react";
import { theme } from "./theme";

export const ThemeProviderWrapper = ({ children }: { children: ReactNode }) => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />

			{children}
		</ThemeProvider>
	);
};
