/**
	组件 actionCreator
**/

'use strict';

import {
	DISABLE_BTN,
	ENABLE_BTN,
	CHECK_CBOX,
	UNCHECK_CBOX,
	CHECK_CBOXGROUP,
	UNCHECK_CBOXGROUP,
	CHECK_RADIO,
	UNCHECK_RADIO
} from 'constants/actionType';

export function btnDisable (disabled) {
	return {
		type: DISABLE_BTN,
		disabled
	};
}

export function btnEnable (disabled) {
	return {
		type: ENABLE_BTN,
		disabled
	};
}

export function cboxCheck (checked) {
	return {
		type: CHECK_CBOX,
		checked
	}
}

export function cboxUnCheck (checked) {
	return {
		type: UNCHECK_CBOX,
		checked
	};
}

export function cboxGroupCheck (values) {
	return {
		type: CHECK_CBOXGROUP,
		values
	}
}

export function cboxGroupUnCheck (values) {
	return {
		type: UNCHECK_CBOXGROUP,
		values
	};
}

export function radioCheck (checked) {
	return {
		type: CHECK_RADIO,
		checked
	}
};

export function radioUnCheck (checked) {
  return {
		type: UNCHECK_RADIO,
		checked
	};
};
