
import './App.css';
import { Routes , Route} from "react-router-dom"
import Home from './Components/Home';
import Blog from './Components/Blog';
function App() {
  return (
    <div className="App">
      <Routes>
      <Route  path='/' Component={Home}/>
      <Route  path='/blog' Component={Blog}/>
      </Routes>
    </div>
  );
}

export default App;
