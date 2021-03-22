import React from 'react';
import BottomTop from './BottomTop/BottomTop';
import BottomBottom from './BottomBottom/BottomBottom';

function Bottom(){
	return(
		<React.Fragment>
			<BottomTop />
			<BottomBottom />
		</React.Fragment>
	);
}

export default Bottom;