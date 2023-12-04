import WorkoutCanvas from "@/components/workouts/canvas"

export default function Workouts() {
  return (
    <WorkoutCanvas />
  )
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