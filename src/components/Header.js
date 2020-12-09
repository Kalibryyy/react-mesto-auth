import React from 'react';

function Header({isLoggedIn, title}) {
    return (
    <>
        <div className="logo"></div>
        <div className="header__auth-title-wrapper">
            {isLoggedIn && <h2 className="header__auth-title">email@mail.com</h2>}
            <h2 className={isLoggedIn ? `header__auth-title header__auth-title_type_exit` : `header__auth-title`}>{title}</h2>
        </div>
    </>
    )
}

export default Header;





