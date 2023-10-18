import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavBar from './components/navBar/navBar'

import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<ItemListContainer />} />          
        </Routes>
      </BrowserRouter>
      <ItemListContainer />
    </>


  );
}

export default App;
