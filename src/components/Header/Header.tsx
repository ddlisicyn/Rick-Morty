import React, { FC } from 'react';
import TextField from '@mui/material/TextField';
import logo from '../../img/header_logo.png';
import style from './Header.module.css';
import { Selector } from '../Selector/Selector';

type PropTypes = {
	handleChange: (fieldName: 'name' | 'status' | 'gender') => (e: React.ChangeEvent<HTMLInputElement>) => void,
	status: string,
	gender: string
};

export const Header:FC<PropTypes> = ({ handleChange, status, gender }) => (
	<div className={style.header}>
		<img src={logo} alt="header-logo" />
		<TextField
			id="outlined-basic"
			label="Name"
			variant="outlined"
			onChange={handleChange('name')}
		/>
		<Selector
			handleChange={handleChange('status')}
			title="status"
			options={['alive', 'dead', 'unknown']}
			value={status}
		/>
		<Selector
			handleChange={handleChange('gender')}
			title="gender"
			options={['female', 'male', 'genderless', 'unknown']}
			value={gender}
		/>
	</div>
);
