import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App.tsx";
import "./index.css";
import store, { persistor } from "./store/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ToastContainer
          autoClose={750}
          limit={10}
          position="top-center"
          pauseOnHover={false}
          className={" flex flex-col items-center"}
        />
      </PersistGate>
      <App />
    </Provider>
  </StrictMode>
);
