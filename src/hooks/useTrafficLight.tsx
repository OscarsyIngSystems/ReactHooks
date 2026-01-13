import { useEffect, useState } from "react";


const colors = {
    red: 'bg-red-500 animate-pulse',
    green: 'bg-green-500 animate-pulse',
    yellow: 'bg-yellow-500 animate-pulse'

}


// type TrafficLightColor = 'red' | 'green' | 'yellow';  este es una forma de hacerlo
type TrafficLightColor = keyof typeof colors; // esta es mejor ya que si cambia el objeto de colors se ajusta el tipado




const useTrafficLight = () => {




    const [light, setLight] = useState<TrafficLightColor>('red')

    const [countDown, setCountDown] = useState(5)

    // countDown Effect
    useEffect(() => {

        if (countDown === 0) {

            return
        }
        const intervalId = setInterval(() => {


            setCountDown(prev => prev - 1)
        }, 1000);


        return () => {


            clearInterval(intervalId)

        }

    }, [countDown])


    // light Effect
    useEffect(() => {

        if (countDown > 0) return

        setCountDown(5)




        if (light == 'red') {
            setLight('green')
            return
        }
        if (light == 'green') {
            setLight('yellow')
            return

        }
        if (light == 'yellow') {
            setLight('red')
            return

        }






    }, [countDown, light])



    return {
        //props
        countDown,
        light,
        colors,

        //computed
        porcentage: (countDown / 5) * 100

        //methods

    }


}

export default useTrafficLight