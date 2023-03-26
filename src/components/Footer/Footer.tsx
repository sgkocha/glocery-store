import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="footer-links">
            <h4 className="footer-title">Продукция</h4>
            <div className="footer-links-box d-f jc-sb">
               <div>               
                    <div className="footer-links-item"><a href="">Колбасные и мясные <br/>изделия</a></div>
                    <div className="footer-links-item"><a href="">Молочные продукты</a></div>
                </div> 
                <div>               
                    <div className="footer-links-item"><a href="">Морепродукты</a></div>
                    <div className="footer-links-item"><a href="">Пиво</a></div>
                </div>
                <div>               
                    <div className="footer-links-item"><a href="">Замороженные продукты</a></div>
                    <div className="footer-links-item"><a href="">Мед</a></div>
                </div>  
                <div>               
                    <div className="footer-links-item"><a href="">Свежие овощи</a></div>
                    <div className="footer-links-item"><a href="">Свежие фрукты</a></div>
                </div>    
            </div>
            <div className="footer-about d-f jc-sb">
                <div className="footer-about-item"><Link to="history" className='footer-title' style={{textDecoration: "none"}}>О компании</Link></div>
                <div className="footer-about-item"><a href="" className='footer-title' style={{textDecoration: "none"}}>Наши магазины</a></div>
                <div className="footer-about-item"><a href="" className='footer-title' style={{textDecoration: "none"}}>Контакты</a></div>
            </div>
        </div>
        <div className="footer-bar d-f jc-sb align-center">
            <div className="">2016–2021 &copy; ООО «ПД Реснота»</div>
            <div className="footer-social d-f">
                <div><img src="images/facebook.png" alt="facebook" /></div>
                <div><img src="images/VK.png" alt="VK" /></div>
                <div><img src="images/instagram.png" alt="instagram" /></div>
            </div>
            <div className="footer-seo">Разработка и продвижение сайта — SEOabsolut</div>
        </div>
    </footer>
  )
}

export default Footer