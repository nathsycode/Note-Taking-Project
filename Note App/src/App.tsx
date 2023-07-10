import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/new" element={<h1>New</h1>} />
    </Routes>
  );
}

export default App;
