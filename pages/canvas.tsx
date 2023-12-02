import { Exercise } from "../public/types"
import Exercises from "./api/Exercises"
import ExerciseCard from "../pages/exercise-card"
import { ChevronDoubleRightIcon, ChevronDoubleDownIcon } from "@heroicons/react/24/outline"
import { useState } from "react";
import classNames from "classnames";
import ExerciseList from './exercise-list'


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