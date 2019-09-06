import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import Link to link two components of application

//Getting data from local server api with axios.get
const PlayerList = (props) => {
	console.log('PlayerProps', props);
	const [players, setPlayers] = useState([])
	useEffect(() => {
		const getPlayers = () => {
			axios
				.get('http://localhost:5000/api/players')
				.then(response => {
					setPlayers(response.data);
				})
				.catch(error => {
					console.error('Server Error', error);
				});
		}

		getPlayers();
	}, []);

	//Mapping over players to create components
	return (
		<div className="player-list">
			{players.map(player => (
				<PlayerDetails key={player.id} player={player} />
			))}
		</div>
	);
}

function PlayerDetails({ player }) {
	const { name, country, searches } = player;
	return (
		//Link that grabs key value that we are receiving from player as props and 
		//wrap template string ` ` in { } as they are javascript
		<div className="card-arrange">
			<div className="player-card">
				<h2>{name}</h2>
				<div className="player-country">
					Country: <em>{country}</em>
				</div>
				<div className="searches">
					Searches: <strong>{searches}</strong>
				</div>
			</div>
		</div>
	);
}

export default PlayerList;
