import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import PlayerList from './components/PlayerList.js';

const App = () => {



	return (
		// Gave Route 'exact' path to movieList component so it is only displayed on the declared home page address of local host 3000/
		<div>
			{/* <Route exact path="/b" component={PlayerList} />  */}

			<Route exact path="/" render={() =>
				<PlayerList />
			} />


		</div>
	);
};

export default App;
