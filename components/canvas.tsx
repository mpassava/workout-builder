import { Exercise } from "../lib/types"
import Exercises from "../pages/api/Exercises"
import ExerciseCard from "./exercise-card"
import { ChevronDoubleRightIcon, ChevronDoubleDownIcon } from "@heroicons/react/24/outline"
import { useState } from "react";
import classNames from "classnames";
import ExerciseList from '../pages/exercise-list'


export default function WorkoutCanvas() {
return (
    <div className="min-w-screen min-h-screen bg-gray-50 group rounded-lg border border-slate-300">
        <div className="flex columns-2 break-after-column">
            <ExerciseList />
            what
        </div>

        
    </div>

)
    
}