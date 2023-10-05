import { Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./pages/landing/landing";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
