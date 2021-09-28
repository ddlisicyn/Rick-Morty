import React, { FC } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import logo from '../../img/header_logo.png';
import style from './Header.module.css';
import { Selector } from '../Selector/Selector';

type PropTypes = {
	handleChange: (fieldName: 'name' | 'status' | 'gender') => (e: React.ChangeEvent<HTMLInputElement>) => void,
	handleClick: (e: any) => void,
	status: string,
	gender: string
};

export const Header:FC<PropTypes> = ({
	handleChange,
	handleClick,
	status,
	gender,
}) => (
	<div className={style.header}>
		<img src={logo} alt="header-logo" />
		<div className={style.filter}>
			<TextField
				size="small"
				label="name"
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
			<Button onClick={handleClick}>About me</Button>
		</div>
	</div>
);
