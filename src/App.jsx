import { useEffect, useState } from 'react'
import Tours from './Components/Tours'
import Loading from './Components/Loading';
import "./styles.css";

const url = 'https://course-api.com/react-tours-project';

function App() {

  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  const fetchTours = async () => {
    setLoading(true)
    try {
      const response = await fetch(url);
      const tours = await response.json();
      
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    fetchTours();
  }, [])

  if (loading) {
    return(
      <main className="loading-screen">
        <Loading/>
      </main>
    )
  }

  if (tours.length === 0) {
    return(
      <main>
        <div className="no-tours">
          <h2>No tours left</h2>
          <button className="btn" onClick={() => fetchTours()}><i className="fa-solid fa-rotate-right"></i></button>
        </div>
      </main>
    )
  }

  return (
    <main className="App">
      <Tours tours={tours} removeTour={removeTour}/>
    </main>
  )
}

export default App
