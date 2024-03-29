import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <section className='ml-12'>
      <header className='p-3 mt-12 bold text-xl'>
        <h1>Home</h1>
      </header>
      <main className='p-3 mt-4'>
        <Button>Login</Button>
      </main>
    </section>
  )
}
