import React, { useState, useEffect } from 'react';
import api from "./api"

export default function Mandatos() {

    const [mandatos, setMandatos] = useState(null);

    useEffect(() => {
        api.get('/120/mandatos')
            .then((response) => setMandatos(response.data.MandatoParlamentar))
            .catch((err) => {
                console.error("ops! ocorreu um erro: " + err);
            });
    }, []);

    const obterTela = () => {
        if (mandatos === null)
            return ''

        const { Mandato } = mandatos.Parlamentar.Mandatos;

        return (
            <div>
                <h2>Mandatos</h2>
                <div className="mandatos">
                    {
                        Mandato.map((item, index) => (
                            <div key={index} className="servico">
                                <p>Paticipação: {item.DescricaoParticipacao}</p>
                                <p>Codigo: {item.CodigoMandato}</p>
                                <p>Estado: {item.UfParlamentar}</p>
                                <br /><br />
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }

    return (
        <div className="Mandatos">

            {obterTela()}
        </div>
    )
}