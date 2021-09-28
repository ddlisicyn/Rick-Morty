import React, { FC } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

type PropTypes = {
	handleChange: (e: any) => void,
	title: string,
	options: string[],
	value: string
};

export const Selector:FC<PropTypes> = ({
	handleChange,
	title,
	options,
	value,
}) => (
	<Box sx={{ minWidth: 120 }}>
		<FormControl fullWidth>
			<InputLabel id="demo-simple-select-label">{title}</InputLabel>
			<Select
				labelId="demo-simple-select-label"
				id="demo-simple-select"
				value={value}
				label={title}
				onChange={handleChange}
			>
				{
					options.map((option) => (
						<MenuItem key={option} value={option}>{option}</MenuItem>
					))
				}
			</Select>
		</FormControl>
	</Box>
);
