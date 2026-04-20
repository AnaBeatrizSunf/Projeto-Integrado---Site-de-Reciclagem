import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import SelectType from "./pages/SelectType";
import Users from "./pages/Users";
import Ongs from "./pages/Ongs";

function App() {
  return (

    /* main*/
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/admin" element={<SelectType />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/ongs" element={<Ongs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;