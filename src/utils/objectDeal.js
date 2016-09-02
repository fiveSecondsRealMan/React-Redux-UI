/**
	对象处理
**/

'use strict';

export function objectToArray (obj, ...itemKeep) {
	const array = [];

	for (const key of Object.keys(obj)) {
		array.push({
			[ itemKeep[0] ]: key,
			[ itemKeep[1] ]: obj[key]
		});
	}

	return array;
}

export function values (obj) {
  var array = [];

	for (const key of Object.keys(obj)) {
		array.push(obj[key]);
	}

	return array;
}
