import React from 'react';

function Register({onSubmit}) {

  return (
    <div className='modal modal_opened modal_type_auth'> 
      <form onSubmit={onSubmit}>
          <h2 className="modal__title modal__title_type_auth">Регистрация</h2>
          <input type="text" className="modal__input modal__input_type_auth" name="name" placeholder="Email" minLength="1" maxLength="30" required />
          <input type="url" className="modal__input modal__input_type_auth" name="link" placeholder="Пароль" required />
          <button type="submit" className="modal__btn modal__btn_type_auth">Зарегистрироваться</button>
          <p className='modal__auth-paragraph hover'>Уже зарегистрированы? Войти</p>
      </form>
    </div>
  )
}

export default Register;
