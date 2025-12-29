import Part from './Part.jsx'
import TotalExercises from './totalExercises.jsx'

const Course = ({course}) => {
    console.log('course',course)
    return (
        <div>
            <h2 key={course.id}>{course.name}</h2>
            <ul>
                {course.parts.map(part => 
                    <Part part={part} key={part.id}></Part>
                )}
            </ul>
            <span>Total exercises: </span><TotalExercises course={course}></TotalExercises>
        </div>
    )
}


export default Course