
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './Component/Header/Header'

function App() {

  return (
    <>
      <header className='container mx-auto '>
        <Header></Header>
      </header>
      <Outlet></Outlet>
<div className=' mt-28'>

</div>
    </>
  )
}

export default App
