import './css/App.css';
import { Routes, Route} from 'react-router-dom';
import Homepage from './pagine/Homepage';
import DefaultLayout from './layouts/DefaultLayout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<DefaultLayout/>}>
          <Route path='' element={<Homepage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
