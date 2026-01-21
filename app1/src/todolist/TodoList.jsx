import Todo from "./Todo.jsx";

export default function TodoList() {
    return (
        <>
            <h1>Todo List</h1>
            <ul>
                <Todo text="Belajar React" isCompleted={true} />
                <Todo text="Belajar JS" isCompleted={false} />
                <Todo text="Belajar CSS" isCompleted={false} />
            </ul>
        </>
    )
}