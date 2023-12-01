import { Exercise } from "../public/types"
import Exercises from "./api/Exercises"
import ExerciseCard from "../pages/exercise-card"

export default function ExerciseList() {
    //const exercises = Array.from(Exercises)

    if (Exercises.length > 0)
    {
        console.log(Exercises.map((ex) => ExerciseCard(ex)))
        return (
                <div>
                    {Exercises.map((ex) => ExerciseCard(ex))}
                </div>

        )
    }
    else
    {
        return (
            <div>Loading...</div>
        )
    }
        
}