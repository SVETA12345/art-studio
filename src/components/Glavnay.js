import React from "react";
//отрисовка главной страницы
function Glavnay() {
  return (
    <>
      <section className='glavnay'>
        <h1 className='glavnay__title'>Художественная студия РГУ нефти и газа им. И. М. Губкина</h1>
        <ul className='glavnay__menu'>
          <li className='glavnay__menu_text'>+ <i>Уютная студия в Центре досуга студентов </i></li>
          <li className='glavnay__menu_text'>+ <i>Занятия в удобное для вас время</i></li>
          <li className='glavnay__menu_text'>+ <i>Программы для разного уровня подготовки</i></li>
        </ul>
      </section>
      </>
  );
}

export default Glavnay;