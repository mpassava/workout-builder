import ExerciseCard from "./exercise-card"
import { ChevronDoubleRightIcon, ChevronDoubleDownIcon } from "@heroicons/react/24/outline"
import { useState } from "react";
import { Exercise } from "@/lib/types";


export default function ExerciseList({ exercises }: { exercises: Exercise[] }) {
  
  const [collapsed, setSidebarCollapsed] = useState(false);
  
  if (exercises.length > 0 && !collapsed)
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
          {exercises.map((ex) => ExerciseCard(ex))}
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
