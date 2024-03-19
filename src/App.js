import logo from './logo.svg';
import './App.css';
import { Copmponent } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-white-500">

      {/* route == /login <Login />*/}
      {/* route == /Register <Register /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>

      {/* <Login />
      <Register/> */}
    </div>
  );
}

export default App;