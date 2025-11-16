import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='p-8 flex justify-center items-center h-dvh'>
        <div className="flex flex-col items-center max-w-2xl">
            <h1 className='text-3xl font-bold mb-4'>About Page</h1>
            <p>This is the about page. Welcome!</p>
        </div>
    </div>
  )
}

