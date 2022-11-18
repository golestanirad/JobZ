import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

//// components
import App from "./App";

/// styles
import "normalize.css";
import "./index.css";

/// store
import { store } from "./store/store";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App tab="home" />
  </Provider>
);
