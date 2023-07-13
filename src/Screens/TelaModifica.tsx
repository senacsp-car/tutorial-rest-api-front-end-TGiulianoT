import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Item } from "./HomeScreen";

export default function TelaModifica () {
    function deleta () {
        
    }

    function UseEffect2() {
        axios.get<Item>(`http://10.60.46.43:4000/api/itens/${id}`)
        .then(function (response) {
            alert(200);
            if (response.status === 200 ) {
                setNome(response.data.nome);
            } else {
                alert('Erro de Conexão');
            }
        })
    }

    const [nome, setNome] = useState('');
    const {id} = useParams();

    useEffect(UseEffect2); 

    
    
    return (
        <div>
            <h1>Dados do Usuário</h1>
            <h3></h3>
            <p>{id}</p>
           <input value={nome} placeholder="Nome"/>
           <input placeholder="Descrição"></input>
            <button>Alterar</button>
            <button>Deletar</button>
        </div>
    )
}

function setItens() {
    throw new Error("Function not implemented.");
}
