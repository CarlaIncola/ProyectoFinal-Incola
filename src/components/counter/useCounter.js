import { useState } from "react"

const useCounter = () => {

    const [num, setNum] = useState(0)

    const suma = () => {
        setNum(num + 1)
    }

    const resta = () => {
        setNum(num - 1)
    }

    return { num, suma, resta }
}

export default useCounter