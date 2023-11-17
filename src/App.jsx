import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import NavBar from './components/navBar/navBar.jsx'
import ItemListContainer from './components/itemListContainer/itemListContainer.jsx';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer.jsx';
import CartView from './components/cartView/cartView.jsx';
import Order from './components/order/order.jsx';
import { CartProvider } from './components/cartContext/cartContext.jsx';
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
            <Route path="/order" element={<Order />} />
          </Routes>
        </CartProvider>
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
