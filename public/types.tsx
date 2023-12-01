import { WeightType } from "../public/enums"

export type Exercise = {
    Id: number;
    ExerciseName: string;
    Description: string;
    WeightType: WeightType;
    IsDurationExercise: boolean;
}

