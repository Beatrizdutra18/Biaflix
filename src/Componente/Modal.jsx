import estilos from './Modal.module.css';

export function Modal({movie, onClose}){
    if(!movie){
        return null;
    }

    console.log("Modal Renderizado");
    console.log(movie);


    return(
        <div>
            <div className={estilos.modalBackGroud}>
                <button onClick={onClose}>Fechar</button>
                <h2>{movie.title}</h2>
                <p>{`Popularidade ${movie.popularity}`}</p>
                <p>{`Data de lançamento ${movie.release_date}`}</p>
                <p>{`Quantidade de Votos: ${movie.vote_count}`}</p>
                <p>{`Sinopse: ${movie.overview}`}</p>

            </div>
        </div>
    )
}