/**
 radiobox reducer
**/

'use strict';

import { ADAPT_ROWS_TEXTAREA } from 'constants/actionType';

export default (state = 5, action) => {
  return action.type === ADAPT_ROWS_TEXTAREA
	  ? action.rows
		: state;
}
