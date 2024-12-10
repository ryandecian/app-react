import { useState } from "react";

function Button () {
    const [ count, setCount ] = useState(0);
    const [title, setTitle] = useState(0)
    
    const funcTitle =() => {
        setTitle(title +1)
    }
    const incrementation = () => {
        setTitle(title +1)
        setCount(count + 2);
        console.log(title)
        console.log(count);
    }

    const incrementationM =() => {
        setTitle(title - 1)
        setCount(count -2)
        console.log(title)
        console.log(count)
    }

    return (
        <>
        <h2> Count + 2 : {count}</h2>
        <h2>Count + 1 : {title}</h2>
        <button onClick={incrementation}>Incrémentation de +1</button>
        <button onClick={incrementationM}>Incrémentation de -1</button>
        </>
    )
}

export default Button;
