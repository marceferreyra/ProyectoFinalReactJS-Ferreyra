import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavBar from './components/navBar/navBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <>              
      <BrowserRouter>
      <NavBar /> 
      <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="products" element={<ItemListContainer />} />
          <Route path="products/:categoria" element={<ItemListContainer />} />
          <Route path="item/:id" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>

    </>


  );
}

export default App;
