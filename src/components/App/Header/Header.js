import React, { useState } from 'react';
import S from './Header.module.css';
import logo from '../../../assets/spring_logo.svg';
import hamburgerMenu from '../../../assets/gamburger_menu.png';
import NavigationList from './NavigationList/NavigationList';

function Header(props) {

	const [isToggle, setIsToggle] = useState(true);

	function handleToggle(e) {
		setIsToggle(prev => !prev);
	}

	return (
		<header>
			<nav>
				<div className={S.nav_inner}>
					<a href="/">
						<img className={S.logo} src={logo} alt="logo" />
					</a>
					<ul className={S.nav_items}>
						<li>
							<div className={S.dropdown}>
								<div className={S.dropdown_label}>Why Spring?</div>
								<div className={S.dropdown_menu}>
									<ul className={S.submenu}>
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
							</div>
						</li>
						<li>
							<div className={S.dropdown}>
								<div className={S.dropdown_label}>Learn</div>
								<div className={S.dropdown_menu}>
									<ul className={S.submenu}>
										<li><a href="/">Overview</a></li>
										<li><a href="/">Quick start</a></li>
										<li><a href="/">Guides</a></li>
										<li><a href="/">Blog</a></li>
									</ul>
								</div>
							</div>
						</li>
						<li>
							<div className={S.dropdown}>
								<div className={S.dropdown_label}>Projects</div>
								<div className={S.dropdown_menu}>
									<ul className={S.submenu}>
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
							</div>
						</li>
						<li>
							<div className={S.dropdown}>
								<div className={S.dropdown_label}>Training</div>
							</div>
						</li>
						<li>
							<div className={S.dropdown}>
								<div className={S.dropdown_label}>Support</div>
							</div>
						</li>
						<li>
							<div className={S.dropdown}>
								<div className={S.dropdown_label}>Community</div>
								<div className={S.dropdown_menu}>
									<ul className={S.submenu}>
										<li><a href="/">Overview</a></li>
										<li><a href="/">Events</a></li>
										<li><a href="/">Team</a></li>
									</ul>
								</div>
							</div>
						</li>
					</ul>
					<div>
						<div className={S.hidden_menu}>
							{
								isToggle
									?
									<button className={S.header_button} onClick={handleToggle}>
										<img className={S.header_icon} src={hamburgerMenu} alt="menu button" />
									</button>
									: <NavigationList handleToggle={handleToggle} list={props.list}/>}
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
}

export default Header;