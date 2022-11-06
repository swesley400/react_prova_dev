import "./style.scss"

import { useParams } from "react-router-dom"

import CardEstados from "../../components/CardsEstados"
import { useEffect } from "react"
import { useState } from "react"

export default function EstadoPorUF(){

    

    const [dadosApi, setDadosApi] = useState([])


    const [ufAtualiza, setUfAtualiza] = useState()

    const {uf} =  useParams()

    
    const host = `http://localhost:3000/populacao/${uf}`
    

    useEffect(()=>{
        

        fetch(host)
        .then(response => response.json())
        .then(data => setDadosApi(data))
        .catch(err => console.log(err))
       
        
    },[])
    

    return(
        <div className="container">
            <div><h1>Populacao</h1></div>
            <div className="CarEstados">
            {dadosApi.map(item => <CardEstados key={item.uf} uf={item.uf} populacao={item.populacao}></CardEstados>)}
            </div>
        </div>
    )

}