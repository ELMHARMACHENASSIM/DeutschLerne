import { Outlet } from 'react-router'
import Header from './Header'

const Layout = () => {
  return (
    <>

      <main className="h-[100%]">
        <Outlet />
      </main>
    </>
  )
}

export default Layout
