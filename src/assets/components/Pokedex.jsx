import{ useState, useEffect } from "react"

export default function Pokedex(){
const [ id, setId ] = useState(1); //iniciando id com valor 1
const [ pokemon, setPokemon ] = useState(null); //iniciando dado pokemon com valor nulo

const fetchData = async () =>{
    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        setPokemon(data);
    } catch(error){
        console.error("Erro: ",error);
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

    return(
        <div className="pokedex">
            <h1>Pokedex</h1>
            {pokemon && (
                <div className="pokemon">
                <p>{pokemon.name}</p>
                <img  className="pokeimg" src={pokemon.sprites.other.showdown.front_default} alt={pokemon.name}/>{/* .sprites.other.home.front_default  */}
                
                    <div className="button">
                        <button onClick={backPokemon}>Anterior</button>
                        <button onClick={nextPokemon}>Próximo</button>
                    </div>
                </div>
            )
            }
        </div>
    )
}