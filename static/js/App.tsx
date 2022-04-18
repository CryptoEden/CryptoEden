/* eslint-disable react-hooks/exhaustive-deps */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Web3Provider } from "@ethersproject/providers";
import {  Web3ReactProvider } from "@web3-react/core";

import "./App.css";
import { Home } from "./pages/Home";

function App() {
  
  return (
    <BrowserRouter>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Web3ReactProvider>
    </BrowserRouter>
  );
}

function getLibrary(provider: any) {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

export default App;
