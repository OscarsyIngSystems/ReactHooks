import { useState } from "react"

const useCounter = (valorInicial: number = 1) => {

    const [counter, setCounter] = useState(valorInicial)


    const incremented = () => {
        setCounter(counter + 1)
    }
    const decremented = () => {
        if (counter <= 1) return;
        setCounter(counter - 1)
    }

    return {

        //props
        counter,

        //methods
        incremented,
        decremented

    }
}

export default useCounter