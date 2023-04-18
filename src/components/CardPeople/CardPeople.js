import './CardPeople.css'

export const CardPeople = (props) => {
    return (
        <div className="colaborador">
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