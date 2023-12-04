import { Exercise } from "../../lib/types"

export default function ExerciseCard({ Id, ExerciseName }: Exercise) {
    return (
        <div id={Id.toString()} className="m-0.5 text-center bg-gray-50 group rounded-md border border-slate-300 px-5 py-4 hover:border-neutral-700 hover:bg-gray-200">
            <p>Exercise: { ExerciseName}</p>
        </div>
    )
}