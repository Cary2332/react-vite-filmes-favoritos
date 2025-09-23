import React, { useState } from 'react'

export default function Header({ onAdd }) {
  const [title, setTitle] = useState('')
  const [watched, setWatched] = useState(false) // novo estado

  const handleSubmit = (e) => {
    e.preventDefault()
    onAdd(title, watched)
    setTitle('')
    setWatched(false)
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 8 }}>
      <input
        type="text"
        placeholder="Adicionar filme..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {/* Select para escolher se já foi assistido */}
      <select
        value={watched ? 'watched' : 'unwatched'}
        onChange={(e) => setWatched(e.target.value === 'watched')}
        style={{ borderRadius: '12px', padding: '8px', border: '1px solid #ffb6c1' }}
      >
        <option value="unwatched">Não assistido</option>
        <option value="watched">Assistido</option>
      </select>

      <button type="submit">➕ Adicionar</button>
    </form>
  )
}
