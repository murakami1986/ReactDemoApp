import { Router } from "react-router";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Top } from "./components/pages/Top";
import { Users } from "./components/pages/Users";
import { DefaultLayout } from "./components/templates/DefaultLayout";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route element={<DefaultLayout />}> */}
        <Route exact path="/" element={<Top />} />
        {/* </Route> */}
        <Route path="/users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}
