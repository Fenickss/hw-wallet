import React from 'react';
import style from './InitialPage.module.css';

const InitialPage = () => {
  return (
    <section className="section">
      <div className={style.container}>
        <div>
          <img src="" alt="изображение управления кошельком" width="435px" />
          <h1>Finance App</h1>
        </div>
        <div className="Finance__menu">
          <p className="logo">Wallet</p>
          <form className="form" action="">
            <div className="form__field">
              <input
                className="form__input"
                type="email"
                name="email"
                placeholder="E-mail"
              />
              <label className="form-label" htmlFor="email"></label>
            </div>
            <div className="form__field">
              <input
                className="form__input"
                type="password"
                name="password"
                placeholder="Пароль"
              />
              <label className="form-label" htmlFor="password"></label>
            </div>

            <div className="form__button--position">
              <button className="entry">Вход</button>
              <button className="registration">Регистрация</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default InitialPage;
