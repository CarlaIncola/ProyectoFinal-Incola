import Button from "../Button"
import TextField from "../textField"
import useCounter from "./useCounter"

const Counter = () => {

    const {num, resta, suma} = useCounter()

    return (

        <>
            <Button text="-" onClick={resta} />
            <TextField 
                name="counter-input" 
                type="text" 
                id="input-counter" 
                label="Counter" 
                value={num} />
            <Button text="+" onClick={suma} />
        </>
    )
}

export default Counter