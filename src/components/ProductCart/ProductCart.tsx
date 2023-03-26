import React from 'react'
import './ProductCart.css'

type ProductCartProps = {
    productInfo: string
    image: string
    title: string
    productDesc: string
    currentPrice: number
    originalPrice: number
    changeProductsCount: () => void
    changeProductsPrice: (price: number) => void   
}

const ProductCart = ({productInfo, image, title, productDesc, 
    currentPrice, originalPrice, changeProductsCount, changeProductsPrice }: ProductCartProps) => {
    
    const changeProductsInfo = (price: number) => {
      changeProductsCount()
      changeProductsPrice(price)
    }  
    
  return (
    <div className='glocery-catalog-item'>
        <div className="d-f jc-sb">
            <div className="catalog-item-info">{productInfo}</div>
            <div className="catalog-item-favorite"><img src="images/favorite.png" alt="favorite" /></div>
        </div>
        <div className="catalog-item-img"><img src= {image} alt="catalog-item-img" /></div>
        <h3 className="catalog-item-title">{title}</h3>
        <p className="catalog-item-desc">{productDesc}</p>
        <div className="catalog-item-price">{currentPrice} <span>$</span></div>
        <div className="discount-bl d-f align-center">
            <div className="catalog-item-original">{originalPrice} $</div>
            <div className="catalog-item-saving d-f align-center">
                <div className='item-saving-percent'>15%</div> 
                <div className='item-saving-discount'>Экономия {originalPrice - currentPrice} $</div> 
            </div>
        </div>
        <div className="catalog-item-actions d-f">
            <button className='item-actions-btn' onClick={()=>changeProductsInfo(currentPrice) }>Купить</button>
            <button className='item-actions-btn'>В 1 клик</button>
        </div>
    </div>
  )
}

export default ProductCart