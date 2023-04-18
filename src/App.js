import Banner from "./components/Banner/Banner";
import EditText from "./components/EditText";
import Form from "./components/Form";
import {useState} from "react";
import Time from "./components/Time";
import time from "./components/Time";


function App() {


    const times = [
        {nome: 'Programação', primaryColor: '#57C278', secondaryColor: '#D9F7E9'},
        {nome: 'Front End', primaryColor: '#82CFFA', secondaryColor: '#E8F8FF'},
        {nome: 'Data Science', primaryColor: '#A6D157', secondaryColor: '#F0F8E2'},
        {nome: 'Devops', primaryColor: '#E06B69', secondaryColor: '#FDE7E8'},
        {nome: 'UX e Design', primaryColor: '#DB6EBF', secondaryColor: '#FAE9F5'},
        {nome: 'Mobile', primaryColor: '#FFBA05', secondaryColor: '#FFF5D9'},
        {nome: 'Inovação e Gestão', primaryColor: '#FF8A29', secondaryColor: '#FFEEDF'},

    ]

    const [colaboradores, setColaborador] = useState([]);

    const onFormSend = (colaborador) => {
        setColaborador([...colaboradores, colaborador])
    }

    return (
        <div className="App">
            <Banner/>
            <Form times={times.map(time=> time.nome)} onFormSend={colaborador=> onFormSend(colaborador)} />
            {times.map(time => <Time key={time.nome}
                                     nome={time.nome}
                                     primaryColor={time.primaryColor}
                                     secondaryColor={time.secondaryColor}
                                     colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}/>)}
        </div>
    );
}

export default App;
