import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import avatar from '../../img/avatar.png';
import githubLogo from '../../img/GitHub_logo.png';
import { Status, Genders } from '../../types/index';
import { CharacterCard } from '../../components/Card/CharacterCard';
import style from './ProfilePage.module.css';

const data = {
	id: 1,
	name: 'Даниил Лисицын',
	status: Status.Alive,
	species: 'Human',
	type: '',
	gender: Genders.Male,
	image: avatar,
	episode: [],
	url: '',
	created: '',
};

export const ProfilePage = () => {
	const history = useHistory();

	return (
		<div className={style.main}>
			<Button color="primary" onClick={() => history.goBack()}>
				back to main page
			</Button>
			<h2>Обо мне</h2>
			<div className={style.content}>
				<div className={style.card}>
					<CharacterCard data={data} />
				</div>
				<div className={style.description}>
					<p>
						Привет! Меня зовут Даниил и я начинающий Front-end разработчик.
						На четвертом курсе меня заинтересовало программирование и первоначально мною был выбран
						курс на hexlet &#34;Основы программирования&#34;. Базовым языком курса был JavaScript.
						Мне понравились гибкость языка и его возможности. Для дальнейшего изучения был выбран
						&#34;Современный учебник JavaScript&#34; Ильи Кантора. Параллельно этому проходил
						курс на Udemy &#34;Полный курс по JavaScript + React&#34; Ивана Петреченко,
						а также изучал верстку. Все свои навыки и знания я всегда закреплял на практике.
						Поэтому вы можете не стесняться и перейти на профиль GitHub, чтобы ознакомиться с моими
						проектами :)
					</p>
				</div>
			</div>
			<a href="https://github.com/ddlisicyn" target="_blank" rel="noreferrer">
				<img src={githubLogo} alt="github" />
			</a>
		</div>
	);
};
