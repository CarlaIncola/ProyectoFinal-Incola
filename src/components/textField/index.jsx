const TextField = ({ name, type, id, label, value }) => {

    return (
        <>
            <label htmlFor={id}>
                {label}
            </label>
            <input name={name} type={type} id={id} value={value} />
        </>
    )
}

export default TextField