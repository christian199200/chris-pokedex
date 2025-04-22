import { useEffect, useState } from 'react';
import './styles.css';
import { Link } from 'react-router-dom'


function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [page, setPage] = useState(0); // Each page = 20 Pokémon
  const limit = 20;

  const getTypeColor = (type) => {
    const colors = {
      normal: '#D9D9D9',
      fire: '#FFB685',
      water: '#85C1FF',
      grass: '#A0E7A0',
      electric: '#FFF275',
      ice: '#B8FFFF',
      fighting: '#FF8A8A',
      poison: '#D8B0FF',
      ground: '#F4D8A6',
      flying: '#D6E6FF',
      psychic: '#FFA3D1',
      bug: '#C4E769',
      rock: '#D1C097',
      ghost: '#C2B8F4',
      dark: '#A4A4A4',
      dragon: '#BCA2F7',
      steel: '#B0D4D8',
      fairy: '#FFD6E7'
    };
    return colors[type] || '#D9F0FF'; // default light blue
  };
  
  

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${page * limit}`);
      const data = await res.json();

      const detailedPokemon = await Promise.all(
        data.results.map(async (pokemon) => {
          const res = await fetch(pokemon.url);
          return await res.json();
        })
      );

      setPokemonList(detailedPokemon);
    };

    fetchData();
  }, [page]);

  return (
    <div className='container'>
      <h1>Chris Pokédex App</h1>
      import { Link } from 'react-router-dom';
...
<h1>Chris Pokédex App</h1>
<Link to="/about" style={{ marginBottom: '20px', display: 'inline-block' }}>About</Link>



      <div style={{ marginBottom: '20px' }}>
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
          disabled={page === 0}
          style={{ marginRight: '10px' }}
        >
          Previous
        </button>
        <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
      </div>

      <ul style={{ listStyle: 'none', padding: 0 }}>
      {pokemonList.map((pokemon, index) => (
  <li
  key={index}
  className="pokemon-card"
  style={{ '--card-bg': getTypeColor(pokemon.types[0].type.name) }}
>
  <div>
    <div style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>#{pokemon.id}</div>
    <h2 style={{
      margin: 0,
      textTransform: 'capitalize',
      fontSize: '1.6rem'
    }}>
      <a
        href={`#/pokemon/${pokemon.name}`}
        style={{
          color: 'black',
          textDecoration: 'none',
          fontWeight: 'bold'
        }}
      >
        {pokemon.name}
      </a>
    </h2>
  </div>
  <img
    src={pokemon.sprites.front_default}
    alt={pokemon.name}
    style={{ width: '60px', height: '60px' }}
  />
</li>

))}
      </ul>
    </div>
  );
}

export default App;
