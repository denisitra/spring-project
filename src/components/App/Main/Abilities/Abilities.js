import React from 'react';
import S from './Abilities.module.css';
import ListAbilities from './ListAbilities';

function Abilities(props) {

	const list = props.state.listAbilities.map(elem => <ListAbilities label={elem.label} description={elem.description} page={elem.page} />);

	return (
		<section className={S.abilities_box}>
			<div className={S.abilities}>
				<div className={S.abilities_label}>
					What Spring can do
				</div>
				<div className={S.abilities_content}>
					{list}
				</div>
			</div>

		</section>
	);
}

export default Abilities;