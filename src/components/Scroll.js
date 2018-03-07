import React from 'react';

const Scroll = (props) => {
	return (
		<div style={{border: '3px solid black', height: '800px', overflow: 'scroll'}}>
			{props.children}
		</div>
		);
};

export default Scroll;