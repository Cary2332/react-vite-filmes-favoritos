import React from 'react'


export default function MovieItem({ movie, onToggle, onRemove }) {
return (
<li style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 0', borderBottom: '1px solid #eee' }}>
<input type="checkbox" checked={movie.watched} onChange={() => onToggle(movie.id)} />
<span style={{ textDecoration: movie.watched ? 'line-through' : 'none', flex: 1 }}>{movie.title}</span>
<button onClick={() => onRemove(movie.id)}>Remover</button>
</li>
)
}