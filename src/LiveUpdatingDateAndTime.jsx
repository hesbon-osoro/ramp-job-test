import React, { useEffect, useState } from 'react';

const LiveUpdatingDateAndTime = () => {
	const [time, setTime] = useState(new Date(Date.now()).toLocaleString());
	useEffect(() => {
		const interval = setInterval(
			() => setTime(new Date(Date.now()).toLocaleString()),
			1000
		);
		return () => clearInterval(interval);
	}, []);
	return <div className="App">{time}</div>;
};

export default LiveUpdatingDateAndTime;
