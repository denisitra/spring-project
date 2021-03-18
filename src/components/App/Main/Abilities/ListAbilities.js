import React from 'react';
import S from './Abilities.module.css';

function ListAbilities(props) {
	return (
			<div className={S.item_box}>
				<a href="/">
					<div className={S.item_content}>
						<img className={S.item_page} src={props.page} alt="" />
						<div className={S.item_label}>
							<span>{props.label}</span>
						</div>
						<div className={S.item_description}>
							<span>{props.description}</span>
						</div>
					</div>
				</a>
			</div>
	);
}

export default ListAbilities;