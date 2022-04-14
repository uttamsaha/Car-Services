import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/'></Route>
        <Route path='/about'></Route>
      </Routes>
    </div>
  );
}

export default App;
