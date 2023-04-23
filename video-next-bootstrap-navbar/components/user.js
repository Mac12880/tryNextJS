import { useEffect, useMemo, useState } from "react"
import PropTypes from "prop-types"


function User({ age }) {
    //when passing a string always set your default to an empty string
    //it tells react that it is a controlled component
    //uncontrolled to controlled is a big no no to react
    const [name, setName] = useState("")
    const [dark, setDark] = useState(false)

    // whenever name and age changes it performs return
    const user = useMemo(() => {
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