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

const [escondebotao, setescondebotao] = useState<boolean>(false);
const [mostrabotao, setmostrabotao] = useState<boolean>(true);
const [itens, setItens] = useState<Item[]>([]);
const [nome, setNome]= useState<string>();
const [descricao, setDescricao] = useState<string>()

//function escondebotao() {
//setescondebotao (false)    
//}

function botaoNovoItemClicado() {
setmostrabotao(false)
}

function botaoInserirClicado() {
    axios.post('http://10.60.46.43:4000/api/itens',
    {
        nome:nome,
        descricao:descricao  
    })
    setmostrabotao (true)
}


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
        axios.get('http://10.60.46.43:4000/api/itens')
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
                    return <li><a href={`/modifica/${item.id}`}>{item.id} → {item.nome} - {item.descricao}</a></li>
            })}
        </ul>

        
        {(!mostrabotao) && (
            <>
                <input onChange={function(e) {setNome(e.target.value)}} type="text" />
                <input onChange={function(e) {setDescricao(e.target.value)}}  type="text" />
                <button onClick={botaoInserirClicado}>Inserir Item</button>
            </>
            
        )}

        {(mostrabotao) && (
            <button onClick={botaoNovoItemClicado}>Novo Item</button>
        )}

    </div>
    )
}

export default Home;

