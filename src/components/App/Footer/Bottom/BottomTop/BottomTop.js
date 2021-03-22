import React from 'react';
import S from './BottomTop.module.css';

function BottomTop(){
	return(
		<div className={S.bottom_top_box}>
			<div className={S.bottom_top_content}>
				<div className={S.why_spring}>
					<span className={S.why_spring_label}>Why Spring?</span>
						<ul className={S.why_spring_submenu}>
							<li><a href="/">Overview</a></li>
							<li><a href="/">Microservices</a></li>
							<li><a href="/">Reactive</a></li>
							<li><a href="/">Event Driven</a></li>
							<li><a href="/">Cloud</a></li>
							<li><a href="/">Web Application</a></li>
							<li><a href="/">Serverless</a></li>
							<li><a href="/">Batch</a></li>
						</ul>
				</div>
				<div className={S.learn}>
					<span className={S.learn_label}>Learn</span>
					<ul className={S.why_spring_submenu}>
						<li><a href="/">Quick start</a></li>
						<li><a href="/">Guides</a></li>
						<li><a href="/">Blog</a></li>
					</ul>
				</div>
				<div className={S.community}>
					<span className={S.community_label}>Community</span>
					<ul className={S.community_submenu}>
						<li><a href="/">Events</a></li>
						<li><a href="/">Team</a></li>
					</ul>
				</div>
				<div className={S.projects}>
					<span className={S.projects_label}>Projects</span>
					<ul className={S.projects_submenu}>
						<li><a href="/">Overview</a></li>
						<li><a href="/">Spring Boot</a></li>
						<li><a href="/">Spring Framework</a></li>
						<li><a href="/">Spring Cloud</a></li>
						<li><a href="/">Spring Cloud Data Flow</a></li>
						<li><a href="/">Spring Data</a></li>
						<li><a href="/">Spring Integration</a></li>
						<li><a href="/">Spring Batch</a></li>
						<li><a href="/">Spring Security</a></li>
					</ul>
				</div>
				<div className={S.get_newsletter}>
					<form>
						<label className={S.input_login_label}>
							<span className={S.get_newsletter_label}>Get the Spring newsletter</span>
						</label>
						<input className={S.input_login} type="text" placeholder='Email Address'/>
						<input className={S.send_login} type="submit" value="SUBSCRIBE" />
						<div>
							<input id={S.checkbox_field} type="checkbox" /><label htmlFor={S.checkbox_field}
																																		className={S.label_for_checkbox}>Yes, I would like
							to be contacted by The Spring Team and VMware for newsletters, promotions and events</label>

						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default BottomTop;