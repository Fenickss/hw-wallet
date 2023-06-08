import React from 'react';
import s from './ShoppingListPage.module.css';

const ShoppingListPage = () => {
  return (
    <>
      <div className={s.header}>
        <div className={s.container}>
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
        <div className={s.container__main}>
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
              <div className={s.priceConverter__main}>
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

                <ul className={s.buyingСurrency__list}>
                  <li className={s.buyingСurrency__item}>
                    <p className={s.buyingСurrency__text}>27.55</p>
                  </li>
                  <li className={s.buyingСurrency__item}>
                    <p className={s.buyingСurrency__text}>30.00</p>
                  </li>
                  <li className={s.buyingСurrency__item}>
                    <p className={s.buyingСurrency__text}>00.00</p>
                  </li>
                </ul>

                <ul className={s.saleСurrency__list}>
                  <li className={s.saleСurrency__item}>
                    <p className={s.saleСurrency__text}>27.65</p>
                  </li>
                  <li className={s.saleСurrency__item}>
                    <p className={s.saleСurrency__text}>30.10</p>
                  </li>
                  <li className={s.saleСurrency__item}>
                    <p className={s.saleСurrency__text}>00.00</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={s.todoList__position}>
            <div className={s.header__todoList}>
              <ul className={s.todoList__list}>
                <li className={s.todoList__item}>
                  <p className={s.todoList__text}>Дата</p>
                </li>
                <li className={s.todoList__item}>
                  <p className={s.todoList__text}>Тип</p>
                </li>
                <li className={s.todoList__item}>
                  <p className={s.todoList__text}>Категория</p>
                </li>
                <li className={s.todoList__item}>
                  <p className={s.todoList__text}>Комментарий</p>
                </li>
                <li className={s.todoList__item}>
                  <p className={s.todoList__text}>Сумма</p>
                </li>
                <li className={s.todoList__item}>
                  <p className={s.todoList__text}>Баланс</p>
                </li>
              </ul>
            </div>

            <div className={s.todoListMain__position}>
              <ul className={s.todoListMain__list}>
                <li className={s.todoListMain__item}>
                  <p className={s.todoListMain__text}>04.01.19</p>
                </li>
                <li className={s.todoListMain__item}>
                  <p className={s.todoListMain__text}>-</p>
                </li>
                <li className={s.todoListMain__item}>
                  <p className={s.todoListMain__text}>Разное</p>
                </li>
                <li className={s.todoListMain__item}>
                  <p className={s.todoListMain__text}>Подарок жене</p>
                </li>
                <li className={s.todoListMain__item}>
                  <p className={s.todoListMain__text}>300.00</p>
                </li>
                <li className={s.todoListMain__item}>
                  <p className={s.todoListMain__text}>6 900.00</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ShoppingListPage;
