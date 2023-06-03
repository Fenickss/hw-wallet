import React from 'react';

const InitialPage = () => {
  return (
    <section>
      <div className="container">
        <div>
          <img src="#" alt="изображение управления кошельком" />
          <h1>Finance App</h1>
        </div>
        <div className="Finance__menu">
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
              <button>Вход</button>
              <button>Регистрация</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default InitialPage;
