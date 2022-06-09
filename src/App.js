import logo from './logo.svg';
import {Link} from "react-router-dom";
import './App.css';


function App() {
  return (
    <div className="App">
     <Link to="/Detalles">Detalles</Link>
     <Link to="/Detalles2">Detalles2</Link>
    </div>
  );
}

export default App;
