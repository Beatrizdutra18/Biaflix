import React, { useState } from 'react';
import estilos from './BarraNavegacao.module.css';
import { Link } from 'react-router-dom';

export function BarraNavegacao() {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <nav className={estilos.conteiner}>
            {/* Links de navegação */}
            <div className={estilos.menu}>
                <ul>
                    <li>
                        <Link to='/'>
                            <span className="material-symbols-outlined">home</span>
                            <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/serie'>
                            <span className="material-symbols-outlined">movie</span>
                            <span>Série</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/perfil'>
                            <span className="material-symbols-outlined">person</span>
                            <span>Perfil</span>
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Barra de Pesquisa */}
            <div className={estilos.search}>
                <input
                    type="text"
                    placeholder="Pesquisar..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
            </div>
        </nav>
    );
}
