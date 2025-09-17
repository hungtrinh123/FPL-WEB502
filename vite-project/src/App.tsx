import { useState } from "react";
import "./App.css";

function App() {
    const [count, setCount] = useState<number>(0);
    const [color, setColor] = useState<string>("red");
    return (
        <>
            <div style={{ backgroundColor: color, width: 200, height: 200 }}></div>
            <hr />
            {count}
            <button onClick={() => setCount(count + 1)}></button>
            <button onClick={() => setColor("blue")}>Blue</button>
        </>
    );
}

export default App;
