/**
	字符串处理
**/

'use strict';

import { getType } from './getType';

export function replacePlaceholder (placeholder, obj) {
	const placeholderExp = /\{([^{}]+)\}/g;

	return placeholder.replace(placeholderExp, (match, key) => {
		return obj[key] == null ? '' : obj[key];
	});
}

export function parseUpperToCable (str) {
	const upperExp = /[A-Z]/g;
	const cable = '-';

	return str.replace(upperExp, match => {
		return cable + match.toLowerCase();
	});
}

export function parseAnyToString (...args) {
	const array = [];

	for (let value of args) {
		let type = getType(value);

		if (type === 'string' || type === 'number') {
			array.push(value);
		} else if (type === 'array') {
			array.push(parseAnyToString.apply(null, value));
		} else if (type === 'object') {
			array.push(parseAnyToString.apply(null, Object.keys(value)));
		}
	}

	return array.join(' ');
}
