import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import NoPage from "./pages/NoPage";
import ViewDetails from "./pages/ViewDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";  
export default function App()
{
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="viewdetails" element={<ViewDetails />} />
      </Route>
      <Route path="*" element={<NoPage />} />
    </Routes>
    </BrowserRouter>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);