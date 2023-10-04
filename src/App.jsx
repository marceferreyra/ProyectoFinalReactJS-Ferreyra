import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavBar from './components/navBar/navBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  

  return (
    <>
    <NavBar />
    <ItemListContainer greeting= "Bienvenidos a nuestra web!"/>
    </>
    
  )
}

export default App
