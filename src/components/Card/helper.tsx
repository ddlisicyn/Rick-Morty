import React from 'react';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import BlockIcon from '@mui/icons-material/Block';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import NotListedLocationIcon from '@mui/icons-material/NotListedLocation';
import MoodIcon from '@mui/icons-material/Mood';
import MoodBadIcon from '@mui/icons-material/MoodBad';
import { Genders, Status } from '../../types';

export const GENDERS = {
	[Genders.Male]: <MaleIcon color="primary" />,
	[Genders.Female]: <FemaleIcon color="error" />,
	[Genders.Genderless]: <BlockIcon />,
	[Genders.Unknown]: <HelpOutlineIcon />,
};

export const STATUS = {
	[Status.Alive]: <MoodIcon />,
	[Status.Dead]: <MoodBadIcon />,
	[Status.Unknown]: <NotListedLocationIcon />,
};
