import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NavBar.css';

interface NavBarProps {
	theme: string;
	setTheme(theme: string): void;
}

const NavBar: FC<NavBarProps> = ({ theme, setTheme }) => {
	const navigationRoute = useNavigate();

	const [menuShow, setMenuShow] = useState<boolean>(false);

	let menuButtonClassNames = ['navMenu']
	let menuContainerClassNames = ['navMenu__container']

	if (menuShow) {
		menuButtonClassNames.push('navbar__menubutton-active')
		menuContainerClassNames.push('navbar__menuActive')
	}

	return (
		<div className="navbar">
			<div className='navTitle'>
				<span>Главная страница</span>
			</div>
			<div className='navMenu' onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
				{theme === 'light'
					? <span className="material-icons swithchThemeButton">dark_mode</span>
					: <span className="material-icons swithchThemeButton">light_mode</span>
				}
			</div>
			<div className={menuButtonClassNames.join(' ')} onClick={() => setMenuShow(!menuShow)}>
				<span className="material-icons-round" style={{ fontSize: 46 }}>menu</span>
				<div className={menuContainerClassNames.join(' ')}>
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