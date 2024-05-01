import { useEffect } from 'react'

import Layout from '@/components/layout'

export default function HowItWork() {
  useEffect(() => {
    window.document.title = 'How it Work'
  }, [])

  return (
    <Layout>
      {/* HEADER */}
      <header className="bg-background py-16 text-center md:py-20">
        <div className="container flex max-w-5xl flex-col items-center justify-center gap-3 px-5 md:gap-5">
          <h2 className="text-3xl font-bold capitalize md:text-4xl">How It Work</h2>
        </div>
      </header>
    </Layout>
  )
}
