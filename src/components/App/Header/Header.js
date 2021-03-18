import React from 'react';
import S from './Header.module.css';
import logo from './../../../assets/spring-logo-9146a4d3298760c2e7e49595184e1975.svg';
import hamburgerMenu from './../../../assets/gamburgerMenu.png.pagespeed.ce.1Obkn3gWPD.png';
import NavigationList from '../NavigationList/NavigationList';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {isToggleOn: true};
		this.handleClick = this.handleClick.bind(this);

	}
handleClick(e){
		e.preventDefault();
		this.setState(state => (
			{
				isToggleOn: !state.isToggleOn,
			}
		));
}
	render() {
		return (
			<header>
				<nav>
					<div className={S.nav_inner}>
						<a href="/">
							<img className={S.logo} src={logo} alt="logo" />
						</a>
						<ul className="nav_items">
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
						<div >
							<button className={S.hidden_menu} onClick={this.handleClick}>{this.state.isToggleOn
								? <img className={S.header_icon} src={hamburgerMenu} alt="menu button" />
								: <NavigationList />}
							</button>
						</div>
					</div>
				</nav>
			</header>
		);
	}
}

export default Header;