import Button from "../Button";
import TextField from "../textField";
import styles from "./counter.module.scss";

const Counter = ({ quantity, onIncrement, onDecrement, onChange }) => {
    return (
        <div className={styles.counterContainer} >
            <Button text="-" onClick={onDecrement} className={styles.counterButton} />
            <TextField 
                className={styles.counterText}
                name="counter-input" 
                type="text" 
                id="input-counter" 
                label="" 
                value={quantity}
                onChange={(e) => onChange(e.target.value)}
            />
            <Button text="+" onClick={onIncrement} className={styles.counterButton} />
        </div>
    )
}

export default Counter;