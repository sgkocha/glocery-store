import React from 'react'
import ActionButton from '../components/ActionButton/ActionButton'
import './Promotions.css'

const Promotions = () => {
  const [viewMoreItems, setViewMoreItems] = React.useState(false) 

  const handleMoreBtn = () => {
    setViewMoreItems((prevState) => {
      return (
        !prevState 
      )
    })
  }

  return (
    <main>
      <section>
        <div className="promotions-caption d-f jc-sb align-center">
          <h3 className="promotions-title">Акции</h3>
          <div className="promotions-subtitle">С 10.08.2021 – бессрочно</div>
        </div>
      </section>
      <section>
        <div className="promotions-main">
          <p className="promotions-main-desc">
            Компания «ПД «Реснота» является производителеми продавцом высококачественной мясной продукции.
            В нашем ассортименте более 100 видов мясныхи колбасных изделий.
          </p>
          <p className="promotions-main-desc">Есть наш собственный мясокомбинат и несколько фирменных магазинов.</p>
        </div>
      </section>
      <section>
        <div className="promotions-top d-f">
          <div className="promotions-top-item">
            <div className="top-item-undertitle">С 10.08.2021 – бессрочно</div>
            <div className="top-item-title">Истина в качестве</div>
            <div className="top-item-desc">
              Компания «Реснота» производит более 100 видов продуктов питания, колбасные и мясные изделия,
              хлебная и молочная продукция
            </div>
          </div>
          <div className="promotions-top-item">
            <div className="top-item-undertitle">С 10.08.2021 – бессрочно</div>
            <div className="top-item-title">Истина в качестве</div>
            <div className="top-item-desc">
              Компания «Реснота» производит более 100 видов продуктов питания, колбасные и мясные изделия,
              хлебная и молочная продукция
            </div>
          </div>
          <div className="promotions-top-item">
            <div className="top-item-undertitle">С 10.08.2021 – бессрочно</div>
            <div className="top-item-title">Истина в качестве</div>
            <div className="top-item-desc">
              Компания «Реснота» производит более 100 видов продуктов питания, колбасные и мясные изделия,
              хлебная и молочная продукция
            </div>
          </div>
          <div className="promotions-top-item">
            <div className="top-item-undertitle">С 10.08.2021 – бессрочно</div>
            <div className="top-item-title">Истина в качестве</div>
            <div className="top-item-desc">
              Компания «Реснота» производит более 100 видов продуктов питания, колбасные и мясные изделия,
              хлебная и молочная продукция
            </div>
          </div>
          <div className="promotions-top-item">
            <div className="top-item-undertitle">С 10.08.2021 – бессрочно</div>
            <div className="top-item-title">Истина в качестве</div>
            <div className="top-item-desc">
              Компания «Реснота» производит более 100 видов продуктов питания, колбасные и мясные изделия,
              хлебная и молочная продукция
            </div>
          </div>
          <div className="promotions-top-item">
            <div className="top-item-undertitle">С 10.08.2021 – бессрочно</div>
            <div className="top-item-title">Истина в качестве</div>
            <div className="top-item-desc">
              Компания «Реснота» производит более 100 видов продуктов питания, колбасные и мясные изделия,
              хлебная и молочная продукция
            </div>
          </div>
          <div className="promotions-top-item">
            <div className="top-item-undertitle">С 10.08.2021 – бессрочно</div>
            <div className="top-item-title">Истина в качестве</div>
            <div className="top-item-desc">
              Компания «Реснота» производит более 100 видов продуктов питания, колбасные и мясные изделия,
              хлебная и молочная продукция
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="promotions-new">
          <div className="promotions-new-box d-f">
            <div className="promotions-new-item d-f">
              <div className="new-item-img"><img src="images/promotions-new1.png" alt="promotions-new1" /></div>
              <div className="new-item-content">
                <div className="new-item-date">22 февраля 2020</div>
                <div className="new-item-title">Новые позиции в каталоге</div>
                <div className="new-item-desc">
                  Вся продукция компании «РЕСНОТА», распространяемая в фирменных магазинах, запаковывается в фирменную упаковку
                  и обладает рядом преимуществ перед конкурентами.
                </div>
              </div>         
            </div>
            <div className="promotions-new-item d-f">
              <div className="new-item-img"><img src="images/promotions-new2.png" alt="promotions-new2" /></div>
              <div className="new-item-content">
                <div className="new-item-date">22 февраля 2020</div>
                <div className="new-item-title">Новые позиции в каталоге</div>
                <div className="new-item-desc">
                  Вся продукция компании «РЕСНОТА», распространяемая в фирменных магазинах, запаковывается в фирменную упаковку
                  и обладает рядом преимуществ перед конкурентами.
                </div>
              </div>         
            </div>
            <div className="promotions-new-item d-f">
              <div className="new-item-img"><img src="images/promotions-new3.png" alt="promotions-new3" /></div>
              <div className="new-item-content">
                <div className="new-item-date">22 февраля 2020</div>
                <div className="new-item-title">Новые позиции в каталоге</div>
                <div className="new-item-desc">
                  Вся продукция компании «РЕСНОТА», распространяемая в фирменных магазинах, запаковывается в фирменную упаковку
                  и обладает рядом преимуществ перед конкурентами.
                </div>
              </div>         
            </div>
            <div className="promotions-new-item d-f">
              <div className="new-item-img"><img src="images/promotions-new4.png" alt="promotions-new4" /></div>
              <div className="new-item-content">
                <div className="new-item-date">22 февраля 2020</div>
                <div className="new-item-title">Новые позиции в каталоге</div>
                <div className="new-item-desc">
                  Вся продукция компании «РЕСНОТА», распространяемая в фирменных магазинах, запаковывается в фирменную упаковку
                  и обладает рядом преимуществ перед конкурентами.
                </div>
              </div>         
            </div>
            <div className="promotions-new-item d-f">
              <div className="new-item-img"><img src="images/promotions-new5.png" alt="promotions-new5" /></div>
              <div className="new-item-content">
                <div className="new-item-date">22 февраля 2020</div>
                <div className="new-item-title">Новые позиции в каталоге</div>
                <div className="new-item-desc">
                  Вся продукция компании «РЕСНОТА», распространяемая в фирменных магазинах, запаковывается в фирменную упаковку
                  и обладает рядом преимуществ перед конкурентами.
                </div>
              </div>         
            </div>
            <div className="promotions-new-item d-f">
              <div className="new-item-img"><img src="images/promotions-new6.png" alt="promotions-new6" /></div>
              <div className="new-item-content">
                <div className="new-item-date">22 февраля 2020</div>
                <div className="new-item-title">Новые позиции в каталоге</div>
                <div className="new-item-desc">
                  Вся продукция компании «РЕСНОТА», распространяемая в фирменных магазинах, запаковывается в фирменную упаковку
                  и обладает рядом преимуществ перед конкурентами.
                </div>
              </div>         
            </div>
            <div className="promotions-new-item d-f">
              <div className="new-item-img"><img src="images/promotions-new7.png" alt="promotions-new7" /></div>
              <div className="new-item-content">
                <div className="new-item-date">22 февраля 2020</div>
                <div className="new-item-title">Новые позиции в каталоге</div>
                <div className="new-item-desc">
                  Вся продукция компании «РЕСНОТА», распространяемая в фирменных магазинах, запаковывается в фирменную упаковку
                  и обладает рядом преимуществ перед конкурентами.
                </div>
              </div>         
            </div>
            <div className="promotions-new-item d-f">
              <div className="new-item-img"><img src="images/promotions-new8.png" alt="promotions-new8" /></div>
              <div className="new-item-content">
                <div className="new-item-date">22 февраля 2020</div>
                <div className="new-item-title">Новые позиции в каталоге</div>
                <div className="new-item-desc">
                  Вся продукция компании «РЕСНОТА», распространяемая в фирменных магазинах, запаковывается в фирменную упаковку
                  и обладает рядом преимуществ перед конкурентами.
                </div>
              </div>         
            </div>
          </div>
          <div className= {viewMoreItems ? "promotions-new-box d-f" : "d-n"} style={{marginTop: "20px"}}>
            <div className="promotions-new-item d-f">
              <div className="new-item-img"><img src="images/promotions-new1.png" alt="promotions-new1" /></div>
              <div className="new-item-content">
                <div className="new-item-date">22 февраля 2020</div>
                <div className="new-item-title">Новые позиции в каталоге</div>
                <div className="new-item-desc">
                  Вся продукция компании «РЕСНОТА», распространяемая в фирменных магазинах, запаковывается в фирменную упаковку
                  и обладает рядом преимуществ перед конкурентами.
                </div>
              </div>         
            </div>
            <div className="promotions-new-item d-f">
              <div className="new-item-img"><img src="images/promotions-new2.png" alt="promotions-new2" /></div>
              <div className="new-item-content">
                <div className="new-item-date">22 февраля 2020</div>
                <div className="new-item-title">Новые позиции в каталоге</div>
                <div className="new-item-desc">
                  Вся продукция компании «РЕСНОТА», распространяемая в фирменных магазинах, запаковывается в фирменную упаковку
                  и обладает рядом преимуществ перед конкурентами.
                </div>
              </div>         
            </div>
            <div className="promotions-new-item d-f">
              <div className="new-item-img"><img src="images/promotions-new3.png" alt="promotions-new3" /></div>
              <div className="new-item-content">
                <div className="new-item-date">22 февраля 2020</div>
                <div className="new-item-title">Новые позиции в каталоге</div>
                <div className="new-item-desc">
                  Вся продукция компании «РЕСНОТА», распространяемая в фирменных магазинах, запаковывается в фирменную упаковку
                  и обладает рядом преимуществ перед конкурентами.
                </div>
              </div>         
            </div>
            <div className="promotions-new-item d-f">
              <div className="new-item-img"><img src="images/promotions-new4.png" alt="promotions-new4" /></div>
              <div className="new-item-content">
                <div className="new-item-date">22 февраля 2020</div>
                <div className="new-item-title">Новые позиции в каталоге</div>
                <div className="new-item-desc">
                  Вся продукция компании «РЕСНОТА», распространяемая в фирменных магазинах, запаковывается в фирменную упаковку
                  и обладает рядом преимуществ перед конкурентами.
                </div>
              </div>         
            </div>
            <div className="promotions-new-item d-f">
              <div className="new-item-img"><img src="images/promotions-new5.png" alt="promotions-new5" /></div>
              <div className="new-item-content">
                <div className="new-item-date">22 февраля 2020</div>
                <div className="new-item-title">Новые позиции в каталоге</div>
                <div className="new-item-desc">
                  Вся продукция компании «РЕСНОТА», распространяемая в фирменных магазинах, запаковывается в фирменную упаковку
                  и обладает рядом преимуществ перед конкурентами.
                </div>
              </div>         
            </div>
            <div className="promotions-new-item d-f">
              <div className="new-item-img"><img src="images/promotions-new6.png" alt="promotions-new6" /></div>
              <div className="new-item-content">
                <div className="new-item-date">22 февраля 2020</div>
                <div className="new-item-title">Новые позиции в каталоге</div>
                <div className="new-item-desc">
                  Вся продукция компании «РЕСНОТА», распространяемая в фирменных магазинах, запаковывается в фирменную упаковку
                  и обладает рядом преимуществ перед конкурентами.
                </div>
              </div>         
            </div>
            <div className="promotions-new-item d-f">
              <div className="new-item-img"><img src="images/promotions-new7.png" alt="promotions-new7" /></div>
              <div className="new-item-content">
                <div className="new-item-date">22 февраля 2020</div>
                <div className="new-item-title">Новые позиции в каталоге</div>
                <div className="new-item-desc">
                  Вся продукция компании «РЕСНОТА», распространяемая в фирменных магазинах, запаковывается в фирменную упаковку
                  и обладает рядом преимуществ перед конкурентами.
                </div>
              </div>         
            </div>
            <div className="promotions-new-item d-f">
              <div className="new-item-img"><img src="images/promotions-new8.png" alt="promotions-new8" /></div>
              <div className="new-item-content">
                <div className="new-item-date">22 февраля 2020</div>
                <div className="new-item-title">Новые позиции в каталоге</div>
                <div className="new-item-desc">
                  Вся продукция компании «РЕСНОТА», распространяемая в фирменных магазинах, запаковывается в фирменную упаковку
                  и обладает рядом преимуществ перед конкурентами.
                </div>
              </div>         
            </div>
          </div>
          <button className="promotions-new-btn" onClick = {()=>handleMoreBtn()}>
             { viewMoreItems ? "Скрыть" :  "Показать еще"}  
            </button>
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

export default Promotions