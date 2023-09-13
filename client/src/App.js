import './App.css';
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';


function App() {
  return ( 
    <>
      <div className="App">
        <Routers>
          <Routes>
            <Route exact path="/" element={<HomePage/>} />
            
          </Routes>
        </Routers>
      </div>
    </>
  );
}

export default App;
