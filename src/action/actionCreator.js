/**
	组件 actionCreator
**/

'use strict';

import {
	DISABLE_BTN,
	ENABLE_BTN,
	CHECK_CBOX,
	UNCHECK_CBOX
} from 'constants/actionType';

export const btnDisable = disabled => ({
	type: DISABLE_BTN,
	disabled
});

export const btnEnable = disabled => ({
	type: ENABLE_BTN,
	disabled
});

export const cboxCheck = checked => ({
	type: CHECK_CBOX,
	checked
});

export const cboxUnCheck = checked => ({
	type: UNCHECK_CBOX,
	checked
});
