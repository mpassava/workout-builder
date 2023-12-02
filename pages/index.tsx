import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import ExerciseList from './exercise-list/index'
import WorkoutCanvas from '../components/canvas'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Workout Builder v1.0</title>
      </Head>
      <div>
        <WorkoutCanvas />
      </div>
      
    </div>
  )
}
