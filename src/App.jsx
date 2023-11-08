import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartView from './components/CartView/CartView.jsx';
import { CartProvider } from './components/CartContext/CartContext.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <>              
      <BrowserRouter>
        <CartProvider> 
          <NavBar /> 
          <Routes>
            <Route path="/" element={<ItemListContainer />} />          
            <Route path="category/:id" element={<ItemListContainer />} />
            <Route path="item/:id" element={<ItemDetailContainer />} />
            <Route path="cart" element={<CartView />} /> 
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
