import ExerciseList from "@/components/workouts/exercise-list";
import type { InferGetStaticPropsType, GetStaticProps } from "next";

export default function Workouts(props: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="flex min-w-screen min-h-screen bg-gray-50 group rounded-md border border-slate-300">
      <div>
          <ExerciseList exercises={props.exercises} />
      </div>
      <div className="flex-1 text-center rounded-md border border-slate-300 ">
          This will be where the workout builder is rendered
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const response = await fetch('http://localhost:3000/api/test');
  const data = await response.json();
  console.log(data);
  
  return {
      props: {
          exercises: data,
      },
  }
}
