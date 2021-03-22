import React, { useState } from 'react';
import S from './Abilities.module.css';
import ListAbilities from './ListAbilities';

function Abilities({ state }) {

	const [searchInput, setSearchInput] = useState('');

	const list = state.listAbilities.map(elem => <ListAbilities key={elem.id} label={elem.label} description={elem.description}
																															page={elem.page} />);

	const filteredList = state.listAbilities
		.filter(elem => elem.label.toLowerCase().indexOf(searchInput.toLowerCase()) >= 0)
		.map(elem => <ListAbilities key={elem.id} label={elem.label} description={elem.description} page={elem.page} />);
	return (
		<section className={S.abilities_box}>
			<div className={S.search_input_box}>
				<input className={S.search_input} type='text' placeholder=' Enter value' value={searchInput}
							 onChange={(e) => setSearchInput(e.currentTarget.value)} />
			</div>

			<div className={S.abilities}>
				<div className={S.abilities_label}>
					What Spring can do
				</div>
				<div className={S.abilities_content}>
					{!searchInput ? list : filteredList}
				</div>
			</div>
		</section>
	);
}

export default Abilities;