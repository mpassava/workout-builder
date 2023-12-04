import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import ExerciseList from '../components/workouts/exercise-list'
import WorkoutCanvas from '../components/workouts/canvas'
import Link from 'next/link'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Workout Builder v1.0</title>
      </Head>
      <Link href='/workouts'>Workouts</Link>
    </div>
  )
}
