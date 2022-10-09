import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Loader from "./components/loader/loader";

import Routes from "./routes";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
