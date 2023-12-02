import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import ExerciseList from './exercise-list/index'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Workout Builder v1.0</title>
      </Head>
      <ExerciseList />
    </div>
  )
}
