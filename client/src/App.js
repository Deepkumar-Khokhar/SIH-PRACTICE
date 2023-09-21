import "./App.css";
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GPS from "./components/GPS";
import AuthState from "./context/Auth/AuthState.js";
import GPSPage from "./pages/GPSPage";

function App() {
  return (
    <>
      <div className="App">
        <AuthState>
          <Routers>
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route exact path="/gps" element={<GPSPage />} />
            </Routes>
            
          </Routers>
        </AuthState>
      </div>
    </>
  );
}

export default App;
