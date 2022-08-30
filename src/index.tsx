import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./style/main.sass";
import App from "./App";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./services/queryClient";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </QueryClientProvider>
);
