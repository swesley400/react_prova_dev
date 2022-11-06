import { useState } from 'react'
import reactLogo from './assets/react.svg'

import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import Layout from './components/MenuLateral'
import TodosOsEstados from './pages/Estados'
import EstadosPorUF from './pages/EstadosPorUF'
import EstadosComPopulacao from './pages/EstadosComPopulacao'


function App() {
   return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Layout />}>
          <Route index path='/' element={<TodosOsEstados/>}></Route>
          <Route path='/populacaoeestado' element={<EstadosComPopulacao/>} ></Route>
          <Route path='/populacao'>
          <Route path=':uf' element={<EstadosPorUF  />}></Route></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App
