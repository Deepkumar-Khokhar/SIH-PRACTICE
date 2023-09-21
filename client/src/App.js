import "./App.css";
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GPS from "./pages/GPS";
import AuthState from "./context/Auth/AuthState.js";

function App() {
  return (
    <>
      <div className="App">
        <AuthState>
          <Routers>
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route exact path="/gps" element={<GPS />} />
            </Routes>
          </Routers>
        </AuthState>
      </div>
    </>
  );
}

export default App;
