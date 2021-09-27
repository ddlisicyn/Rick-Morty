import React from 'react';
import logo from '../../img/header_logo.png';
import style from './Header.module.css';

export const Header = () => (
	<div className={style.header}>
		<img src={logo} alt="header-logo" />
	</div>
);
