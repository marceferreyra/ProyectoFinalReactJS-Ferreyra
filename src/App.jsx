import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavBar from './components/navBar/navBar'
import BandaselasticasContainer from './components/ItemListContainer/BandaselasticasContainer';
import ColchonetasContainer from './components/ItemListContainer/ColchonetasContainer';
import MancuernasContainer from './components/ItemListContainer/MancuernasContainer';
import TobillerasContainer from './components/ItemListContainer/TobillerasConatiner';
import SogasContainer from './components/ItemListContainer/SogasContainer';
import GuantesContainer from './components/ItemListContainer/GuantesContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';  


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/bandas-elasticas" element={<BandaselasticasContainer />} />
        <Route path="/colchonetas" element={<ColchonetasContainer />} />
        <Route path="/mancuernas" element={<MancuernasContainer />} />
        <Route path="/tobilleras" element={<TobillerasContainer />} />
        <Route path="/sogas" element={<SogasContainer />} />
        <Route path="/guantes" element={<GuantesContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
