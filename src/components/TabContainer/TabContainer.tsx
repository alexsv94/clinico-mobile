import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../utils/enums';
import './TabContainer.css'

interface TabContainerProps {
	tabs: ITab[]
}

interface ITab {
	title: string;
	items: IFavoriteLink[]
}

export interface IFavoriteLink {
	id: number;
	name: string;
	collectionRoute: AppRoutes;
}

function generateLink(item: IFavoriteLink): string {
	return item.collectionRoute + '/' + item.id
}

const TabContainer: FC<TabContainerProps> = ({ tabs }) => {
	const [activeTabIndex, setActiveTabIndex] = useState<number>(0)
	const navigation = useNavigate();
	console.log('TABS LENGTH: ' + tabs.length)

	return (
		<div className='tab-container'>
			<div className='tab-header'>
				{tabs.map(tab =>
					<div
						key={tab.title}
						className={`tab-base ${activeTabIndex === tabs.findIndex(t => t === tab) ? 'tab-active' : ''}`}
						onClick={() => setActiveTabIndex(tabs.findIndex(t => t === tab))}
						style={{ width: `${(100 / tabs.length) - 1}%` }}
					>
						{tab.title}
					</div>
				)}
			</div>
			<div className="tab-content">
				{tabs[activeTabIndex].items.map(item =>
					<div
						key={item.name}
						className='item-card'
						onClick={() => navigation(generateLink(item))}
					>
						{item.name}
					</div>
				)}
			</div>
		</div>
	);
};

export default TabContainer;