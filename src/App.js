import "./App.css";
import { AppRouter } from "./router/router"
import Mockman from "mockman-js"
import { ToastContainer } from "react-toastify"

function App() {
  return (
    <div className="App">
      <AppRouter />
      <ToastContainer />
    </div>
  );
}
export default App;
