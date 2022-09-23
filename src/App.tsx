import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import { Carrinho } from './components/Carrinho';
import { Header } from './components/Header/Index';
import { ItemAll } from './components/ItemAll/Index';
import { ModalEndereço } from './components/ModalEndereço/Index';
import { ModalItem } from './components/ModalItem/Index';
import { Pedidos } from './components/Pedidos/Index';
import { SeatchArea } from './components/SearchArea/Index';
import { Usuario } from './components/Usuario/Index';

function App() {
  return (
    <div>
      <BrowserRouter>
      <ModalItem />
      <ModalEndereço />
      <SeatchArea />
      <Header/>
        <Routes>
          <Route path="/" element={<ItemAll />} />
          <Route path="pedidos" element={<Pedidos />} />
          <Route path="usuario" element={<Usuario />} />
        </Routes>
        <Carrinho />
      </BrowserRouter>
    </div>
  )
}

export default App;
