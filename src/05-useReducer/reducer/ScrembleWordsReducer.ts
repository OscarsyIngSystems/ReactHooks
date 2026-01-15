// Primer paso definir el estado, normalmente son los useState que ya tienes

export interface ScrembleWordsState {
    currentWord: string;
    errorCounter: number;
    guess: string;
    isGameOver: boolean;
    maxAllowErrors: number;
    maxSkips: number;
    points: number;
    scrambledWord: string;
    skipCounter: number;
    words: string[];
    totalWords: number
}


//Segundo paso es definir las acciones, aunque no sabes todas pero sabes que si tendras acciones

export type ScrembleWordsActions =
    | { type: 'No_se_que_acciones_son1' }
    | { type: 'No_se_que_acciones_son2' }
    | { type: 'No_se_que_acciones_son3' }

// se definen variables necesarias

const GAME_WORDS = [
    'REACT',
    'JAVASCRIPT',
    'TYPESCRIPT',
    'HTML',
    'ANGULAR',
    'SOLID',
    'NODE',
    'VUEJS',
    'SVELTE',
    'EXPRESS',
    'MONGODB',
    'POSTGRES',
    'DOCKER',
    'KUBERNETES',
    'WEBPACK',
    'VITE',
    'TAILWIND',
];


// Se definen funciones que seran necesarias


// Esta función mezcla el arreglo para que siempre sea aleatorio
const shuffleArray = (array: string[]) => {
    return array.sort(() => Math.random() - 0.5);
};

// Esta función mezcla las letras de la palabra
const scrambleWord = (word: string = '') => {
    return word
        .split('')
        .sort(() => Math.random() - 0.5)
        .join('');
};


// se crea la funcion del estado inicial que debe regresar

export const getInitialState = (): ScrembleWordsState => {

    const shuffledWords = shuffleArray([...GAME_WORDS])

    return {
        currentWord: shuffledWords[0],
        errorCounter: 0,
        guess: '',
        isGameOver: false,
        maxAllowErrors: 3,
        maxSkips: 3,
        points: 0,
        scrambledWord: scrambleWord(shuffledWords[0]),
        skipCounter: 0,
        words: shuffledWords,
        totalWords: shuffledWords.length
    }
}



//Se crea la funcion del reducer que recibira el estado y la accion de los tipos correspondientes

export const scrambledWordsReducer = (state: ScrembleWordsState, action: ScrembleWordsActions) => {



    switch (action.type) {




        default:
            return state
    }


}