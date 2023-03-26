import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

type HeaderProps = {
    productNum : number
    productPrice: number
}

const Header = ({productNum, productPrice}: HeaderProps) => {
  return (
    <header className='header'>
        <div className="header-info d-f jc-sb">
            <div className='header-about d-f align-center'>
                <div className="header-logo-img"><img src="images/logo.svg" alt="store-logo" /></div>
                <div className="header-logo-title">Колбасы и мясные деликатесы</div>
            </div>
            <div className="header-products d-f align-center">
                <div className="header-favorites">
                    <div className="header-favorites-img"><img src="images/star.png" alt="star" /></div>
                    <div className="header-favorites-num">3</div>
                </div>
                <div className="header-cart d-f align-center">
                   <div className="header-cart-img"><img src="images/cart.png" alt="cart" /></div>
                   <div className="header-cart-info">
                      <div className="header-cart-count">Товаров: <span>{productNum}</span></div>
                      <div className="header-cart-price">{productPrice} $</div>
                   </div>
                </div>
            </div>
        </div>
        <div className="header-bar d-f jc-sb">
            <nav className='header-nav'>
                <ul className="nav-list d-f align-center">
                    <li className="nav-list-item"><Link to="/">Главная</Link></li>
                    <li className="nav-list-item">
                        <Link to="catalog">Каталог</Link>
                        <ul className="dropdown-menu">
                            <li className="dropdown-menu-item d-f align-center">
                                <div><img src="images/dropdown/dropdown1.png" alt="dropdown1" /></div>
                                <a href="">Хиты продаж</a>
                            </li>
                            <li className="dropdown-menu-item d-f align-center">
                                <div><img src="images/dropdown/dropdown2.png" alt="dropdown2" /></div>
                                <a href="">Скидки</a>
                            </li>
                            <li className="dropdown-menu-item d-f align-center">      
                                <div><img src="images/dropdown/dropdown3.png" alt="dropdown3" /></div>
                                <a href="">Новинки</a>
                            </li>                        
                            <li className="dropdown-menu-item d-f align-center">
                                <div><img src="images/dropdown/dropdown4.png" alt="dropdown4" /></div>
                                <a href="">Колбасные и мясные изделия</a>
                            </li>
                            <li className="dropdown-menu-item d-f align-center">
                                <div><img src="images/dropdown/dropdown5.png" alt="dropdown5" /></div>
                                <a href="">Молочные продукты</a>
                            </li>
                            <li className="dropdown-menu-item d-f align-center">
                                <div><img src="images/dropdown/dropdown6.png" alt="dropdown6" /></div>
                                <a href="">Морепродукты</a>
                            </li>
                            <li className="dropdown-menu-item d-f">
                                <div><img src="images/dropdown/dropdown7.png" alt="dropdown7" /></div>
                                <a href="">Пиво</a>
                            </li>
                            <li className="dropdown-menu-item d-f align-center">
                                <div><img src="images/dropdown/dropdown8.png" alt="dropdown8" /></div>
                                <a href="">Замороженные продукты</a>
                            </li>
                            <li className="dropdown-menu-item d-f align-center">
                                <div><img src="images/dropdown/dropdown9.png" alt="dropdown9" /></div>
                                <a href="">Мед</a>
                            </li>
                            <li className="dropdown-menu-item d-f align-center">
                                <div><img src="images/dropdown/dropdown10.png" alt="dropdown10" /></div>
                                <a href="">Свежие овощи</a>
                            </li>
                            <li className="dropdown-menu-item d-f align-center">
                                <div><img src="images/dropdown/dropdown11.png" alt="dropdown11" /></div>
                                <a href="">Свежие фрукты</a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-list-item"><Link to="history">О компании</Link></li>
                    <li className="nav-list-item"><Link to="promotions">Акции</Link></li>
                </ul>
            </nav>
            <form className="header-search d-f">
                <input type="text" name='search' placeholder='Поиск по сайту' />
                <button type="submit" className='header-search-btn'><img src="images/search.png" alt="search" /></button>
            </form>
        </div> 
    </header>
  )
}

export default Header