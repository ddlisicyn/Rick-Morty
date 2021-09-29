import React, { FC } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import { Character, Status } from '../../types';
import style from './CharacterCard.module.css';
import { GENDERS, STATUS } from './helper';

export const CharacterCard:FC<{data: Character}> = ({ data }) => (
	<Card>
		<CardMedia
			component="img"
			height="140"
			image={data.image}
			alt="character avatar"
			style={{ objectFit: 'contain' }}
		/>
		<CardContent>
			<Tooltip title={data.name} placement="top-start">
				<Typography variant="subtitle1" className={style.name}>
					{data.name}
				</Typography>
			</Tooltip>
			<div className={style.icons}>
				<Tooltip title={data.gender} placement="bottom-start">
					<div className={style.icon}>
						{ GENDERS[data.gender] }
					</div>
				</Tooltip>
				<Tooltip title={data.status} placement="bottom-start">
					<div className={style.icon}>
						{ STATUS[data.status] }
					</div>
				</Tooltip>
			</div>
			<Typography variant="caption">
				{data.species}
			</Typography>
		</CardContent>
	</Card>
);
