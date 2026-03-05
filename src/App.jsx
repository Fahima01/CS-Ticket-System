import { Suspense } from 'react'
import './App.css'
import Banner from './Components/components/Banner'
import Footer from './Components/components/Footer'
import Navbar from './Components/components/Navbar'
import Tickets from './Components/components/Tickets'



const fetchTickets = async () => {
  const res = await fetch("/data.json")
  return res.json()
}

function App() {
  const ticketpromise = fetchTickets()
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense fallback={<span className="loading loading-spinner loading-xl text-accent"></span>}>
        <Tickets ticketpromise={ticketpromise}></Tickets>
      </Suspense>
      {/* <Footer></Footer> */}
    </>
  )
}

export default App
