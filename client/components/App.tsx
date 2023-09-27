import { Outlet } from 'react-router-dom'

import Header from './Header'
import Login from './Login'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

function App() {
  return (
    <>
      <Header />
      {/* <div> */}
        <IfNotAuthenticated>
          <Login />
        </IfNotAuthenticated>

        <IfAuthenticated>
          {/* <Routes>
            <Route path="/" element={<Home />} />
          </Routes> */}
          <Outlet/>
        </IfAuthenticated>
      {/* </div> */}
    </>
  )
}

export default App
