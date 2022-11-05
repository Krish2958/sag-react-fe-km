import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages";
import "./app.css";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
