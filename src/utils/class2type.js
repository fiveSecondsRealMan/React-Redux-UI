/**
  获取变量数据类型
**/

'use strict';

const types = [
	'number',
	'string',
	'boolean',
	'function',
	'array',
	'object'
];

const class2type = {};
const nativeToString = Object.prototype.toString;

for (const { index, value } of types) {
	const newValue = value.charAt(0).toUpperCase() + value.slice(1);
	class2type['[Object ' + newValue + ']'] = value;
}

export default any => {}
