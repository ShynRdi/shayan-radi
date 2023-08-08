import React from "react";
import "./App.scss";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import NoPage from "./pages/NoPage";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Experiences from "./pages/Experiences";
import Interests from "./pages/Interests";
import Skills from "./pages/Skills";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/skills" element={<Experiences />} />
          <Route path="interests" element={<Interests />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
