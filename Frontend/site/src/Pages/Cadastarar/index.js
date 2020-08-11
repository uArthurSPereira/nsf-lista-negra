import React, { useState } from 'react';
import './cadastrar.css';
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

            <div className="div-title">
                <h2 className="cadastrar-title">Cadastrar</h2>
                <h2 className="cadastrar-title">na</h2>
                <h2 className="cadastrar-title">Lista Negra</h2>
            </div>

            <div className="text-box">
                <input type="text" 
                       placeholder="Nome"
                       value={nome}
                       onChange={e => setNome(e.target.value)}                    
                />
            </div>

            <div className="text-box">
                <input type="text"
                       placeholder="Motivo"
                       value={motivo}
                       onChange={e => setMotivo(e.target.value)}
                />
            </div>

            <div className="botao-cadastrar">
                <button onClick={salvarClick}>Cadastrar</button>
            </div>

            <ToastContainer />
        </div>
    )
}