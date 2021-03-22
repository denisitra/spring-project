import React from 'react';
import S from './Top.module.css';

class Top extends React.Component {
	render() {
		return (
			<div className={S.get_info_box}>
				<div className={S.get_info_content}>


					<div className={S.get_ahead}>
						<div className={S.get_ahead_label}>
							Get ahead
						</div>
						<div className={S.get_ahead_description}>
							VMware offers training and certification to turbo-charge your progress.
						</div>
						<div className={S.get_ahead_link}>
							Learn more
						</div>
					</div>


					<div className={S.get_support}>
						<div className={S.get_support_label}>
							Get support
						</div>
						<div className={S.get_support_description}>
							Spring Runtime offers support and binaries for OpenJDK™, Spring, and Apache Tomcat® in one simple subscription.
						</div>
						<div className={S.get_support_link}>
							Learn more
						</div>
					</div>


					<div className={S.upcoming_events}>
						<div className={S.upcoming_events_label}>
							Upcoming events
						</div>
						<div className={S.upcoming_events_link}>
							SpringOne
						</div>
						<div className={S.upcoming_events_description}>
							The premier conference for developers, DevOps pros, and app leaders.
						</div>
						<div className={S.upcoming_events_link}>
							SpringOne Tour
						</div>
						<div className={S.upcoming_events_description}>
							The best Cloud-Native Java content brought directly to you.
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Top;