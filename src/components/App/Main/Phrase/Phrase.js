import React from 'react';
import S from './Quote.module.css';
import icon from './../../../../assets/quote.svg';

function Quote(){
	return(
		<section className={S.quote_box}>
			<div className={S.quote_content}>
				<img src={icon} alt="icon" />
				<div className={S.quote}>
					Originally [Netflix's Java] libraries
					and frameworks were built in-house.
					I'm very proud to say, as of early 2019,
					we've moved our platform almost entirely
					over to Spring Boot.”
				</div>
				<div className={S.quote_creator}>
					<div className={S.}></div>
				</div>
			</div>
		</section>
	);
}

export default Quote;