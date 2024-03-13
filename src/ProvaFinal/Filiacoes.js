import React, { useState, useEffect } from 'react';
import api from "./api"

export default function Filiacoes() {

    const [filiacoes, setFiliacoes] = useState(null);

    useEffect(() => {
        api.get('/9/filiacoes')
            .then((response) => setFiliacoes(response.data.FiliacaoParlamentar))
            .catch((err) => {
                console.error("ops! ocorreu um erro: " + err);
            });
    }, []);

    const obterTela = () => {
        if (filiacoes === null)
            return ''

        const { Filiacao } = filiacoes.Parlamentar.Filiacoes;

        return (
            <div>
                <h2>Filiações</h2>
                <div className="filiacoes">
                    {
                        Filiacao.map((item, index) => (
                            <div key={index} className="servico">
                                <p>Filiação: {item.DataFiliacao}</p>
                                <p>Desfiliação: {item.DataDesfiliacao}</p>
                                <p>Partido: {item.Partido.CodigoPartido} - {item.Partido.NomePartido} - {item.Partido.SiglaPartido}</p>
                                <br /><br />
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }

    return (
        <div className="Filiacoes">

            {obterTela()}
        </div>
    )
}