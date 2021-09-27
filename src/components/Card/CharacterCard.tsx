import React, { FC } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Character } from '../../types';

export const CharacterCard:FC<{data: Character}> = ({ data }) => (
	<Card sx={{ width: 200 }}>
		<CardMedia
			component="img"
			height="140"
			image={data.image}
			alt="character avatar"
			style={{ objectFit: 'contain' }}
		/>
		<CardContent>
			<Typography gutterBottom variant="h5" component="div">
				{data.name}
			</Typography>
			<Typography variant="body2" color="text.secondary">
				{data.gender}
			</Typography>
			<Typography>
				{data.species}
			</Typography>
			<Typography>
				{data.status}
			</Typography>
			<Typography>
				{data.gender}
			</Typography>
		</CardContent>
	</Card>
);
