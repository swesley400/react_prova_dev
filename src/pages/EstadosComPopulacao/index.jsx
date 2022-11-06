import { useEffect, useState } from "react"

import "./style.scss"

import CardEstados from "../../components/CardsEstados"

export default function EstadosComPopulacao(){

    const [dadosApi, setDadosApi] = useState([]) 
    const host = "http://localhost:3000/estadoepopulacao"

    useEffect(()=>{
        fetch(host)
        .then(response => response.json())
        .then( data => setDadosApi(data))
        .catch(err => console.log("Houve um erro", err))
    },[])

    return(
        <div className="container">
            <h2>Estados com populacao</h2>
            {dadosApi.map( item => <CardEstados key={item.uf} nome={item.nome} uf={item.uf} populacao={item.populacao}></CardEstados>)}
        </div>
    )
}