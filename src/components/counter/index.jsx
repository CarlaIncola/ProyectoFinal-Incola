import Button from "../Button"
import TextField from "../textField"

const Counter = ({ quantity, onIncrement, onDecrement, onChange }) => {
    return (
        <>
            <Button text="-" onClick={onDecrement} />
            <TextField 
                name="counter-input" 
                type="text" 
                id="input-counter" 
                label="Counter" 
                value={quantity}
                onChange={(e) => onChange(e.target.value)}
            />
            <Button text="+" onClick={onIncrement} />
        </>
    )
}

export default Counter