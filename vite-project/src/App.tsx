import { useState } from "react";
import "./App.css";

interface ITodo {
    id: number;
    title: string;
    completed: boolean;
}

function App() {
    const todosList: ITodo[] = [
        { id: 1, title: "Todo 1", completed: false },
        { id: 2, title: "Todo 2", completed: false },
        { id: 3, title: "Todo 3", completed: false },
    ];
    const [count, setCount] = useState<number>(0);
    const [color, setColor] = useState<string>("red");
    const [todos, setTodos] = useState<ITodo[]>(todosList);
    return (
        <>
            <div style={{ backgroundColor: color, width: 200, height: 200 }}></div>
            <hr />
            {count}
            <button onClick={() => setCount(count + 1)}></button>
            <button onClick={() => setColor("blue")}>Blue</button>
            <hr />
        </>
    );
}

export default App;
