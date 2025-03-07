import useTaskStore from '../services/zustand/todoStore';

const TodoList = () => {
    const todoList = useTaskStore(state => state.tasks);

    return (
        <div className='space-y-3 pt-5'>
            {todoList.map((todo) => (
                <Todo key={todo.title} {...todo} />
            ))}
        </div>
    );
};


const Todo = ({ title, isCompleted }: { title: string, isCompleted: boolean }) => (
    <div className='bg-gray-500 p-2 rounded-md'>
        <h3 className='text-white'>{title}</h3>
    </div>
)
Todo.displayName = 'Todo'

export default TodoList;