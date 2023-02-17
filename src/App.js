
import './App.css';
import {Routes, Route} from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import Page from './components/pages/Page';
import Login from './components/pages/Login';
import Profiles from './components/pages/Profiles';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element = {<Page/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/profiles' element = {<Profiles/>}/>
      </Routes>
    </div>
  );
}

export default App;
