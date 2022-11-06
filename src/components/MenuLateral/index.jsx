import { useState } from "react";

import { Outlet, Link } from "react-router-dom";

import "./style.scss"


export default function Layout (){

  
  const [uf, setUf] = useState()
  
  function atualiza(){
    if(uf == undefined){
      alert("preencha uf primeiro")
    }
    else{
    document.getElementById("procuraPorUF").href = `/populacao/${uf}`
    set(uf)
    console.log(uf)
    }
   
  }


  console.log(uf)
  return (
    <>
    <div   className="container-out">
      <div className="Layout">
      <nav>
        <ul>
          <li>
            <Link to="/">Estados</Link>
          </li>
          <li>
          <input  className="input"name = "uf"placeholder="Digite o UF Do Estado " onChange={e => setUf(e.target.value)}/>
            <button><Link htmlForm="uf"  id="procuraPorUF" onClick={atualiza} >Busque Populacao por UF</Link></button>
          </li>
          <li>
            <Link to="/populacaoeestado">Estados com populacao </Link>
          </li>
        </ul>
        </nav>
      </div>

     
    </div>
    
     <div className="conteudo">
     <Outlet />
   </div>
   </>
  )
};

