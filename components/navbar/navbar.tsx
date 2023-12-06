import Link from "next/link";

export default function Navbar() {
    return (
        <div className="flex flex-row h-10 bg-cyan-300 min-w-full justify-start">
            <div className="py-2 px-8">
                <h3 className="font-bold">Workout Builder v1.0</h3>
            </div>
            <div className="p-2">
                <Link href="../../workouts">
                    Build a Workout
                </Link>
            </div>
            <div className="p-2">
                Create Exercises
            </div>
        </div>
    )

}