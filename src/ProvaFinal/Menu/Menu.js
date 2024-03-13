import React from 'react';
import { Link } from "react-router-dom";
import './Menu.css';

export default class Menu extends React.Component {
    render() {
        return (
            <div className="menu">
                <Link to="/politicos">Página inicial</Link>
                <Link to="/politicos/Senador">Senador</Link>
                <Link to="/politicos/Cargos">Cargos</Link>
                <Link to="/politicos/Filiacoes">Filiacoes</Link>
                <Link to="/politicos/Mandatos">Mandatos</Link>
                {/* <Link to="/Profissoes">Profissoes</Link> */}
            </div>
        );
    }
}