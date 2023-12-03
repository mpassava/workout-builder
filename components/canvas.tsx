import { Exercise } from "../lib/types"
import Exercises from "../pages/api/Exercises"
import ExerciseCard from "./exercise-card"
import { ChevronDoubleRightIcon, ChevronDoubleDownIcon } from "@heroicons/react/24/outline"
import { useState } from "react";
import classNames from "classnames";
import ExerciseList from '../pages/exercise-list'


export default function WorkoutCanvas() {
    console.log(useState)
    return (
        <div className="flex min-w-screen min-h-screen bg-gray-50 group rounded-md border border-slate-300">
            <div>
                <ExerciseList />
            </div>
            <div className="flex-1 text-center rounded-md border border-slate-300 ">
                This will be the workout canvas
            </div>

            
        </div>

    )
    
}