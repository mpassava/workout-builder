import { Exercise } from "../lib/types"
import Exercises from "../pages/api/Exercises"
import ExerciseCard from "./exercise-card"
import { ChevronDoubleRightIcon, ChevronDoubleDownIcon } from "@heroicons/react/24/outline"
import { useState } from "react";
import classNames from "classnames";
import ExerciseList from '../pages/exercise-list'


export default function WorkoutCanvas(IsListCollapsed: boolean = false) {
    const [sharedState, setSharedState] = useState(false);
    console.log(useState)
    return (
        <div className="flex flex-auto min-w-screen min-h-screen bg-gray-50 group rounded-md border border-slate-300">
            <div className={IsListCollapsed ? "basis-1/4" :"basis-1/12"}>
                <ExerciseList />
            </div>
            <div className="flex flex-auto rounded-md border border-slate-300 ">
                What now
            </div>

            
        </div>

    )
    
}