import React, { useState } from 'react';
import S from './NavigationList.module.css';
import hamburgerMenu from './../../../../assets/aaa.svg';
import arrow from '../../../../assets/arrow.svg';
import NavigationListItems from './NavigationListItems';

function NavigationList({ handleToggle, list}) {
	const [isOpenFirstList, setIsOpenFirstList] = useState(false);
	const [isOpenSecondList, setIsOpenSecondList] = useState(false);
	const [isOpenThirdList, setIsOpenThirdList] = useState(false);
	const [isOpenFourthList, setIsOpenFourthList] = useState(false);

	return (
		<div className={S.hamburger_list}>
			<img onClick={handleToggle} className={S.close_button} src={hamburgerMenu} alt="" />
			<ul className={S.hamburger_nav_items}>
				<li className={S.hamburger_box}>
					<div onClick={() => setIsOpenFirstList(prev => !prev)}>
						<div className={S.hamburger_label}>Why Spring?</div>
						<div className={isOpenFirstList ? S.hamburger_menu : S.hamburger_menu_hidden}>
							<ul>
								<NavigationListItems list={list.why_spring}/>
							</ul>
						</div>
					</div>
					<img className={!isOpenFirstList ? S.arrow_up: S.arrow_down} src={arrow} alt="arrow" />
				</li>
				<li className={S.hamburger_box}>
					<div onClick={() => setIsOpenSecondList(prev => !prev)}>
						<div className={S.hamburger_label}>Learn</div>
						<div className={isOpenSecondList ? S.hamburger_menu : S.hamburger_menu_hidden}>
							<ul>
								<NavigationListItems list={list.learn}/>
							</ul>
						</div>
					</div>
					<img className={!isOpenSecondList ? S.arrow_up: S.arrow_down} src={arrow} alt="arrow" />
				</li>
				<li className={S.hamburger_box}>
					<div onClick={() => setIsOpenThirdList(prev => !prev)}>
						<div className={S.hamburger_label}>Projects</div>
						<div className={isOpenThirdList ? S.hamburger_menu : S.hamburger_menu_hidden}>
							<ul>
								<NavigationListItems list={list.projects}/>
							</ul>
						</div>
					</div>
					<img className={!isOpenThirdList ? S.arrow_up: S.arrow_down} src={arrow} alt="arrow" />
				</li>
				<li className={S.hamburger_box}>
					<div>
						<div className={S.hamburger_label}>Training</div>
					</div>
					<img className={S.arrow_hidden} src={arrow} alt="arrow" />

				</li>
				<li className={S.hamburger_box}>
					<div>
						<div className={S.hamburger_label}>Support</div>
					</div>
					<img className={S.arrow_hidden} src={arrow} alt="arrow" />

				</li>
				<li className={S.hamburger_box}>
					<div onClick={() => setIsOpenFourthList(prev => !prev)}>
						<div className={S.hamburger_label}>Community</div>
						<div className={isOpenFourthList ? S.hamburger_menu : S.hamburger_menu_hidden}>
							<ul>
								<NavigationListItems list={list.community}/>
							</ul>
						</div>
					</div>
					<img className={!isOpenFourthList ? S.arrow_up: S.arrow_down} src={arrow} alt="arrow" />

				</li>
			</ul>
		</div>
	);
}

export default NavigationList;