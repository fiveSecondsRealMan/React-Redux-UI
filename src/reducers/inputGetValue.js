/**
 input reducer
 **/

'use strict';

import { GET_INPUT_VALUE } from 'constants/actionType';

export default (state = '', action) => {
	return action.type === GET_INPUT_VALUE
		? action.value
		: state;
}
