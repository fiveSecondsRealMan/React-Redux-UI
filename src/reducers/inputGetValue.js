/**
 input reducer
**/

'use strict';

import { GET_VALUE_INPUT } from 'constants/actionType';

export default (state = '', action) => {
	return action.type === GET_VALUE_INPUT
		? action.value
		: state;
}
