import Exercises from "../../pages/api/Exercises"
import ExerciseCard from "./exercise-card"
import { ChevronDoubleRightIcon, ChevronDoubleDownIcon } from "@heroicons/react/24/outline"
import { useState } from "react";


export default function ExerciseList() {
    //const exercises = Array.from(Exercises)
    
    const [collapsed, setSidebarCollapsed] = useState(false);

    if (Exercises.length > 0 && !collapsed)
    {
        return (
            <div className="bg-slate-100 min-h-screen">
                <div className="flex justify-start">
                    <button onClick={() => setSidebarCollapsed((prev) => !prev)}>
                        <div className="flex p-2">
                            <ChevronDoubleDownIcon className="w-5 h-5" />
                            &nbsp; Exercise List 
                        </div>
                    </button>
                </div>
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

export async function getStaticProps() {
    const response = await fetch('http://localhost:3000/api/test');
    const data = await response.json();
    
    return {
        props: {
            exercises: data,
        },
    }
}
