import { type } from "os";
import { useEffect, useState } from "react";
import axios from "axios";
import { link } from "fs";
import HomeScreen from "./HomeScreen";


type Item = {
    id?: number;
    nome?: string;
    descricao?: string;
    itens?:string;
}


function Home(props : Item) {
    const [itens, setItens] = useState<Item[]>([]);
const [nome, setNome]= useState<string>();
const [descricao, setDescricao] = useState<string>()

function botaoSalvarClicado() {

    if ((nome !== undefined) && (descricao !== undefined)) {
        const item: Item = {
            nome,
            descricao,
              
        }

        // TODO recarregar a tela.
        axios.post('http://10.60.46.43:4000/api/itens', item)
        .then(function () {
            alert('INSERIDO')
        })
        .catch(function (error) {
            alert(error);
        });
    }}

    useEffect(function (){
        axios.get('http://localhost:4000/api/itens')
        .then(function (response) {
            setItens(response.data);
        })
        .catch(function (error) {
            alert(error);  
        });
    },[]);


    // const [nome, setnome] = useState <string>();
    // const [descricao, setdescricao] = useState <string>();
    return(
    <div>
    <h1>Inicio</h1>
    <ul>
        {itens.map(function(item){
                return <li>{item.id} → {item.nome} - {item.descricao}</li>
        })}
    </ul>
    <input type="text" />
        <input type="text" />
        <button>Inserir Item</button>
    </div>
    )
}

export default Home;

