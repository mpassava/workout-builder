import { Exercise } from "../public/types"

export default function ExerciseCard({ Id, ExerciseName }: Exercise) {
    console.log('Building card')
    return (
        <div key={Id} className="flex w-full justify-center border-b border-gray-300 from-zinc-200 pb-10 pt-10 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            <h1>Exercise: { ExerciseName}</h1>
        </div>
    )
}