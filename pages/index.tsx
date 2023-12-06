import Head from 'next/head'
import Link from 'next/link'
import Layout from '@/components/layout'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Workout Builder v1.0</title>
      </Head>
      <Layout>
        <div className='font-extrabold text-5xl text-center'>
          Workouts
        </div>
      </Layout>

    </div>

  )
}
