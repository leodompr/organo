import Banner from "./components/Banner/Banner";
import Form from "./components/Form";
import {useState} from "react";
import Time from "./components/Time";
import { v4 as uuidv4 } from 'uuid';
import Footer from "./components/Footer";


function App() {


    const [times, setTimes]  = useState([
        {id: uuidv4(), nome: 'Programação', color: '#D9F7E9'},
        {id: uuidv4(), nome: 'Front End', color: '#E8F8FF'},
        {id: uuidv4(), nome: 'Data Science', color: '#F0F8E2'},
        {id: uuidv4(), nome: 'Devops',  color: '#FDE7E8'},
        {id: uuidv4(), nome: 'UX e Design',  color: '#FAE9F5'},
        {id: uuidv4(), nome: 'Mobile',   color: '#FFF5D9'},
        {id: uuidv4(), nome: 'Inovação e Gestão', color: '#FFEEDF'},

    ])

    const colorChange = (cor, id) => {
        setTimes(times.map(time => time.id === id ? {...time, color: cor} : time))
    }

    const deleteColaborador = (id) => {
        setColaborador(colaboradores.filter(colaborador => colaborador.id !== id))

    }


    const [colaboradores, setColaborador] = useState([]);

    const onFormSend = (colaborador) => {
        setColaborador([...colaboradores, colaborador])
    }

    return (
        <div className="App">
            <Banner/>
            <Form times={times.map(time => time.nome)} onFormSend={colaborador => onFormSend(colaborador)}/>
            {times.map(time => <Time key={time.nome}
                                     nome={time.nome}
                                     primaryColor={time.color}
                                     color={time.color}
                                     id={time.id}
                                     colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
                                     onDelete={deleteColaborador}
                                     onColorChange={colorChange}

                />
            )}
            <Footer/>
        </div>
    );
}

export default App;
