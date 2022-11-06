import { useEffect, useState } from "react"

import "./style.scss"

import CardEstados from "../../components/CardsEstados"


export default function Estados(){


    const url = "http://localhost:3000/estados"
    const [dados, setDados] = useState([]) 


    useEffect(() => {
    
      
    
        fetch(url)
        .then(response => response.json())
        .then( data => setDados(data))
        .catch(err => console.log("Houve um erro", err))
        
        console.log("Teste de rendizacao01")
    
      
      }, []);

    

    return(
        <div className="container">
            <div>
                <h1>Estados</h1>
            </div>

            {
                dados.map( item => <CardEstados key={item.uf} nome = {item.nome} uf= {item.uf}></CardEstados>)
            }
        </div>
    )
}
