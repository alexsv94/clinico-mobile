import { observer } from 'mobx-react-lite';
import React, { FC, useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Context } from '../..';
import Toggle from '../ui/Toggle/Toggle';
import './NavBar.css';

interface NavBarProps {
	theme: string;
	setTheme(theme: string): void;
}

const NavBar: FC<NavBarProps> = observer(({ theme, setTheme }) => {
	const navigationRoute = useNavigate();
	const location = useLocation();

	const [menuShow, setMenuShow] = useState<boolean>(false);
	const [toggleChecked, setToggleChecked] = useState<boolean>(theme === 'dark');

	const { user } = useContext(Context);

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

	const iconsFontSize = 36;

	return (
		<div className="navbar">
			{location.pathname !== '/'
				? <div className='navMenu' onClick={() => navigationRoute(-1)}>
					<span className='material-icons-round' style={{ fontSize: 40 }}>arrow_back</span>
				</div>
				: null
			}
			<div className='navTitle'>
				<span id='navbar-title'>Главная</span>
			</div>
			<div className={menuButtonClassNames.join(' ')} onClick={() => setMenuShow(!menuShow)}>
				<span className="material-icons-round" style={{ fontSize: 40 }}>menu</span>
				<div className={menuContainerClassNames.join(' ')}>
					<div className="menuItem" style={{ justifyContent: 'space-between' }}>
						<span style={{ display: 'block', marginLeft: '7px' }}>Тема</span>
						<Toggle checked={toggleChecked} onChecked={setDarkMode} onUnchecked={setLightMode} />
					</div>
					<div className="menuItem" onClick={() => navigationRoute("/profile")}>
						<span className="material-icons-outlined" style={{ marginRight: 10, fontSize: iconsFontSize }}>person</span>
						<span>Профиль</span>
					</div>
					
					{user.isAuth
						? <div className="menuItem" onClick={() => navigationRoute("/favorites")}>
							<span className="material-icons-outlined" style={{ marginRight: 10, fontSize: iconsFontSize }}>grade</span>
							<span>Избранное</span>
						</div>
						: null
					}

					<div className="menuItem" onClick={() => navigationRoute("/deseases")}>
						<span className="material-icons-outlined" style={{ marginRight: 10, fontSize: iconsFontSize }}>coronavirus</span>
						<span>Заболевания</span>
					</div>
					<div className="menuItem" onClick={() => navigationRoute("/medications")}>
						<span className="material-icons-outlined" style={{ marginRight: 10, fontSize: iconsFontSize }}>medication</span>
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
});

export default NavBar;