import React, { FC } from 'react';
import './ItemNode.css'

interface ItemNodeProps {
	style?: React.CSSProperties
}

const ItemNode: FC<ItemNodeProps> = ({children, style}) => {
	return (
		<div className='item-node' style={style}>
			{children}
		</div>
	);
};

export default ItemNode;