import './App.css';
import { Route,Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Edit from './Pages/Edit';

function App() {
  return (
    <div className="App">
      <h1>Meme Generator App</h1>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/edit' element={<Edit />} />
      </Routes>
    </div>
  );
} 

export default App;
