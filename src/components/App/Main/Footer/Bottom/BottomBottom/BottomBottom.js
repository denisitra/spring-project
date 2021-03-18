import React from 'react';
import S from './BottomBottom.module.css';
import springLogo from './../../../../../../assets/spring-logo-9146a4d3298760c2e7e49595184e1975.svg';
import youtubeLogo from './../../../../../../assets/youtube_icon.svg';
import githubLogo from './../../../../../../assets/github_icon.svg';
import twitterLogo from './../../../../../../assets/twitter_icon.svg';


function BottomBottom(){
	return(
		<div className={S.bottom_bottom_box}>
			<div className={S.bottom_bottom_content}>
				<div className={S.spring_links}>
					<img src={springLogo} alt="spring logo" className={S.spring_logo}/>
					<div className={S.spring_info}>
						© 2021 <a href="/">VMware</a>, Inc. or its affiliates. <a href="/">Terms of Use</a> • <a href="/">Privacy </a>• <a
						href="/">Trademark Guidelines</a>
					</div>
					<div className={S.spring_description}>
						Apache®, Apache Tomcat®, Apache Kafka®, Apache Cassandra™, and Apache Geode™
						are trademarks or registered trademarks of the Apache Software Foundation
						in the United States and/or other countries. Java™, Java™ SE, Java™ EE, and
						OpenJDK™ are trademarks of Oracle and/or its affiliates. Kubernetes® is a
						registered trademark of the Linux Foundation in the United States and other
						countries. Linux® is the registered trademark of Linus Torvalds in the United
						States and other countries. Windows® and Microsoft® Azure are registered trademarks
						of Microsoft Corporation. “AWS” and “Amazon Web Services” are trademarks or
						registered trademarks of Amazon.com Inc. or its affiliates. All other trademarks
						and copyrights are property of their respective owners and are only mentioned for
						informative purposes. Other names may be trademarks of their respective owners.
					</div>
				</div>
				<div className={S.spring_icons}>
					<img src={youtubeLogo} alt="youtube logo" className={S.icon_logo}/>
					<img src={githubLogo} alt="github logo" className={S.icon_logo}/>
					<img src={twitterLogo} alt="twitter logo" className={S.icon_logo}/>
				</div>
			</div>
		</div>
	);
}

export default BottomBottom;