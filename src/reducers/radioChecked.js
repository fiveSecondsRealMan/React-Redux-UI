/**
 radiobox reducer
**/

'use strict';

import {
	CHECK_RADIO,
	UNCHECK_RADIO
} from 'constants/actionType';

export default (state = false, action) => {
	switch(action.type) {
		case CHECK_RADIO:
			return action.checked;
		case UNCHECK_RADIO:
			return action.checked;
		default:
			return state;
	}
}
