import React from 'react'
import ProductCart from '../components/ProductCart/ProductCart'
import './Catalog.css'

type CatalogProps = {
    changeProductsCount: () => void
    changeProductsPrice: (price: number) => void   
}

const Catalog = (props: CatalogProps) => {
  const info = ['Хит', 'Скидкa','New']
  const [viewMore, setViewMore] = React.useState(false)

  const handleMore = () => {
    setViewMore((prevState) => {
      return (
        !prevState
      )
    })
  }

  return (
    <main>
      <div className="catalog-wr d-f">
        <div className="catalog-filter">
          <ul className='catalog-filter-list'>
            <li className="filter-list-item list-item__active">Хиты продаж</li>
            <li className="filter-list-item">Скидки</li>
            <li className="filter-list-item">Новинки</li>
            <li className="filter-list-item list-item__active">Колбасные и мясные<br />изделия
              <ul className='catalog-filter-sublist'>
                <li className="filter-sublist-item">Продукты из мяса и птицы</li>
                <li className="filter-sublist-item">Сосиски и сардельки</li>
                <li className="filter-sublist-item sublist-item__active">Деликатесы</li>
                <li className="filter-sublist-item">Колбасы</li>
                <li className="filter-sublist-item">Полуфабрикаты</li>
              </ul>
            </li>
            <li className="filter-list-item">Молочные продукты</li>
            <li className="filter-list-item">Морепродукты</li>
            <li className="filter-list-item">Пиво</li>
            <li className="filter-list-item">Замороженные продукты</li>
            <li className="filter-list-item">Мед</li>
            <li className="filter-list-item">Свежие овощи</li>
            <li className="filter-list-item">Свежие фрукты</li>
          </ul>
          <div className="filter-categories">
            <h3 className="filter-categories-title">Фильтр</h3>
            <div className="filter-categories-price">
              <h4 className="categories-price-title">Цена</h4>
              <div className="categories-price-box d-f">
                <div className="categories-price-min">2</div>
                <div className="categories-price-max">29</div>
              </div>
              <div className='filter-categories-range'> <input type="range" name="price" min="1" max="1430" /> </div>
            </div>
            <div className="filter-categories-sort">
              <h4 className="categories-sort-title">Сортировать</h4>
              <form className="categories-sort-fm">
                <div className='d-f align-center'>
                  <input type="checkbox" name="stock" id="stock" checked />
                  <label htmlFor="stock">В наличии (87)</label>
                </div>
                <div className='d-f align-center'>
                  <input type="checkbox" name="hit" id="hit" checked />
                  <label htmlFor="hit">Хит (7)</label>
                </div>
                <div className='d-f align-center'>
                  <input type="checkbox" name="new" id="new" />
                  <label htmlFor="new">Новинки (18)</label>
                </div>
                <div className='d-f align-center'>
                  <input type="checkbox" name="promotions" id="promotions" />
                  <label htmlFor="promotions">Акции (6)</label>
                </div>
              </form>
              <button className='filter-categories-btn'>Сбросить фильтр</button>
            </div>
          </div>
        </div>
        <div className="catalog-main">
          <h3 className="catalog-main-title">Каталог</h3>
          <div className="catalog-main-tags d-f">
            <div className="main-tags-item">Все</div>
            <div className="main-tags-item">Балык</div>
            <div className="main-tags-item">Бекон</div>
            <div className="main-tags-item">Вырезка</div>
            <div className="main-tags-item tags-item-active">Говядина</div>
            <div className="main-tags-item">Голяшка</div>
            <div className="main-tags-item">Грудинка</div>
            <div className="main-tags-item">Карбонад</div>
            <div className="main-tags-item">Корейка</div>
            <div className="main-tags-item">Мясные хлеба</div>
            <div className="main-tags-item">Пасторма</div>
            <div className="main-tags-item">Суджук</div>
            <div className="main-tags-item">Шея</div>
          </div>
          <select className="catalog-main-select">
            <option value="default">По умолчанию</option>
          </select>
          <div className="catalog-main-content d-f">
            <ProductCart
              productInfo={info[0]}
              image='images/catalog-item1.png'
              title='Говядина, кусок с/к'
              productDesc='Свинина, смесь посолочная (соль, нитрит натрия), коньяк, натуральные специи, сахар.'
              currentPrice={7}
              originalPrice={9}
              changeProductsCount={props.changeProductsCount}
              changeProductsPrice={props.changeProductsPrice}
            />
            <ProductCart
              productInfo={info[2]}
              image='images/catalog-item2.png'
              title='Говядина, кусок с/к'
              productDesc='Свинина, смесь посолочная (соль, нитрит натрия), коньяк, натуральные специи, сахар.'
              currentPrice={7}
              originalPrice={9}
              changeProductsCount={props.changeProductsCount}
              changeProductsPrice={props.changeProductsPrice}
            />
            <ProductCart
              productInfo={info[1]}
              image='images/catalog-item1.png'
              title='Говядина, кусок с/к'
              productDesc='Свинина, смесь посолочная (соль, нитрит натрия), коньяк, натуральные специи, сахар.'
              currentPrice={7}
              originalPrice={9}
              changeProductsCount={props.changeProductsCount}
              changeProductsPrice={props.changeProductsPrice}
            />
            <ProductCart
              productInfo={info[0]}
              image='images/catalog-item3.png'
              title='Говядина, кусок с/к'
              productDesc='Свинина, смесь посолочная (соль, нитрит натрия), коньяк, натуральные специи, сахар.'
              currentPrice={7}
              originalPrice={9}
              changeProductsCount={props.changeProductsCount}
              changeProductsPrice={props.changeProductsPrice}
            />
              <ProductCart
              productInfo={info[1]}
              image='images/catalog-item1.png'
              title='Говядина, кусок с/к'
              productDesc='Свинина, смесь посолочная (соль, нитрит натрия), коньяк, натуральные специи, сахар.'
              currentPrice={7}
              originalPrice={9}
              changeProductsCount={props.changeProductsCount}
              changeProductsPrice={props.changeProductsPrice}
            />
            <ProductCart
              productInfo={info[2]}
              image='images/catalog-item2.png'
              title='Говядина, кусок с/к'
              productDesc='Свинина, смесь посолочная (соль, нитрит натрия), коньяк, натуральные специи, сахар.'
              currentPrice={7}
              originalPrice={9}
              changeProductsCount={props.changeProductsCount}
              changeProductsPrice={props.changeProductsPrice}
            />
          </div>
          <div className= {viewMore ? "catalog-main-content d-f" : "d-n"}>
            <ProductCart
              productInfo={info[0]}
              image='images/catalog-item1.png'
              title='Говядина, кусок с/к'
              productDesc='Свинина, смесь посолочная (соль, нитрит натрия), коньяк, натуральные специи, сахар.'
              currentPrice={7}
              originalPrice={9}
              changeProductsCount={props.changeProductsCount}
              changeProductsPrice={props.changeProductsPrice}
            />
            <ProductCart
              productInfo={info[2]}
              image='images/catalog-item2.png'
              title='Говядина, кусок с/к'
              productDesc='Свинина, смесь посолочная (соль, нитрит натрия), коньяк, натуральные специи, сахар.'
              currentPrice={7}
              originalPrice={9}
              changeProductsCount={props.changeProductsCount}
              changeProductsPrice={props.changeProductsPrice}
            />
            <ProductCart
              productInfo={info[1]}
              image='images/catalog-item1.png'
              title='Говядина, кусок с/к'
              productDesc='Свинина, смесь посолочная (соль, нитрит натрия), коньяк, натуральные специи, сахар.'
              currentPrice={7}
              originalPrice={9}
              changeProductsCount={props.changeProductsCount}
              changeProductsPrice={props.changeProductsPrice}
            />
            <ProductCart
              productInfo={info[0]}
              image='images/catalog-item3.png'
              title='Говядина, кусок с/к'
              productDesc='Свинина, смесь посолочная (соль, нитрит натрия), коньяк, натуральные специи, сахар.'
              currentPrice={7}
              originalPrice={9}
              changeProductsCount={props.changeProductsCount}
              changeProductsPrice={props.changeProductsPrice}
            />
              <ProductCart
              productInfo={info[1]}
              image='images/catalog-item1.png'
              title='Говядина, кусок с/к'
              productDesc='Свинина, смесь посолочная (соль, нитрит натрия), коньяк, натуральные специи, сахар.'
              currentPrice={7}
              originalPrice={9}
              changeProductsCount={props.changeProductsCount}
              changeProductsPrice={props.changeProductsPrice}
            />
            <ProductCart
              productInfo={info[2]}
              image='images/catalog-item2.png'
              title='Говядина, кусок с/к'
              productDesc='Свинина, смесь посолочная (соль, нитрит натрия), коньяк, натуральные специи, сахар.'
              currentPrice={7}
              originalPrice={9}
              changeProductsCount={props.changeProductsCount}
              changeProductsPrice={props.changeProductsPrice}
            />
          </div>
          <button className="catalog-main-btn" onClick={()=> handleMore()}>
             {viewMore ? "Скрыть" :   "Показать еще"}
          </button>
        </div>
      </div>
    </main>
  )
}

export default Catalog