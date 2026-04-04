import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Login from "./pages/Login";
import NoPage from "./pages/NoPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";  
export default function App()
{
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="login" element={<Login />} />
      </Route>
      <Route path="*" element={<NoPage />} />
    </Routes>
    </BrowserRouter>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);