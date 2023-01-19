import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import Error from './pages/Error/Error';

import NavBar from './components/NavBar/NavBar';


function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        {/* <Route path='*' element={<h1>Esto es un ErRoR!!!</h1>} /> */}
        <Route path='*' element={<Error />} />
        <Route path='/' element={<ItemListContainer />} />
        <Route path='item' element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>  


    // <div className="App">

      // <NavBar />            
    //   <ItemListContainer greeting="Hola, Esto Es el ItemListContainer"/>
    
    // </div>
  );
}

export default App;
