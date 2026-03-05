import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Components/components/Banner'
import Footer from './Components/components/Footer'
import Navbar from './Components/components/Navbar'
import Tickets from './Components/components/Tickets'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const fetchTickets = async () => {
  const res = await fetch("/data.json")
  return res.json()
}



function App() {
  const [ticketpromise] = useState(() => fetchTickets());
  const [inProgressCount, setInProgressCount] = useState(0);
  const [selectedTicket, setSelectedTicket] = useState([]);
  const [resolvedTasks, setResolvedTasks] = useState([]);

  const handleSelectTicket = (ticket) => {

    const alreadySelected = selectedTicket.some(t => t.id === ticket.id)

    if (!alreadySelected) {
      setSelectedTicket(prev => [...prev, ticket])
      setInProgressCount(prev => prev + 1)

      toast.success(`Task "${ticket.title}" added to progress!`, {
        position: "bottom-right",
        autoClose: 2000,
      });
    }
  };

  const handleCompleteTask = (ticket) => {

    setResolvedTasks(prev => [...prev, ticket])

    setSelectedTicket(prev =>
      prev.filter(t => t.id !== ticket.id)
    )

    setInProgressCount(prev => prev - 1)

    toast.info("Task marked as completed!", {
      position: "bottom-right",
      autoClose: 2000,
    });
  };

  return (
    <>
      <ToastContainer />
      <Navbar></Navbar>
      <Banner
        inProgressCount={inProgressCount}
        resolvedCount={resolvedTasks.length}
      ></Banner>
      <Suspense fallback={<span className="loading loading-spinner loading-xl text-accent"></span>}>
        <Tickets
          ticketpromise={ticketpromise}
          onSelect={handleSelectTicket}
          selectedTicket={selectedTicket}
          onComplete={handleCompleteTask}
          resolvedTasks={resolvedTasks}
        ></Tickets>
      </Suspense>
      <Footer></Footer>
    </>
  )
}

export default App
