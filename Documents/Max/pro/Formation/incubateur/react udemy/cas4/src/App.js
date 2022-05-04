import './App.css';
import {Routes,Route} from "react-router-dom"
import Home from './conponents/Home';
import Contact from './conponents/Contact';
import NotFounds from './conponents/NotFounds';
function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Contact" element={<Contact />}/>
          <Route path="*" element={<NotFounds/>}/>
           </Routes>       
    </div>
  );
}

export default App;
