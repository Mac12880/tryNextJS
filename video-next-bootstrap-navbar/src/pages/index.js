// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import Layout from '../../components/layout'
import Counter from '../../components/counter'
import User from '../../components/user'


// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <>
  <main className="flex min-h-screen flex-col items-center justify-between p-24">
  <section>
      <div className='header'>
          <h1 className='center'><u>Home</u></h1>
      </div>
      <div className='center'>
        <b className='fontSizeLarge center'>Counter</b>
        <Counter initialCount={1}></Counter>
      </div>
      <div className='center'>
        <b className='fontSizeLarge'>User</b>
        <User age={22}></User>
      </div>
  </section>
  </main>
</>
    
  )
}
