import { useState } from "react";

function Search() {
    const [navBarre, setNavBarre] = useState("")

    return (
        <input 
        type="text" 
        value={navBarre}

        onChange = {(event) => {
            setNavBarre(event.target.value)
            console.log(event.target.value)
        }}
        />
    )
}

export default Search;