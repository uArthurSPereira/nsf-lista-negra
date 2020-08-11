import React, { useState } from 'react';
import ListaNegraApi from '../../Services/ListaNegraApi'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const api = new ListaNegraApi();

export default function Cadastrar() {

    const [nome, setNome] = useState('')
    const [motivo, setMotivo] = useState('')

    const salvarClick = async () => {
        const resp  = await
            api.cadastar({
                nome: nome,
                motivo: motivo
            }); 

        toast('Cadastrado na Lista negra')
    }
    
    return (
        <div className="cadastrar">

            <h1>Cadastrar na Lista Negra</h1>

            <div>
                <label>Nome:</label>
                <input type="text" 
                       value={nome}
                       onChange={e => setNome(e.target.value)}                    
                />
            </div>

            <div>
                <label>Motivo:</label>
                <input type="text"
                       value={motivo}
                       onChange={e => setMotivo(e.target.value)}
                />
            </div>

            <div>
                <button onClick={salvarClick}>Cadastrar</button>
            </div>

            <ToastContainer />
        </div>
    )
}