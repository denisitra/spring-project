import React from 'react';
import Banner from './Banner/Banner';
import Abilities from './Abilities/Abilities';
import LevelUpCode from './LevelUpCode/LevelUpCode';
import Phrase from './Phrase/Phrase';

function Main(props){
			return(
			<main>
				<Banner />
				<Abilities state={props.state} />
				<LevelUpCode />
				<Phrase />
			</main>
		);
	}
export default Main;