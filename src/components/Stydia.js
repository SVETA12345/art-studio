import React, { useState } from "react";
import profi from '../images/stydia_hram-white.jpg'
import priroda from '../images/priroda.jpg'
import stydia from '../images/stydia.jpg'
import vistavka from '../images/vistavka.jpg'
import { useMediaQuery } from "../hooks/useMediaQuery";
import strelkaVPered from '../images/strelka_vpered.png'
import strelkaNazad from '../images/strelka_nazad.png'
import constants from '../constants'
//отрисовка страницы "О студии"
function Stydia({setCard}) {
  const {pictureList} = constants;
  const [index, setIndex] = useState(0);
  const isTablet = useMediaQuery("(min-width: 768px)");
  function onClickImageFirst(){
    setCard({link:pictureList[index]})
  }
  function onClickImageLast(){
    setCard({link: pictureList[index+1]})
  }
  function handleSubmitVpered(e){
    e.preventDefault();
    if (index+2 <pictureList.length){
      setIndex(index+1)
    }
  }
  function handleSubmitNazad(e){
    e.preventDefault();
    if (index-1 >= 0){
      setIndex(index-1)
    }
  }
  return (
    <>
    <section className="places">
        <div className="place">
            <div>
              <h2 className="place__title">
                  От новичка до профи
               </h2>
               <p className="place__paragraf">
               Художественная студия специализируется на обучении рисованию учеников с любым уровнем подготовки. Даже если вы никогда не брали кисточку в руки и не посещали никакие курсы рисования, с нами у вас получится написать красивую картину уже на первом занятии. Нас выбирают потому, что мы гарантируем качество, умеем слушать и создаем неповторимую творческую атмосферу.
               </p>
            </div>
            <img className="place__img" src={profi} alt="kartina"></img>
        </div>
        <div className="place">
            <div>
              <h2 className="place__title">
                Выезды на природу
               </h2>
               <p className="place__paragraf">
               У вас есть уникальная возможность порисовать на природе в обществе дружной компании. Выезды проводятся каждый год летом в хорошую погоду.
               </p>
            </div>
            <img className="place__img" src={priroda} alt="kartina"></img>
        </div>
        <div className="place">
            <div>
              <h2 className="place__title">
              Свобода творчеству
               </h2>
               <p className="place__paragraf">
               Вас никто не ограничивает в выборе. Вы можете рисовать чем хотите и что хотите. Кому-то больше по душе масло, а кому-то акварель или карандаш. В студии представлено много экспозиций, которые можно нарисовать
               </p>
            </div>
            <img className="place__img" src={stydia} alt="kartina"></img>
        </div>
        <div className="place">
            <div>
              <h2 className="place__title">
                Выставки
               </h2>
               <p className="place__paragraf">
               Несколько раз в год университет устраивает выставку картин. Их можно будет посмотреть в переходе между первым и вторым корпусами
               </p>
            </div>
            <img className="place__img" src={vistavka} alt="kartina"></img>
        </div>
    </section>
    <h2 className="stydia__title">Наши работы</h2>
    {isTablet ? (
      <div className="stydia__kartin">
      <button type="button" className="stydia__vpered" onClick={handleSubmitNazad}>
          <img className="studia__strelka" alt="strelka" src={strelkaNazad} />
      </button>
      <div className="stydia__container">
          <img className="stydia__img" onClick={onClickImageFirst} alt="kartina" src={pictureList[index]}></img>
          <img className="stydia__img" onClick={onClickImageLast} alt="kartina" src={pictureList[index+1]}></img>
      </div>
      <button type="button" className="stydia__vpered" onClick={handleSubmitVpered}>
          <img className="studia__strelka" alt="strelka" src={strelkaVPered}></img>
      </button>
  </div>
    ) :(
      <div className="stydia__kartin">
      <button type="button" className="stydia__vpered" onClick={handleSubmitNazad}>
          <img className="studia__strelka" alt="strelka" src={strelkaNazad} />
      </button>
      <div className="stydia__container">
          <img className="stydia__img" onClick={onClickImageFirst} alt="kartina" src={pictureList[index]}></img>
      </div>
      <button type="button" className="stydia__vpered" onClick={handleSubmitVpered}>
          <img className="studia__strelka" alt="strelka" src={strelkaVPered}></img>
      </button>
  </div>
    )
    }
    
    </>
  );
}

export default Stydia;