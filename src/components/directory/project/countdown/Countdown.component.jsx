import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const getCurrentTime = () => {
	const today = new Date();
	const month = months[today.getMonth()];
	const date = today.getDate();
	const day = days[today.getDay() + 1];
	const year = today.getFullYear();
	const hour = today.getHours();
	const minute = today.getMinutes();
	const second = today.getSeconds();
	return {
		month,
		date,
		day,
		year,
		hour,
		minute,
		second,
	};
};
const months = {
	1: 'January',
	2: 'February',
	3: 'March',
	4: 'April',
	5: 'May',
	6: 'June',
};
const days = {
	1: 'Sunday',
	2: 'Monday',
	3: 'Tuesday',
	4: 'Wednesday',
	5: 'Thursday',
	6: 'Friday',
	7: 'Saturday',
};
const Countdown = () => {
	const [time, setTime] = useState(getCurrentTime());
	useEffect(() => {
		setInterval(() => {
			setTime(getCurrentTime());
		}, 1000);
	}, [time]);
	const history = useHistory();
	const { month, day, year, date, hour, minute, second } = time;
	return (
		<div>
			<div onClick={() => history.push('/')} style={{ cursor: 'pointer' }}>
				Back
			</div>
			<div style={{ display: 'flex' }}>
				<h1>{month}</h1>
				<h1>{date},</h1>
				<h1>{year}</h1>
				<h1>{day}</h1>
				<h1>{hour} hours</h1>
				<h1>{minute} minutes</h1>
				<h1>{second} seconds</h1>
			</div>
		</div>
	);
};

export default Countdown;
