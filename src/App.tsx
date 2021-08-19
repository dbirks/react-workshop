import { Home } from "./Home";
import { BrowserRouter, Route } from "react-router-dom";
import { About } from "./About";
import { FoodForm } from "./FoodForm";
import { Nav } from "./shared/Nav";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

export function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <BrowserRouter>
        <Nav />

        <Route path="/about">
          <About />
        </Route>

        <Route path="/food" exact>
          <FoodForm />
        </Route>

        <Route path="/food/:foodId">
          <FoodForm />
        </Route>

        <Route path="/" exact>
          <Home />
        </Route>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
