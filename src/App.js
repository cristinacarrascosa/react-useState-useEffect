import logo from './logo.svg';
import './App.css';
import { PurebasComponent } from './components/PurebasComponent';
import { AjaxComponent } from './components/AjaxComponent';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
       <PurebasComponent/>

       <AjaxComponent/>
      </header>
    </div>
  );
}

export default App;
