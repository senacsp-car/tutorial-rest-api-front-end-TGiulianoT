import axios from "axios";
import { useEffect, useState } from "react";

export type Item = {
    id?: number;
    nome: string;
    descricao:string;
}
    export default function HomeScreen( ) {
        const [itens, setItens] = useState<Item[]>([]);
        const [nome, setNome]= useState<string>();
        const [descricao, setDescricao] = useState<string>();

        useEffect(function () {
            axios.get(`http://10.60.46.43:4000/api/itens`)
            .then(function (response) {
                setItens(response.data);
            })
            .catch(function (error) {
                alert(error);
                
            });
        }, []);

        function botaoSalvarClicado() {

            if ((nome !== undefined) && (descricao !== undefined)) {
                const item: Item = {
                    nome,
                    descricao
                }
                // TODO recarregar a tela.
                axios.post('http://10.60.46.43:4000/api/itens', item)
                .then(function () {
                    alert('INSERIDO')
                })
                .catch(function (error) {
                    alert(error);
                });
            }
        }



        return (
            <div>
                <h1>Home</h1>
                <ul>
                    {itens.map(function (item) {
                        return <li>{item.nome}</li>
                    })}
                    
                </ul>
                <div>
                    <input placeholder= 'Nome' onChange={function (e) {setNome (e.target.value)}} 
                    />
                    <input placeholder='Descricao' onChange={function (e) {setDescricao (e.target.value)}}/>
                <button onClick={botaoSalvarClicado }>Salvar</button>
                <button>Adicionar um novo</button>
                </div>
            </div>
        );
    }