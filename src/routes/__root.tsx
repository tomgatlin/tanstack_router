import { Outlet, createRootRoute } from '@tanstack/react-router'

// import Header from '../components/Header'
import HeaderTwo from '@/components/HeaderTwo'
import Footer from '@/components/Footer'

export const Route = createRootRoute({
  component: () => (
    <div className='flex flex-col min-h-screen'>
      {/* <Header /> */}
      <HeaderTwo />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  ),
})
