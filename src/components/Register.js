import React from 'react';
import InfoToolTip from './InfoTooltip';


function Register() {
  function handleSubmit(e) {
    e.preventDefault();

    // setIsAuthPopupOpen(!isAuthPopupOpen); перенести в App - общее для Login и Register
  }

  return (
    <div className='modal modal_opened modal_type_auth'> 
      <form onSubmit="handleSubmit">
          <h2 className="modal__title modal__title_type_auth">Регистрация</h2>
          <input type="text" className="modal__input modal__input_type_auth" name="name" placeholder="Email" minLength="1" maxLength="30" required />
          <input type="url" className="modal__input modal__input_type_auth" name="link" placeholder="Пароль" required />
          <button type="submit" className="modal__btn modal__btn_type_auth">Зарегистрироваться</button>
          <p className='modal__auth-paragraph hover'>Уже зарегистрированы? Войти</p>
      </form>
      <InfoToolTip />
    </div>
  )
}

export default Register;

        // {isLoggedIn ? <InfoToolTip : />}