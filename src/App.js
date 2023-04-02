
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Headers from './components/Header.jsx' ;
import Home from './components/Home.jsx' ;



import "./styles/App.scss";
import "./styles/Header.scss";
import "./styles/Home.scss";


function App() {
  return (
   
    <Router>
     <Headers />
        <Routes>
           <Route path="/" element={<Home />} />
        </Routes>
    </Router>
  );
}

export default App;
