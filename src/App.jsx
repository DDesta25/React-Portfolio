import{Outlet} from 'react-router-dom'
import './App.css'
import Header from './components/header'
import Footer from './components/footer'
function App() {
  

  return (
    <>
    <Header/>
      <main className='min-vh-100'><Outlet/></main>
<Footer/>

    </>
  )
}

export default App
