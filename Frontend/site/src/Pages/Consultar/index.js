import React, { useState, useRef } from 'react';
import ListaNegraApi from '../../Services/ListaNegraApi'
import LoadingBar from 'react-top-loading-bar'

const api = new ListaNegraApi();

export default function Consultar() {

    const ref = useRef(null);

    const [registros, setRegistros] = useState([])

    const consultarClick = async () => {
        ref.current.continuousStart()

        const lns = await api.consultar()
        setRegistros([...lns])

        ref.current.complete()
    }
    
    return (
        <div className="consultar">

            <LoadingBar 
                color='#f11946' 
                ref={ref} 
            />

            <h1>Consultar na Lista Negra</h1>

            <div>
                <button onClick={consultarClick}>Consultar</button>
            </div>

            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Motivo</th>
                            <th>Incluisão</th>
                        </tr>
                    </thead>

                    <tbody>
                        {registros.map(item => 
                            <tr key={item.id}>
                                <th>#{item.id}</th>
                                <td>{item.nome}</td>
                                <td>{item.motivo}</td>
                                <td>{new Date(item.inclusao + 'Z' ).toLocaleString() }</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

        </div>
    )
}