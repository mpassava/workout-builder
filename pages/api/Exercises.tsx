import { Exercise } from "../../public/types";
import { WeightType } from "../../public/enums";

const Exercises: Exercise[] = [
    {
        Id: 1,
        ExerciseName: "Barbell Squats",
        Description: "A standard barbell squat with the bar on your upper back",
        WeightType: WeightType.Barbell,
        IsDurationExercise: false
    },
    {
        Id: 2,
        ExerciseName: "Bench Press",
        Description: "A standard barbell bench press. A classic compound exercise",
        WeightType: WeightType.Barbell,
        IsDurationExercise: false
    },
    {
        Id: 3,
        ExerciseName: "Dead Lift",
        Description: "Go heavy here! These are your classic dead lifts",
        WeightType: WeightType.Barbell,
        IsDurationExercise: false
    },
    {
        Id: 4,
        ExerciseName: "Bicep Curls",
        Description: "Grab a dumbbell and start curling. Nothing fancy here",
        WeightType: WeightType.Dumbbell,
        IsDurationExercise: false
    },
    {
        Id: 5,
        ExerciseName: "Planks",
        Description: "Get down in push-up position and hold there until you break!",
        WeightType: WeightType.BodyWeight,
        IsDurationExercise: true
    },
    {
        Id: 6,
        ExerciseName: "Push-ups",
        Description: "Do I even have to explain?",
        WeightType: WeightType.BodyWeight,
        IsDurationExercise: false
    }
];

export default Exercises
