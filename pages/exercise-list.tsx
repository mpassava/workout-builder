import { Exercise } from "../public/types"
import Exercises from "./api/Exercises"
import ExerciseCard from "../pages/exercise-card"
import { ChevronDoubleRightIcon, ChevronDoubleDownIcon } from "@heroicons/react/24/outline"
import { useState } from "react";
import classNames from "classnames";


export default function ExerciseList() {
    //const exercises = Array.from(Exercises)

    const [collapsed, setSidebarCollapsed] = useState(false);

    if (Exercises.length > 0 && !collapsed)
    {
        console.log(Exercises.map((ex) => ExerciseCard(ex)))
        return (
            <div className={classNames({"w-80": !collapsed, "w-10": collapsed,})}>
                <button onClick={() => setSidebarCollapsed((prev) => !prev)}>
                    <div className="flex flex-direction-row p-2">
                        <ChevronDoubleDownIcon className="w-5 h-5" /> &nbsp; Hide Exercises 
                    </div>
                    
                </button>
                <div>
                    {Exercises.map((ex) => ExerciseCard(ex))}
                </div>
                
            </div>
        )
    }
    else
    {
        return (
            <button onClick={() => setSidebarCollapsed((prev) => !prev)}>
                <div className="flex flex-direction-row p-2">
                    <ChevronDoubleRightIcon className="w-5 h-5" /> &nbsp; Show Exercises 
                </div>
                    
                </button>
        )
    }
        
}