import React, { FC } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Character } from '../../types';

export const CharacterCard:FC<{data: Character}> = ({ data }) => (
	<Card sx={{ width: 220 }}>
		<CardMedia
			component="img"
			height="140"
			image={data.image}
			alt="character avatar"
			style={{ objectFit: 'contain' }}
		/>
		<CardContent>
			<Typography variant="subtitle1">
				{data.name}
			</Typography>
			<Typography>
				{data.gender}
			</Typography>
			<Typography variant="caption">
				{data.species}
			</Typography>
			<Typography>
				{data.status}
			</Typography>
		</CardContent>
	</Card>
);
