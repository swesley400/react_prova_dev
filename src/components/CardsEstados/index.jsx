
import "./style.scss"


export default function CardEstados(props){
    return(
        <div className="cardCandidatos">
        <label className="nome">{props.nome}</label>
        <div className="uf">{props.uf}</div>
        <div>{props.populacao}</div>
        </div>

    )
}