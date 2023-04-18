import { CardPeople } from '../CardPeople/CardPeople';
import './Time.css'

export const Time = (props) => {
        return (
            (props.colaboradores.length > 0) && <section style={{backgroundColor:props.secondaryColor}} className="time">
                <h3 style={{borderColor:props.primaryColor}}>{props.nome}</h3>
                <div className='colaboradores'>
                    {props.colaboradores.map(colaborador => <CardPeople key={colaborador.nome} backgroundColor={props.primaryColor} nome={colaborador.nome} cargo={colaborador.cargo} img={colaborador.imagem}/>)}

                </div>
            </section>
        );
}