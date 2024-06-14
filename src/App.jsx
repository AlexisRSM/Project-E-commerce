import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './modules/Navbar'
import Cards from './modules/Cards'

function App() {
  const [products, setProducts] = useState();
  const [output, setOutput] = useState(products)

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://raw.githubusercontent.com/AlexisRSM/Project-E-commerce/master/data.json");
      const products = await response.json();
      console.log(products);
      setProducts(products);
      setOutput(products)
    }
    fetchData();
  }, [])

  return (
    products && (
      <>
        <Navbar products={products} setProducts={setProducts} output={output} setOutput={setOutput} />
        <div className='row my-2'>
        {
              output.map((product) => {
                return <Cards product={product} />
              })}
        </div>
      </>
    )





  )
}

export default App
