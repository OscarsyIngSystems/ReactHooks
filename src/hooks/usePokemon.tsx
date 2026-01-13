import { useEffect, useState } from "react"

interface Pokemon {
    id: number,
    name: string,
    imgURL: string
}

interface Props {
    id: number
}

const usePokemon = ({ id }: Props) => {
    const [pokemon, setPokemon] = useState<Pokemon | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    const getPokemonById = async (id: number) => {
        setIsLoading(true)

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await response.json()

        setPokemon({
            id: id,
            name: data.name,
            imgURL: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
        })

        setIsLoading(false)
    }





    useEffect(() => {
        getPokemonById(id)
    }, [id])


    return {

        //props
        pokemon,
        isLoading,

        //methods
        formatId: id.toString().padStart(3, '0')
    }
}

export default usePokemon