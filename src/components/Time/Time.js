import {CardPeople} from '../CardPeople/CardPeople';
import './Time.css'
import hexToRgba from 'hex-to-rgba';


export const Time = (props) => {

    const handleColor = (event) => {
        props.onColorChange(event.target.value, props.id)
    }

    return (
        (props.colaboradores.length > 0) &&
        <section style={{backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(props.color, '0.4')}}
                 className="time">
            <input value={props.color} onChange={handleColor} type='color' className='input-color'/>
            <h3 style={{borderColor: props.color}}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map((colaborador, indice) => {
                    return <CardPeople key={colaborador.nome} backgroundColor={props.color}
                                       nome={colaborador.nome} cargo={colaborador.cargo} img={colaborador.imagem}
                                       id={colaborador.id} onDelete={props.onDelete}/>
                })}

            </div>
        </section>
    );
}