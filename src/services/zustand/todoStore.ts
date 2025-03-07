import { create } from "zustand"


interface Task {
    title: string,
    description?: string
    isCompleted: boolean
}

interface TaskStore {
    tasks: Task[],
    addTask: (task: Task) => void,
    removeTask: (taskTitle: string) => void
}


const useTaskStore = create<TaskStore>((set) => ({
    tasks: [],
    addTask: (task) => {
        set(state => ({ ...state, tasks: [...state.tasks, task] }))
    },
    removeTask: (taskTitle: string) => {
        set(state => ({ ...state, tasks: state.tasks.filter(t => t.title !== taskTitle) }))
    }
}))

export default useTaskStore;