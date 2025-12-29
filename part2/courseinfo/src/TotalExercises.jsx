const TotalExercises = ({course}) => {
    return(
        course.parts.reduce(
            (sum, {exercises}) => sum+exercises
        ,0)
    )
}

export default TotalExercises