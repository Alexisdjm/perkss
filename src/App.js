import Home from "./components/home";
import PreRegister from "./components/Preregister/preregister";
import Secondary from './components/secondary';
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import './App.css';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/qr' element={<PreRegister/>}/>
          <Route path='/usuarios' element={<Secondary/>}/>
          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
