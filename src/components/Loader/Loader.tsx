import React, { ReactNode, FC } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import style from './Loader.module.css';

type PropTypes = {
	loading: boolean,
	children: ReactNode
}

export const Loader:FC<PropTypes> = ({ loading, children }) => (loading ? (
	<div className={style.wrapper}>
		<CircularProgress value={100} />
	</div>
) : <>{children}</>);
