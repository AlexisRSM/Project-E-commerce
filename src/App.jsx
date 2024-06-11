import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './modules/Navbar'

function App() {
  const [products, setProducts] = useState();

  useEffect(() =>{
    async function fetchData() {
      const response = await fetch("https://raw.githubusercontent.com/AlexisRSM/Project-E-commerce/master/data.json");
      const products = await response.json();
      console.log(products);
      setProducts(products);
    }
    fetchData();
  },[])

  return (
    products && (
      <Navbar />
    )
    
    
    
    
    
  )
}

export default App
