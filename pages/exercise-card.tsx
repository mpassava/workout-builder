import { Exercise } from "../public/types"

export default function ExerciseCard({ Id, ExerciseName }: Exercise) {
    console.log('Building card')
    return (
        <div id={Id.toString()} className="m-1 flex flex-col items-center justify-between bg-gray-50 group rounded-lg border border-slate-300 px-5 py-4 hover:border-neutral-700 hover:bg-gray-100">
            <h1>Exercise: { ExerciseName}</h1>
        </div>
    )
}