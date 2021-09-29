import React, { FC } from 'react';
import Typography from '@mui/material/Typography';
import style from './Empty.module.css';

export const Empty:FC<{text: string}> = ({ text }) => (
	<div className={style.content}>
		<Typography variant="caption">
			{text}
		</Typography>
	</div>
);
