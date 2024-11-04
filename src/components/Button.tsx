import { useState } from "react";





function Button () {
    const [ count, setCount ] = useState(0);
    const [title, setTitle] = useState(0)
    
    const funcTitle =() => {
        setTitle(title +1)
    }
    const incrementation = () => {
        setCount(count + 2);
        console.log(count);
    }

    const funcTitleM =() => {
        setTitle(title - 1)
    }
    const incrementationM = () => {
        setCount(count - 2);
        console.log(count);
    }

    const rassemblement = () => {
        funcTitle()
        incrementation()
    }

    const rassemblementM = () => {
        funcTitleM()
        incrementationM()
    }

    return (
        <>
        <h2> Count + 2 : {count}</h2>
        <h2>Count + 1 : {title}</h2>
        <button onClick={rassemblement}>Incrmentation de +1</button>
        <button onClick={rassemblementM}>Incrmentation de -1</button>
        </>
    )
}

export default Button;