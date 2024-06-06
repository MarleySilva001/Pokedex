import { useState, useEffect } from "react"
import { motion } from 'framer-motion'

export default function Pokedex(visivel) {
    const [id, setId] = useState(1); //iniciando id com valor 1
    const [pokemon, setPokemon] = useState(null); //iniciando dado pokemon com valor nulo

    const fetchData = async () => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const data = await response.json();
            setPokemon(data);
        } catch (error) {
            console.error("Erro: ", error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [id]
    );

    const nextPokemon = () => {
        setId(id + 1)
    }

    const backPokemon = () => {
        setId(id - 1)
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, Y: -50 }}
            transition={{ duration: 1 }}
        >
            {visivel && 
            <div className="pokedex">
            <h1>Pokedex</h1>
            {pokemon && (
                <div className="pokemon">
                    <p className="tiny5-regular">{pokemon.name}</p>
                    <div className="fundopoke">
                        <img className="pokeimg2" src="pokeball.png" alt="pokebola" />
                        <div className="fundopoke2">
                            <img className="pokeimg" src={pokemon.sprites.front_default} alt={pokemon.name} />{/* .sprites.other.home.front_default  */}
                        </div>
                    </div>

                    <div className="button">
                        <button onClick={backPokemon}>Anterior</button>
                        <button onClick={nextPokemon}>Próximo</button>
                    </div>
                </div>
            )
            }
        </div>
            }
        </motion.div>
        
    )
}