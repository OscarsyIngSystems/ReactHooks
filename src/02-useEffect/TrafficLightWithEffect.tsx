import { useEffect, useState } from "react";





const colors = {
    red: 'bg-red-500 animate-pulse',
    green: 'bg-green-500 animate-pulse',
    yellow: 'bg-yellow-500 animate-pulse'

}

// type TrafficLightColor = 'red' | 'green' | 'yellow';  este es una forma de hacerlo
type TrafficLightColor = keyof typeof colors; // esta es mejor ya que si cambia el objeto de colors se ajusta el tipado

export const TrafficLightWithEffect = () => {


    const [light, setLight] = useState<TrafficLightColor>('red')

    const [countDown, setCountDown] = useState(5)


    useEffect(() => {
        console.log({ countDown });

        setInterval(() => {
            setCountDown(prev => prev - 1)
        });
    }, [countDown])





    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
            <div className="flex flex-col items-center space-y-8">

                <h1 className="text-white text-3xl font-thin">Semaforo con useEffect</h1>
                <h2 className=" text-white text-xl" >10</h2>

                <div className={`w-32 h-32 ${light == 'red' ? colors.red : 'bg-gray-500'} rounded-full`}></div>
                <div className={`w-32 h-32 ${light == 'yellow' ? colors.yellow : 'bg-gray-500'} rounded-full`}></div>
                <div className={`w-32 h-32 ${light == 'green' ? colors.green : 'bg-gray-500'} rounded-full`}></div>


            </div>
        </div>
    );
};