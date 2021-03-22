import React from 'react';
import S from './NavigationList.module.css';

function NavigationListItems({list}){

	return(
		<div>
			{list.map(elem => <li key={elem.label} className={S.hamburger_submenu}><a href={elem.link}>{elem.label}</a></li>)}
		</div>
	);
}

export default NavigationListItems;