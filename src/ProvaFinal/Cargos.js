import React, { useState, useEffect } from 'react';
import api from "./api"

export default function Cargos() {

    const [cargos, setCargos] = useState(null);

    useEffect(() => {
        api.get('/9/cargos')
            .then((response) => setCargos(response.data.CargoParlamentar))
            .catch((err) => {
                console.error("ops! ocorreu um erro: " + err);
            });
    }, []);

    const obterTela = () => {
        if (cargos === null)
            return ''

        const { Cargo } = cargos.Parlamentar.Cargos;

        return (
            <div>
                <h2>Cargos</h2>
                <div className="cargos">
                    {
                        Cargo.map((item, index) => (
                            <div key={index} className="servico">
                                <p>Cargo: {item.CodigoCargo} - {item.DataFim}</p>
                                <p>Descrição: {item.DescricaoCargo}</p>
                                <p>Início: {item.DataInicio}</p>
                                <br /><br />
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }

    return (
        <div className="Cargos">

            {obterTela()}
        </div>
    )
}