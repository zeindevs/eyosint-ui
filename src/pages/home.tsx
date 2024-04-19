import Layout from '@/components/layout'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <Layout>
      {/* HEADER */}
      <header className="bg-background py-16 text-center md:py-20">
        <div className="container flex max-w-5xl flex-col items-center justify-center gap-3 px-5 md:gap-5">
          <span className="rounded-full border border-primary bg-primary/20 px-3 py-1.5 text-xs font-medium text-primary backdrop-blur-sm dark:bg-primary/40 dark:text-red-100">
            World isn't Safe
          </span>
          <h2 className="text-3xl font-bold capitalize md:text-4xl xl:text-5xl">
            A spy agent platform for help people to solve the problem
          </h2>
          <p className="text-base md:text-lg">Solve your problem in here or join up as spy agent.</p>
          <div className="mt-4 flex items-center gap-3">
            <Button className="min-w-32" variant="outline">
              Help Me
            </Button>
            <Link to={`/register`}>
              <Button className="min-w-32">Join Now</Button>
            </Link>
          </div>
        </div>
      </header>
      {/* ABOUT */}
      {/* NEWS */}
      <section className="bg-background py-12 text-center md:py-16" id="news">
        <div className="container flex max-w-7xl flex-col items-center justify-center gap-3 px-5 md:gap-5"></div>
      </section>
      {/* JOIN */}
      <section className="bg-secondary py-12 text-center md:py-16" id="join">
        <div className="container flex max-w-7xl flex-col items-center justify-center gap-3 px-5 md:gap-5">
          <h2 className="text-3xl font-medium capitalize md:text-3xl xl:text-4xl">
            Already to be spy agent and solve threat submission?
          </h2>
          <p className="text-sm md:text-base">Grow up with us and community together to make the world safer.</p>
          <div className="mt-4">
            <Link to={`/register`}>
              <Button>Join Now</Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
