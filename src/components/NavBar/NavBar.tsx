import React, { FC, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Toggle from '../ui/Toggle/Toggle';
import './NavBar.css';

interface NavBarProps {
	theme: string;
	setTheme(theme: string): void;
}

const NavBar: FC<NavBarProps> = ({ theme, setTheme }) => {
	const navigationRoute = useNavigate();
	const location = useLocation();

	const [menuShow, setMenuShow] = useState<boolean>(false);
	const [toggleChecked, setToggleChecked] = useState<boolean>(theme === 'dark');

	let menuButtonClassNames = ['navMenu']
	let menuContainerClassNames = ['navMenu__container']

	if (menuShow) {
		menuButtonClassNames.push('navbar__menubutton-active')
		menuContainerClassNames.push('navbar__menuActive')
	}

	function setLightMode(): void {
		setTheme('light');
		setToggleChecked(false);
	}

	function setDarkMode(): void {
		setTheme('dark');
		setToggleChecked(true);
	}

	return (
		<div className="navbar">
			{location.pathname !== '/'
				? 	<div className='navMenu' onClick={() => navigationRoute(-1)}>
						<span className='material-icons-round' style={{ fontSize: 46 }}>arrow_back</span>
					</div>
				: 	null
			}
			<div className='navTitle'>
				<span id='navbar-title'>Главная</span>
			</div>
			<div className={menuButtonClassNames.join(' ')} onClick={() => setMenuShow(!menuShow)}>
				<span className="material-icons-round" style={{ fontSize: 46 }}>menu</span>
				<div className={menuContainerClassNames.join(' ')}>
					<div className="menuItem" style={{ justifyContent: 'space-between' }}>
						<span style={{ display: 'block', marginLeft: '7px' }}>Тема</span>
						<Toggle checked={toggleChecked} onChecked={setDarkMode} onUnchecked={setLightMode} />
					</div>
					<div className="menuItem" onClick={() => navigationRoute("/profile")}>
						<span className="material-icons-round" style={{ marginRight: 10, fontSize: 36 }}>person</span>
						<span>Профиль</span>
					</div>
					<div className="menuItem" onClick={() => navigationRoute("/favorites")}>
						<span className="material-icons-round" style={{ marginRight: 10, fontSize: 36 }}>star</span>
						<span>Избранное</span>
					</div>
					<div className="menuItem" onClick={() => navigationRoute("/deseases")}>
						<span className="material-icons-round" style={{ marginRight: 10, fontSize: 36 }}>coronavirus</span>
						<span>Заболевания</span>
					</div>
					<div className="menuItem" onClick={() => navigationRoute("/medications")}>
						<span className="material-icons-round" style={{ marginRight: 10, fontSize: 36 }}>medication</span>
						<span>Лек. препараты</span>
					</div>
				</div>
			</div>

			{menuShow
				? <div className="menu__substrate" onClick={() => setMenuShow(false)}></div>
				: ''
			}
		</div>
	);
};

export default NavBar;