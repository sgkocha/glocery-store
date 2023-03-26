import React from 'react'
import ActionButton from '../components/ActionButton/ActionButton'
import ProductCart from '../components/ProductCart/ProductCart'
import './Home.css'

type HomeProps = {
  changeProductsCount: () => void
  changeProductsPrice: (price: number) => void   
}

const Home = (props: HomeProps) => {

  const [tabNum, setTabNum] = React.useState(1)
  const info = ['Хиты', 'Скидки', 'Новинки']

  return (
    <main>
      <section>
        <div className="glocery-main">
          <h3 className="glocery-main-title">Истина в качестве</h3>
          <p className="glocery-main-desc">
            КОМПАНИЯ «РЕСНОТА» ПРОИЗВОДИТ БОЛЕЕ 100 ВИДОВ ПРОДУКТОВ ПИТАНИЯ:
            КОЛБАСНЫЕ И МЯСНЫЕ ИЗДЕЛИЯ,
            ХЛЕБНАЯ И МОЛОЧНАЯ ПРОДУКЦИЯ
          </p>
          <ActionButton title='Купить' bgColor='#0E2149' txtColor='#FFFFFF' />
        </div>
      </section>
      <section>
        <div className="glocery-categories d-f">
          <div className="glocery-categories-item">
            <div className="categories-item-title">Колбасные и мясные изделия</div>
            <div className="categories-item-desc">56 товаров</div>
          </div>
          <div className="glocery-categories-item">
            <div className="categories-item-title">Молочные продукты</div>
            <div className="categories-item-desc">
              Сыры, Десерты, Йогурты, Кисломолочная продукция,
              Молоко, Сметана, Творог, Творожная масса
            </div>
          </div>
          <div className="glocery-categories-item">
            <div className="categories-item-title">Морепродукты</div>
            <div className="categories-item-desc">Рыба, Икра, Креветки</div>
          </div>
          <div className="glocery-categories-item">
            <div className="categories-item-title">Пиво</div>
            <div className="categories-item-desc">Крафтовое пиво</div>
          </div>
          <div className="glocery-categories-item">
            <div className="categories-item-title">Замороженные продукты</div>
            <div className="categories-item-desc">Замороженные овощи, Замороженные фркуты</div>
          </div>
          <div className="glocery-categories-item">
            <div className="categories-item-title">Мёд</div>
            <div className="categories-item-desc">
              Мед горный 0,25 кг, <br />
              Мед с облепихой 0,25 кг,<br />
              Мед с черникой 0,25 кг,<br />
              Мед с разнотравья 0,25 кг,<br />
              Мед цветочный 0,25 кг
            </div>
          </div>
          <div className="glocery-categories-item">
            <div className="categories-item-title">Свежие овощи</div>
            <div className="categories-item-desc">Картофель, Огурцы, Помидоры</div>
          </div>
          <div className="glocery-categories-item">
            <div className="categories-item-title">Свежие фрукты</div>
            <div className="categories-item-desc">Сезонные яблоки</div>
          </div>
        </div>
      </section>
      <section>
        <div className="glocery-catalog">
          <div className="glocery-catalog-tabs d-f">
            <button
              className={tabNum === 0 ? 'catalog-tabs-btn tabs-btn__active' : 'catalog-tabs-btn'}
              onClick={() => setTabNum(0)}
            >Хиты</button>
            <button
              className={tabNum === 1 ? 'catalog-tabs-btn tabs-btn__active' : 'catalog-tabs-btn'}
              onClick={() => setTabNum(1)}
            >Скидки</button>
            <button
              className={tabNum === 2 ? 'catalog-tabs-btn tabs-btn__active' : 'catalog-tabs-btn'}
              onClick={() => setTabNum(2)}
            >Новинки</button>
          </div>
          <div className="glocery-catalog-box d-f jc-sb align-center">
            <button className='glocery-catalog-btn'><img src="images/arrow-left.png" alt="arrow-left" /></button>
            <div className="glocery-catalog-content d-f">
              <ProductCart
                productInfo={info[tabNum]}
                image='images/catalog-item1.png'
                title='Говядина, кусок с/к'
                productDesc='Свинина, смесь посолочная (соль, нитрит натрия), коньяк, натуральные специи, сахар.'
                currentPrice={7}
                originalPrice={9}
                changeProductsCount={props.changeProductsCount}
                changeProductsPrice={props.changeProductsPrice}
              />
              <ProductCart
                productInfo={info[tabNum]}
                image='images/catalog-item2.png'
                title='Говядина, кусок с/к'
                productDesc='Свинина, смесь посолочная (соль, нитрит натрия), коньяк, натуральные специи, сахар.'
                currentPrice={7}
                originalPrice={9}
                changeProductsCount={props.changeProductsCount}
                changeProductsPrice={props.changeProductsPrice}
              />
              <ProductCart
                productInfo={info[tabNum]}
                image='images/catalog-item1.png'
                title='Говядина, кусок с/к'
                productDesc='Свинина, смесь посолочная (соль, нитрит натрия), коньяк, натуральные специи, сахар.'
                currentPrice={7}
                originalPrice={9}
                changeProductsCount={props.changeProductsCount}
                changeProductsPrice={props.changeProductsPrice}
              />
              <ProductCart
                productInfo={info[tabNum]}
                image='images/catalog-item3.png'
                title='Говядина, кусок с/к'
                productDesc='Свинина, смесь посолочная (соль, нитрит натрия), коньяк, натуральные специи, сахар.'
                currentPrice={7}
                originalPrice={9}
                changeProductsCount={props.changeProductsCount}
                changeProductsPrice={props.changeProductsPrice}
              />
            </div>
            <button className='glocery-catalog-btn'><img src="images/arrow-right.png" alt="arrow-left" /></button>
          </div>
        </div>
      </section>
      <section>
        <div className="glocery-questions d-f jc-sb align-center">
          <div className="glocery-questions-caption">
            <h3 className="glocery-questions-title">Есть вопросы?</h3>
            <p className="glocery-questions-desc">
              Оставьте свои данные и наш менеджер свяжется с вами в ближайшее время.
            </p>
          </div>
          <div className="glocery-questions-img"><img src="images/huge-logo.png" alt="huge-logo" /></div>
          <form className='glocery-questions-fm'>
            <div className="input-txt-bl d-f">
              <div className="input-bl">
                <input type="text" name='userName' placeholder='Ваше имя' />
                <input type="text" name='contactInfo' placeholder='Телефон/E-mail' />
              </div>
              <textarea name="comment" value="Комментарий" />
            </div>
            <div className='checkbox-bl d-f align-center'>
              <input type="checkbox" name="advAgr" id="advAgr" />
              <label htmlFor="advAgr">Даю согласие на рассылку рекламных материалов, акций и скидок</label>
            </div>
            <div className='checkbox-bl d-f align-center' style={{marginBottom: "18px"}}>
              <input type="checkbox" name="personAgr" id="personAgr" />
              <label htmlFor="personAgr">Даю согласие на обработку моих персональных данных</label>
            </div>
            <ActionButton title='Отправить' bgColor='#D79F43' txtColor='#FFFFFF' />
          </form>
        </div>
      </section>
    </main>
  )
}

export default Home