import { useEffect, useMemo, useState } from "react"
import PropTypes from "prop-types"

function User({ age }) {
    //when passing a string always set your default to an empty string
    //it tells react that it is a controlled component
    //uncontrolled to controlled is a big no no to react
    const [name, setName] = useState("")
    const [dark, setDark] = useState(false)

    // whenever name and age changes it performs return a new object
    const user = useMemo(() => {
        // if name and age didn't change useMemo is going to return to 
        // us the same user we had the last time we rendered our component,
        // which means the user in useMemo is the same with the user in UseEffect
        // because they are both the exact same object and same reference
        // it didn't have to create a new object it used the old object from the last render
        // the two is the exact same object
        return { age, name }
    }, [name, age])

    const buttonStyle = {
        backgroundColor: dark ? "#000" : "initial",
        color: dark ? "#FFF" : "initial"
    }

    //when user changes it displays user which has age and name
    useEffect(() => {
        console.log(user)
    }, [user])

    return (
        <div>
            <input value={name} onChange={e => setName(e.target.value)}></input>
            <button
            className="btn"
            style={buttonStyle}
            onClick={() => setDark(currDark => !currDark)}
            >
            Toggle Theme
            </button>
        </div>
    )
}

User.propTypes = {
    age: PropTypes.number
}

export default User