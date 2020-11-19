import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img className={s.logo} src='https://firebasestorage.googleapis.com/v0/b/project-23ac0.appspot.com/o/flower-logo.png?alt=media&token=5944aa33-a796-45bc-9c62-28d998e3a505' alt='logo'/>
        </header>
    )
}

export default Header;