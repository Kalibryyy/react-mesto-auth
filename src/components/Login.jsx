import React from "react";

function Login() {
  return (
    <div className="modal modal_opened modal_type_auth">
      <form className="form__container">
        <h2 className="modal__title modal__title_type_auth">Вход</h2>
        <input
          type="text"
          className="modal__input modal__input_type_auth"
          name="name"
          placeholder="Email"
          minLength="1"
          maxLength="30"
          required
        />
        <input
          type="url"
          className="modal__input modal__input_type_auth"
          name="link"
          placeholder="Пароль"
          required
        />
        <button type="submit" className="modal__btn modal__btn_type_auth">
          Войти
        </button>
      </form>
    </div>
  );
}

export default Login;
