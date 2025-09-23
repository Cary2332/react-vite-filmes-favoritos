import React, { useState } from 'react';
import './index.css';

export default function App() {
  const [movies, setMovies] = useState([]);
  const [newMovie, setNewMovie] = useState('');
  const [filter, setFilter] = useState('all'); // all | watched | unwatched

  const addMovie = () => {
    if (!newMovie.trim()) return;
    setMovies([...movies, { name: newMovie.trim(), watched: false }]);
    setNewMovie('');
  };

  const toggleWatched = (index) => {
    const updated = [...movies];
    updated[index].watched = !updated[index].watched;
    setMovies(updated);
  };

  const removeMovie = (index) => {
    const updated = [...movies];
    updated.splice(index, 1);
    setMovies(updated);
  };

  const filteredMovies = movies.filter((movie) => {
    if (filter === 'all') return true;
    if (filter === 'watched') return movie.watched;
    if (filter === 'unwatched') return !movie.watched;
  });

  return (
    <div>
      <header>
        <h1>Filmes Favoritos</h1>
      </header>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          addMovie();
        }}
      >
        <input
          type="text"
          placeholder="Digite o nome do filme..."
          value={newMovie}
          onChange={(e) => setNewMovie(e.target.value)}
        />
        <button type="submit">Adicionar</button>
      </form>

      {/* Filtros */}
      <div className="filters">
        <button
          className={filter === 'all' ? 'active' : ''}
          onClick={() => setFilter('all')}
        >
          Todos
        </button>
        <button
          className={filter === 'unwatched' ? 'active' : ''}
          onClick={() => setFilter('unwatched')}
        >
          Não assistidos
        </button>
        <button
          className={filter === 'watched' ? 'active' : ''}
          onClick={() => setFilter('watched')}
        >
          Assistidos
        </button>
      </div>

      <ul>
        {filteredMovies.length === 0 && (
          <li className="empty-list">Nenhum filme </li>
        )}

        {filteredMovies.map((movie, index) => (
          <li key={index}>
            <span className={movie.watched ? 'watched' : ''}>{movie.name}</span>
            <div style={{ display: 'flex', gap: '6px' }}>
              <button onClick={() => toggleWatched(index)}>
                {movie.watched ? 'Desmarcar' : 'Assistido'}
              </button>
              <button onClick={() => removeMovie(index)}>Remover</button>
            </div>
          </li>
        ))}
      </ul>

      <footer>
        &copy; 2025 Filmes Favoritos
      </footer>
    </div>
  );
}
