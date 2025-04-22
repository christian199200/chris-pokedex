import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="container">
      <h1>About This Pokédex</h1>
      <p>This Pokédex app was built using React and Vite. It fetches data from the PokéAPI and lets you browse Pokémon by pages, view details, and more!</p>
      <p>Created by: <strong>Christian</strong></p>
      <Link to="/">← Back to Pokédex</Link>
    </div>
  )
}
