import './css/App.css';
import { Routes, Route} from 'react-router-dom';
import Homepage from './pagine/Homepage';
import DefaultLayout from './layouts/DefaultLayout';
import Form from './pagine/Form';
import Stagioni from './pagine/Stagioni';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<DefaultLayout/>}>
          <Route path='' element={<Homepage/>}/>
          <Route path='stagioni' element={<Stagioni/>}/>
          <Route path='contatti' element={<Form/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
