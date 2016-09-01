/**
	字符串处理
**/

'use strict';

export function replacePlaceholder (placeholder, obj) {
	const placeholderExp = /\{([^{}]+)\}/g;

	return placeholder.replace(placeholderExp, (match, key) => {
		return obj[key] == null ? '' : obj[key];
	});
}