//import logo from './logo.svg';
//import './App.css';

import AppForm from './components/AppForm';
import C01componente from './components/C01componente';
import MatrizOperaciones from './components/P7matrizOperaciones';


function App() {
  return (
    <div style={{background:"green",
    width:"350px",
    padding:"10px"}}>
      <AppForm/>
      <i class="large material-icons">account_box</i>
      <MatrizOperaciones/>
    </div>
  );
}

export default App;