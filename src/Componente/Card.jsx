import estilos from './Card.module.css';

export function Card({ movie, onOpenModal }) {
  return (
    <div className={estilos.conteiner}>
      <h3>{movie.name || movie.title}</h3>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.name || movie.title}
        onClick={() => onOpenModal(movie)}
      />
      <p>{movie.overview}</p>
    </div>
  );
}
