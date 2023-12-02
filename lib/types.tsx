import { WeightType } from "./enums"

export type Exercise = {
    Id: number;
    ExerciseName: string;
    Description: string;
    WeightType: WeightType;
    IsDurationExercise: boolean;
}

