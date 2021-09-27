import React, { FC } from 'react';
import style from './Page.module.css';

type PropTypes = {
	children: React.ReactNode
};

export const Page:FC<PropTypes> = ({ children }) => (
	<div className={style.container}>
		{children}
	</div>
);
