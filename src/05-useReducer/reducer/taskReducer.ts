
import * as z from "zod";

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

interface TaskState {
    todos: Todo[],
    length: number,
    completed: number,
    pending: number
}

export type TaskAction =
    | { type: 'ADD_TODO', payload: string }
    | { type: 'TOGGLE_TODO', payload: number }
    | { type: 'DELETE_TODO', payload: number }


const TodoSchema = z.object({
    id: z.number(),
    text: z.string(),
    completed: z.boolean()
})

const TaskStateSchema = z.object({
    todos: z.array(TodoSchema),
    length: z.number(),
    completed: z.number(),
    pending: z.number()
})



export const getTaskInitialState = (): TaskState => {

    const localStorageState = localStorage.getItem('task-state')

    if (!localStorageState) {
        return {
            todos: [],
            completed: 0,
            length: 0,
            pending: 0
        }
    }


    //Validar mediante zod

    const result = TaskStateSchema.safeParse(JSON.parse(localStorageState))

    if (result.error) {
        console.log(result.error);
        return {
            todos: [],
            completed: 0,
            length: 0,
            pending: 0
        }

    }

    return result.data

}


export const taskReducer = (state: TaskState, action: TaskAction): TaskState => {


    switch (action.type) {
        case 'ADD_TODO': {
            const newTodo: Todo = {
                id: Date.now(),
                text: action.payload,
                completed: false
            }

            return {
                ...state,
                todos: [...state.todos, newTodo],
                length: [...state.todos, newTodo].length,
                pending: state.pending + 1
            }
        }

        case 'TOGGLE_TODO':

            const upadteTodos = state.todos.map((todo) => {
                if (todo.id === action.payload) {
                    return { ...todo, completed: !todo.completed }

                }
                return todo


            });

            return {
                ...state,
                todos: upadteTodos,

                completed: upadteTodos.filter((todo) => todo.completed).length,
                pending: upadteTodos.filter((todo) => !todo.completed).length,
            }
        case 'DELETE_TODO': {
            const currentTodo = state.todos.filter((todo) => todo.id !== action.payload)

            return {
                ...state,
                todos: currentTodo,
                length: currentTodo.length,
                completed: currentTodo.filter((todo) => todo.completed).length,
                pending: currentTodo.filter((todo) => !todo.completed).length,


            }
        }



        default:
            return state
    }


}

