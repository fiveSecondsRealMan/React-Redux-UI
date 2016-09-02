/**
 checkbox reducer
**/

'use strict';

import {
	CHECK_CBOX,
	UNCHECK_CBOX
} from 'constants/actionType';

export default (state = false, action) => {
	switch (action.type) {
		case CHECK_CBOX:
			return action.checked;
		case UNCHECK_CBOX:
			return action.checked;
		default:
			return state;
	}
};
