import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";
import { store } from "./lib/store/store";
import { ThemeProviderWrapper } from "./theme/ThemeProviderWrapper";

const rootElement = document.getElementById("root");

if (!rootElement) {
	throw new Error("Failed to find the root element");
}

createRoot(rootElement).render(
	<StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<ThemeProviderWrapper>
					<App />
				</ThemeProviderWrapper>
			</BrowserRouter>
		</Provider>
	</StrictMode>,
);
