import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { _routes } from "./routes";

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          {_routes.map((route) => (
            <Route path={route.path} element={route.element} />
          ))}
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
