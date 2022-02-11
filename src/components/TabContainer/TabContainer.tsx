import React, { FC, useState } from 'react';
import './TabContainer.css'

interface TabContainerProps {
	tabs: ITab[]
}

interface ITab {
	title: string;
	items: any[]
}

const TabContainer: FC<TabContainerProps> = ({ tabs }) => {
	const [activeTabIndex, setActiveTabIndex] = useState<number>(0)

	return (
		<div className='tab-container'>
			<div className='tab-header'>
				{tabs.map(tab =>
					<div
						key={tab.title}
						className={`tab-base ${activeTabIndex === tabs.findIndex(t => t === tab) ? 'tab-active' : ''}`}
						onClick={() => setActiveTabIndex(tabs.findIndex(t => t === tab))}
						style={{width: `${100 / tabs.length}%`}}
					>
						{tab.title}
					</div>
				)}
			</div>
			<div className="tab-content">
					{tabs[activeTabIndex].items.map(item =>
						<div key={item.name} className='item-card'>{item.name}</div>
					)}
			</div>
		</div>
	);
};

export default TabContainer;