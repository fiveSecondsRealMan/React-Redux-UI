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
	CHECK_RADIO,
	UNCHECK_RADIO,
	GET_VALUE_INPUT,
	ADAPT_ROWS_TEXTAREA
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

export function radioCheck (checked) {
	return {
		type: CHECK_RADIO,
		checked
	}
}

export function radioUnCheck (checked) {
  return {
		type: UNCHECK_RADIO,
		checked
	};
}

export function iptGetValue (value) {
	return {
		type: GET_VALUE_INPUT,
		value
	};
}

export function textareaAdaptRows (rows) {
	return {
		type: ADAPT_ROWS_TEXTAREA,
		rows
	}
}
