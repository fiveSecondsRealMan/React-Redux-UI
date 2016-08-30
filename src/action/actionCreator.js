/**
	actionCreator
**/

'use strict';

import {
	DISABLE_BTN,
	ENABLE_BTN
} from 'constants/actionType';

export const btnDisable = disabled => {
	return {
		type: DISABLE_BTN,
		disabled
	} 	  
};

export const btnEnable = disabled => {
	return {
		type: ENABLE_BTN,
		disabled
	};
};
