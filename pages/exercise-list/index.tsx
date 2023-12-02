import Exercises from "../api/Exercises"
import ExerciseCard from "../../components/exercise-card"
import { ChevronDoubleRightIcon, ChevronDoubleDownIcon } from "@heroicons/react/24/outline"
import { useState } from "react";
import classNames from "classnames";


export default function ExerciseList() {
    //const exercises = Array.from(Exercises)

    const [collapsed, setSidebarCollapsed] = useState(false);

    if (Exercises.length > 0 && !collapsed)
    {
        return (
            <div className="w-80 bg-slate-100 min-h-screen">
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
            <div className="w-10 bg-slate-100 min-h-screen">
                <button onClick={() => setSidebarCollapsed((prev) => !prev)}>
                    <div className="p-2">
                        <ChevronDoubleRightIcon className="w-5 h-5" />
                    </div>

                </button>
            </div>

        )
    }
        
}