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
      <main className={s.main}>
        <div className={s.nav__posicion}>
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

          <div className={s.balance}>
            <div className={s.balance__posicion}>
              <p className={s.balance__text}>Ваш баланс</p>
              <span className={s.balance__number}>{'24000.00'}</span>
            </div>
          </div>

          <div className={s.priceConverter}>
            <div className={s.priceConverter__header}>
              <ul className={s.priceConverter__list}>
                <li className={s.priceConverter__item}>
                  <p className={s.priceConverter__title}>Валюта</p>
                </li>
                <li className={s.priceConverter__item}>
                  <p className={s.priceConverter__title}>Покупка</p>
                </li>
                <li className={s.priceConverter__item}>
                  <p className={s.priceConverter__title}>Продажа</p>
                </li>
              </ul>
            </div>
            <ul className={s.currencies__list}>
              <li className={s.currencies__item}>
                <p className={s.currencies__text}>USD</p>
              </li>
              <li className={s.currencies__item}>
                <p className={s.currencies__text}>EUR</p>
              </li>
              <li className={s.currencies__item}>
                <p className={s.currencies__text}>RUB</p>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
};

export default ShoppingListPage;
