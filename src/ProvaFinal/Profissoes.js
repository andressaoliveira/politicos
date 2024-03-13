import React, { useState, useEffect } from 'react';
import api from "./api"

export default function Profissoes() {

    const [profissoes, setProfissoes] = useState(null);

    useEffect(() => {
        api.get('/50/profissao')
            .then((response) => setProfissoes(response.data.ProfissaoParlamentar))
            .catch((err) => {
                console.error("ops! ocorreu um erro: " + err);
            });
    }, []);

    const obterTela = () => {
        if (profissoes === null)
            return ''

        const { Profissao } = profissoes.Parlamentar.Profissoes;

        return (
            <div>
                <h2>Profissões</h2>
                <div className="Profissoes">
                    {
                        Profissao.map((item, index) => (
                            <div key={index} className="servico">
                                <p>Profissão: {item.NomeProfissao}</p>
                                <p>Indicador atividade principal: {item.IndicadorAtividadePrincipal}</p>
                                <br /><br />
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }

    return (
        <div className="Profissoes">

            {obterTela()}
        </div>
    )
}