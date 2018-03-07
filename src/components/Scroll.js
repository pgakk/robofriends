import React from 'react';

const Scroll = (props) => {
	return (
		<div style={{border: '3px solid black', height: '500px', overflow: 'scroll'}}>
			{props.children}
		</div>
		);
};

export default Scroll;