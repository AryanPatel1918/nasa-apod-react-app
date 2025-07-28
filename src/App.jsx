import { useState, useEffect } from "react"
import Main from "./components/Main"
import Footer from "./components/Footer"
import SideBar from "./components/SideBar"

export default function App() {
  const [apodData, setApodData] = useState(null);
  const [showModal, setShowModal] = useState(false)
  
  useEffect(() => {
    async function fetchApodData() {
      const url = "https://api.nasa.gov/planetary/apod?api_key="
      const NASA_API_KEY = import.meta.env.VITE_NASA_API_KEY
      
      const today = new Date().toDateString()
      const localKey = `NASA-${today}`
      if (localStorage.getItem(localKey)) {
        setApodData(JSON.parse(localStorage.getItem(localKey)))
        console.log("Fetched from local storage")
        return
      }

      localStorage.clear() // remove older key

      try {
        const response = await fetch(url + NASA_API_KEY)
        const data = await response.json()
        localStorage.setItem(localKey, JSON.stringify(data))
        setApodData(data)
        console.log("Fetched from API")
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchApodData() // call async function
  }, [])

  // console.log apodData for testing
  // useEffect(() => {
  //   if (apodData) {
  //     console.log("apodData updated:", apodData)
  //   }
  // }, [apodData])

  function toggleModal() {
    setShowModal(prev => !prev)
  }

  return (
    <>
      {apodData ? <Main apodData={apodData} /> : (
        <div className="loading-state">
            <i className="fa-solid fa-gear"></i>
            <span>Loading</span>
        </div>
      )}
      {showModal && <SideBar apodData={apodData} toggle={toggleModal} />}
      {apodData && <Footer apodData={apodData} toggle={toggleModal} />}
    </>
  )
}