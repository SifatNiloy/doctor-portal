import logo from "./logo.svg";
import "./App.css";
import { router } from "./Routes/Routes";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="max-w-[1440px] mx-auto text-accent">
        <RouterProvider router={router} />     
      </div>
    </div>
  );
}

export default App;
