import logo from "./logo.svg";
import "./App.css";
import Navbar from "./pages/Shared/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./pages/Shared/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
