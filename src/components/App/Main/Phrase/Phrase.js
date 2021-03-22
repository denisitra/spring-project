import React from 'react';
import S from './Phrase.module.css';
import quotes from './../../../../assets/quote.svg';
import phrase_creator from './../../../../assets/quote_creator.jpg';

function Phrase(){
	return(
		<section className={S.phrase_box}>
			<div className={S.phrase_content}>
				<img className={S.quotes} src={quotes} alt="quotes" />
				<div className={S.phrase}>
					Originally [Netflix's Java] libraries
					and frameworks were built in-house.
					I'm very proud to say, as of early 2019,
					we've moved our platform almost entirely
					over to Spring Boot.”
				</div>
				<div className={S.phrase_creator}>
					<img className={S.phrase_creator_photo} src={phrase_creator} alt="photo" />
					<div className={S.phrase_creator_info}>
						<div className={S.phrase_creator_info_name}>
							TAYLOR WICKSELL, SENIOR SOFTWARE ENGINEER, NETFLIX
						</div>
						<div className={S.phrase_creator_info_link}>
							Watch now
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Phrase;