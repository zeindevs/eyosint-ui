import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { z } from 'zod'

import Layout from '@/components/layout'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, {
    message: 'Password must contain at least 8 characters',
  }),
})

export default function Login() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  useEffect(() => {
    window.document.title = 'Login'
  }, [])

  return (
    <Layout>
      <div className="py-16">
        <div className="mx-auto flex max-w-[400px] flex-col gap-5 rounded-md border bg-background p-5">
          <div>
            <h1 className="text-3xl font-medium">Login</h1>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Sign in to your account</p>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="example@gmail.com" {...field} />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder="**********" {...field} />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex items-center">
                <Link to={`/forget-password`} className="text-sm text-primary hover:underline">
                  Forget Password?
                </Link>
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
          </Form>
          <div className="flex hidden items-center gap-3">
            <div className="w-full border-b"></div>
            <div className="text-zinc-400 dark:text-zinc-400">or</div>
            <div className="w-full border-b"></div>
          </div>
          <p className="mt-2 text-center text-sm text-zinc-700 dark:text-zinc-300">
            Don't have an account?{' '}
            <Link to={`/register`} className="text-primary hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  )
}
