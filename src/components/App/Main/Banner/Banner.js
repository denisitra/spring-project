import React from 'react';
import S from './Banner.module.css';

class Banner extends React.Component{
	render() {
		return(
			<section className={S.banner}>
				<div className={S.banner_content}>
					<div className={S.banner_label}>
						Spring makes Java
					</div>
					<div className={`${S.banner_label} ${S.banner_label_button_part}`}>
						reactive.
					</div>
					<div className={S.banner_buttons}>
							<a href='/' className={S.banner_button}>Why Spring</a>
							<a href='/' className={S.banner_button}>Quick start</a>
					</div>
				</div>
			</section>
		);
	}
}

export default Banner;