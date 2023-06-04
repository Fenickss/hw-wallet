import React from 'react';
import s from './ShoppingListPage.module.css';

const ShoppingListPage = () => {
  return (
    <>
      <div className={s.container}>
        <div className={s.header}>
          <h1 className="logo">Wallet</h1>
          <ul className={s.header__list}>
            <li>
              <a className={s.header__link} href="/">
                Имя
              </a>
            </li>
            <li>
              <a className={s.header__link} href="/">
                Выйти
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={s.main}>
        <nav className={s.nav}>
          <ul className={s.nav__list}>
            <li className={s.nav__item}>
              <a className={s.nav__link} href="/">
                Главная
              </a>
            </li>
            <li className={s.nav__item}>
              <a className={s.nav__link} href="/">
                Статистика
              </a>
            </li>
          </ul>
        </nav>

        <div className="balance">
          <p>Ваш баланс</p>
          <span>{'24000.00'}</span>
        </div>
      </div>
    </>
  );
};

export default ShoppingListPage;
