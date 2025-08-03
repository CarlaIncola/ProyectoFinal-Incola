const Button = (props) => {

    const {text, color, onClick} = props

    return (
        <>
            <button onClick={onClick} style={ { backgroundColor: color } }>
                { text }
            </button>
        </>
    )
}

export default Button