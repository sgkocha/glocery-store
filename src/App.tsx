import React from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Main from './components/Main/Main'

const App = () => {
  const [num, setNum] = React.useState(0)
  const [price, setPrice] = React.useState(0)

  const changeProductsCount = () => {
    setNum((prevState) => {
      return (
        prevState += 1
      )
    });
  }
  const changeProductsPrice = (price: number) => {
    setPrice((prevState) => {
      return (
        prevState += price
      )
    });
  }

  return (
    <>
      <Header productNum={num} productPrice={price} />
      <Main changeProductsCount={changeProductsCount} changeProductsPrice={changeProductsPrice}/>
      <Footer />
    </>
  )
}

export default App