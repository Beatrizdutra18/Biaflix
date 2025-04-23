import estilos from './Modal.module.css';

export function Modal({ movie, onClose }) {
  if (!movie) return null;

  return (
    <div className={estilos.modalOverlay} onClick={onClose}>
      <div className={estilos.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={estilos.fechar} onClick={onClose}>Fechar</button>
        <h2>{movie.name || movie.title}</h2>
        <p>⭐ Popularidade: {movie.popularity}</p>
        <p>📅 Data de estreia: {movie.first_air_date || movie.release_date}</p>
        <p>🗳️ Votos: {movie.vote_count}</p>
        <p>📝 Sinopse: {movie.overview}</p>
      </div>
    </div>
  );
}
