const Part = ({part}) => {
    console.log(part)
    return (
        <li>{part.name}: {part.exercises}</li>
    )
}

export default Part