import usePrompt from "../hooks/usePrompt";
import useTaskStore from "../services/zustand/todoStore";

const AddTodo = () => {
    const addTask = useTaskStore(state => state.addTask);

    const {takeInput } = usePrompt('Enter your Task')

    const handleOnClick = () => {
        const value = takeInput();

        if (value) {
            const task = {
                title: value,
                isCompleted: false,
            }

            addTask(task)
        }
    }


    return (
        <button onClick={handleOnClick} className='bg-green-500 hover:bg-green-600 rounded-md px-4.5 py-1.5 cursor-pointer font-medium text-white ms-auto block mt-5'>
            Add Todo
        </button>
    );
};

export default AddTodo;