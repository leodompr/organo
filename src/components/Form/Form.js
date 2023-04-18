import EditText from "../EditText";
import './Form.css'
import DropDown from "../DropDown";
import ButtonHome from "../Button";
import {useState} from "react";

export const Form = (props) => {

    const onSave = (event) => {
        event.preventDefault()
        props.onFormSend({
            nome: nome,
            cargo: cargo,
            imagem: imagem,
            time: time,
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')


    return (
        <section className="form">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <EditText value={nome} onTyped={value => setNome(value)} requerid={true} label={'Nome'}
                          placeholder={'Digite seu nome...'}/>
                <EditText value={cargo} onTyped={value => setCargo(value)} requerid={true} label={'Cargo'}
                          placeholder={'Digite seu cargo...'}/>
                <EditText value={imagem} onTyped={value => setImagem(value)} label={'Imagem'}
                          placeholder={'Digite o endereço da imagem...'}/>
                <DropDown value={time} onSelect={value => setTime(value)} requerid={true} label={'Time'} itens={props.times}/>
                <ButtonHome>
                    Criar Card
                </ButtonHome>
            </form>
        </section>
    );

}