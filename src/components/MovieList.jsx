export default function MovieList({ movies, onToggle, onRemove }) {
  return (
    <ul style={{ padding: 0, marginTop: 12 }}>
      {movies.map((movie) => (
        <li
          key={movie.id}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#ffe6f0',
            padding: '8px 12px',
            borderRadius: 12,
            marginBottom: 8,
            boxShadow: '1px 2px 6px rgba(0,0,0,0.05)'
          }}
        >
          <label style={{ display: 'flex', alignItems: 'center', gap: 8, flex: 1 }}>
            <input
              type="checkbox"
              checked={movie.watched}
              onChange={() => onToggle(movie.id)}
              style={{ width: 18, height: 18, cursor: 'pointer' }}
            />
            <span style={{ textDecoration: movie.watched ? 'line-through' : 'none' }}>
              {movie.title}
            </span>
          </label>
          <button
            onClick={() => onRemove(movie.id)}
            style={{
              border: 'none',
              backgroundColor: '#ff6eb4',
              color: 'white',
              padding: '6px 12px',
              borderRadius: 12,
              cursor: 'pointer'
            }}
          >
            Remover
          </button>
        </li>
      ))}
    </ul>
  )
}
