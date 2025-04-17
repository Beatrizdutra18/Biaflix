import estilos from './BarraNavegacao.module.css';
import { Link } from 'react-router-dom';

export function BarraNavegacao() {
    return (
        <nav className={estilos.conteiner}>
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
        </nav>
    );
}
