import React from "react";
//отрисовка главной страницы
function Contacts() {
    return (
        <section className='contacts'>
            <h2 className='contacts__title'>Расписание</h2>
            <p className="contacts__subtitle">Занятия проводятся только для студентов РГУ нефти и газа им. И. М. Губкина</p>
            <ul className="contacts__lists">
                <li className="contacts__paragraph">Вoскресенье: 17:00-22:00</li>
                <li className="contacts__paragraph">Четверг: 19:00-22:00</li>
            </ul>
            <h2 className='contacts__title'>Контакты</h2>
            <p className="contacts__lists">Телефон: 8 937 004-55-21</p>
            <p className="contacts__lists">Адрес: улица Бутлерова, дом 3, город Москва</p>
            <div className="contacts__carta">
                <iframe  src="https://yandex.ru/map-widget/v1/?um=constructor%3A8d6b09b85ce955bc38915dcaa00b175c626ca33d7203a75a3338851b2e10a391&amp;source=constructor" width="100%" height="421" frameborder="0"></iframe>
            </div> 
        </section>
    );
}

export default Contacts;