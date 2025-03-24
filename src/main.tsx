import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

import { BrowserRouter } from "react-router";
import { ThemeProviderWrapper } from "./theme/ThemeProviderWrapper";
import { Provider } from "react-redux";
import { store } from "./lib/store/store";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProviderWrapper>
          <App />
        </ThemeProviderWrapper>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
