
import './App.css';
import Header from './Components/Header/Header';
import Reactwork from './Components/Reactwork/Reactwork';
import Shop from './Components/Shop/Shop';
import Usestatework from './Components/Usestatework/Usestatework';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      <Reactwork></Reactwork>
      <Usestatework></Usestatework>
    </div>
  );
}

export default App;
