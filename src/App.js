import React from "react";
import Layout from "./featured/Layout/Layout.featured";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routers } from "./routes";

const App = () => {
  return (
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
  );
};

export default App;
