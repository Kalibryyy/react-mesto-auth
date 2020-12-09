import React from "react";

function Register(props) { 
  const [formValues, setFormValues] = React.useState({
    email: "",
    password: "",
  });

  console.log(formValues);

  const { email, password } = formValues;

  const handleInputChange = React.useCallback(
    (e) => {
      const { name, value } = e.target;
      setFormValues((prevState) => ({ ...prevState, [name]: value })); // объект меняется при каждом изменении, в setFormValues возвращаем этот новый объект, кот состоит из старых и нового перезаписанного поля
    },
    [setFormValues],
  );

  function handleSubmit(e) {
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    props.onFormSubmit({
      email,
      password
    });
  }

  return (
    <div className="modal modal_opened modal_type_auth">
      <form onSubmit={handleSubmit}>
        <h2 className="modal__title modal__title_type_auth">Регистрация</h2>
        <input
          type="text"
          className="modal__input modal__input_type_auth"
          name="email"
          // value={email}
          placeholder="Email"
          minLength="1"
          maxLength="30"
          required
          onChange={handleInputChange}
        />
        <input
          type="url"
          className="modal__input modal__input_type_auth"
          name="password"
          // value={password}
          placeholder="Пароль"
          required
          onChange={handleInputChange}
        />
        <button type="submit" className="modal__btn modal__btn_type_auth">
          Зарегистрироваться
        </button>
        <p className="modal__auth-paragraph hover">
          Уже зарегистрированы? Войти
        </p>
      </form>
    </div>
  );
}

export default Register;
