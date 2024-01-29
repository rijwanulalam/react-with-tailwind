import './App.css'
import NavBar from './components/NavBar/NavBar'
import PriceList from './components/PriceList/PriceList'

function App() {

  return (
    <>
      <NavBar></NavBar>
      <h1 className='text-7xl text-center'>Hello from tailwind</h1>
      <PriceList></PriceList>
    </>
  )
}

export default App
