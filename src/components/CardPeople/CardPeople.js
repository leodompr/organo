import { AiFillCloseCircle } from "react-icons/ai";
import './CardPeople.css'

export const CardPeople = (props) => {
    return (
        <div className="colaborador">
            <AiFillCloseCircle size={25} onClick={() => props.onDelete(props.id)} className='delete'/>
            <div className='cabecalho' style={{backgroundColor:props.backgroundColor}}>
                <img src={props.img} alt={props.nome}/>
            </div>
            <div className='rodape'>
                <h4>{props.nome}</h4>
                <h5>{props.cargo}</h5>
            </div>

        </div>
    )
}