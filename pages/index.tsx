import type { NextPage } from 'next'
import {
  getSession,
  GetSessionParams,
  signOut,
  useSession,
} from 'next-auth/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

const Home: NextPage = () => {
  const router = useRouter()
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/home')
    },
  })
  return (
    <div className="bg-[#f3f2ef] dark:bg-black dark:text-white">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex justify-center gap-x-5 sm:px-12">
        <div className="flex flex-col gap-5 md:flex-row">
          <Sidebar />
        </div>
      </main>
    </div>
  )
}

export default Home

export async function getServerSideProps(context: GetSessionParams) {
  const session = await getSession(context)
  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: '/home',
      },
    }
  }
  return {
    props: {
      session,
    },
  }
}
