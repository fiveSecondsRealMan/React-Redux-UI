/**
 checkboxGroup reducer
**/

'use strict';

import { CHECK_CBOXGROUP } from 'constants/actionType';

export default (state = '', action) => {
	switch (action.type) {
		case CHECK_CBOXGROUP:
			return action.values;
		default:
			return state;
	}
};
