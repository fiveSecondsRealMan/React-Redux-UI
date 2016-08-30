/**
 button reducer
 **/

'use strict';

import {
	DISABLE_BTN,
	ENABLE_BTN
} from 'constants/actionType';

export default (state = false, action) => {
	switch (action.type) {
		case DISABLE_BTN:
				return true;
		case ENABLE_BTN:
				return false
		default:
			return state;
	} 	  
}
