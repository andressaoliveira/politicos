import React, { useState, useEffect } from 'react';
import api from "./api"

export default function Senador() {

    const [senador, setSenador] = useState(null);

    useEffect(() => {
        api.get('/9')
            .then((response) => setSenador(response.data.DetalheParlamentar))
            .catch((err) => {
                console.error("ops! ocorreu um erro: " + err);
            });
    }, []);

    const obterTela = () => {

        if (senador === null)
            return ''

        const {
            DataFalecimento,
            DataNascimento,
            Naturalidade,
            UfNaturalidade
        } = senador.Parlamentar.DadosBasicosParlamentar;

        const {
            CodigoParlamentar,
            NomeCompletoParlamentar,
            NomeParlamentar,
            UrlFotoParlamentar,
            UrlPaginaParlamentar
        } = senador.Parlamentar.IdentificacaoParlamentar;

        const { Servico } = senador.Parlamentar.OutrasInformacoes;

        return (
            <div className="Senador">
                <h2>Senador</h2>
                <div>
                    <p><b>IdentificacaoParlamentar:</b></p>
                    <p>{CodigoParlamentar} - {NomeParlamentar} </p>
                    <p>Nome: {NomeCompletoParlamentar} </p>
                    <img src={UrlFotoParlamentar} alt={NomeParlamentar} />
                    <p><a href={UrlPaginaParlamentar}>Página</a></p>
                </div>
                <br /><br />
                <div>
                    <p><b>Dados Basicos Parlamentar:</b></p>
                    <p>Falecimento: {DataFalecimento}</p>
                    <p>Nascimento: {DataNascimento}</p>
                    <p>Naturalidade: {Naturalidade} - {UfNaturalidade}</p>
                </div>
                <br /><br /><br />
                <div>
                    <b>Outras Informacoes:</b>
                    <div className="servicos">
                        {
                            Servico.map((item, index) => (
                                <div key={index} className="servico">
                                    <p>Serviço: {item.NomeServico}</p>
                                    <p>Descrição: {item.DescricaoServico}</p>
                                    <p><a href={item.UrlServico}>Link</a></p>
                                    <br /><br />
                                </div>

                            ))
                        }
                    </div>
                </div>
            </div >
        )
    }

    return (
        <div className="Senador">

            {obterTela()}
        </div>
    )
}