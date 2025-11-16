import { createFileRoute } from '@tanstack/react-router'

const url = 'https://media.licdn.com/dms/image/v2/C5603AQHYYwQNN08bGQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1516902728901?e=2147483647&v=beta&t=8JHIkYB5GCWO3GB2wWm3ISSWymwqfeNWuOnRVPpI6sk'

export const Route = createFileRoute('/tom')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='bg-cover w-screen h-screen' style={{ backgroundImage: `url(${url})` }} >

  </div>
}
