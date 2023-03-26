import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Catalog from '../../pages/Catalog'
import History from '../../pages/History'
import Home from '../../pages/Home'
import Promotions from '../../pages/Promotions'

type MainProps = {
  changeProductsCount: () => void
  changeProductsPrice: (price: number) => void   
}

const Main = (props: MainProps) => {
  return (
    <Routes>
        <Route 
            path='/'
            element={<Home changeProductsCount={props.changeProductsCount} changeProductsPrice={props.changeProductsPrice}/>}
        />
        <Route 
            path='catalog'
            element={<Catalog changeProductsCount={props.changeProductsCount} changeProductsPrice={props.changeProductsPrice}/>}
        />
        <Route 
          path='history'
          element={<History/>}
        />
        <Route 
          path='promotions'
          element={<Promotions/>}
        />

        
    </Routes>
  )

}

export default Main