import Head from 'next/head'
import Link from 'next/link'
import Navbar from '@/components/navbar/navbar'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Workout Builder v1.0</title>
      </Head>
      <Navbar />
      <div className='font-extrabold text-5xl text-center'>
        <Link href='/workouts'>Workouts</Link>
      </div>
    </div>
  )
}
