import "./App.css";
import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/home/home"
function App() {
  return (
    <div>
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
    </div>
  );
}
export default App;
