import React from "react";
import { Link } from 'react-router-dom'; 
//отрисовка "подвала" на странице
function Header() {
  return (
    <header className='header'>
      <p className='header__adres'>г. Москва, ул. Бутлерова, 3</p>
      <div className='header__container'>
        <Link to="/" className="header__link">
        <button className='header__button'>
          Главная
          </button>
          </Link>
          <Link to="/info" className="header__link">
             <button className='header__button'>О студии</button>
          </Link>
          <Link to='/contacts' className="header__link">
            <button className='header__button'>Расписание и контакты</button>
        </Link>
      </div>
      </header>
  );
}

export default Header;