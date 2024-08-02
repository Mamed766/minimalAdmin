import React from "react";
import Layout from "./featured/Layout/Layout.featured";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routers } from "./routes";
import { QueryClient, QueryClientProvider } from "react-query";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Layout>
          <Routes>
            {routers &&
              routers.map((router, index) => (
                <Route path={router.path} element={router.element} />
              ))}
          </Routes>
        </Layout>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
