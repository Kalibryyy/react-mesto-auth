import React from 'react';
import tickIcon from '../images/tick-icon.svg';
import closeIcon from '../images/close-icon.svg';

function InfoToolTip({isOpen, onClose}) {

  return (
    <div className={isOpen ? `modal modal_opened` : `modal`}>
    <div className="modal__overlay"></div>
    <div className='modal__container modal_type_auth'> 
    <img src={closeIcon} alt="закрывающая иконка" className="modal__close hover" onClick={onClose} />
      <img src={tickIcon} alt="закрывающая иконка" className="modal__auth-tick" />
      <h2 className="modal__title modal__title_type_auth-tooltip">Вы успешно зарегистрировались!</h2>
    </div>
    </div>
  )
}

export default InfoToolTip;


